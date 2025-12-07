export default function Leaderboards() {
  const leaderboards = [
    {
      title: 'Time in Gym',
      data: [
        { rank: 1, name: 'Alice', value: '120 hrs' },
        { rank: 2, name: 'Bob', value: '95 hrs' },
        { rank: 3, name: 'Charlie', value: '80 hrs' },
      ]
    },
    {
      title: 'Max Bench Press',
      data: [
        { rank: 1, name: 'Bob', value: '200 kg' },
        { rank: 2, name: 'Alice', value: '160 kg' },
        { rank: 3, name: 'Charlie', value: '150 kg' },
      ]
    },
    {
      title: 'Total Weight Lifted',
      data: [
        { rank: 1, name: 'Bob', value: '50,000 kg' },
        { rank: 2, name: 'Charlie', value: '48,000 kg' },
        { rank: 3, name: 'Alice', value: '45,000 kg' },
      ]
    },
    {
      title: 'Deadlift Max',
      data: [
        { rank: 1, name: 'Charlie', value: '250 kg' },
        { rank: 2, name: 'Bob', value: '240 kg' },
        { rank: 3, name: 'Alice', value: '200 kg' },
      ]
    }
  ]

  return (
    <section>
      <h1>Leaderboards</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Compete with your friends across different metrics
      </p>

      <div className="grid">
        {leaderboards.map((lb) => (
          <div key={lb.title} className="card">
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>{lb.title}</h2>
            <ol style={{ listStyle: 'none', marginLeft: 0, padding: 0 }}>
              {lb.data.map((entry) => (
                <li
                  key={entry.rank}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.8rem',
                    marginBottom: '0.5rem',
                    backgroundColor: 'var(--tertiary-bg)',
                    borderRadius: '4px',
                    borderLeft: `3px solid ${entry.rank === 1 ? '#fbbf24' : entry.rank === 2 ? '#d1d5db' : '#a78bfa'}`
                  }}
                >
                  <span style={{ fontWeight: 600 }}>
                    #{entry.rank} {entry.name}
                  </span>
                  <span style={{ color: 'var(--accent-red)', fontWeight: 700 }}>
                    {entry.value}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  )
}
