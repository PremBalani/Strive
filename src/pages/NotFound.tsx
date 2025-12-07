import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', paddingTop: '4rem' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--accent-red)' }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ marginTop: '1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </section>
  )
}
