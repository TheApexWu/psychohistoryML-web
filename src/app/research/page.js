// src/app/research/page.js
import AnimatedROC from '../../components/visualizations/AnimatedROC'
import FeatureImportance from '../../components/visualizations/FeatureImportance'
import EraStratification from '../../components/visualizations/EraStratification'
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
          Amadeus Woo - December 2025 - 5 min read
        </p>
      </header>

      {/* Lead / Hook */}
      <section className="article-section">
        <p className="lead">
          In Isaac Asimov's <em>Foundation</em>, mathematician Hari Seldon develops 
          "psychohistory" - a science that predicts the behavior of large populations 
          over centuries. It's fiction. But what if we tried to build something like it?
        </p>
        
        <p>
          I spent the past few months feeding 10,000 years of civilizational data into 
          machine learning models. The goal wasn't to predict the future - it was to 
          understand patterns in the past. What makes some civilizations last centuries 
          while others collapse within decades?
        </p>

        <p className="caveat">
          <strong>A note on terminology:</strong> "Collapse" is a loaded term among historians, 
          and for good reason. Throughout this research, I use "instability" to describe 
          polities whose duration falls below the median (184 years). 
          This isn't a value judgment - short-lived polities aren't "failures." They're 
          data points that help us understand civilizational dynamics.
        </p>
      </section>

      {/* The Data */}
      <section className="article-section">
        <h2>The Dataset: Seshat Global History Databank</h2>
        
        <p>
          This project uses the <a href="https://seshatdatabank.info/" target="_blank" rel="noopener noreferrer">
          Seshat Equinox 2022 dataset</a> - a systematic compilation of historical and 
          archaeological data covering 256 polities across 10,000 years. Each civilization 
          is coded for dozens of variables: administrative hierarchy, military technology, 
          religious practices, infrastructure, and more.
        </p>

        <p>
          The dataset represents a monumental effort by historians, archaeologists, and 
          data scientists to quantify the qualitative. It's imperfect - all historical 
          data is - but it's the most comprehensive attempt to make civilizational 
          patterns analyzable.
        </p>

        <div className="data-summary">
          <div className="data-item">
            <span className="data-value">256</span>
            <span className="data-label">Polities analyzed</span>
          </div>
          <div className="data-item">
            <span className="data-value">16</span>
            <span className="data-label">Features used</span>
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
          This is Joseph Tainter's classic argument from <em>The Collapse of Complex Societies</em>.
        </p>

        <p>
          The first model - using only complexity features - performed barely better 
          than random chance. An AUC of 0.505 is essentially a coin flip.
        </p>

        <ModelJourney />

        <p>
          Then something interesting happened. Adding warfare technology variables 
          jumped performance to 0.648. Adding religion pushed it to 0.744. The model 
          was learning something real.
        </p>

        <AnimatedROC />

        <p>
          A 0.744 AUC won't predict specific civilizational fates. But it's strong 
          enough to suggest these features capture genuine patterns in historical 
          dynamics - patterns that generalize across cultures and millennia.
        </p>
      </section>

      {/* Key Finding 1: Religion - REVISED */}
      <section className="article-section">
        <h2>Finding #1: Religion Shows Complex Effects</h2>
        
        <p>
          The most interesting result involves religion - but not in the simple way I 
          expected. <strong>Religious variables collectively account for 27.2% of model 
          decisions</strong>, making them the dominant feature category.
        </p>

        <FeatureImportance />

        <p>
          However, feature importance doesn't tell us direction. When I analyzed the 
          actual effects, the picture got more nuanced:
        </p>

        <ul className="findings-list">
          <li>
            <strong>Total religious institutionalization</strong> (total_rel) shows 
            stabilizing effects - more developed religious infrastructure correlates 
            with longer duration.
          </li>
          <li>
            <strong>Ideology scores</strong> show context-dependent patterns - high 
            importance for model decisions, but weak directional effect. The model 
            uses ideology to make fine-grained distinctions, not broad predictions.
          </li>
          <li>
            <strong>Moralizing religion</strong> (moral_score) shows slight destabilizing 
            effects in some configurations - possibly reflecting rigidity or schism risk.
          </li>
        </ul>

        <p>
          The takeaway: religious factors matter enormously, but the relationship is 
          nonlinear. It's not "more religion = more stability." It's something more 
          conditional and context-dependent.
        </p>

        <p className="caveat">
          <strong>Important caveat:</strong> Feature importance in Random Forests tells us 
          "how often is this feature used for splits" not "does high = good or bad." 
          A feature can be highly important while having weak or inconsistent directional 
          effects.
        </p>
      </section>

      {/* Key Finding 2: Era */}
      <section className="article-section">
        <h2>Finding #2: Era Trumps Geography</h2>
        
        <p>
          I expected civilizations to cluster by region - Mediterranean empires with 
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
          had reversed - complexity slightly helped.
        </p>

        <p>
          What changed? Possibly writing, institutional memory, military technology, 
          trade networks - the infrastructure that lets complex societies maintain 
          themselves. The "rules" of civilizational survival aren't fixed; they evolve 
          with humanity's toolkit.
        </p>
      </section>

      {/* Key Finding 3: Warfare */}
      <section className="article-section">
        <h2>Finding #3: Warfare Technology Matters</h2>
        
        <p>
          Adding military variables (weapons, fortifications, cavalry, armor) 
          improved model performance by 28%. But the effects are mixed:
        </p>

        <ul className="findings-list">
          <li>
            <strong>Cavalry and armor</strong> show slight stabilizing effects
          </li>
          <li>
            <strong>Fortifications</strong> show slight destabilizing effects 
            (possibly reflecting defensive postures of declining states?)
          </li>
          <li>
            <strong>Total warfare tech</strong> slightly destabilizes on average
          </li>
        </ul>

        <p>
          In the Ancient era, advanced warfare amplified the complexity curse. In the 
          Classical period (500 BCE - 500 CE), it moderated it dramatically - a +0.634 
          moderation effect. Complex Classical societies with strong militaries 
          outlasted their simpler neighbors.
        </p>

        <p>
          The Classical era emerges as special across multiple analyses. This was the 
          age of Rome, Han China, Persia - empires that combined bureaucratic 
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
            <strong>Selection bias:</strong> The Seshat dataset skews toward well-documented 
            societies. We know more about Rome than about countless chiefdoms that left 
            no written records.
          </li>
          <li>
            <strong>Causality unknown:</strong> These are correlations. We can't run 
            experiments on civilizations. Reverse causality is always possible.
          </li>
          <li>
            <strong>Feature definitions:</strong> What counts as "ideological cohesion" 
            in 2000 BCE Egypt vs 1500 CE Spain? The coding decisions shape the results.
          </li>
          <li>
            <strong>Survivorship issues:</strong> We're analyzing polities that existed 
            long enough to be recorded. The truly unstable ones may be invisible.
          </li>
          <li>
            <strong>Model interpretation:</strong> Feature importance doesn't equal 
            directional effect. High-importance features may have weak or context-dependent 
            relationships with outcomes.
          </li>
        </ul>

        <p>
          This isn't predictive science - it's pattern recognition in historical data. 
          The model reveals correlations worth investigating, not laws of civilizational 
          dynamics.
        </p>
      </section>

      {/* What's Next */}
      <section className="article-section">
        <h2>What's Next</h2>
        
        <p>
          The interactive <Link href="/predict">Civilizational Analyzer</Link> (coming soon) 
          will let you configure a hypothetical polity and see how the model evaluates it. 
          Pick an era, adjust complexity, warfare, and religion parameters, and get a 
          risk assessment plus historical comparisons.
        </p>

        <p>
          I'm also exploring AI integration - a chatbot that can answer questions about 
          the dataset, explain predictions, and compare civilizations. "What made Rome 
          different from Carthage?" answered by an LLM grounded in quantitative historical data.
        </p>

        <p>
          Is this true psychohistory? No. Asimov's fictional science could predict specific 
          futures. This project can only identify patterns in the past. But maybe that's 
          how real psychohistory would start - not with prophecy, but with pattern 
          recognition. Not with certainty, but with probability. Not with claims of 
          universal laws, but with honest exploration of conditional relationships.
        </p>
      </section>

      {/* Footer */}
      <footer className="article-footer">
        <div className="footer-nav">
          <a href="https://github.com/TheApexWu/psychohistoryML" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          <Link href="/predict">
            Try the Analyzer
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