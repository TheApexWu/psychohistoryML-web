export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
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

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">Methodology</h1>
        <p className="text-xl text-gray-400 mb-12">
          How the Civilizational Analyzer Works
        </p>

        {/* The Question */}
        <Section title="The Question">
          <p>
            Given a hypothetical civilization's characteristics—its governmental complexity, 
            military technology, religious institutions—can we estimate how long it might last?
          </p>
          <p>
            This is an impossible question to answer definitively. History is contingent. 
            Leadership matters. Geography matters. Luck matters. None of these are in our model.
          </p>
          <p>
            But we can do something more modest: <strong>find patterns in the past and surface 
            them for exploration</strong>.
          </p>
        </Section>

        {/* Two Approaches */}
        <Section title="Two Complementary Approaches">
          <p className="mb-6">The analyzer uses two methods that cross-validate each other:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-800">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                1. Pattern Recognition (ML)
              </h4>
              <p className="text-sm text-gray-300 mb-3">
                A Random Forest classifier trained on 256 historical polities. It learned which 
                combinations of features correlate with "stability" (lasting longer than 184 years).
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p><strong className="text-gray-400">Gives you:</strong> A stability probability (e.g., "47% chance of lasting {'>'} 184 years")</p>
                <p><strong className="text-gray-400">Strength:</strong> Detects nonlinear patterns and feature interactions</p>
                <p><strong className="text-gray-400">Limitation:</strong> Black box—you can't see WHY it gave that score</p>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-800">
              <h4 className="text-lg font-semibold text-green-400 mb-3">
                2. Historical Similarity (k-NN)
              </h4>
              <p className="text-sm text-gray-300 mb-3">
                Instead of asking a model to predict, we ask: "What real civilizations looked 
                like this? How long did they last?"
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p><strong className="text-gray-400">Gives you:</strong> Names of similar civilizations, their actual durations, weighted estimate</p>
                <p><strong className="text-gray-400">Strength:</strong> Completely interpretable—verify by looking up the civilizations</p>
                <p><strong className="text-gray-400">Limitation:</strong> May miss complex patterns</p>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm italic">
            When they agree, you can be more confident. When they disagree, that's interesting 
            information—the ML model may have detected a pattern that simple similarity misses.
          </p>
        </Section>

        {/* The Features */}
        <Section title="The Features">
          <div className="space-y-6">
            <FeatureGroup 
              title="Complexity" 
              color="blue"
              features={[
                { name: 'Hierarchy depth', desc: 'Levels of administrative organization (1=chiefdom, 6=empire)' },
                { name: 'Government sophistication', desc: 'Bureaucratic development' },
                { name: 'Information systems', desc: 'Writing, record-keeping, institutional memory' },
                { name: 'Infrastructure', desc: 'Roads, monuments, public works' },
              ]}
            />
            <FeatureGroup 
              title="Warfare" 
              color="red"
              features={[
                { name: 'Total military technology', desc: 'Composite score of military capability' },
                { name: 'Weapons & Armor', desc: 'Range of weapon types and protective equipment' },
                { name: 'Cavalry', desc: 'Mounted military units' },
                { name: 'Fortifications', desc: 'Defensive structures' },
                { name: 'Materials', desc: 'Bronze, iron, steel progression' },
              ]}
            />
            <FeatureGroup 
              title="Religion" 
              color="amber"
              features={[
                { name: 'Moralizing religion', desc: 'Moral codes enforced by divine authority' },
                { name: 'Divine legitimation', desc: 'Rulers legitimated by gods/religion' },
                { name: 'Ideological cohesion', desc: 'Shared belief systems' },
                { name: 'Religious institutions', desc: 'Total religious infrastructure' },
              ]}
            />
          </div>
        </Section>

        {/* How Similarity Works */}
        <Section title="How Similarity Is Calculated">
          <h4 className="text-lg font-medium mb-2">Cosine Similarity</h4>
          <p className="mb-4">
            We measure how much two civilizations "point in the same direction" in feature space, 
            regardless of magnitude. This captures the <em>profile</em> of a civilization—the 
            relative balance of complexity, warfare, and religion—rather than absolute levels.
          </p>

          <h4 className="text-lg font-medium mb-2">Standardization</h4>
          <p className="mb-4">
            Raw features have different scales (Hierarchy: 1-8, Government: 0-1, Weapons: 0-10). 
            Without standardization, weapons would dominate simply because it has a larger range. 
            We standardize by subtracting the mean and dividing by standard deviation.
          </p>

          <h4 className="text-lg font-medium mb-2">Weighted Estimate</h4>
          <p>
            Once we find the k most similar polities, we compute a weighted average—more similar 
            polities contribute more. A polity with 95% similarity matters more than one with 70%.
          </p>
        </Section>

        {/* Era Stratification */}
        <Section title="Era Stratification">
          <p className="mb-4">
            One of our key findings: <strong>the same configuration means different things in 
            different eras</strong>.
          </p>
          <p className="mb-4">
            A moderately complex society in 2000 BCE was exceptional—one of the most sophisticated 
            polities on Earth. The same configuration in 1500 CE was unremarkable.
          </p>
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800 my-6">
            <p className="text-sm text-gray-300 mb-2">
              The relationship between complexity and duration reversed over time:
            </p>
            <ul className="text-sm space-y-1 text-gray-400">
              <li><strong className="text-red-400">Ancient era:</strong> Complexity strongly correlated with shorter duration</li>
              <li><strong className="text-green-400">Early Modern era:</strong> Complexity slightly correlated with longer duration</li>
            </ul>
          </div>
          <p className="text-sm text-gray-400">
            The analyzer shows estimates for each era separately, letting you see how historical 
            context changes outcomes.
          </p>
        </Section>

        {/* What This Cannot Do */}
        <Section title="What This Cannot Do">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Predict the Future', desc: 'History is not physics. There are no laws that determine civilizational fates.' },
              { title: 'Account for Leadership', desc: 'Augustus and Nero both led "Rome," but their effects were very different.' },
              { title: 'Account for Geography', desc: 'Defensible borders, fertile land, trade routes—none are modeled.' },
              { title: 'Account for Luck', desc: 'The Mongols almost didn\'t happen. Contingency is real.' },
            ].map(item => (
              <div key={item.title} className="bg-red-950/20 border border-red-900/30 rounded-lg p-4">
                <h4 className="font-medium text-red-400 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* The Data */}
        <Section title="The Data">
          <p className="mb-4">
            All analysis uses the <a href="https://seshatdatabank.info/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Seshat Global History Databank</a> Equinox 2022 release:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
            <li>256 polities with complete feature coverage</li>
            <li>Spanning 10,000 years (Neolithic to Early Modern)</li>
            <li>Coded by teams of historians, archaeologists, and social scientists</li>
          </ul>
          <p className="text-sm text-gray-400">
            Seshat is the most comprehensive attempt to make civilizational patterns quantitatively 
            analyzable. It's imperfect—all historical data is—but it represents decades of scholarly effort.
          </p>
        </Section>

        {/* Technical Details */}
        <Section title="Technical Details">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-800">
              <h4 className="font-medium text-gray-200 mb-3">Machine Learning Model</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li><strong className="text-gray-300">Algorithm:</strong> Random Forest (100 trees)</li>
                <li><strong className="text-gray-300">Features:</strong> 16 (5 complexity + 7 warfare + 4 religion)</li>
                <li><strong className="text-gray-300">Target:</strong> Binary (duration {'<'} 184 years = "unstable")</li>
                <li><strong className="text-gray-300">Performance:</strong> AUC = 0.744</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-5 border border-gray-800">
              <h4 className="font-medium text-gray-200 mb-3">Similarity Engine</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li><strong className="text-gray-300">Algorithm:</strong> k-Nearest Neighbors</li>
                <li><strong className="text-gray-300">Similarity:</strong> Cosine similarity</li>
                <li><strong className="text-gray-300">Features:</strong> 10 raw Seshat variables</li>
                <li><strong className="text-gray-300">Default k:</strong> 5 neighbors</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Key Findings */}
        <Section title="What We Learned">
          <div className="space-y-4">
            <Finding 
              title="The Complexity Curse"
              desc="Simple societies often score HIGHER on stability than complex empires. This isn't a bug—it's the data. The 'complexity curse' that Joseph Tainter theorized shows up clearly in Seshat."
            />
            <Finding 
              title="Era Matters More Than Geography"
              desc="Civilizations cluster by time, not region. An ancient Egyptian polity is more similar to ancient Mesopotamia than to medieval Egypt."
            />
            <Finding 
              title="Religion Is Complicated"
              desc="Religious features have high importance, but the direction varies. Total institutionalization stabilizes; ideological rigidity may destabilize."
            />
            <Finding 
              title="The Classical Era Was Special"
              desc="500 BCE - 500 CE shows unique patterns. The complexity-duration relationship was most positive, and the era produced history's most durable complex societies."
            />
          </div>
        </Section>

        {/* Source Code */}
        <Section title="Source Code">
          <p className="mb-4">
            All analysis code is open source:{' '}
            <a 
              href="https://github.com/TheApexWu/psychohistoryML" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/TheApexWu/psychohistoryML
            </a>
          </p>
          <p className="text-sm text-gray-400">
            The notebooks document the entire analytical journey, including dead ends and 
            revised interpretations. Science is a process, not just results.
          </p>
        </Section>

        {/* Citation */}
        <Section title="Citation">
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800 font-mono text-sm text-gray-300">
            <p>Woo, A. (2025). PsychohistoryML: Machine Learning Approaches to Civilizational</p>
            <p>Dynamics. https://amadeuswoo.com/psychohistory</p>
            <p className="mt-2">Data source: Seshat Global History Databank, Equinox 2022 Release.</p>
            <p>https://seshatdatabank.info/</p>
          </div>
        </Section>

        {/* Back to Simulator */}
        <div className="mt-16 text-center">
          <a 
            href="/predict"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition"
          >
            ← Back to Simulator
          </a>
        </div>
      </main>
    </div>
  );
}

// Helper Components
function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      <div className="text-gray-300 space-y-4">{children}</div>
    </section>
  );
}

function FeatureGroup({ title, color, features }) {
  const colorClasses = {
    blue: 'text-blue-400 bg-blue-400',
    red: 'text-red-400 bg-red-400',
    amber: 'text-amber-400 bg-amber-400',
  };
  
  return (
    <div>
      <h4 className={`text-sm uppercase tracking-wider ${colorClasses[color].split(' ')[0]} mb-2 flex items-center gap-2`}>
        <span className={`w-2 h-2 rounded-full ${colorClasses[color].split(' ')[1]}`}></span>
        {title}
      </h4>
      <ul className="text-sm text-gray-400 space-y-1 ml-4">
        {features.map(f => (
          <li key={f.name}>
            <strong className="text-gray-300">{f.name}:</strong> {f.desc}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Finding({ title, desc }) {
  return (
    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
      <h4 className="font-medium text-white mb-1">{title}</h4>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}