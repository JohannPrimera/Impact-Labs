import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

/* ── Inline catalog to avoid cross-module resolution issues in Vercel ── */
type CatalogProduct = {
  id: number;
  slug: string;
  title: string;
  price: number;
  description: string;
};

const catalog: CatalogProduct[] = [
  { id: 1, slug: 'epulse-vibra-pro', title: 'impact labs massage gun', price: 399.99, description: 'The Percussion Massage Gun is engineered to deliver powerful deep-tissue relief, helping reduce muscle soreness, improve circulation, and accelerate recovery after intense workouts or long days on your feet.' },
  { id: 2, slug: 'pro-gun-mini-series', title: 'Impact Labs Mini Relief', price: 149.99, description: 'Compact massager with deep impact for daily use, travel, and quick recovery anytime.' },
  { id: 3, slug: 'hidow-xpd-12', title: 'Tens xpd 12', price: 399.99, description: 'XPD 12 hits the balance that wired users trust: strong output, smart design, and just the right amount of control.' },
  { id: 4, slug: 'hidow-xpds-18', title: 'Tens xpds 18', price: 499.99, description: "The XPDS 18 is a standout in HiDow's wired lineup—powerful, versatile, and refreshingly easy to use." },
  { id: 5, slug: 'hidow-spot', title: 'Hidow spot', price: 179.99, description: 'Meet the HiDow SPOT: your portable solution for pain relief, relaxation, and recovery.' },
];

function findProduct(slug: string) {
  return catalog.find((p) => p.slug === slug);
}

function priceToCents(price: number) {
  return Math.round(price * 100);
}

function getClientUrl(): string {
  const explicit = process.env.CLIENT_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, '');
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
}

/* ── Handler ── */
function getStripe() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY?.trim();
  return stripeSecretKey ? new Stripe(stripeSecretKey) : null;
}

function checkoutErrorMessage(error: unknown) {
  if (error instanceof Stripe.errors.StripeError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Checkout failed';
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const stripe = getStripe();
  if (!stripe) {
    res.status(503).json({
      error:
        'Pagos no configurados. Añade STRIPE_SECRET_KEY en las variables de entorno de Vercel.',
    });
    return;
  }

  try {
    const slug = typeof req.body?.slug === 'string' ? req.body.slug : '';
    const quantity = Math.min(
      99,
      Math.max(1, Math.floor(Number(req.body?.quantity) || 1)),
    );

    const product = findProduct(slug);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    const clientUrl = getClientUrl();
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity,
          price_data: {
            currency: 'usd',
            unit_amount: priceToCents(product.price),
            product_data: {
              name: product.title,
              description: product.description.slice(0, 500),
            },
          },
        },
      ],
      success_url: `${clientUrl}/catalog.html?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${clientUrl}/catalog.html?product=${encodeURIComponent(product.slug)}&checkout=cancelled`,
      metadata: {
        product_slug: product.slug,
        product_id: String(product.id),
      },
    });

    if (!session.url) {
      res.status(500).json({ error: 'Could not create checkout session' });
      return;
    }

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    res.status(500).json({ error: checkoutErrorMessage(error) });
  }
}
