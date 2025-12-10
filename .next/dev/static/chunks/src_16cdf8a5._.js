(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * constants.js
 * ============
 * Configuration for the Polity Simulator
 * 
 * IMPORTANT: All preset values are pulled directly from Seshat Equinox 2022 data.
 * Do NOT estimate values - they must match actual polities.json entries.
 * 
 * Last updated: 2024-12-10
 * Data source: polities.json (372 polities)
 */ // Feature order must match scaler-params.json
__turbopack_context__.s([
    "CATEGORY_COLORS",
    ()=>CATEGORY_COLORS,
    "DEFAULT_CONFIG",
    ()=>DEFAULT_CONFIG,
    "ERAS",
    ()=>ERAS,
    "ERA_DESCRIPTIONS",
    ()=>ERA_DESCRIPTIONS,
    "FEATURE_ORDER",
    ()=>FEATURE_ORDER,
    "PARAMETERS",
    ()=>PARAMETERS,
    "PRESETS",
    ()=>PRESETS
]);
const FEATURE_ORDER = [
    'hierarchy',
    'government',
    'information',
    'infrastructure',
    'weapons',
    'armor',
    'cavalry',
    'fortifications',
    'ironWorking',
    'religion'
];
const ERAS = [
    'Ancient',
    'Classical',
    'Medieval',
    'Early Modern'
];
const ERA_DESCRIPTIONS = {
    'Ancient': 'Before 500 BCE — Early civilizations, bronze age societies',
    'Classical': '500 BCE – 500 CE — Rome, Han China, Persian empires',
    'Medieval': '500 – 1500 CE — Feudal Europe, Islamic Golden Age, Mongol conquests',
    'Early Modern': 'After 1500 CE — Colonial empires, gunpowder states'
};
const PARAMETERS = {
    // === COMPLEXITY ===
    hierarchy: {
        label: 'Hierarchy',
        min: 1,
        max: 9,
        step: 0.5,
        default: 4,
        category: 'complexity',
        description: '1 = village headman, 4 = regional kingdoms, 7+ = multi-tiered empires'
    },
    government: {
        label: 'Government',
        min: 0,
        max: 1,
        step: 0.05,
        default: 0.5,
        category: 'complexity',
        description: '0 = informal rule, 0.5 = emerging bureaucracy, 1 = sophisticated administration'
    },
    information: {
        label: 'Information',
        min: 0,
        max: 1,
        step: 0.05,
        default: 0.5,
        category: 'complexity',
        description: '0 = oral only, 0.5 = limited writing, 1 = extensive records & literature'
    },
    infrastructure: {
        label: 'Infrastructure',
        min: 0,
        max: 1,
        step: 0.05,
        default: 0.5,
        category: 'complexity',
        description: '0 = paths only, 0.5 = regional roads, 1 = empire-wide road networks & aqueducts'
    },
    // === WARFARE ===
    weapons: {
        label: 'Weapons',
        min: 0,
        max: 6,
        step: 0.1,
        default: 3,
        category: 'warfare',
        description: '0 = clubs/stones, 3 = bronze swords, 6 = advanced steel + gunpowder'
    },
    armor: {
        label: 'Armor',
        min: 0,
        max: 8,
        step: 0.5,
        default: 4,
        category: 'warfare',
        description: '0 = none, 4 = chain mail, 8 = full plate armor'
    },
    cavalry: {
        label: 'Cavalry',
        min: 0,
        max: 1,
        step: 1,
        default: 1,
        category: 'warfare',
        description: '0 = no cavalry, 1 = cavalry present'
    },
    fortifications: {
        label: 'Fortifications',
        min: 0,
        max: 11,
        step: 0.5,
        default: 5,
        category: 'warfare',
        description: '0 = no fortifications, 5 = walled cities, 10+ = complex defensive networks'
    },
    ironWorking: {
        label: 'Iron Working',
        min: 0,
        max: 1,
        step: 1,
        default: 1,
        category: 'warfare',
        description: '0 = no iron, 1 = iron working present'
    },
    // === RELIGION ===
    religion: {
        label: 'Religious Hierarchy',
        min: 0,
        max: 10,
        step: 0.5,
        default: 3,
        category: 'religion',
        description: '0 = animist, 2 = local priests, 5 = state religion, 10 = complex hierarchy'
    }
};
const PRESETS = {
    // Classical era - Empires
    'Roman Republic': {
        // From: "Roman Republic" (Classical, 244 yrs)
        hierarchy: 4.67,
        government: 0.36,
        information: 0.89,
        infrastructure: 0.67,
        weapons: 4.9,
        armor: 7.5,
        cavalry: 1,
        fortifications: 6.0,
        ironWorking: 1,
        religion: 4.0
    },
    'Roman Empire': {
        // From: "Roman Empire - Principate" (Classical, 314 yrs)
        hierarchy: 8.17,
        government: 0.65,
        information: 0.92,
        infrastructure: 0.99,
        weapons: 2.9,
        armor: 8.0,
        cavalry: 1,
        fortifications: 10.0,
        ironWorking: 1,
        religion: 4.0
    },
    'Achaemenid Persia': {
        // From: "Achaemenid Empire" (Classical, 208 yrs)
        hierarchy: 6.5,
        government: 0.99,
        information: 0.95,
        infrastructure: 0.97,
        weapons: 4.1,
        armor: 7.6,
        cavalry: 1,
        fortifications: 9.4,
        ironWorking: 1,
        religion: 4.0
    },
    'Han Dynasty': {
        // From: "Western Han" (Classical, 211 yrs)
        hierarchy: 6.83,
        government: 0.74,
        information: 0.91,
        infrastructure: 0.97,
        weapons: 5.9,
        armor: 7.8,
        cavalry: 1,
        fortifications: 7.6,
        ironWorking: 1,
        religion: 3.0
    },
    // Medieval era
    'Byzantine Empire': {
        // From: "Byzantine Empire I" (Medieval, 234 yrs)
        hierarchy: 7.33,
        government: 0.91,
        information: 0.92,
        infrastructure: 0.9,
        weapons: 6.0,
        armor: 8.0,
        cavalry: 1,
        fortifications: 10.0,
        ironWorking: 1,
        religion: 7.0
    },
    'Mongol Empire': {
        // From: "Mongol Empire" (Medieval, 94 yrs)
        hierarchy: 5.0,
        government: 0.78,
        information: 0.54,
        infrastructure: 0.99,
        weapons: 6.0,
        armor: 6.0,
        cavalry: 1,
        fortifications: 5.0,
        ironWorking: 1,
        religion: 3.0
    },
    'Aztec Empire': {
        // From: "Aztec Empire" (Medieval, 92 yrs)
        hierarchy: 5.83,
        government: 0.77,
        information: 0.54,
        infrastructure: 1.0,
        weapons: 5.0,
        armor: 3.0,
        cavalry: 0,
        fortifications: 4.3,
        ironWorking: 0,
        religion: 2.5
    },
    // Early Modern era
    'Spanish Empire': {
        // From: "Spanish Empire" (Early Modern, 168 yrs)
        // Note: Most religiously institutionalized polity in dataset (religion=10)
        // Actual Seshat values - DO NOT MODIFY
        hierarchy: 8.67,
        government: 0.92,
        information: 0.92,
        infrastructure: 0.99,
        weapons: 5.8,
        armor: 8.0,
        cavalry: 1,
        fortifications: 9.1,
        ironWorking: 1,
        religion: 10.0
    },
    'Ottoman Empire': {
        // From: "Ottoman Empire II" (Early Modern, 165 yrs)
        hierarchy: 8.17,
        government: 1.0,
        information: 1.0,
        infrastructure: 0.92,
        weapons: 5.9,
        armor: 8.0,
        cavalry: 1,
        fortifications: 8.0,
        ironWorking: 1,
        religion: 4.0
    },
    // Ancient era
    'Late Shang': {
        // From: "Late Shang" (Ancient, 204 yrs)
        hierarchy: 4.0,
        government: 0.54,
        information: 0.36,
        infrastructure: 0.83,
        weapons: 5.9,
        armor: 4.0,
        cavalry: 0,
        fortifications: 6.5,
        ironWorking: 0,
        religion: 3.0
    }
};
const DEFAULT_CONFIG = {
    hierarchy: 5,
    government: 0.5,
    information: 0.5,
    infrastructure: 0.5,
    weapons: 4,
    armor: 5,
    cavalry: 1,
    fortifications: 5,
    ironWorking: 1,
    religion: 4
};
const CATEGORY_COLORS = {
    complexity: '#60a5fa',
    warfare: '#f87171',
    religion: '#fbbf24'
}; /**
 * DATA RANGES (from actual polities.json)
 * For reference when validating user inputs
 * 
 * hierarchy:      1.0 - 8.67
 * government:     0.0 - 1.0
 * information:    0.0 - 1.0
 * infrastructure: 0.0 - 1.0
 * weapons:        0.0 - 6.0
 * armor:          0.0 - 8.0
 * cavalry:        0.0 - 1.0
 * fortifications: 0.0 - 10.0
 * ironWorking:    0.0 - 1.0
 * religion:       0.0 - 10.0
 */ 
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/similarity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/similarity.js
// Client-side similarity calculations for the Polity Simulator
__turbopack_context__.s([
    "compareEras",
    ()=>compareEras,
    "configToFeatures",
    ()=>configToFeatures,
    "cosineSimilarity",
    ()=>cosineSimilarity,
    "findSimilarPolities",
    ()=>findSimilarPolities,
    "formatDuration",
    ()=>formatDuration,
    "formatYear",
    ()=>formatYear,
    "getRiskAssessment",
    ()=>getRiskAssessment,
    "standardize",
    ()=>standardize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/constants.js [app-client] (ecmascript)");
;
function cosineSimilarity(a, b) {
    if (a.length !== b.length) {
        throw new Error('Vectors must have same length');
    }
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for(let i = 0; i < a.length; i++){
        dotProduct += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }
    const denominator = Math.sqrt(normA) * Math.sqrt(normB);
    if (denominator === 0) return 0;
    return dotProduct / denominator;
}
function standardize(values, mean, std) {
    return values.map((v, i)=>(v - mean[i]) / std[i]);
}
function configToFeatures(config) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FEATURE_ORDER"].map((key)=>config[key] ?? 0);
}
function findSimilarPolities(config, polities, scalerParams, options = {}) {
    const { k = 5, era = null, maxDuration = 1000, minSimilarity = 0 } = options;
    // Convert user config to feature array and standardize
    const userFeatures = configToFeatures(config);
    const userScaled = standardize(userFeatures, scalerParams.mean, scalerParams.std);
    // Filter candidates
    let candidates = polities.filter((p)=>p.duration <= maxDuration);
    if (era) {
        candidates = candidates.filter((p)=>p.era === era);
    }
    if (candidates.length === 0) {
        return {
            similar: [],
            durationEstimate: null,
            durationRange: [
                null,
                null
            ],
            confidence: 0,
            candidateCount: 0,
            message: era ? `No polities found in ${era} era` : 'No polities found'
        };
    }
    // Compute similarities
    const withSimilarity = candidates.map((p)=>({
            ...p,
            similarity: cosineSimilarity(userScaled, p.features)
        }));
    // Filter by minimum similarity if specified
    let filtered = withSimilarity;
    if (minSimilarity > 0) {
        filtered = withSimilarity.filter((p)=>p.similarity >= minSimilarity);
    }
    // Sort by similarity (descending) and take top k
    filtered.sort((a, b)=>b.similarity - a.similarity);
    const topK = filtered.slice(0, k);
    if (topK.length === 0) {
        return {
            similar: [],
            durationEstimate: null,
            durationRange: [
                null,
                null
            ],
            confidence: 0,
            candidateCount: candidates.length,
            message: 'No sufficiently similar polities found'
        };
    }
    // Compute weighted duration estimate
    const weights = topK.map((p)=>Math.max(p.similarity, 0));
    const totalWeight = weights.reduce((sum, w)=>sum + w, 0);
    let durationEstimate;
    if (totalWeight > 0) {
        durationEstimate = topK.reduce((sum, p, i)=>sum + weights[i] * p.duration, 0) / totalWeight;
    } else {
        durationEstimate = topK.reduce((sum, p)=>sum + p.duration, 0) / topK.length;
    }
    // Compute confidence score
    const meanSimilarity = weights.reduce((sum, w)=>sum + w, 0) / topK.length;
    const meanDuration = topK.reduce((sum, p)=>sum + p.duration, 0) / topK.length;
    const durationVariance = topK.reduce((sum, p)=>sum + Math.pow(p.duration - meanDuration, 2), 0) / topK.length;
    const durationStd = Math.sqrt(durationVariance);
    const cv = durationStd / (meanDuration + 1); // Coefficient of variation
    const confidence = meanSimilarity / (1 + cv);
    // Format results
    const similar = topK.map((p)=>({
            name: p.name,
            era: p.era,
            duration: p.duration,
            start: p.start,
            end: p.end,
            region: p.region,
            similarity: Math.round(p.similarity * 1000) / 10 // Percentage with 1 decimal
        }));
    const durations = topK.map((p)=>p.duration);
    return {
        similar,
        durationEstimate: Math.round(durationEstimate),
        durationRange: [
            Math.min(...durations),
            Math.max(...durations)
        ],
        confidence: Math.round(confidence * 100) / 100,
        candidateCount: candidates.length,
        message: null
    };
}
function compareEras(config, polities, scalerParams, options = {}) {
    const eras = [
        'Ancient',
        'Classical',
        'Medieval',
        'Early Modern'
    ];
    return eras.map((era)=>{
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
function getRiskAssessment(durationEstimate) {
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
function formatDuration(years) {
    if (years === null || years === undefined) return '—';
    if (years < 100) return `${years} years`;
    if (years < 200) return `~${Math.round(years / 10) * 10} years`;
    return `~${Math.round(years / 50) * 50} years`;
}
function formatYear(year) {
    if (year < 0) {
        return `${Math.abs(year)} BCE`;
    } else if (year < 100) {
        return `${year} CE`;
    } else {
        return `${year}`;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/predict/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PredictPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$similarity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/similarity.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
// Era color mapping for badges
const ERA_COLORS = {
    'Ancient': {
        bg: 'bg-amber-500/20',
        text: 'text-amber-400',
        border: 'border-amber-500/30'
    },
    'Classical': {
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500/30'
    },
    'Medieval': {
        bg: 'bg-purple-500/20',
        text: 'text-purple-400',
        border: 'border-purple-500/30'
    },
    'Early Modern': {
        bg: 'bg-green-500/20',
        text: 'text-green-400',
        border: 'border-green-500/30'
    }
};
/**
 * OUTLIER DETECTION
 * -----------------
 * How it works:
 * 1. For each feature, compute the distribution (mean, std) across the polity pool
 * 2. Flag if user's value is OUTSIDE the historical range (below min or above max)
 * 3. Also flag if >2.5 std deviations from mean (very unusual but still in range)
 * 
 * Key insight: Values AT the min/max are valid historical configurations.
 * Only flag values that NO historical polity ever had.
 */ function detectOutliers(config, matchedPolities, allPolities, selectedEra) {
    const outliers = [];
    // Get the relevant polity pool (era-filtered or all)
    const pool = selectedEra ? allPolities.filter((p)=>p.era === selectedEra) : allPolities;
    if (pool.length < 10) return outliers; // Not enough data to detect outliers
    const featureKeys = [
        'hierarchy',
        'government',
        'information',
        'infrastructure',
        'weapons',
        'armor',
        'cavalry',
        'fortifications',
        'ironWorking',
        'religion'
    ];
    featureKeys.forEach((key)=>{
        // Get distribution of this feature across the pool
        const values = pool.filter((p)=>p.rawFeatures && p.rawFeatures[key] !== undefined).map((p)=>p.rawFeatures[key]);
        if (values.length < 10) return;
        const mean = values.reduce((a, b)=>a + b, 0) / values.length;
        const std = Math.sqrt(values.reduce((sum, v)=>sum + Math.pow(v - mean, 2), 0) / values.length);
        const min = Math.min(...values);
        const max = Math.max(...values);
        const userVal = config[key];
        const zScore = std > 0 ? Math.abs(userVal - mean) / std : 0;
        // FIXED: Only flag if OUTSIDE the range, not at boundaries
        // Values at min/max are valid - some historical polity had that value
        const isOutsideRange = userVal < min - 0.01 || userVal > max + 0.01; // Small tolerance for floating point
        // Also flag extreme z-scores even if in range (very unusual combinations)
        const isExtremeZScore = zScore > 2.5 && !isOutsideRange;
        if (isOutsideRange) {
            const eraLabel = selectedEra || 'all';
            outliers.push({
                feature: key,
                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"][key]?.label || key,
                userVal,
                mean: mean.toFixed(2),
                severity: 'high',
                message: userVal > max ? `Your ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"][key]?.label || key} (${userVal}) exceeds any ${eraLabel} polity (max: ${max.toFixed(1)})` : `Your ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"][key]?.label || key} (${userVal}) is below any ${eraLabel} polity (min: ${min.toFixed(1)})`
            });
        } else if (isExtremeZScore) {
            // In range but statistically unusual
            const percentile = Math.round(values.filter((v)=>v < userVal).length / values.length * 100);
            const direction = userVal > mean ? 'higher' : 'lower';
            outliers.push({
                feature: key,
                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"][key]?.label || key,
                userVal,
                mean: mean.toFixed(2),
                severity: 'moderate',
                message: `Your ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"][key]?.label || key} (${userVal}) is ${direction} than ${Math.max(percentile, 100 - percentile)}% of polities (unusual but valid)`
            });
        }
    });
    return outliers;
}
function PredictPage() {
    _s();
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CONFIG"]);
    const [selectedEra, setSelectedEra] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [polities, setPolities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [scalerParams, setScalerParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [eraComparison, setEraComparison] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activePreset, setActivePreset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showCalculation, setShowCalculation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [expandedPolity, setExpandedPolity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showOutlierDetails, setShowOutlierDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load data on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PredictPage.useEffect": ()=>{
            async function loadData() {
                try {
                    const [politiesRes, scalerRes] = await Promise.all([
                        fetch('/data/polities.json'),
                        fetch('/data/scaler-params.json')
                    ]);
                    const politiesData = await politiesRes.json();
                    const scalerData = await scalerRes.json();
                    setPolities(politiesData);
                    setScalerParams(scalerData);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Failed to load data:', error);
                    setIsLoading(false);
                }
            }
            loadData();
        }
    }["PredictPage.useEffect"], []);
    // Compute results when config or era changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PredictPage.useEffect": ()=>{
            if (!polities.length || !scalerParams) return;
            const similarityResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$similarity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSimilarPolities"])(config, polities, scalerParams, {
                k: 5,
                era: selectedEra,
                maxDuration: 1000
            });
            const eraResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$similarity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareEras"])(config, polities, scalerParams, {
                k: 5,
                maxDuration: 1000
            });
            setResults(similarityResults);
            setEraComparison(eraResults);
            setExpandedPolity(null);
        }
    }["PredictPage.useEffect"], [
        config,
        selectedEra,
        polities,
        scalerParams
    ]);
    // Detect outliers (memoized for performance)
    const outliers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PredictPage.useMemo[outliers]": ()=>{
            if (!polities.length || !results?.similar) return [];
            return detectOutliers(config, results.similar, polities, selectedEra);
        }
    }["PredictPage.useMemo[outliers]"], [
        config,
        polities,
        results,
        selectedEra
    ]);
    const handleParamChange = (key, value)=>{
        const param = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"][key];
        const numValue = parseFloat(value);
        const clampedValue = Math.min(Math.max(numValue, param.min), param.max);
        setConfig((prev)=>({
                ...prev,
                [key]: clampedValue
            }));
        setActivePreset(null);
    };
    const handlePresetSelect = (presetName)=>{
        setConfig(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESETS"][presetName]);
        setActivePreset(presetName);
    };
    const risk = results ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$similarity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRiskAssessment"])(results.durationEstimate) : null;
    const getRangePosition = (value, min, max)=>{
        if (min === max) return 50; // Center if no range
        const normalized = (value - min) / (max - min); // 0 to 1
        return 10 + normalized * 80; // Map to 10%-90% of bar width
    };
    // Check if matches span multiple eras
    const getEraSpan = ()=>{
        if (!results?.similar?.length) return null;
        const eras = [
            ...new Set(results.similar.map((p)=>p.era))
        ];
        return eras.length > 1 ? eras : null;
    };
    const eraSpan = getEraSpan();
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#0a0a0a] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400 text-lg",
                children: "Loading historical data..."
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 202,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/predict/page.js",
            lineNumber: 201,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0a0a0a] text-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur sticky top-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-8 py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        className: "text-2xl font-semibold tracking-tight text-white hover:text-gray-300 transition",
                                        children: "PsychohistoryML"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-3 text-base text-gray-500",
                                        children: "/ Simulator"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex gap-8 text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/research",
                                        className: "text-gray-400 hover:text-white transition",
                                        children: "Research"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/predict/methodology",
                                        className: "text-gray-400 hover:text-white transition",
                                        children: "Methodology"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/predict/page.js",
                    lineNumber: 211,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-8 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold mb-3",
                                children: "Polity Simulator"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-400",
                                children: "Configure a hypothetical society and find historically similar polities from 372 in the Seshat database."
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-5 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-3 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#111] rounded-xl p-5 border border-gray-800/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4",
                                                children: "Quick Presets"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-3",
                                                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESETS"]).map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handlePresetSelect(preset),
                                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition ${activePreset === preset ? 'bg-blue-600 text-white' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'}`,
                                                        children: preset
                                                    }, preset, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 243,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#111] rounded-xl p-6 border border-gray-800/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6",
                                                children: "Configure Your Polity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs uppercase tracking-widest text-blue-400 mb-4 flex items-center gap-2 font-semibold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2.5 h-2.5 rounded-full bg-blue-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 267,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Complexity"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 266,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-5",
                                                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"]).filter(([_, p])=>p.category === 'complexity').map(([key, param])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParameterControl, {
                                                                paramKey: key,
                                                                param: param,
                                                                value: config[key],
                                                                onChange: handleParamChange,
                                                                isOutlier: outliers.some((o)=>o.feature === key)
                                                            }, key, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 274,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 270,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs uppercase tracking-widest text-red-400 mb-4 flex items-center gap-2 font-semibold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2.5 h-2.5 rounded-full bg-red-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 289,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Warfare"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 288,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-5",
                                                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"]).filter(([_, p])=>p.category === 'warfare').map(([key, param])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParameterControl, {
                                                                paramKey: key,
                                                                param: param,
                                                                value: config[key],
                                                                onChange: handleParamChange,
                                                                isOutlier: outliers.some((o)=>o.feature === key)
                                                            }, key, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 296,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 292,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs uppercase tracking-widest text-amber-400 mb-4 flex items-center gap-2 font-semibold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2.5 h-2.5 rounded-full bg-amber-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 311,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Religion"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 310,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-5",
                                                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"]).filter(([_, p])=>p.category === 'religion').map(([key, param])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParameterControl, {
                                                                paramKey: key,
                                                                param: param,
                                                                value: config[key],
                                                                onChange: handleParamChange,
                                                                isOutlier: outliers.some((o)=>o.feature === key)
                                                            }, key, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 318,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 314,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#111] rounded-xl p-5 border border-gray-800/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4",
                                                children: "Filter by Era"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedEra(null),
                                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition ${selectedEra === null ? 'bg-gray-600 text-white' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`,
                                                        children: "All Eras"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 335,
                                                        columnNumber: 17
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERAS"].map((era)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedEra(era),
                                                            className: `px-4 py-2 rounded-lg text-sm font-medium transition ${selectedEra === era ? `${ERA_COLORS[era].bg} ${ERA_COLORS[era].text} border ${ERA_COLORS[era].border}` : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`,
                                                            children: era
                                                        }, era, false, {
                                                            fileName: "[project]/src/app/predict/page.js",
                                                            lineNumber: 346,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 334,
                                                columnNumber: 15
                                            }, this),
                                            selectedEra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm text-gray-500",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_DESCRIPTIONS"][selectedEra]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this),
                                            !selectedEra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-xs text-gray-600",
                                                children: "Matches polities by feature similarity across all time periods. Use era filters for period-specific comparisons."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 363,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-6",
                                children: [
                                    outliers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-amber-500/10 border border-amber-500/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowOutlierDetails(!showOutlierDetails),
                                                className: "w-full flex items-start justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-amber-400 text-lg",
                                                                children: "⚠️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 381,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-left",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium text-amber-400",
                                                                        children: [
                                                                            outliers.length,
                                                                            " unusual configuration",
                                                                            outliers.length > 1 ? 's' : '',
                                                                            " detected"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/predict/page.js",
                                                                        lineNumber: 383,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-amber-400/70 mt-1",
                                                                        children: "Your config has values outside typical historical ranges. Results may be less reliable."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/predict/page.js",
                                                                        lineNumber: 386,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 382,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-amber-400/50 text-sm",
                                                        children: showOutlierDetails ? '▼' : '▶'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 391,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 376,
                                                columnNumber: 17
                                            }, this),
                                            showOutlierDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 space-y-2 pl-8",
                                                children: [
                                                    outliers.map((outlier, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-amber-400/80 py-1 border-b border-amber-500/20 last:border-0",
                                                            children: outlier.message
                                                        }, i, false, {
                                                            fileName: "[project]/src/app/predict/page.js",
                                                            lineNumber: 397,
                                                            columnNumber: 23
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mt-2 pt-2",
                                                        children: "ML models extrapolate poorly outside training data. Consider adjusting these values or interpreting results with extra caution."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 401,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 395,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this),
                                    results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#111] rounded-xl p-6 border border-gray-800/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-6xl font-bold tracking-tight",
                                                        style: {
                                                            color: risk?.color || '#f97316'
                                                        },
                                                        children: [
                                                            "~",
                                                            results.durationEstimate || '—'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 414,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base text-gray-500 mt-1",
                                                        children: "estimated years"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 417,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 413,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-8 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-semibold text-white",
                                                                children: [
                                                                    results.durationRange[0],
                                                                    "–",
                                                                    results.durationRange[1]
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 423,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500 uppercase tracking-wide",
                                                                children: "Range"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 426,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 422,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-semibold text-white",
                                                                children: [
                                                                    Math.round(results.confidence * 100),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 429,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500 uppercase tracking-wide",
                                                                children: "Confidence"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 432,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 428,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl font-semibold text-white",
                                                                children: results.similar.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 435,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500 uppercase tracking-wide",
                                                                children: "Matches"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 438,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 434,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this),
                                            results.durationRange[0] !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative h-10 bg-[#1a1a1a] rounded-lg overflow-visible",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-1/2 -translate-y-1/2 h-2 rounded-full",
                                                                style: {
                                                                    left: '10%',
                                                                    right: '10%',
                                                                    background: 'linear-gradient(90deg, #333, #60a5fa, #333)'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 447,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-1/2 w-4 h-4 rounded-full border-2 border-[#0a0a0a]",
                                                                style: {
                                                                    left: `${getRangePosition(results.durationEstimate, results.durationRange[0], results.durationRange[1])}%`,
                                                                    transform: 'translate(-50%, -50%)',
                                                                    backgroundColor: risk?.color || '#f97316'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 456,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 445,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-xs text-gray-600 mt-2 px-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    results.durationRange[0],
                                                                    " yrs"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 466,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    results.durationEstimate,
                                                                    " yrs"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 467,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    results.durationRange[1],
                                                                    " yrs"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 468,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 465,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 444,
                                                columnNumber: 19
                                            }, this),
                                            eraSpan && !selectedEra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4 px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-blue-400",
                                                    children: [
                                                        "Matches span ",
                                                        eraSpan.join(', '),
                                                        " eras. Use era filter for period-specific results."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/predict/page.js",
                                                    lineNumber: 476,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 475,
                                                columnNumber: 19
                                            }, this),
                                            risk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-sm font-medium px-4 py-2 rounded-lg",
                                                style: {
                                                    backgroundColor: `${risk.color}15`,
                                                    color: risk.color
                                                },
                                                children: risk.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 484,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 411,
                                        columnNumber: 15
                                    }, this),
                                    results && results.similar.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#111] rounded-xl border border-gray-800/50 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowCalculation(!showCalculation),
                                                className: "w-full px-6 py-4 flex justify-between items-center hover:bg-gray-800/30 transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                                        children: "Calculation Breakdown"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 504,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-500",
                                                        children: showCalculation ? '−' : '+'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 507,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 500,
                                                columnNumber: 17
                                            }, this),
                                            showCalculation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-6 pb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: results.similar.map((polity, i)=>{
                                                            const contribution = polity.similarity / 100 * polity.duration;
                                                            const isExpanded = expandedPolity === i;
                                                            const fullPolity = polities.find((p)=>p.name === polity.name);
                                                            const eraColor = ERA_COLORS[polity.era] || ERA_COLORS['Ancient'];
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setExpandedPolity(isExpanded ? null : i),
                                                                        className: "flex items-center gap-3 p-3 bg-[#0d0d0d] rounded-lg hover:bg-[#151515] transition cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1 min-w-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "font-medium text-white text-sm truncate",
                                                                                                children: polity.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/predict/page.js",
                                                                                                lineNumber: 528,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: `text-[10px] px-1.5 py-0.5 rounded ${eraColor.bg} ${eraColor.text}`,
                                                                                                children: polity.era
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/predict/page.js",
                                                                                                lineNumber: 529,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/predict/page.js",
                                                                                        lineNumber: 527,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-xs text-gray-600",
                                                                                        children: [
                                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$similarity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatYear"])(polity.start),
                                                                                            "–",
                                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$similarity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatYear"])(polity.end)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/predict/page.js",
                                                                                        lineNumber: 533,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/predict/page.js",
                                                                                lineNumber: 526,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-right flex-shrink-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm font-semibold text-blue-400",
                                                                                    children: [
                                                                                        polity.similarity,
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/predict/page.js",
                                                                                    lineNumber: 538,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/predict/page.js",
                                                                                lineNumber: 537,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-right flex-shrink-0 w-16",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm text-gray-400",
                                                                                    children: [
                                                                                        polity.duration,
                                                                                        " yrs"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/predict/page.js",
                                                                                    lineNumber: 541,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/predict/page.js",
                                                                                lineNumber: 540,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-right flex-shrink-0 w-12",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-gray-600 font-mono",
                                                                                    children: [
                                                                                        "→ ",
                                                                                        Math.round(contribution)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/predict/page.js",
                                                                                    lineNumber: 544,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/predict/page.js",
                                                                                lineNumber: 543,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-gray-600 text-sm",
                                                                                children: isExpanded ? '▼' : '▶'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/predict/page.js",
                                                                                lineNumber: 548,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/predict/page.js",
                                                                        lineNumber: 522,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    isExpanded && fullPolity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComparisonTable, {
                                                                        config: config,
                                                                        polity: polity,
                                                                        fullPolity: fullPolity
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/predict/page.js",
                                                                        lineNumber: 555,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 520,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 512,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center mt-4 pt-4 border-t border-gray-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-white",
                                                                children: "Weighted Average"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 568,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-white",
                                                                children: [
                                                                    results.durationEstimate,
                                                                    " years"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 569,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 567,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-600 mt-4",
                                                        children: [
                                                            "Based on ",
                                                            results.candidateCount,
                                                            " polities in database. Click any row to compare features."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 572,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 511,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, this),
                                    eraComparison.length > 0 && !selectedEra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#111] rounded-xl p-6 border border-gray-800/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4",
                                                children: "Same Config, Different Eras"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 584,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: eraComparison.map((era)=>{
                                                    const eraColor = ERA_COLORS[era.era] || ERA_COLORS['Ancient'];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center py-3 border-b border-gray-800/50 last:border-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `w-2 h-2 rounded-full ${eraColor.bg.replace('/20', '')}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/predict/page.js",
                                                                        lineNumber: 596,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-base text-gray-300",
                                                                        children: era.era
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/predict/page.js",
                                                                        lineNumber: 597,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 595,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-white text-base",
                                                                        children: era.durationEstimate ? `${era.durationEstimate} yrs` : '—'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/predict/page.js",
                                                                        lineNumber: 600,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    era.topMatch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-gray-500 truncate max-w-[140px]",
                                                                        children: [
                                                                            "e.g. ",
                                                                            era.topMatch.name
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/predict/page.js",
                                                                        lineNumber: 604,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 599,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, era.era, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 591,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 587,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4 text-xs text-gray-600",
                                                children: "Historical context changes outcomes. The same configuration could mean different things in different eras."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 613,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 583,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#0d0d0d] rounded-xl p-5 border-l-4 border-amber-600/50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-gray-400",
                                                    children: "Note:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/predict/page.js",
                                                    lineNumber: 622,
                                                    columnNumber: 17
                                                }, this),
                                                " This is pattern-matching, not prediction. Similar configurations produced different outcomes depending on leadership, geography, and luck — none of which are in our model."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/predict/page.js",
                                            lineNumber: 621,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 620,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/predict/methodology",
                            className: "text-gray-500 hover:text-gray-300 text-base transition",
                            children: "How does this work? Read the methodology →"
                        }, void 0, false, {
                            fileName: "[project]/src/app/predict/page.js",
                            lineNumber: 632,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 631,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/predict/page.js",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
_s(PredictPage, "ouuNSTz2amxuOgmns7AW01jmR/k=");
_c = PredictPage;
// Parameter Control Component with Slider + Number Input
function ParameterControl({ paramKey, param, value, onChange, isOutlier }) {
    _s1();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value.toString());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParameterControl.useEffect": ()=>{
            setInputValue(value.toString());
        }
    }["ParameterControl.useEffect"], [
        value
    ]);
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    };
    const handleInputBlur = ()=>{
        const num = parseFloat(inputValue);
        if (!isNaN(num)) {
            onChange(paramKey, num);
        } else {
            setInputValue(value.toString());
        }
    };
    const handleInputKeyDown = (e)=>{
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: isOutlier ? 'relative' : '',
        children: [
            isOutlier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -left-4 top-1 text-amber-400 text-sm",
                title: "Unusual value",
                children: "⚠️"
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 674,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: `text-base font-medium ${isOutlier ? 'text-amber-300' : 'text-gray-200'}`,
                        children: param.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 677,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: inputValue,
                        onChange: handleInputChange,
                        onBlur: handleInputBlur,
                        onKeyDown: handleInputKeyDown,
                        className: `w-16 px-2 py-1 text-right text-base font-medium border rounded focus:outline-none focus:border-blue-500 transition ${isOutlier ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-gray-800/50 border-gray-700/50 text-white'}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 680,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 676,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: param.min,
                max: param.max,
                step: param.step,
                value: value,
                onChange: (e)=>onChange(paramKey, e.target.value),
                className: "w-full h-2 bg-gray-700/50 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition [&::-webkit-slider-thumb]:hover:bg-gray-200 [&::-webkit-slider-thumb]:shadow-md"
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 693,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500 mt-1.5",
                children: param.description
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 711,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/predict/page.js",
        lineNumber: 672,
        columnNumber: 5
    }, this);
}
_s1(ParameterControl, "IUG71HzafWU96FkwMttmSS/PGbU=");
_c1 = ParameterControl;
/**
 * COMPARISON TABLE - COLOR FIX
 * Color logic:
 * - Green: Close match (diff < 0.5)
 * - Blue: Polity value is higher
 * - Orange: Polity value is lower
 */ function ComparisonTable({ config, polity, fullPolity }) {
    const featureMapping = [
        {
            key: 'hierarchy',
            label: 'Hierarchy'
        },
        {
            key: 'government',
            label: 'Government'
        },
        {
            key: 'information',
            label: 'Information'
        },
        {
            key: 'infrastructure',
            label: 'Infrastructure'
        },
        {
            key: 'weapons',
            label: 'Weapons'
        },
        {
            key: 'armor',
            label: 'Armor'
        },
        {
            key: 'cavalry',
            label: 'Cavalry'
        },
        {
            key: 'fortifications',
            label: 'Fortifications'
        },
        {
            key: 'ironWorking',
            label: 'Iron Working'
        },
        {
            key: 'religion',
            label: 'Religion'
        }
    ];
    const hasRawFeatures = fullPolity?.rawFeatures;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-2 mb-3 bg-[#080808] rounded-lg border border-gray-800/50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 bg-[#0a0a0a] border-b border-gray-800/50 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-500 uppercase tracking-wider",
                        children: "Feature Comparison"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 742,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-600",
                        children: [
                            polity.similarity,
                            "% similar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 745,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 741,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center px-4 py-2 bg-[#0a0a0a] border-b border-gray-800/50 text-xs text-gray-500 uppercase tracking-wider",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/3",
                        children: "Feature"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 752,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/4 text-center",
                        children: "You"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 753,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/4 text-center",
                        children: polity.name.split(' ').slice(0, 2).join(' ')
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 754,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/6 text-right",
                        children: "Diff"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 755,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 751,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divide-y divide-gray-800/30",
                children: featureMapping.map(({ key, label })=>{
                    const yourVal = config[key];
                    const polityVal = hasRawFeatures ? fullPolity.rawFeatures[key] : null;
                    const diff = polityVal !== null ? polityVal - yourVal : null;
                    const isExact = diff !== null && Math.abs(diff) < 0.05;
                    const isClose = diff !== null && Math.abs(diff) < 0.5;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center px-4 py-2.5 text-sm hover:bg-[#0d0d0d] transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/3 text-gray-400",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 770,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/4 text-center text-white font-medium",
                                children: yourVal
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 771,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/4 text-center text-gray-300",
                                children: polityVal !== null ? polityVal : '—'
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 773,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/6 text-right",
                                children: diff !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-xs px-2 py-0.5 rounded ${isExact ? 'bg-green-500/20 text-green-400' : isClose ? 'bg-green-500/10 text-green-400/70' : diff > 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'}`,
                                    children: isExact ? '=' : diff > 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/predict/page.js",
                                    lineNumber: 779,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-600 text-xs",
                                    children: "—"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/predict/page.js",
                                    lineNumber: 791,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 777,
                                columnNumber: 15
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 769,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 759,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 bg-[#0a0a0a] border-t border-gray-800/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-green-400",
                                    children: "Green"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/predict/page.js",
                                    lineNumber: 803,
                                    columnNumber: 13
                                }, this),
                                " = close ·",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-400 ml-1",
                                    children: "Blue"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/predict/page.js",
                                    lineNumber: 804,
                                    columnNumber: 13
                                }, this),
                                " = higher ·",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-orange-400 ml-1",
                                    children: "Orange"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/predict/page.js",
                                    lineNumber: 805,
                                    columnNumber: 13
                                }, this),
                                " = lower"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/predict/page.js",
                            lineNumber: 802,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500",
                            children: [
                                fullPolity.era,
                                " · ",
                                fullPolity.duration,
                                " years"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/predict/page.js",
                            lineNumber: 807,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/predict/page.js",
                    lineNumber: 801,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 800,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/predict/page.js",
        lineNumber: 740,
        columnNumber: 5
    }, this);
}
_c2 = ComparisonTable;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PredictPage");
__turbopack_context__.k.register(_c1, "ParameterControl");
__turbopack_context__.k.register(_c2, "ComparisonTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_16cdf8a5._.js.map