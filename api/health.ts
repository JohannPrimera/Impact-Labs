import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.json({
    ok: true,
    stripe: Boolean(process.env.STRIPE_SECRET_KEY?.trim()),
  });
}
