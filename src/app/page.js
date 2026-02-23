import Link from 'next/link'

export default function Home() {
  return (
    <div className="hero" style={{ textAlign: 'center' }}>
      <div className="hero-tag" style={{ opacity: 0, animation: 'fadeUp 0.7s ease-out 0.15s both' }}>Research Project</div>
      <h1 style={{ opacity: 0, animation: 'fadeUp 0.7s ease-out 0.3s both' }}>
        Psychohistory<em>ML</em>
      </h1>
      <p className="subtitle" style={{ opacity: 0, animation: 'fadeInSlow 0.8s ease-out 0.6s both' }}>
        Exploratory ML analysis of 372 historical polities from the Seshat Global History Databank.
        Can machine learning find patterns in 10,000 years of civilizational data?
      </p>

      <div className="stats" style={{ opacity: 0, animation: 'fadeInSlow 0.8s ease-out 0.9s both' }}>
        <div className="stat">
          <span className="stat-value">372</span>
          <span className="stat-label">Polities</span>
        </div>
        <div className="stat">
          <span className="stat-value">0.66</span>
          <span className="stat-label">CV AUC</span>
        </div>
        <div className="stat">
          <span className="stat-value">3,447</span>
          <span className="stat-label">Power Transitions</span>
        </div>
      </div>

      <div className="cta-buttons" style={{ opacity: 0, animation: 'fadeInSlow 0.8s ease-out 1.2s both' }}>
        <Link href="/discover" className="btn-fill">Explore Data</Link>
        <Link href="/research" className="btn-fill secondary">Read Research</Link>
        <Link href="/crisisdb" className="btn-fill secondary">CrisisDB Explorer</Link>
      </div>

      <div className="research-cta scroll-fade-in" style={{ marginTop: '4rem' }}>
        <p>More tools</p>
        <div className="cta-buttons">
          <Link href="/predict" className="btn-fill secondary">Prediction Simulator</Link>
          <Link href="/chat" className="btn-fill secondary">Chat with Data</Link>
        </div>
      </div>
    </div>
  )
}
