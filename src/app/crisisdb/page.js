'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CliodynamicsExplorer from './components/CliodynamicsExplorer'
import EliteScatter from './components/EliteScatter'
import ContagionHeatmap from './components/ContagionHeatmap'
import TransitionTimeline from './components/TransitionTimeline'
import TenureSurvival from './components/TenureSurvival'
import ViolenceMechanisms from './components/ViolenceMechanisms'
import PolityDeepDive from './components/PolityDeepDive'
import crisisData from './data.json'

export default function CrisisDBPage() {
  const { elite_scatter, timeline, markov, stats, rulers, tenure_stats, source_quality, century_mechanisms, polity_trajectories, filtered_stats } = crisisData
  const [excludeLowQuality, setExcludeLowQuality] = useState(false)

  // Filter data based on source quality toggle
  const filteredScatter = excludeLowQuality
    ? elite_scatter.filter(d => !d.low_quality)
    : elite_scatter
  const filteredTimeline = excludeLowQuality
    ? timeline.filter(d => !d.low_quality)
    : timeline
  const filteredRulers = excludeLowQuality
    ? rulers.filter(d => !d.low_quality)
    : rulers

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
            <span className="stat-value">{excludeLowQuality ? filteredTimeline.length.toLocaleString() : stats.total_transitions.toLocaleString()}</span>
            <span className="stat-label">Transitions</span>
          </div>
          <div className="stat">
            <span className="stat-value">{excludeLowQuality ? source_quality.stats.sufficient : stats.total_polities}</span>
            <span className="stat-label">Polities</span>
          </div>
          <div className="stat">
            <span className="stat-value">{(stats.violence_rate * 100).toFixed(0)}%</span>
            <span className="stat-label">Violent</span>
          </div>
        </div>
        <div className="quality-filter">
          <label className="filter-toggle">
            <input
              type="checkbox"
              checked={excludeLowQuality}
              onChange={(e) => setExcludeLowQuality(e.target.checked)}
            />
            <span className="toggle-label">Exclude sparse polities</span>
            <span className="toggle-info" title={source_quality.note}>
              ({source_quality.stats.sparse} polities with {'<'}{source_quality.threshold} transitions)
            </span>
          </label>
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
          SDT predicts that institutional complexity leads to <strong>elite overproduction</strong> — more
          administrative levels mean more elite positions, more competition, and more intra-elite
          conflict during power transitions.
        </p>
        <p className="data-note">
          Data: {stats.total_transitions.toLocaleString()} power transitions from {stats.total_polities} polities,
          merged with Seshat complexity metrics. This is a subset of the full CrisisDB.
        </p>
      </section>

      {/* Interactive Explorer */}
      <CliodynamicsExplorer
        eliteScatter={filteredScatter}
        markov={markov}
        rulers={filteredRulers}
        stats={stats}
      />

      {/* Detailed Findings */}
      <h2 className="findings-header">Detailed Findings</h2>

      {/* Elite Overproduction */}
      <section className="viz-section">
        <h2>1. Elite Overproduction</h2>
        <p className="section-intro">
          Does administrative complexity predict intra-elite conflict?
        </p>
        <EliteScatter data={filteredScatter} stats={stats} />
        <div className="finding-box">
          <strong>Finding:</strong> Positive correlation (r = {stats.correlation_r}, p {'<'} 0.001).
          Each additional administrative level associates with +{stats.effect_size} percentage points
          higher intra-elite conflict rate.
        </div>
      </section>

      {/* Violence Contagion */}
      <section className="viz-section">
        <h2>2. Violence Contagion</h2>
        <p className="section-intro">
          Does a violent transition increase the probability of subsequent violence?
        </p>
        <ContagionHeatmap markov={markov} />
        <div className="finding-box">
          <strong>Finding:</strong> P(violent | previous violent) = 60%
          vs P(violent | previous peaceful) = 22%. Stationary distribution: 36% violent.
        </div>
      </section>

      {/* Violence Mechanisms Over Time */}
      <section className="viz-section">
        <h2>3. Temporal Dynamics</h2>
        <p className="section-intro">
          If the system were stationary, we'd expect constant rates across centuries. It isn't.
        </p>
        <ViolenceMechanisms data={century_mechanisms} />
        <div className="finding-box">
          <strong>Finding:</strong> Assassination dominates in antiquity (peaking at 45% in the
          3rd century crisis), while intra-elite conflict shows distinct waves. The overall rate
          of political violence has declined since ~500 CE, but the <em>composition</em> shifts —
          different mechanisms dominate in different eras.
        </div>
      </section>

      {/* Polity Trajectories */}
      <section className="viz-section">
        <h2>4. Polity Trajectories</h2>
        <p className="section-intro">
          Aggregate statistics mask divergent paths. Some polities maintain stability for centuries;
          others spiral into violence.
        </p>
        <PolityDeepDive trajectories={polity_trajectories} eliteScatter={elite_scatter} />
        <div className="finding-box" style={{ marginTop: '1rem' }}>
          <strong>Compare:</strong> Venice maintains near-zero violence across 41 transitions (800–1797 CE),
          while Byzantine III shows 100% conflict in its final phase — distinct <em>regimes</em>
          that polities can inhabit, with transitions between them.
        </div>
      </section>

      {/* Ruler Tenure */}
      <section className="viz-section">
        <h2>5. Ruler Tenure</h2>
        <p className="section-intro">
          Do violent usurpers reign shorter?
        </p>
        <TenureSurvival data={filteredRulers} />
        <div className="finding-box">
          <strong>Finding:</strong> Violent accession → 2 years shorter median reign (8 vs 10 years, p {'<'} 0.0001).
          Military coups show the strongest effect (-4 years). Usurpers are 2.5x more likely
          to be removed violently themselves.
        </div>
      </section>

      {/* Timeline */}
      <section className="viz-section">
        <h2>6. Transitions Over Time</h2>
        <p className="section-intro">
          When and where do power transitions cluster? Explore the temporal distribution.
        </p>
        <TransitionTimeline timeline={filteredTimeline} stats={stats} />
      </section>

      {/* Notable Patterns */}
      <section className="patterns-section">
        <h2>7. Notable Patterns</h2>
        <p className="section-intro">
          Outliers and trajectories that complicate the complexity-conflict relationship.
        </p>

        <div className="pattern-grid">
          <div className="pattern-card">
            <h3>Complexity Without Conflict</h3>
            <p>
              <strong>Venice</strong> (admin=6, conflict=0-5%), <strong>Egypt Old Kingdom</strong> (admin=6, conflict=0%),
              and <strong>Northern Song</strong> (admin=7, conflict=11%) maintained complex bureaucracies with
              low intra-elite violence during transitions.
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
              "Intra-elite conflict" here measures violence during <em>power transitions</em>,
              not general societal violence. Aztec succession was highly ritualized — external violence
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

      {/* Toward Prediction */}
      <section className="prediction-section">
        <h2>8. Toward Prediction: Violence as a Dynamical System</h2>
        <p className="section-intro">
          Political violence has structure. Can we move from description to prediction?
        </p>

        <div className="prediction-grid">
          <div className="prediction-card">
            <h3>Equilibrium or Illusion?</h3>
            <p>
              The Markov chain converges to 36% violent at stationarity. But the temporal dynamics
              (Section 3) show the system is <em>not</em> stationary — rates shift across centuries.
              Are polities oscillating between <strong>basins of attraction</strong> (stable vs. crisis regimes),
              or is the drift driven by external factors?
            </p>
          </div>

          <div className="prediction-card">
            <h3>Critical Transitions</h3>
            <p>
              Byzantine Empire: 56% → 50% → 100% violence. Mamluk: 68% → 73% → 80%.
              These trajectories resemble <strong>tipping points</strong> more than gradual drift.
              Complex systems theory predicts early warning signals before critical transitions
              (rising autocorrelation, critical slowing down). Can we detect them in the historical record?
            </p>
          </div>

          <div className="prediction-card">
            <h3>Hidden States</h3>
            <p>
              A <strong>Hidden Markov Model</strong> could formalize this: a latent state
              (stable vs. crisis) generating observed transitions with different probabilities.
              The polity trajectories in Section 4 suggest at least two distinct regimes.
              What triggers the switch between them?
            </p>
          </div>
        </div>

        <div className="open-questions">
          <h3>Open Questions</h3>
          <p className="oq-intro">
            These require additional variables beyond power transitions:
          </p>
          <ul>
            <li>
              <strong>Economic stress as a trigger:</strong> Does fiscal crisis or resource scarcity
              predict the transition from stable to crisis regimes? (Requires CrisisDB economic variables)
            </li>
            <li>
              <strong>Population dynamics:</strong> Turchin's SDT predicts that population pressure
              drives elite overproduction. Can we measure this interaction directly?
              (Requires Seshat demographic data)
            </li>
            <li>
              <strong>Institutional resilience:</strong> Venice maintained stability for a millennium.
              What institutional features predict <em>resistance</em> to violence contagion?
              (Requires Seshat institutional complexity variables)
            </li>
            <li>
              <strong>Regional contagion:</strong> Does violence in one polity increase the probability
              of violence in neighboring polities? (Requires spatial analysis across the full CrisisDB)
            </li>
          </ul>
        </div>
      </section>

      {/* Filtered vs Unfiltered */}
      {filtered_stats && (
        <section className="robustness-section">
          <h2>9. Robustness Check</h2>
          <p className="section-intro">
            Do findings hold when excluding polities with fewer than {source_quality.threshold} transitions?
          </p>
          <div className="robustness-grid">
            <div className="robustness-card">
              <h4>All Polities</h4>
              <div className="rob-stat">r = {stats.correlation_r}</div>
              <div className="rob-detail">{stats.total_transitions.toLocaleString()} transitions · {stats.total_polities} polities</div>
              <div className="rob-detail">P(V|V) = {(markov.p_violent_to_violent * 100).toFixed(0)}%</div>
              <div className="rob-detail">Violence rate: {(stats.violence_rate * 100).toFixed(1)}%</div>
            </div>
            <div className="robustness-arrow">→</div>
            <div className="robustness-card">
              <h4>Excluding Sparse Polities (n {'<'} {source_quality.threshold})</h4>
              <div className="rob-stat">r = {filtered_stats.correlation_r}</div>
              <div className="rob-detail">{filtered_stats.total_transitions_filtered?.toLocaleString()} transitions · {source_quality.stats.sufficient} polities</div>
              <div className="rob-detail">P(V|V) = {(filtered_stats.markov_filtered?.p_violent_to_violent * 100).toFixed(0)}%</div>
              <div className="rob-detail">Violence rate: {(filtered_stats.violence_rate_filtered * 100).toFixed(1)}%</div>
            </div>
          </div>
          <div className="finding-box" style={{ marginTop: '1rem' }}>
            <strong>Result:</strong> Excluding {filtered_stats.excluded_polities} sparse polities
            slightly increases the violence rate ({(stats.violence_rate * 100).toFixed(1)}% → {(filtered_stats.violence_rate_filtered * 100).toFixed(1)}%)
            and persistence (P(V|V): {(markov.p_violent_to_violent * 100).toFixed(0)}% → {(filtered_stats.markov_filtered?.p_violent_to_violent * 100).toFixed(0)}%).
            Core findings are robust to this exclusion.
            {filtered_stats.correlation_note && (
              <span className="rob-note"> {filtered_stats.correlation_note}</span>
            )}
          </div>
        </section>
      )}

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
              <li>Correlation does not imply causation</li>
              <li>Selection bias toward well-documented polities</li>
              <li>Merging introduces data loss</li>
            </ul>
          </div>
          <div className="method-card">
            <h3>Source Quality</h3>
            <p>
              Polities with fewer than {source_quality.threshold} recorded transitions are flagged as sparse —
              too few data points for reliable violence rate estimates.
              Use the filter above to exclude these {source_quality.stats.sparse} polities and verify that findings hold.
            </p>
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
          Special thanks to Jenny Reddish, Jakob Zsambok, and Peter Turchin for feedback on source quality
          and methodology, and to Daniel Kondor for ongoing work on the power transitions data.
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

        .quality-filter {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }

        .filter-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.85rem;
        }

        .filter-toggle input {
          cursor: pointer;
        }

        .toggle-label {
          color: var(--text-secondary);
        }

        .toggle-info {
          color: var(--text-muted);
          font-size: 0.75rem;
        }

        .quality-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
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

        .prediction-section {
          margin-bottom: 3rem;
        }

        .prediction-section h2 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .prediction-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .prediction-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1.25rem;
        }

        .prediction-card h3 {
          font-size: 0.95rem;
          color: var(--text-primary);
          margin: 0 0 0.75rem 0;
        }

        .prediction-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .open-questions {
          background: rgba(99, 102, 241, 0.06);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 6px;
          padding: 1.5rem;
        }

        .open-questions h3 {
          font-size: 1rem;
          color: var(--accent);
          margin: 0 0 0.5rem 0;
        }

        .oq-intro {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0 0 1rem 0;
        }

        .open-questions ul {
          margin: 0;
          padding-left: 1.25rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .open-questions li {
          margin-bottom: 0.75rem;
        }

        .open-questions li:last-child {
          margin-bottom: 0;
        }

        .robustness-section {
          margin-bottom: 3rem;
        }

        .robustness-section h2 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .robustness-grid {
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: center;
        }

        .robustness-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1.25rem;
          text-align: center;
          flex: 1;
          max-width: 320px;
        }

        .robustness-card h4 {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0 0 0.75rem 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .rob-stat {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--accent);
          font-family: var(--font-mono);
          margin-bottom: 0.5rem;
        }

        .rob-detail {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .rob-note {
          display: block;
          margin-top: 0.5rem;
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .robustness-arrow {
          font-size: 1.5rem;
          color: var(--text-muted);
          opacity: 0.5;
        }

        @media (max-width: 640px) {
          .robustness-grid {
            flex-direction: column;
          }
          .robustness-arrow {
            transform: rotate(90deg);
          }
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
