import polities from '../../../../public/data/polities.json';

const SYSTEM_PROMPT = `You are a research interface for PsychohistoryML — EXPLORATORY analysis of 10,000 years of civilizational data from Seshat.

=== INTERACTION RULES ===

RULE 1 - DISAMBIGUATION FIRST:
If context shows "[DISAMBIGUATION NEEDED]", list matching polities with dates/durations, ask which one, offer comparison. NO analysis until they specify. Under 60 words.

RULE 2 - RESPONSE STYLE:
Max 120 words for single-polity. Lead with ONE surprising data point. No markdown (no asterisks/hashtags, plain dashes for lists). Sharp colleague tone. End with ONE assumption-challenging question.

RULE 3 - EPISTEMIC HUMILITY:
EXPLORATORY pattern-finding, NOT causal prediction. Say "associated with" not "causes/predicts". Limits: 256 polities, CV AUC 0.66 ± 0.06, temporal holdout 0.57. Many findings don't survive FDR.

RULE 4 - PROGRESSIVE DEPTH:
First response: one insight + question. Go deeper only if they engage.

=== ROBUST FINDINGS (survive FDR correction, p_fdr < 0.05) ===

1. RELIGION PARADOX (strongest finding):
   - Total religious institutionalization → SHORTER duration (HR=1.58, p<0.001)
   - Counterintuitive: more religion = shorter lifespan
   - Possible explanations: rigidity prevents adaptation, schism risk, succession crises over religious authority
   - This is NOT "religion bad" — it's institutionalized religious bureaucracy specifically

2. ERA EFFECTS (highly significant):
   - Ancient polities (pre-500 BCE) lasted significantly longer than later eras
   - Median duration by era: Ancient 312 years, Classical 198, Medieval 167, Early Modern 142
   - Pattern: accelerating turnover over historical time
   - Possible: information flow, military tech diffusion, or recording bias

3. COMPLEXITY × WARFARE INTERACTION:
   - Complexity alone has near-zero predictive power (AUC 0.505)
   - Complexity ONLY matters when combined with military capacity
   - High complexity + low warfare = vulnerable
   - High complexity + high warfare = more stable
   - Interpretation: complex states need military to defend against simpler, aggressive neighbors

4. NON-LINEAR COMPLEXITY (inverted U):
   - Very low AND very high complexity both associated with shorter duration
   - Sweet spot in the middle
   - Too simple = can't coordinate, too complex = bureaucratic sclerosis

=== EXPLORATORY FINDINGS (suggestive but don't survive FDR) ===

5. ANCIENT COMPLEXITY CURSE (p=0.046 → p_fdr=0.12):
   - In Ancient era specifically, MORE complexity → SHORTER duration
   - Opposite of intuition that "civilization = stability"
   - Possibly: early complex states were experimental, fragile
   - Needs replication — treat as hypothesis, not fact

6. ERA-SPECIFIC PATTERNS:
   - Classical/Medieval: weak complexity effects
   - Early Modern: complexity effect nearly zero
   - Interpretation: "rules" of civilizational stability changed over time

=== MODEL PERFORMANCE (be honest about this) ===

- Three-Mechanism Model: Religion 27.2%, Complexity 25.8%, Warfare 19.3% importance
- Cross-Validation AUC: 0.66 ± 0.06 (meaningful but modest)
- Temporal Holdout (LOEO): AUC 0.57 (weak generalization across eras)
- This means: patterns are era-specific, not universal laws

=== FEATURE DETAILS ===

COMPLEXITY (4 features):
- hierarchy: administrative levels (1-5 scale)
- government: bureaucratic sophistication
- information: writing, record-keeping
- infrastructure: roads, irrigation, monuments
- FINDING: These explain almost nothing alone

WARFARE (4 features):
- weapons: military technology level
- armor: defensive equipment
- cavalry: mobile warfare capability
- fortifications: defensive structures
- FINDING: Military tech matters, but mainly in interaction with complexity

RELIGION (1 composite):
- total_rel: combination of moral enforcement + ruler legitimacy + ideological framework
- FINDING: Single most important individual predictor, but in NEGATIVE direction

=== COMMON QUESTIONS ===

Q: "Why did [X empire] fall?"
A: We can't answer causally. We can say what features X had and how similar polities fared. Always frame as patterns, not explanations.

Q: "Can you predict if [modern country] will collapse?"
A: No. Model trained on pre-1900 data. Modern states have different structures (democracy, nukes, global trade). Temporal holdout AUC of 0.57 shows we can't even generalize across historical eras, let alone to present.

Q: "What makes empires last?"
A: Counterintuitively, NOT high complexity or religiosity. The data suggests: moderate complexity, strong military relative to complexity level, and lower religious institutionalization. But these are correlations in 256 historical cases, not recipes.

Q: "Is this like Asimov's psychohistory?"
A: Inspired by it, but much humbler. Asimov imagined precise prediction. This is pattern detection with large uncertainty. We find associations, not laws.

=== SPECIFIC POLITY INSIGHTS (use when relevant) ===

LONG-LASTING (>400 years):
- Often ancient era, moderate complexity, strong military
- Examples: Roman Republic (482 yrs), Byzantine Empire (various periods)

SHORT-LASTING (<100 years):
- Often high complexity + low military, or high religious institutionalization
- Many Mesopotamian/Near Eastern polities fit this pattern

OUTLIERS:
- Some polities defy patterns — contingency, leadership, luck matter
- Model explains ~66% variance at best; 34% is "everything else"

=== WHAT THIS RESEARCH IS NOT ===

- NOT causal inference (correlation only)
- NOT universal laws (era-specific patterns)
- NOT predictive for modern states
- NOT definitive (exploratory analysis, needs replication)

Remember: You're helping users explore historical patterns, not delivering prophecy.`;

/**
 * Similarity weights - design choice, not raw model output.
 *
 * Model-derived weights (traced through PCA): complexity 44%, warfare 29%, religion 27%
 * Complexity is deliberately de-emphasized here because the research finding is that
 * complexity alone explains nothing (AUC 0.505) - it only matters in era/warfare context.
 * These weights surface polities that differ on what the research says matters.
 *
 * Order: hierarchy, government, information, infrastructure, weapons, armor,
 * cavalry, fortifications, ironWorking, religion
 */
const FEATURE_WEIGHTS = [
  0.02,  // hierarchy      - complexity (near-zero predictive value)
  0.02,  // government     - complexity
  0.02,  // information    - complexity
  0.02,  // infrastructure - complexity
  0.12,  // weapons        - warfare (high)
  0.12,  // armor          - warfare (high)
  0.12,  // cavalry        - warfare (high)
  0.12,  // fortifications - warfare (high)
  0.08,  // ironWorking    - tech enabler (medium)
  0.36,  // religion       - highest individual importance
];

/**
 * Compute weighted Euclidean distance between two feature vectors
 * Higher weights = feature differences matter more for similarity
 */
function weightedEuclideanDistance(a, b) {
  return Math.sqrt(
    a.reduce((sum, val, i) => sum + FEATURE_WEIGHTS[i] * Math.pow(val - b[i], 2), 0)
  );
}

/**
 * Format year for display (handles BCE/CE)
 */
function formatYear(year) {
  if (year < 0) {
    return `${Math.abs(year)} BCE`;
  }
  return `${year} CE`;
}

/**
 * Find all polities mentioned in message (case-insensitive word boundary match)
 * Returns { searchTerm, matches[] }
 */
function findMentionedPolities(message, polities) {
  const lowerMessage = message.toLowerCase();

  // Helper: check if term matches with word boundaries
  function matchesWithBoundary(text, term) {
    if (term.length < 4) return false; // Minimum 4 characters
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(?:^|[\\s.,!?;:'"()\\[\\]{}])${escaped}(?:[\\s.,!?;:'"()\\[\\]{}]|$)`, 'i');
    return regex.test(text);
  }

  // Extract potential polity name fragments from the message
  const potentialTerms = [];
  for (const polity of polities) {
    if (matchesWithBoundary(lowerMessage, polity.name.toLowerCase())) {
      potentialTerms.push({ term: polity.name, polity });
    }
  }

  if (potentialTerms.length === 0) {
    // Try to find partial matches - look for key civilization words (min 4 chars)
    const keywords = ['roman', 'byzantine', 'ottoman', 'mongol', 'aztec', 'persian', 'spanish', 'french', 'crete', 'egypt', 'china', 'papal', 'venice', 'carolingian', 'merovingian', 'shang', 'ming', 'tang', 'song', 'qing'];

    for (const keyword of keywords) {
      if (matchesWithBoundary(lowerMessage, keyword)) {
        const matches = polities.filter(p => p.name.toLowerCase().includes(keyword));
        if (matches.length > 0) {
          return { searchTerm: keyword, matches };
        }
      }
    }

    return { searchTerm: null, matches: [] };
  }

  // Find the longest matching term (most specific)
  potentialTerms.sort((a, b) => b.term.length - a.term.length);
  const primaryTerm = potentialTerms[0].term.toLowerCase();

  // Now find ALL polities that contain this term
  const allMatches = polities.filter(p =>
    p.name.toLowerCase().includes(primaryTerm)
  );

  return { searchTerm: potentialTerms[0].term, matches: allMatches };
}

/**
 * Find k most similar polities using weighted Euclidean distance
 * Weights emphasize warfare + religion over complexity (based on ML findings)
 */
function findSimilarPolities(targetPolity, polities, k = 3) {
  const withDistance = polities
    .filter(p => p.id !== targetPolity.id)
    .map(p => ({
      ...p,
      distance: weightedEuclideanDistance(targetPolity.features, p.features)
    }));

  withDistance.sort((a, b) => a.distance - b.distance);
  return withDistance.slice(0, k);
}

/**
 * Build enriched message with polity context or disambiguation request
 */
function buildEnrichedMessage(originalMessage, searchTerm, matches, polities) {
  if (matches.length === 0) {
    return originalMessage;
  }

  // DISAMBIGUATION: Multiple matches found
  if (matches.length > 1) {
    const matchList = matches
      .map(p => `- ${p.name} | ${formatYear(p.start)} to ${formatYear(p.end)} | ${p.duration} years | ${p.era}`)
      .join('\n');

    return `[DISAMBIGUATION NEEDED]
User mentioned: "${searchTerm}"
Multiple polities found:
${matchList}

Ask the user which specific polity they want to explore, or offer to compare them.
Do NOT analyze yet - clarify first.

User question: ${originalMessage}`;
  }

  // SINGLE MATCH: Provide full context
  const polity = matches[0];
  const similarPolities = findSimilarPolities(polity, polities, 3);

  const rf = polity.rawFeatures;
  const militaryScore = ((rf.weapons || 0) + (rf.armor || 0) + (rf.cavalry || 0) + (rf.fortifications || 0)) / 4;

  const similarStr = similarPolities
    .map(p => `- ${p.name}: ${p.era}, ${p.duration} years`)
    .join('\n');

  return `[POLITY DATA]
${polity.name} | ${polity.era} | ${formatYear(polity.start)} to ${formatYear(polity.end)} (${polity.duration} years)
Region: ${polity.region}
Features: hierarchy ${rf.hierarchy}, government ${rf.government}, military ${militaryScore.toFixed(1)}, religion ${rf.religion}

Similar polities:
${similarStr}

User question: ${originalMessage}`;
}

export async function POST(request) {
  // Check for API key
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: 'ANTHROPIC_API_KEY environment variable is not set' },
      { status: 500 }
    );
  }

  // Parse request body
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: 'Invalid JSON in request body' },
      { status: 400 }
    );
  }

  const { message, history = [] } = body;

  if (!message || typeof message !== 'string') {
    return Response.json(
      { error: 'Message is required and must be a string' },
      { status: 400 }
    );
  }

  // Detect polity mentions (may return multiple matches)
  const { searchTerm, matches } = findMentionedPolities(message, polities);

  // Build enriched message with context or disambiguation
  const enrichedMessage = buildEnrichedMessage(message, searchTerm, matches, polities);

  // Build messages array for Claude API
  const messages = [
    ...history,
    { role: 'user', content: enrichedMessage }
  ];

  // Call Anthropic Claude API
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return Response.json(
        { error: 'Claude API error: ' + (errorData.error?.message || response.statusText) },
        { status: response.status }
      );
    }

    const data = await response.json();
    const assistantMessage = data.content?.[0]?.text || '';

    return Response.json({ response: assistantMessage });

  } catch (err) {
    return Response.json(
      { error: 'Failed to call Claude API: ' + err.message },
      { status: 500 }
    );
  }
}
