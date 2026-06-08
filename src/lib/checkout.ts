const apiBase = import.meta.env.VITE_API_URL ?? '';

function paymentApiUnavailableMessage(status: number) {
  return `El API de pagos no está disponible (${status}). Comprueba en Vercel que el deploy incluya la carpeta api/ y que STRIPE_SECRET_KEY esté configurada para Production.`;
}

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
      'No se pudo conectar con el servidor de pagos. Si estás en local, ejecuta npm run dev.',
    );
  }

  const contentType = response.headers.get('content-type') ?? '';

  if (!contentType.includes('application/json')) {
    throw new Error(paymentApiUnavailableMessage(response.status));
  }

  const data = (await response.json()) as { url?: string; error?: string };

  if (!response.ok || !data.url) {
    throw new Error(
      data.error || paymentApiUnavailableMessage(response.status),
    );
  }

  window.location.href = data.url;
}
