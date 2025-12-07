import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Welcome to Strive</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Compete with friends and track your gym progress
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <h2>Track Your Progress</h2>
          <ul>
            <li>Time spent in the gym</li>
            <li>Reps, sets, and total weight lifted</li>
            <li>Maximum lifts by exercise</li>
            <li>Body part-specific metrics</li>
          </ul>
          <Link to="/submit">
            <button style={{ width: '100%', marginTop: '1.5rem' }}>Start Tracking</button>
          </Link>
        </div>

        <div className="card">
          <h2>Compete with Friends</h2>
          <ul>
            <li>Real-time leaderboards</li>
            <li>Compare strength levels</li>
            <li>Track your rank</li>
            <li>Challenge your friends</li>
          </ul>
          <Link to="/leaderboards">
            <button style={{ width: '100%', marginTop: '1.5rem' }}>View Leaderboards</button>
          </Link>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Ready to get started? <Link to="/me">View your personal stats</Link> or <Link to="/submit">submit your workout</Link>.
        </p>
      </div>
    </section>
  )
}
