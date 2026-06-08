import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import {
  createCheckoutSession,
  isCheckoutFailure,
} from '../lib/stripe-checkout';

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

    const result = await createCheckoutSession(stripe, slug, quantity);
    if (isCheckoutFailure(result)) {
      res.status(result.status).json({ error: result.error });
      return;
    }

    res.status(200).json({ url: result.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    res.status(500).json({ error: checkoutErrorMessage(error) });
  }
}
