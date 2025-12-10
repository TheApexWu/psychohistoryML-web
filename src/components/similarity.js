// src/components/similarity.js
// Client-side similarity calculations for the Polity Simulator

import { FEATURE_ORDER } from './constants';

/**
 * Compute cosine similarity between two vectors
 * @param {number[]} a - First vector
 * @param {number[]} b - Second vector
 * @returns {number} Cosine similarity (-1 to 1)
 */
export function cosineSimilarity(a, b) {
  if (a.length !== b.length) {
    throw new Error('Vectors must have same length');
  }
  
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  
  const denominator = Math.sqrt(normA) * Math.sqrt(normB);
  if (denominator === 0) return 0;
  
  return dotProduct / denominator;
}

/**
 * Standardize user input values using pre-computed scaler parameters
 * @param {number[]} values - Raw feature values in FEATURE_ORDER
 * @param {number[]} mean - Mean values from scaler
 * @param {number[]} std - Standard deviation values from scaler
 * @returns {number[]} Standardized values
 */
export function standardize(values, mean, std) {
  return values.map((v, i) => (v - mean[i]) / std[i]);
}

/**
 * Convert user config object to feature array in correct order
 * @param {Object} config - User configuration with parameter names as keys
 * @returns {number[]} Feature values in FEATURE_ORDER
 */
export function configToFeatures(config) {
  return FEATURE_ORDER.map(key => config[key] ?? 0);
}

/**
 * Find k most similar polities to user configuration
 * @param {Object} config - User configuration
 * @param {Object[]} polities - Array of polity objects with 'features' array
 * @param {Object} scalerParams - Scaler parameters with 'mean' and 'std' arrays
 * @param {Object} options - Search options
 * @returns {Object} Results with similar polities and duration estimate
 */
export function findSimilarPolities(config, polities, scalerParams, options = {}) {
  const {
    k = 5,
    era = null,
    maxDuration = 1000,
    minSimilarity = 0
  } = options;
  
  // Convert user config to feature array and standardize
  const userFeatures = configToFeatures(config);
  const userScaled = standardize(userFeatures, scalerParams.mean, scalerParams.std);
  
  // Filter candidates
  let candidates = polities.filter(p => p.duration <= maxDuration);
  if (era) {
    candidates = candidates.filter(p => p.era === era);
  }
  
  if (candidates.length === 0) {
    return {
      similar: [],
      durationEstimate: null,
      durationRange: [null, null],
      confidence: 0,
      candidateCount: 0,
      message: era ? `No polities found in ${era} era` : 'No polities found'
    };
  }
  
  // Compute similarities
  const withSimilarity = candidates.map(p => ({
    ...p,
    similarity: cosineSimilarity(userScaled, p.features)
  }));
  
  // Filter by minimum similarity if specified
  let filtered = withSimilarity;
  if (minSimilarity > 0) {
    filtered = withSimilarity.filter(p => p.similarity >= minSimilarity);
  }
  
  // Sort by similarity (descending) and take top k
  filtered.sort((a, b) => b.similarity - a.similarity);
  const topK = filtered.slice(0, k);
  
  if (topK.length === 0) {
    return {
      similar: [],
      durationEstimate: null,
      durationRange: [null, null],
      confidence: 0,
      candidateCount: candidates.length,
      message: 'No sufficiently similar polities found'
    };
  }
  
  // Compute weighted duration estimate
  const weights = topK.map(p => Math.max(p.similarity, 0));
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  
  let durationEstimate;
  if (totalWeight > 0) {
    durationEstimate = topK.reduce((sum, p, i) => sum + weights[i] * p.duration, 0) / totalWeight;
  } else {
    durationEstimate = topK.reduce((sum, p) => sum + p.duration, 0) / topK.length;
  }
  
  // Compute confidence score
  const meanSimilarity = weights.reduce((sum, w) => sum + w, 0) / topK.length;
  const meanDuration = topK.reduce((sum, p) => sum + p.duration, 0) / topK.length;
  const durationVariance = topK.reduce((sum, p) => sum + Math.pow(p.duration - meanDuration, 2), 0) / topK.length;
  const durationStd = Math.sqrt(durationVariance);
  const cv = durationStd / (meanDuration + 1); // Coefficient of variation
  const confidence = meanSimilarity / (1 + cv);
  
  // Format results
  const similar = topK.map(p => ({
    name: p.name,
    era: p.era,
    duration: p.duration,
    start: p.start,
    end: p.end,
    region: p.region,
    similarity: Math.round(p.similarity * 1000) / 10 // Percentage with 1 decimal
  }));
  
  const durations = topK.map(p => p.duration);
  
  return {
    similar,
    durationEstimate: Math.round(durationEstimate),
    durationRange: [Math.min(...durations), Math.max(...durations)],
    confidence: Math.round(confidence * 100) / 100,
    candidateCount: candidates.length,
    message: null
  };
}

/**
 * Compare duration estimates across all eras
 * @param {Object} config - User configuration
 * @param {Object[]} polities - Array of polity objects
 * @param {Object} scalerParams - Scaler parameters
 * @param {Object} options - Search options (k, maxDuration)
 * @returns {Object[]} Array of era comparison results
 */
export function compareEras(config, polities, scalerParams, options = {}) {
  const eras = ['Ancient', 'Classical', 'Medieval', 'Early Modern'];
  
  return eras.map(era => {
    const result = findSimilarPolities(config, polities, scalerParams, {
      ...options,
      era
    });
    
    return {
      era,
      durationEstimate: result.durationEstimate,
      durationRange: result.durationRange,
      confidence: result.confidence,
      candidateCount: result.candidateCount,
      topMatch: result.similar[0] || null
    };
  });
}

/**
 * Get risk assessment based on duration estimate
 * @param {number} durationEstimate - Estimated duration in years
 * @returns {Object} Risk assessment with level and description
 */
export function getRiskAssessment(durationEstimate) {
  if (durationEstimate === null) {
    return {
      level: 'unknown',
      color: '#6b7280',
      description: 'Insufficient data for assessment'
    };
  }
  
  if (durationEstimate >= 300) {
    return {
      level: 'lower',
      color: '#22c55e',
      description: 'Above average longevity expected'
    };
  } else if (durationEstimate >= 184) {
    return {
      level: 'moderate',
      color: '#eab308',
      description: 'Average longevity expected (above median)'
    };
  } else if (durationEstimate >= 100) {
    return {
      level: 'elevated',
      color: '#f97316',
      description: 'Below median longevity expected'
    };
  } else {
    return {
      level: 'higher',
      color: '#ef4444',
      description: 'Significantly below average longevity'
    };
  }
}

/**
 * Format duration for display
 * @param {number} years - Duration in years
 * @returns {string} Formatted string
 */
export function formatDuration(years) {
  if (years === null || years === undefined) return '—';
  if (years < 100) return `${years} years`;
  if (years < 200) return `~${Math.round(years / 10) * 10} years`;
  return `~${Math.round(years / 50) * 50} years`;
}

/**
 * Format year for display (handles BCE/CE)
 * @param {number} year - Year (negative for BCE)
 * @returns {string} Formatted string
 */
export function formatYear(year) {
  if (year < 0) {
    return `${Math.abs(year)} BCE`;
  } else if (year < 100) {
    return `${year} CE`;
  } else {
    return `${year}`;
  }
}