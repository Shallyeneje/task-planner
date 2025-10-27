export default function GlobalErrorPage() {
  return (
    <html>
      <body>
        <div style={{padding: 24, fontFamily: 'system-ui, sans-serif'}}>
          <h1 style={{fontSize: 18, marginBottom: 8}}>Something went wrong</h1>
          <p style={{color: '#334155'}}>An unexpected error occurred. Please try again later.</p>
        </div>
      </body>
    </html>
  );
}
