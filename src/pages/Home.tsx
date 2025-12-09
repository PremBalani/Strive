import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    // Check if user is logged in by checking for stored user data
    const storedUser = localStorage.getItem('currentUser')
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser)
        setIsLoggedIn(true)
        setUsername(user.username || user.name)
      } catch (err) {
        console.error('Error parsing user data:', err)
      }
    }
  }, [])

  return (
    <section>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Welcome to Strive</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Compete with friends and track your gym progress
        </p>
      </div>

      {isLoggedIn ? (
        <>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              padding: '2rem',
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Stat Tracker</h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                View your personal gym statistics, track your progress over time, and see how you're improving across all metrics.
              </p>
              <Link to="/me">
                <button 
                  style={{ 
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'var(--accent-red)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-red-dark)'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-red)'}
                >
                  View My Stats
                </button>
              </Link>
            </div>

            <div style={{
              padding: '2rem',
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Leaderboards</h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Compete with your friends, compare your lifts, and see where you rank across different exercises and metrics.
              </p>
              <Link to="/leaderboards">
                <button 
                  style={{ 
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: 'var(--accent-red)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-red-dark)'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-red)'}
                >
                  View Leaderboards
                </button>
              </Link>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Ready to log a workout? <Link to="/submit" style={{ color: 'var(--accent-red)', textDecoration: 'none', fontWeight: 600 }}>Submit your workout</Link>
            </p>
          </div>
        </>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--secondary-bg)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)'
          }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Track Your Progress</h2>
            <ul style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
              <li>Time spent in the gym</li>
              <li>Reps, sets, and total weight lifted</li>
              <li>Maximum lifts by exercise</li>
              <li>Body part-specific metrics</li>
            </ul>
          </div>

          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--secondary-bg)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)'
          }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Compete with Friends</h2>
            <ul style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
              <li>Real-time leaderboards</li>
              <li>Compare strength levels</li>
              <li>Track your rank</li>
              <li>Challenge your friends</li>
            </ul>
          </div>

          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--tertiary-bg)',
            borderRadius: '12px',
            border: '2px solid var(--accent-red)',
            gridColumn: 'span 2',
            textAlign: 'center'
          }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--accent-red)' }}>🔒 Login Required</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Log in to start tracking your workouts and competing with friends
            </p>
            <Link to="/login">
              <button 
                style={{ 
                  padding: '0.75rem 2rem',
                  backgroundColor: 'var(--accent-red)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-red-dark)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-red)'}
              >
                Log In
              </button>
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
