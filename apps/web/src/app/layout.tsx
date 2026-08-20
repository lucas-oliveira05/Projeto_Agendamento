export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          fontFamily:
            '"Segoe UI", system-ui, -apple-system, sans-serif',
          background:
            'radial-gradient(ellipse at top, #1a2332 0%, #0d1117 55%)',
          color: '#e8eef7',
          minHeight: '100vh',
        }}
      >
        {children}
      </body>
    </html>
  );
}
