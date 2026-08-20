export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '4rem 1.5rem',
      }}
    >
      <p
        style={{
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontSize: 12,
          color: '#8fa3bf',
          marginBottom: 12,
        }}
      >
        Projeto Agendamento
      </p>
      <h1
        style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
          lineHeight: 1.1,
          margin: '0 0 1rem',
        }}
      >
        Você corta. O sistema cuida do resto.
      </h1>
      <p style={{ color: '#b7c5d8', fontSize: 18, lineHeight: 1.5 }}>
        Foundation do SaaS multi-tenant para barbearias — API NestJS + Next.js
        + Prisma. Agendamento público em{' '}
        <code>/barbearia/[slug]</code> chega nas próximas fatias do MVP 1.
      </p>
    </main>
  );
}
