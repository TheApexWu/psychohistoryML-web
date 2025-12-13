/**
 * Methodology Page
 * Explains how the Polity Simulator works.
 * 
 * Current system (v1):
 * - k-NN similarity matching (no ML prediction in frontend)
 * - 10 raw Seshat features
 * - 372 polities in database
 * - Weighted average duration estimate
 */

export const metadata = {
  title: 'Methodology - PsychohistoryML',
  description: 'How the Polity Simulator finds historically similar civilizations',
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <a href="/" className="text-xl font-semibold tracking-tight text-white hover:text-gray-300 transition">
                PsychohistoryML
              </a>
              <span className="ml-3 text-sm text-gray-500">/ Methodology</span>
            </div>
            <nav className="flex gap-6 text-sm">
              <a href="/predict" className="text-gray-400 hover:text-white transition">Simulator</a>
              <a href="/research" className="text-gray-400 hover:text-white transition">Research</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-3">How It Works</h1>
          <p className="text-lg text-gray-400">
            The simulator finds historically similar polities and estimates duration based on their actual outcomes.
          </p>
        </div>

        {/* Core Approach */}
        <Section title="The Approach">
          <p>
            Instead of predicting the future, the simulator asks: <em>&quot;What historical societies 
            looked like this configuration? How long did they actually last?&quot;</em>
          </p>
          <p>
            This is pattern-matching, not prophecy. The estimate is a weighted average of similar 
            polities&apos; durations, completely transparent and verifiable.
          </p>
        </Section>

        {/* How Similarity Works */}
        <Section title="Finding Similar Polities">
          <div className="space-y-6">
            <Step number={1} title="Standardize Features">
              Raw features have different scales (Hierarchy: 1–9, Government: 0–1). 
              I standardize each by subtracting the mean and dividing by standard deviation, 
              so no single feature dominates the comparison.
            </Step>
            
            <Step number={2} title="Compute Cosine Similarity">
              For each of 372 polities, I measure how much your configuration &quot;points in the 
              same direction&quot; in feature space. This captures the <em>profile</em> — the relative 
              balance of complexity, warfare, and religion — rather than absolute levels.
            </Step>
            
            <Step number={3} title="Find Top 5 Matches">
              The polities with highest similarity scores become your historical comparisons. 
              Click each to see exactly which features matched and which differed.
            </Step>
            
            <Step number={4} title="Weighted Average">
              Duration estimate = Σ(similarity × duration) / Σ(similarity). More similar polities 
              contribute more to the estimate. A 90% match matters more than a 75% match.
            </Step>
          </div>
        </Section>

        {/* The 10 Features */}
        <Section title="The 10 Features">
          <p className="mb-6 text-gray-400">
            All values come directly from Seshat&apos;s coded variables:
          </p>
          
          <div className="space-y-6">
            <FeatureCategory 
              title="Complexity" 
              color="blue"
              features={[
                { name: 'Hierarchy', range: '1–9', desc: 'Administrative levels (1=village, 9=multi-tier empire)' },
                { name: 'Government', range: '0–1', desc: 'Bureaucratic sophistication' },
                { name: 'Information', range: '0–1', desc: 'Writing, records, institutional memory' },
                { name: 'Infrastructure', range: '0–1', desc: 'Roads, monuments, public works' },
              ]}
            />
            
            <FeatureCategory 
              title="Warfare" 
              color="red"
              features={[
                { name: 'Weapons', range: '0–6', desc: 'Military weapon diversity' },
                { name: 'Armor', range: '0–8', desc: 'Protective equipment sophistication' },
                { name: 'Cavalry', range: '0–1', desc: 'Mounted units present' },
                { name: 'Fortifications', range: '0–11', desc: 'Defensive structures' },
                { name: 'Iron Working', range: '0–1', desc: 'Iron metallurgy present' },
              ]}
            />
            
            <FeatureCategory 
              title="Religion" 
              color="amber"
              features={[
                { name: 'Religious Hierarchy', range: '0–10', desc: 'Institutional religious complexity' },
              ]}
            />
          </div>
        </Section>

        {/* Era Stratification */}
        <Section title="Why Era Matters">
          <p>
            The same configuration means different things in different eras. A moderately 
            complex society in 2000 BCE was exceptional; the same profile in 1500 CE was ordinary.
          </p>
          <div className="my-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
            <p className="text-sm text-gray-300 mb-3">Our research found the complexity-duration relationship reversed over time:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="text-gray-400"><strong className="text-amber-400">Ancient</strong> — Complexity correlated with shorter duration</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <span className="text-gray-400"><strong className="text-green-400">Early Modern</strong> — Complexity correlated with longer duration</span>
              </div>
            </div>
          </div>
          <p className="text-gray-400">
            Use the era filter to restrict matches to a specific period for more meaningful comparisons.
          </p>
        </Section>

        {/* Confidence & Range */}
        <Section title="Confidence & Range">
          <p className="mb-4">
            The simulator shows three indicators of reliability:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-semibold">Range</span>
              <span className="text-gray-400">Min and max duration among your 5 matches. A wide spread means similar polities had very different outcomes.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-semibold">Confidence</span>
              <span className="text-gray-400">Based on how tightly your matches cluster. High similarity scores + tight duration spread = higher confidence.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-semibold">Outlier warnings</span>
              <span className="text-gray-400">Flags when your config has values outside historical ranges. Results are less reliable for configurations no polity ever had.</span>
            </li>
          </ul>
        </Section>

        {/* Limitations */}
        <Section title="What This Cannot Do">
          <div className="grid sm:grid-cols-2 gap-3">
            <Limitation title="Predict specific fates" desc="History is contingent, not deterministic." />
            <Limitation title="Account for leadership" desc="Augustus and Nero both led Rome." />
            <Limitation title="Model geography" desc="Islands vs steppes, trade routes, climate." />
            <Limitation title="Factor in luck" desc="The arrow that missed vs the one that didn't." />
          </div>
          <p className="mt-4 text-sm text-gray-500">
            These factors explain most of the variance in your matches&apos; outcomes. The wide duration 
            spread isn&apos;t noise — it&apos;s reality.
          </p>
        </Section>

        {/* The Data */}
        <Section title="The Data">
          <p>
            All analysis uses the{' '}
            <a href="https://seshatdatabank.info/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Seshat Global History Databank
            </a>{' '}
            Equinox 2022 release.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <Stat value="372" label="Polities" />
            <Stat value="10" label="Features" />
            <Stat value="10,000" label="Years covered" />
          </div>
        </Section>

        {/* Technical Specs */}
        <Section title="Technical Details">
          <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-800 text-sm">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-400">
              <div><span className="text-gray-300">Algorithm:</span> k-Nearest Neighbors</div>
              <div><span className="text-gray-300">Similarity:</span> Cosine distance</div>
              <div><span className="text-gray-300">Features:</span> 10 raw Seshat variables</div>
              <div><span className="text-gray-300">Default k:</span> 5 neighbors</div>
              <div><span className="text-gray-300">Preprocessing:</span> StandardScaler (z-score)</div>
              <div><span className="text-gray-300">Runtime:</span> Client-side JavaScript</div>
            </div>
          </div>
        </Section>

        {/* Source */}
        <Section title="Source Code">
          <p>
            Open source at{' '}
            <a 
              href="https://github.com/TheApexWu/psychohistoryML-web" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/TheApexWu/psychohistoryML-web
            </a>
          </p>
        </Section>

        {/* Back */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <a 
            href="/predict"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-sm font-medium transition"
          >
            ← Back to Simulator
          </a>
        </div>
      </main>
    </div>
  );
}

/* Helper Components */

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
      <div className="text-gray-300 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-semibold">
        {number}
      </div>
      <div>
        <h4 className="font-medium text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-400">{children}</p>
      </div>
    </div>
  );
}

function FeatureCategory({ title, color, features }) {
  const colors = {
    blue: { text: 'text-blue-400', dot: 'bg-blue-400' },
    red: { text: 'text-red-400', dot: 'bg-red-400' },
    amber: { text: 'text-amber-400', dot: 'bg-amber-400' },
  };
  
  return (
    <div>
      <h4 className={`text-xs uppercase tracking-wider ${colors[color].text} mb-2 flex items-center gap-2 font-semibold`}>
        <span className={`w-2 h-2 rounded-full ${colors[color].dot}`}></span>
        {title}
      </h4>
      <div className="space-y-1.5 ml-4">
        {features.map(f => (
          <div key={f.name} className="text-sm flex items-baseline gap-2">
            <span className="text-gray-200 font-medium">{f.name}</span>
            <span className="text-gray-600 text-xs">({f.range})</span>
            <span className="text-gray-500">— {f.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Limitation({ title, desc }) {
  return (
    <div className="p-3 bg-gray-900/30 border border-gray-800/50 rounded-lg">
      <h4 className="text-sm font-medium text-gray-300 mb-0.5">{title}</h4>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-800">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
    </div>
  );
}