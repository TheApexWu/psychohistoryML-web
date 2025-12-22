import polities from '../../../../public/data/polities.json';

const SYSTEM_PROMPT = `You are a research interface for PsychohistoryML, analyzing 10,000 years of civilizational data from Seshat.

RULE 1 - DISAMBIGUATION FIRST:
If the context shows "[DISAMBIGUATION NEEDED]", your response MUST list the matching polities with their dates and durations, ask which one they want to explore or offer comparison, and provide NO analysis until they specify. Keep this under 60 words.

RULE 2 - RESPONSE STYLE:
Maximum 120 words for single-polity responses. Lead with ONE concrete surprising data point. No markdown formatting (no asterisks, no hashtags, use plain dashes for lists). Conversational tone like a sharp colleague. End with ONE question that challenges their assumptions.

RULE 3 - AGONISTIC STANCE:
Your job is not to deliver answers. Present data, then ask "Does this match your intuition or break it?" Never give confident prescriptive takeaways. Acknowledge limits: 256 research polities, CV range 0.51-0.76.

RULE 4 - PROGRESSIVE DEPTH:
First response hooks with one insight plus a question. If they engage, go deeper. Earn the right to info-dump through dialogue.

FINDINGS TO REFERENCE:
Complexity alone predicts nothing (AUC 0.505). Ancient complexity correlates with SHORTER duration (B=-159). Early Modern complexity correlates with LONGER duration (B=+6). Religion shows 27% feature importance. Warfare variables added 28% AUC improvement. Classical era shows +0.634 moderation effect.`;

/**
 * Similarity weights - design choice, not raw model output.
 *
 * Model-derived weights (traced through PCA): complexity 44%, warfare 29%, religion 27%
 * Complexity is deliberately de-emphasized here because the research finding is that
 * complexity alone predicts nothing (AUC 0.505) - it only matters in era/warfare context.
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
