export default function BarberShopPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <PublicBookingPlaceholder params={params} />
  );
}

async function PublicBookingPlaceholder({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: '3rem 1.25rem' }}>
      <h1 style={{ fontFamily: 'Georgia, serif' }}>Barbearia: {slug}</h1>
      <p style={{ color: '#b7c5d8' }}>
        Página pública de agendamento (scaffold). Fluxo completo no epic de
        agenda / booking online.
      </p>
    </main>
  );
}
