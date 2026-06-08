import './load-env';
import express from 'express';
import Stripe from 'stripe';
import {
  createCheckoutSession,
  isCheckoutFailure,
} from '../lib/stripe-checkout';

const port = Number(process.env.PORT) || 4242;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY?.trim();

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;
const app = express();

app.use(express.json());

if (!stripe) {
  console.warn(
    '[api] STRIPE_SECRET_KEY no configurada. Crea .env.local (copia .env.example) y reinicia npm run dev.',
  );
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, stripe: Boolean(stripe) });
});

app.post('/api/create-checkout-session', async (req, res) => {
  if (!stripe) {
    res.status(503).json({
      error:
        'Pagos no configurados. Añade STRIPE_SECRET_KEY en .env.local (clave sk_test_... de dashboard.stripe.com) y reinicia npm run dev.',
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

    res.json({ url: result.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    res.status(500).json({ error: 'Checkout failed' });
  }
});

app.listen(port, () => {
  console.log(`Stripe API listening on http://localhost:${port}`);
});
