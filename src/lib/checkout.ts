const apiBase = import.meta.env.VITE_API_URL ?? '';

export async function startStripeCheckout(slug: string, quantity: number) {
  let response: Response;
  try {
    response = await fetch(`${apiBase}/api/create-checkout-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, quantity }),
    });
  } catch {
    throw new Error(
      'No se pudo conectar con el servidor de pagos. Comprueba que npm run dev esté en marcha.',
    );
  }

  let data: { url?: string; error?: string };
  try {
    data = (await response.json()) as { url?: string; error?: string };
  } catch {
    throw new Error(
      'El servidor de pagos no respondió correctamente. Reinicia npm run dev tras configurar .env.local.',
    );
  }

  if (!response.ok || !data.url) {
    throw new Error(data.error || 'No se pudo iniciar el pago');
  }

  window.location.href = data.url;
}
