// src/app/research/page.js
import AnimatedROC from '../../components/visualizations/AnimatedROC'
import FeatureImportance from '../../components/visualizations/FeatureImportance'
import EraStratification from '../../components/visualizations/EraStratification'
import MechanismDiagram from '../../components/visualizations/MechanismDiagram'
import { ModelJourney } from '../../components/visualizations/AnimatedStats'
import Link from 'next/link'

export const metadata = {
  title: 'The Research - PsychohistoryML',
  description: 'How I applied machine learning to 10,000 years of civilizational data',
}

export default function ResearchPage() {
  return (
    <article className="research-article">

      {/* Header */}
      <header className="article-header">
        <span className="article-tag">Research</span>
        <h1>Building Psychohistory: A Data Science Journey</h1>
        <p className="article-meta">
          Amadeus Woo · December 2025 (Updated January 2026) · 6 min read
        </p>
      </header>

      {/* Methodological Note */}
      <section className="article-section" style={{
        background: 'rgba(245, 158, 11, 0.08)',
        border: '1px solid rgba(245, 158, 11, 0.25)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem'
      }}>
        <h3 style={{ marginTop: 0, fontSize: '1.1rem', color: 'rgb(180, 120, 20)' }}>
          A Note on Methodology
        </h3>
        <p style={{ marginBottom: '0.75rem' }}>
          This project uses <strong>polity duration</strong> as a proxy for stability. After further
          reading in the cliodynamics literature, I&apos;ve come to understand this is a limited approach—duration
          is often determined arbitrarily and conflates different mechanisms (conquest, fragmentation,
          succession crises). More rigorous work uses direct instability measures like ruler transition outcomes.
        </p>
        <p style={{ marginBottom: 0, fontSize: '0.9rem', opacity: 0.85 }}>
          I&apos;m preserving this analysis as an exploratory starting point while working toward
          more theory-grounded methods. The patterns are real; the interpretation is evolving.
        </p>
      </section>

      {/* Lead */}
      <section className="article-section">
        <p className="lead">
          In Isaac Asimov&apos;s <em>Foundation</em>, mathematician Hari Seldon develops 
          &quot;psychohistory&quot;  a science that predicts the behavior of large civilizations 
          over centuries. It&apos;s fiction. But what if I tried to build something like it?
        </p>
        
        <p>
          I spent the past few months feeding 10,000 years of civilizational data into 
          machine learning models. The goal wasn&apos;t to predict the future — it was to 
          understand patterns in the past. What makes some civilizations last centuries 
          while others collapse within decades?
        </p>

        <p className="caveat">
          <strong>A note on terminology:</strong> I use &quot;short-duration&quot; to describe polities
          lasting below the median (184 years). This isn&apos;t a value judgment — short-lived
          polities aren&apos;t &quot;failures.&quot; They&apos;re data points that help us understand
          patterns in civilizational dynamics. This is exploratory analysis, not causal inference.
        </p>
      </section>

      {/* The Data */}
      <section className="article-section">
        <h2>The Dataset: Seshat Global History Databank</h2>
        
        <p>
          This project uses the <a href="https://seshatdatabank.info/" target="_blank" rel="noopener noreferrer">
          Seshat Equinox 2022 dataset</a> — a systematic compilation of historical and 
          archaeological data that I&apos;ve filtered down to 256 polities across 10,000 years. 
          Each civilization is coded for dozens of variables: administrative hierarchy, 
          military technology, religious practices, infrastructure, and more.
        </p>

        <p>
          The dataset represents a monumental effort by historians, archaeologists, and 
          data scientists to quantify the qualitative. It&apos;s imperfect, all historical 
          data is, but it&apos;s the most comprehensive attempt to make civilizational 
          patterns analyzable.
        </p>

        <div className="data-summary">
          <div className="data-item">
            <span className="data-value">256</span>
            <span className="data-label">Polities analyzed</span>
          </div>
          <div className="data-item">
            <span className="data-value">10</span>
            <span className="data-label">Key Model Features</span>
          </div>
          <div className="data-item">
            <span className="data-value">4</span>
            <span className="data-label">Historical eras</span>
          </div>
        </div>
      </section>

      {/* The Model Journey */}
      <section className="article-section">
        <h2>The Model: From Chance to Signal</h2>
        
        <p>
          I started with a simple hypothesis: more complex societies should be more 
          fragile. Bureaucracies calcify, elites extract, coordination costs balloon. 
          This is Joseph Tainter&apos;s classic argument from <em>The Collapse of Complex Societies</em>.
        </p>

        <p>
          The first model, using only complexity features, performed barely better 
          than random chance. An AUC of 0.505 is essentially a coin flip.
        </p>

        <ModelJourney />

        <p>
          Then something interesting happened. Adding warfare technology variables
          jumped performance to 0.648. Adding religion pushed it to ~0.67 (CV mean).
          The model was learning something real.
        </p>

        <h3 style={{ marginTop: '2.5rem', marginBottom: '0.5rem' }}>The Three-Mechanism Model</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          The final model combines three mechanism categories. Hover over each to see
          how it contributes to predictions.
        </p>

        <MechanismDiagram />

        <AnimatedROC />

        <p>
          A ~0.67 AUC (CV mean: 0.66 ± 0.06) won&apos;t predict specific civilizational fates.
          But it&apos;s strong enough to suggest these features capture genuine patterns in
          historical dynamics.
        </p>

        <p className="caveat" style={{ background: 'rgba(239, 68, 68, 0.08)', padding: '1rem', borderRadius: '6px', borderLeft: '3px solid rgb(239, 68, 68)' }}>
          <strong>Critical caveat:</strong> When I tested temporal generalization (leave-one-era-out),
          performance dropped to <strong>0.57 AUC</strong>—barely above chance. This means the model
          learns era-specific patterns, not universal laws. A model trained on Ancient/Classical/Medieval
          data struggles to predict Early Modern outcomes. The &quot;rules&quot; change across historical periods.
        </p>
        
        <p className="caveat">
          <strong>On model variance:</strong> Cross-validation shows AUC ranging from 0.51 to 0.76 
          depending on the data split (mean: 0.675 ± 0.09). With 256 samples, high variance 
          is expected. The signal is real, but the precision isn&apos;t.
        </p>
      </section>

      {/* Key Finding 1: Religion */}
      <section className="article-section">
        <h2>Finding #1: Religion Shows Surprising Associations</h2>

        <p>
          The most statistically robust result involves religion (survives FDR correction at p &lt; 0.001).
          <strong> Religious variables collectively account for 27% of model
          decisions</strong>, making them the dominant feature category. But the direction is unexpected.
        </p>

        <FeatureImportance />

        <p>
          However, feature importance doesn&apos;t tell us direction. When I analyzed the 
          actual coefficients, the picture got more nuanced:
        </p>

        <ul className="findings-list">
          <li>
            <strong>Total religious institutionalization</strong> correlates with
            shorter duration (HR = 1.58)—this is counterintuitive and survives FDR correction.
            But correlation isn&apos;t causation: this could reflect confounding with era, literacy,
            or other unmeasured variables.
          </li>
          <li>
            <strong>Ideology sub-scores</strong> show context-dependent patterns but
            don&apos;t survive FDR correction individually (exploratory finding).
          </li>
          <li>
            <strong>The direction needs explanation:</strong> Why would more religion associate
            with shorter duration? Possible confounds: later eras have more documented religion
            AND shorter-lived polities. Or reverse causality: societies facing instability may
            elaborate religious frameworks for legitimacy.
          </li>
        </ul>

        <p>
          The takeaway: religious factors matter enormously, but the relationship is 
          nonlinear. It&apos;s not &quot;more religion = more stability.&quot; It&apos;s conditional 
          and context-dependent.
        </p>
      </section>

      {/* Key Finding 2: Era */}
      <section className="article-section">
        <h2>Finding #2: Era Trumps Geography</h2>
        
        <p>
          I expected civilizations to cluster by region — Mediterranean empires with 
          Mediterranean empires, Chinese dynasties with Chinese dynasties. Instead, 
          they cluster by time.
        </p>

        <p>
          More importantly, <strong>the relationship between complexity and duration 
          completely changes across historical periods</strong>:
        </p>

        <EraStratification />

        <p>
          In the Ancient world (pre-500 BCE), each unit of complexity reduced expected 
          duration by ~159 years. By the Early Modern period (1500+ CE), the relationship 
          had reversed — complexity slightly helped.
        </p>

        <p>
          What changed? Possibly writing, institutional memory, military technology,
          trade networks — the infrastructure that lets complex societies maintain
          themselves. The &quot;rules&quot; of civilizational survival aren&apos;t fixed; they evolve
          with humanity&apos;s toolkit.
        </p>

        <p>
          This era-dependence suggests that &quot;complexity&quot; as a single variable is too crude.
          More sophisticated frameworks distinguish between <em>social scale</em> (population,
          territory) and <em>institutional capacity</em> (bureaucracy, information systems)—which
          may have different, even opposing effects on stability depending on historical context.
        </p>
      </section>

      {/* Key Finding 3: Warfare */}
      <section className="article-section">
        <h2>Finding #3: Warfare Technology Matters</h2>
        
        <p>
          Adding military variables (weapons, fortifications, cavalry, armor) improved 
          model performance by 28%. But the effects are mixed:
        </p>

        <ul className="findings-list">
          <li>
            <strong>Cavalry and armor</strong> show slight stabilizing effects
          </li>
          <li>
            <strong>Fortifications</strong> show slight destabilizing effects 
            (possibly reflecting defensive postures of declining states)
          </li>
          <li>
            <strong>Total warfare tech</strong> slightly destabilizes on average
          </li>
        </ul>

        <p>
          In the Ancient era, advanced warfare amplified the complexity curse. In the 
          Classical period (500 BCE – 500 CE), it moderated it dramatically — a +0.634 
          moderation effect. Complex Classical societies with strong militaries 
          outlasted their simpler neighbors.
        </p>

        <p>
          The Classical era emerges as special across multiple analyses. This was the 
          age of Rome, Han China, Persia — empires that combined bureaucratic 
          sophistication with military innovation. Perhaps that combination, in that 
          historical moment, represented a sweet spot.
        </p>
      </section>

      {/* Limitations */}
      <section className="article-section">
        <h2>Limitations (Honest Assessment)</h2>
        
        <ul className="limitations-list">
          <li>
            <strong>Sample size:</strong> 256 polities sounds like a lot until you 
            stratify by era. Some subgroups have fewer than 50 cases.
          </li>
          <li>
            <strong>Selection bias:</strong> Seshat skews toward well-documented 
            societies. We know more about Rome than about countless chiefdoms that 
            left no written records.
          </li>
          <li>
            <strong>Causality unknown:</strong> These are correlations. We can&apos;t run 
            experiments on civilizations. Reverse causality is always possible.
          </li>
          <li>
            <strong>Feature definitions:</strong> What counts as &quot;ideological cohesion&quot; 
            in 2000 BCE Egypt vs 1500 CE Spain? Coding decisions shape results.
          </li>
          <li>
            <strong>Survivorship issues:</strong> We analyze polities that existed long 
            enough to be recorded. The truly unstable ones may be invisible.
          </li>
          <li>
            <strong>Model variance:</strong> Cross-validation shows high variance
            (0.51–0.76 AUC, mean 0.66 ± 0.06). Temporal holdout (LOEO) yields only 0.57 AUC.
          </li>
        </ul>

        <p>
          This isn&apos;t predictive science, it&apos;s pattern recognition in historical data.
          The model reveals correlations worth investigating, not laws of civilizational
          dynamics.
        </p>
      </section>

      {/* What This Isn't */}
      <section className="article-section">
        <h2>What This Isn&apos;t</h2>

        <ul className="limitations-list">
          <li>
            <strong>Not prediction:</strong> This model cannot forecast which modern
            nations will &quot;collapse.&quot; Historical patterns don&apos;t transfer to contemporary
            societies with different institutions, technology, and global connectivity.
          </li>
          <li>
            <strong>Not causal inference:</strong> We found associations, not causes.
            &quot;Religion correlates with shorter duration&quot; doesn&apos;t mean religion causes
            instability — it could be confounded, reversed, or spurious.
          </li>
          <li>
            <strong>Not universal laws:</strong> The weak temporal holdout (LOEO AUC = 0.57)
            suggests era-specific patterns, not timeless rules. What mattered in 500 BCE
            may not matter in 1500 CE.
          </li>
          <li>
            <strong>Not definitive:</strong> After FDR correction, only 7 of 13 &quot;significant&quot;
            findings survive. Many results are exploratory and need independent replication.
          </li>
        </ul>

        <p>
          Think of this as hypothesis generation, not hypothesis confirmation. The patterns
          here suggest directions for future research, not conclusions to act on.
        </p>
      </section>

      {/* What's Next */}
      <section className="article-section">
        <h2>Try It Yourself</h2>

        <p>
          The <Link href="/predict">Polity Simulator</Link> lets you configure a
          hypothetical civilization and find historically similar societies. Pick an era,
          adjust complexity, warfare, and religion parameters, and see which polities
          from the database most closely match your configuration.
        </p>

        <p>
          Is this true psychohistory? No. Asimov&apos;s fictional science could predict specific
          futures. This project can only identify patterns in the past—and as the weak temporal
          holdout shows, those patterns may not even generalize across eras.
        </p>

        <h3 style={{ marginTop: '2rem' }}>Where This Goes Next</h3>
        <p>
          The limitations above aren&apos;t just caveats—they&apos;re research directions. Better
          target variables (direct instability measures rather than duration), better
          feature decomposition (separating scale from institutional capacity), and
          better validation (testing whether patterns hold outside the training period)
          would all improve this work. I&apos;m actively learning from the cliodynamics
          literature to get there.
        </p>
      </section>

      {/* Footer */}
      <footer className="article-footer">
        <div className="footer-nav">
          <a href="https://github.com/TheApexWu/psychohistoryML" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          <Link href="/predict">
            Try the Simulator
          </Link>
        </div>
        
        <p className="footer-note">
          Built with the <a href="https://seshatdatabank.info/" target="_blank" rel="noopener noreferrer">
          Seshat Global History Databank</a>. All analysis code is open source.
        </p>
      </footer>
    </article>
  )
}