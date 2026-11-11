import { useState } from 'react'
import './App.css'

function App() {
  const [workerMessage, setWorkerMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function checkWorker() {
    setIsLoading(true)
    setWorkerMessage('')

    try {
      const response = await fetch('/api/hello')
      if (!response.ok) throw new Error('Worker request failed')
      const result: { message: string } = await response.json()
      setWorkerMessage(result.message)
    } catch {
      setWorkerMessage('Could not reach the Worker. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="page">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="aaron-cloudflare home">
          <span className="wordmark-icon" aria-hidden="true">a</span>
          <span>aaron-cloudflare</span>
        </a>
        <span className="runtime-label"><span /> Cloudflare Workers</span>
      </header>

      <section className="hero">
        <p className="eyebrow">A modern web foundation</p>
        <h1>Build something<br />remarkable.</h1>
        <p className="intro">
          React, TypeScript, and Vite, running at the edge on Cloudflare Workers.
        </p>
        <div className="actions">
          <button type="button" onClick={checkWorker} disabled={isLoading}>
            {isLoading ? 'Connecting…' : 'Test the Worker'}
            <span aria-hidden="true">→</span>
          </button>
          <span className="stack-note">Styled with plain CSS</span>
        </div>
        {workerMessage && (
          <p className="worker-message" role="status">{workerMessage}</p>
        )}
      </section>

      <footer className="site-footer">
        <span>Made for the edge.</span>
        <span>React <i /> Vite <i /> TypeScript</span>
      </footer>
    </main>
  )
}

export default App
