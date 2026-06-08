import Stripe from 'stripe';
import { findCatalogProduct, priceToCents } from './catalog-products';

export function getClientUrl(): string {
  const explicit = process.env.CLIENT_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, '');
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
}

export type CheckoutSuccess = { url: string };
export type CheckoutFailure = { error: string; status: number };
export type CheckoutResult = CheckoutSuccess | CheckoutFailure;

export function isCheckoutFailure(
  result: CheckoutResult,
): result is CheckoutFailure {
  return 'error' in result;
}

export async function createCheckoutSession(
  stripe: Stripe,
  slug: string,
  quantity: number,
): Promise<CheckoutResult> {
  const product = findCatalogProduct(slug);
  if (!product) {
    return { status: 404, error: 'Product not found' };
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
    return { status: 500, error: 'Could not create checkout session' };
  }

  return { url: session.url };
}
