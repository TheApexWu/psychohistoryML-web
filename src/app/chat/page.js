import ChatInterface from '../../components/ChatInterface'

export const metadata = {
  title: 'Research Assistant Bot | PsychohistoryML',
  description: 'Chat with the PsychohistoryML research assistant about civilizational patterns'
}

export default function ChatPage() {
  const disclaimerStyle = {
    color: 'var(--text-muted)',
    fontSize: '0.8rem',
    maxWidth: '700px',
    margin: '0 auto 1.5rem',
    textAlign: 'center',
    lineHeight: 1.6
  }

  const transparencyStyle = {
    color: 'var(--text-muted)',
    fontSize: '0.8rem',
    maxWidth: '700px',
    margin: '0 auto 2rem',
    padding: '1rem',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    borderRadius: '6px'
  }

  const listStyle = {
    margin: '0.5rem 0 0 0',
    padding: 0,
    listStyle: 'none'
  }

  const listItemStyle = {
    marginBottom: '0.25rem'
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="hero-tag">Beta</span>
        <h1 style={{ fontSize: '2rem', marginTop: '1rem', fontWeight: 600 }}>
          PsychohistoryML Research Assistant Bot
        </h1>
        <p className="subtitle" style={{ marginBottom: '1rem' }}>
          Ask questions about civilizational patterns from 10,000 years of data
        </p>
      </div>

      <div style={disclaimerStyle}>
        <p style={{ marginBottom: '0.5rem' }}>
          Limitations: Pattern discovery from 256 polities with high variance (CV 0.51-0.76).
          These are correlations, not causal claims. No geographic, economic, or population variables.
          Duration outcomes only, not collapse dynamics.
        </p>
        <p style={{ fontStyle: 'italic' }}>Powered by Claude API</p>
      </div>

      <div style={transparencyStyle}>
        <strong style={{ color: 'var(--text-primary)' }}>What this assistant cannot do:</strong>
        <ul style={listStyle}>
          <li style={listItemStyle}>- Answer questions about geography, trade routes, or economic factors (not in current model)</li>
          <li style={listItemStyle}>- Provide granular conflict frequency or battle data</li>
          <li style={listItemStyle}>- Explain causal mechanisms (only correlations from ML pattern-matching)</li>
          <li style={listItemStyle}>- Account for civilizational influence chains (Rome influenced Byzantium, etc.)</li>
          <li style={listItemStyle}>- Give predictions with high confidence (256 polities is a small sample)</li>
          <li style={listItemStyle}>- Find &quot;similar&quot; polities the same way the model does (similarity is approximate)</li>
        </ul>
      </div>

      <ChatInterface />
    </div>
  )
}
