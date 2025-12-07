import { useState } from 'react'
import { submitStats } from '../services/api'

export default function SubmitStats() {
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)
  const [form, setForm] = useState({
    time: 60,
    reps: 10,
    sets: 3,
    weight: 100,
    exercise: 'Bench Press'
  })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMsg(null)
    try {
      await submitStats(form)
      setMsg('✓ Stats saved successfully!')
      setForm({ time: 60, reps: 10, sets: 3, weight: 100, exercise: 'Bench Press' })
    } catch (err) {
      setMsg('✗ Error saving stats')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <h1>Submit Your Workout</h1>
      <p style={{ marginBottom: '2rem' }}>Log your latest gym session</p>

      <div style={{ maxWidth: '500px' }}>
        <form onSubmit={onSubmit} className="card">
          <div className="form-group">
            <label htmlFor="exercise">Exercise</label>
            <input
              id="exercise"
              type="text"
              value={form.exercise}
              onChange={(e) => setForm({ ...form, exercise: e.target.value })}
              placeholder="e.g., Bench Press, Squat, Deadlift"
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time (minutes)</label>
            <input
              id="time"
              type="number"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: Number(e.target.value) })}
              min="1"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label htmlFor="reps">Reps</label>
              <input
                id="reps"
                type="number"
                value={form.reps}
                onChange={(e) => setForm({ ...form, reps: Number(e.target.value) })}
                min="1"
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label htmlFor="sets">Sets</label>
              <input
                id="sets"
                type="number"
                value={form.sets}
                onChange={(e) => setForm({ ...form, sets: Number(e.target.value) })}
                min="1"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              id="weight"
              type="number"
              value={form.weight}
              onChange={(e) => setForm({ ...form, weight: Number(e.target.value) })}
              min="0"
              step="0.5"
            />
          </div>

          <button type="submit" disabled={loading} style={{ width: '100%' }}>
            {loading ? 'Saving...' : 'Save Workout'}
          </button>

          {msg && (
            <div style={{
              marginTop: '1rem',
              padding: '0.8rem',
              borderRadius: '6px',
              backgroundColor: msg.includes('successfully') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
              color: msg.includes('successfully') ? '#22c55e' : '#ef4444',
              border: `1px solid ${msg.includes('successfully') ? '#22c55e' : '#ef4444'}`,
              textAlign: 'center'
            }}>
              {msg}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
