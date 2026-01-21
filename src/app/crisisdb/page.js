'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CliodynamicsExplorer from './components/CliodynamicsExplorer'
import EliteScatter from './components/EliteScatter'
import ContagionHeatmap from './components/ContagionHeatmap'
import TransitionTimeline from './components/TransitionTimeline'
import TenureSurvival from './components/TenureSurvival'
import crisisData from './data.json'

export default function CrisisDBPage() {
  const { elite_scatter, timeline, markov, stats, rulers, tenure_stats } = crisisData

  return (
    <div className="crisisdb-page">
      {/* Header */}
      <header className="crisisdb-header">
        <div className="beta-badge">BETA</div>
        <h1>CrisisDB Explorer</h1>
        <p className="header-subtitle">
          Exploring power transitions and elite dynamics using the Crisis Database
        </p>
        <div className="header-stats">
          <div className="stat">
            <span className="stat-value">{stats.total_transitions.toLocaleString()}</span>
            <span className="stat-label">Transitions</span>
          </div>
          <div className="stat">
            <span className="stat-value">{stats.total_polities}</span>
            <span className="stat-label">Polities</span>
          </div>
          <div className="stat">
            <span className="stat-value">{(stats.violence_rate * 100).toFixed(0)}%</span>
            <span className="stat-label">Violent</span>
          </div>
        </div>
      </header>

      {/* Context */}
      <section className="context-section">
        <h2>What is this?</h2>
        <p>
          This is an interactive exploration of the <strong>CrisisDB Power Transitions</strong> dataset,
          testing predictions from Peter Turchin's <strong>Structural Demographic Theory</strong> (SDT).
        </p>
        <p>
          SDT predicts that institutional complexity (measured by administrative levels) leads to
          <strong> elite overproduction</strong>—more elite positions mean more competition,
          which manifests as intra-elite conflict during power transitions.
        </p>
        <p className="data-note">
          Data: {stats.total_transitions.toLocaleString()} power transitions from {stats.total_polities} polities,
          merged with Seshat complexity metrics. This is a subset of the full CrisisDB.
        </p>
      </section>

      {/* Interactive Explorer */}
      <CliodynamicsExplorer
        eliteScatter={elite_scatter}
        markov={markov}
        rulers={rulers}
        stats={stats}
      />

      {/* Detailed Findings */}
      <h2 className="findings-header">Detailed Findings</h2>

      {/* Elite Overproduction */}
      <section className="viz-section">
        <h2>1. Elite Overproduction</h2>
        <p className="section-intro">
          Does administrative complexity predict intra-elite conflict? Testing Turchin's core hypothesis.
        </p>
        <EliteScatter data={elite_scatter} stats={stats} />
        <div className="finding-box">
          <strong>Finding:</strong> Positive correlation (r = {stats.correlation_r}, p {'<'} 0.001).
          Each additional administrative level associates with +{stats.effect_size} percentage points
          higher intra-elite conflict rate. Consistent with elite overproduction theory.
        </div>
      </section>

      {/* Violence Contagion */}
      <section className="viz-section">
        <h2>2. Violence Contagion</h2>
        <p className="section-intro">
          Is violence "sticky"? Does a violent transition increase the probability of subsequent violence?
        </p>
        <ContagionHeatmap markov={markov} />
        <div className="finding-box">
          <strong>Finding:</strong> Violence is self-reinforcing. P(violent | previous violent) = 60%
          vs P(violent | previous peaceful) = 22%. The system converges to 36% violent at equilibrium.
        </div>
      </section>

      {/* Ruler Tenure */}
      <section className="viz-section">
        <h2>3. Ruler Tenure</h2>
        <p className="section-intro">
          Do violent usurpers reign shorter? Testing instability cascades at the individual level.
        </p>
        <TenureSurvival data={rulers} />
        <div className="finding-box">
          <strong>Finding:</strong> Violent accession → 2 years shorter median reign (8 vs 10 years, p {'<'} 0.0001).
          Military coups show strongest effect (-4 years). Violence cascades: usurpers are 2.5x more likely
          to be removed violently themselves.
        </div>
      </section>

      {/* Timeline */}
      <section className="viz-section">
        <h2>4. Transitions Over Time</h2>
        <p className="section-intro">
          When and where do power transitions cluster? Explore the temporal distribution.
        </p>
        <TransitionTimeline timeline={timeline} stats={stats} />
      </section>

      {/* Notable Patterns */}
      <section className="patterns-section">
        <h2>5. Notable Patterns</h2>
        <p className="section-intro">
          Outliers and trajectories that complicate—or illuminate—the complexity-conflict relationship.
        </p>

        <div className="pattern-grid">
          <div className="pattern-card">
            <h3>Complexity Without Conflict</h3>
            <p>
              <strong>Venice</strong> (admin=6, conflict=0-5%), <strong>Egypt Old Kingdom</strong> (admin=6, conflict=0%),
              and <strong>Northern Song</strong> (admin=7, conflict=11%) maintained complex bureaucracies with
              remarkably low intra-elite violence during transitions.
            </p>
            <p className="pattern-note">
              Suggests strong succession institutions can buffer elite competition.
            </p>
          </div>

          <div className="pattern-card">
            <h3>The Aztec Paradox</h3>
            <p>
              <strong>Aztec Empire</strong> (admin=6, conflict=0%, n=7) shows zero intra-elite conflict despite
              their reputation for ritualized violence and warfare.
            </p>
            <p className="pattern-note">
              Key distinction: "intra-elite conflict" here measures violence during <em>power transitions</em>,
              not general societal violence. Aztec succession was highly ritualized—external violence (sacrifice, warfare)
              didn't translate to contested successions.
            </p>
          </div>

          <div className="pattern-card">
            <h3>Byzantine Degradation</h3>
            <p>
              Conflict rates escalate across Byzantine phases: <strong>I</strong> (56%) → <strong>II</strong> (50%) → <strong>III</strong> (100%).
              The late Byzantine Empire saw every single power transition turn violent.
            </p>
            <p className="pattern-note">
              Consistent with SDT: declining resources + persistent elite expectations = intensified competition.
            </p>
          </div>

          <div className="pattern-card">
            <h3>Mamluk Escalation</h3>
            <p>
              Similar pattern in Mamluk Egypt: <strong>I</strong> (68%) → <strong>II</strong> (73%) → <strong>III</strong> (80%).
              Military slave systems may have structural instability in succession.
            </p>
            <p className="pattern-note">
              Highest sustained conflict rates in the dataset.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="method-section">
        <h2>Methodology & Limitations</h2>
        <div className="method-grid">
          <div className="method-card">
            <h3>Data Sources</h3>
            <ul>
              <li><strong>CrisisDB</strong>: Power transitions with mechanism coding (P/IP/A/IA)</li>
              <li><strong>Seshat Equinox 2022</strong>: Administrative levels and complexity metrics</li>
              <li>Merged on polity name (n = {stats.elite_sample_size} with ≥5 transitions)</li>
            </ul>
          </div>
          <div className="method-card">
            <h3>Limitations</h3>
            <ul>
              <li>Partial CrisisDB subset (power_transitions.csv only)</li>
              <li>Correlation ≠ causation</li>
              <li>Selection bias toward well-documented polities</li>
              <li>Merging introduces data loss</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Credits & Footer */}
      <section className="credits-section">
        <h2>Acknowledgments</h2>
        <p>
          This work builds on data and theory from <a href="https://peterturchin.com/" target="_blank" rel="noopener noreferrer">Peter Turchin</a> and
          the <a href="https://csh.ac.at/" target="_blank" rel="noopener noreferrer">Complexity Science Hub Vienna</a>.
          CrisisDB and Seshat are maintained by the <a href="https://seshatdatabank.info/" target="_blank" rel="noopener noreferrer">Seshat: Global History Databank</a> team.
        </p>
        <p className="credits-note">
          Special thanks to the Seshat team for making historical data accessible for quantitative analysis.
        </p>
      </section>

      <footer className="crisisdb-footer">
        <p>
          Data: <a href="https://seshatdatabank.info/" target="_blank" rel="noopener noreferrer">Seshat</a> & CrisisDB.
          Analysis: <a href="https://github.com/TheApexWu/psychohistoryML" target="_blank" rel="noopener noreferrer">GitHub</a>.
          Theory: <a href="https://peterturchin.com/structural-demographic-theory/" target="_blank" rel="noopener noreferrer">Structural Demographic Theory</a>.
        </p>
        <Link href="/research" className="archive-link">
          View Seshat-based analysis →
        </Link>
      </footer>

      <style jsx>{`
        .crisisdb-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }

        .crisisdb-header {
          text-align: center;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border);
        }

        .beta-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(245, 158, 11, 0.15);
          color: rgb(245, 158, 11);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          border-radius: 4px;
          margin-bottom: 1rem;
        }

        .crisisdb-header h1 {
          font-size: 2rem;
          margin: 0 0 0.5rem 0;
          color: var(--text-primary);
        }

        .header-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
          margin: 0 0 1.5rem 0;
        }

        .header-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--accent);
          font-family: var(--font-mono);
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .context-section {
          margin-bottom: 3rem;
        }

        .context-section h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .context-section p {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 0.75rem;
        }

        .data-note {
          font-size: 0.85rem;
          opacity: 0.8;
          padding-top: 0.5rem;
          border-top: 1px solid var(--border);
          margin-top: 1rem;
        }

        .findings-header {
          font-size: 1.1rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0 0 2rem 0;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
        }

        .viz-section {
          margin-bottom: 3rem;
        }

        .viz-section h2 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .section-intro {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .finding-box {
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.25);
          border-radius: 6px;
          padding: 1rem 1.25rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .finding-box strong {
          color: rgb(34, 197, 94);
        }

        .method-section {
          margin-bottom: 3rem;
        }

        .method-section h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .method-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }

        .method-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1.25rem;
        }

        .method-card h3 {
          font-size: 0.9rem;
          color: var(--text-primary);
          margin: 0 0 0.75rem 0;
        }

        .method-card ul {
          margin: 0;
          padding-left: 1.25rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .patterns-section {
          margin-bottom: 3rem;
        }

        .patterns-section h2 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .pattern-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }

        .pattern-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1.25rem;
        }

        .pattern-card h3 {
          font-size: 0.95rem;
          color: var(--text-primary);
          margin: 0 0 0.75rem 0;
        }

        .pattern-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0 0 0.5rem 0;
        }

        .pattern-note {
          font-size: 0.8rem !important;
          opacity: 0.85;
          padding-top: 0.5rem;
          border-top: 1px solid var(--border);
          margin-top: 0.75rem !important;
        }

        .credits-section {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 6px;
        }

        .credits-section h2 {
          font-size: 1rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 1rem 0;
        }

        .credits-section p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0 0 0.5rem 0;
        }

        .credits-section a {
          color: var(--accent);
          text-decoration: none;
        }

        .credits-section a:hover {
          text-decoration: underline;
        }

        .credits-note {
          font-size: 0.85rem !important;
          opacity: 0.8;
        }

        .crisisdb-footer {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .crisisdb-footer a {
          color: var(--accent);
          text-decoration: none;
        }

        .crisisdb-footer a:hover {
          text-decoration: underline;
        }

        .archive-link {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 4px;
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  )
}
