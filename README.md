<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/6cb277d2-a64e-4f07-9258-d9c4cd839e65

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Copy [.env.example](.env.example) to `.env.local` and set:
   - `GEMINI_API_KEY` — Gemini API key (optional for catalog/checkout)
   - `STRIPE_SECRET_KEY` — Stripe secret key (`sk_test_...` for development)
   - `CLIENT_URL` — `http://localhost:3000` when using `npm run dev`
3. Run the app (frontend + Stripe API):
   `npm run dev`

Frontend only: `npm run dev:web` · API only: `npm run dev:api`

## Stripe payments

The catalog uses [Stripe Checkout](https://stripe.com/docs/payments/checkout). Prices are defined in `src/shared/catalog-products.ts` and validated on the server so the client cannot change amounts.

1. Create a [Stripe account](https://dashboard.stripe.com/register) and copy your **test** secret key.
2. Add `STRIPE_SECRET_KEY` to `.env.local`.
3. Open `/catalog.html`, open a product, and click **Buy with card**.
4. Use [Stripe test cards](https://stripe.com/docs/testing#cards), e.g. `4242 4242 4242 4242`.

For production, deploy `server/index.ts` (or equivalent) behind HTTPS, set `CLIENT_URL` to your live site URL, and set `VITE_API_URL` to the API origin if the static site and API are on different hosts.
