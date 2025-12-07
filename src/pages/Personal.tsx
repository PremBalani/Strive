import { useEffect, useState } from 'react'
import BodyDiagram from '../components/BodyDiagram'
import { getHealth } from '../services/api'

export default function Personal() {
  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    getHealth()
      .then((d: { status: string }) => setStatus(d.status))
      .catch(() => setStatus('unreachable'))
  }, [])

  return (
    <section>
      <h1>My Stats</h1>

      <div style={{
        padding: '1rem',
        backgroundColor: 'var(--secondary-bg)',
        borderRadius: '6px',
        marginBottom: '2rem',
        border: '1px solid var(--border-color)'
      }}>
        <strong>API Status: </strong>
        <span style={{
          color: status === 'ok' ? '#22c55e' : status === 'unreachable' ? '#ef4444' : '#f59e0b'
        }}>
          {status === 'ok' ? '✓ Connected' : status === 'unreachable' ? '✗ Disconnected' : 'Loading...'}
        </span>
      </div>

      <div className="grid-2">
        <div className="card">
          <h2>Body Levels</h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Your strength distribution across different muscle groups
          </p>
          <BodyDiagram />
        </div>

        <div className="card">
          <h2>Totals</h2>
          <ul style={{ listStyle: 'none', marginLeft: 0 }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.8rem 0', borderBottom: '1px solid var(--border-color)' }}>
              <span>Total Time in Gym</span>
              <strong style={{ color: 'var(--accent-red)' }}>123 hrs</strong>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.8rem 0', borderBottom: '1px solid var(--border-color)' }}>
              <span>Total Weight Lifted</span>
              <strong style={{ color: 'var(--accent-red)' }}>45,000 kg</strong>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem 0' }}>
              <span>Personal Best (Bench)</span>
              <strong style={{ color: 'var(--accent-red)' }}>150 kg</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
