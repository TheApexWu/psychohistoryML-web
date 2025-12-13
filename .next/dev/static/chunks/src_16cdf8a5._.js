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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Era colors
const ERA_COLORS = {
    'Ancient': {
        bg: 'bg-amber-500/20',
        text: 'text-amber-400',
        border: 'border-amber-500/30',
        dot: 'bg-amber-400'
    },
    'Classical': {
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500/30',
        dot: 'bg-blue-400'
    },
    'Medieval': {
        bg: 'bg-purple-500/20',
        text: 'text-purple-400',
        border: 'border-purple-500/30',
        dot: 'bg-purple-400'
    },
    'Early Modern': {
        bg: 'bg-green-500/20',
        text: 'text-green-400',
        border: 'border-green-500/30',
        dot: 'bg-green-400'
    }
};
// Detect outliers
function detectOutliers(config, allPolities, selectedEra) {
    const outliers = [];
    const pool = selectedEra ? allPolities.filter((p)=>p.era === selectedEra) : allPolities;
    if (pool.length < 10) return outliers;
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
        const values = pool.filter((p)=>p.rawFeatures && p.rawFeatures[key] !== undefined).map((p)=>p.rawFeatures[key]);
        if (values.length < 10) return;
        const min = Math.min(...values);
        const max = Math.max(...values);
        const userVal = config[key];
        // Only flag if OUTSIDE the historical range
        if (userVal < min - 0.01 || userVal > max + 0.01) {
            outliers.push({
                feature: key,
                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"][key]?.label || key,
                userVal,
                min,
                max,
                message: userVal > max ? `Exceeds historical maximum (${max.toFixed(1)})` : `Below historical minimum (${min.toFixed(1)})`
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
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activePreset, setActivePreset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAdvanced, setShowAdvanced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedMatch, setExpandedMatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PredictPage.useEffect": ()=>{
            async function loadData() {
                try {
                    const [politiesRes, scalerRes] = await Promise.all([
                        fetch('/data/polities.json'),
                        fetch('/data/scaler-params.json')
                    ]);
                    setPolities(await politiesRes.json());
                    setScalerParams(await scalerRes.json());
                    setIsLoading(false);
                } catch (error) {
                    console.error('Failed to load data:', error);
                    setIsLoading(false);
                }
            }
            loadData();
        }
    }["PredictPage.useEffect"], []);
    // Compute results
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PredictPage.useEffect": ()=>{
            if (!polities.length || !scalerParams) return;
            const similarityResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$similarity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSimilarPolities"])(config, polities, scalerParams, {
                k: 5,
                era: selectedEra,
                maxDuration: 1000
            });
            setResults(similarityResults);
            setExpandedMatch(null);
        }
    }["PredictPage.useEffect"], [
        config,
        selectedEra,
        polities,
        scalerParams
    ]);
    // Detect outliers
    const outliers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PredictPage.useMemo[outliers]": ()=>{
            if (!polities.length) return [];
            return detectOutliers(config, polities, selectedEra);
        }
    }["PredictPage.useMemo[outliers]"], [
        config,
        polities,
        selectedEra
    ]);
    const outlierKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PredictPage.useMemo[outlierKeys]": ()=>new Set(outliers.map({
                "PredictPage.useMemo[outlierKeys]": (o)=>o.feature
            }["PredictPage.useMemo[outlierKeys]"]))
    }["PredictPage.useMemo[outlierKeys]"], [
        outliers
    ]);
    const handleParamChange = (key, value)=>{
        const param = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"][key];
        const numValue = parseFloat(value);
        if (isNaN(numValue)) return;
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
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400",
                children: "Loading historical data..."
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 137,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/predict/page.js",
            lineNumber: 136,
            columnNumber: 7
        }, this);
    }
    // Group parameters
    const complexityParams = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"]).filter(([_, p])=>p.category === 'complexity');
    const warfareParams = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"]).filter(([_, p])=>p.category === 'warfare');
    const religionParams = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"]).filter(([_, p])=>p.category === 'religion');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "predict-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                style: {
                    paddingBottom: '2rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Polity Simulator"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "subtitle",
                        children: "Configure a hypothetical civilization and discover which historical societies shared similar characteristics. Based on 372 polities from the Seshat database."
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 pb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4",
                                children: "Quick Presets"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESETS"]).map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handlePresetSelect(preset),
                                        className: `px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activePreset === preset ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-[#161616] text-gray-300 hover:bg-[#1a1a1a] border border-gray-800'}`,
                                        children: preset
                                    }, preset, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-5 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-3 space-y-6",
                                children: [
                                    outliers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-amber-500/10 border border-amber-500/30 rounded-xl p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-amber-400 text-lg",
                                                    children: "⚠️"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/predict/page.js",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-amber-400",
                                                            children: [
                                                                outliers.length,
                                                                " value",
                                                                outliers.length > 1 ? 's' : '',
                                                                " outside historical range"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/predict/page.js",
                                                            lineNumber: 194,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-amber-400/70 mt-1",
                                                            children: "Your configuration includes values no historical polity had. Results may be less reliable."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/predict/page.js",
                                                            lineNumber: 197,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 space-y-1",
                                                            children: outliers.map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-amber-400/80",
                                                                    children: [
                                                                        "• ",
                                                                        o.label,
                                                                        ": ",
                                                                        o.message
                                                                    ]
                                                                }, o.feature, true, {
                                                                    fileName: "[project]/src/app/predict/page.js",
                                                                    lineNumber: 203,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/predict/page.js",
                                                            lineNumber: 201,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/predict/page.js",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/predict/page.js",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-white mb-6",
                                                children: "Configure Your Polity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 215,
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
                                                                lineNumber: 220,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Complexity"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 219,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-5",
                                                        children: complexityParams.map(([key, param])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParameterControl, {
                                                                paramKey: key,
                                                                param: param,
                                                                value: config[key],
                                                                onChange: handleParamChange,
                                                                isOutlier: outlierKeys.has(key)
                                                            }, key, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 225,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 223,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 218,
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
                                                                lineNumber: 240,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Warfare"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 239,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-5",
                                                        children: warfareParams.slice(0, 2).map(([key, param])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParameterControl, {
                                                                paramKey: key,
                                                                param: param,
                                                                value: config[key],
                                                                onChange: handleParamChange,
                                                                isOutlier: outlierKeys.has(key)
                                                            }, key, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 247,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 245,
                                                        columnNumber: 17
                                                    }, this),
                                                    !showAdvanced && warfareParams.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowAdvanced(true),
                                                        className: "mt-4 text-sm text-gray-500 hover:text-gray-300 transition",
                                                        children: [
                                                            "+ Show ",
                                                            warfareParams.length - 2,
                                                            " more warfare parameters"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 259,
                                                        columnNumber: 19
                                                    }, this),
                                                    showAdvanced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-5 space-y-5",
                                                        children: warfareParams.slice(2).map(([key, param])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParameterControl, {
                                                                paramKey: key,
                                                                param: param,
                                                                value: config[key],
                                                                onChange: handleParamChange,
                                                                isOutlier: outlierKeys.has(key)
                                                            }, key, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 270,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 268,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 238,
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
                                                                lineNumber: 286,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Religion"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 285,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-5",
                                                        children: religionParams.map(([key, param])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParameterControl, {
                                                                paramKey: key,
                                                                param: param,
                                                                value: config[key],
                                                                onChange: handleParamChange,
                                                                isOutlier: outlierKeys.has(key)
                                                            }, key, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 291,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 289,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this),
                                            showAdvanced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowAdvanced(false),
                                                className: "mt-6 text-sm text-gray-500 hover:text-gray-300 transition",
                                                children: "− Hide advanced parameters"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4",
                                                children: "Filter by Era"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedEra(null),
                                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition ${selectedEra === null ? 'bg-gray-700 text-white' : 'bg-[#161616] text-gray-400 hover:bg-[#1a1a1a] border border-gray-800'}`,
                                                        children: "All Eras"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 319,
                                                        columnNumber: 17
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERAS"].map((era)=>{
                                                        const colors = ERA_COLORS[era];
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedEra(era),
                                                            className: `px-4 py-2 rounded-lg text-sm font-medium transition ${selectedEra === era ? `${colors.bg} ${colors.text} border ${colors.border}` : 'bg-[#161616] text-gray-400 hover:bg-[#1a1a1a] border border-gray-800'}`,
                                                            children: era
                                                        }, era, false, {
                                                            fileName: "[project]/src/app/predict/page.js",
                                                            lineNumber: 332,
                                                            columnNumber: 21
                                                        }, this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, this),
                                            selectedEra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm text-gray-500",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_DESCRIPTIONS"][selectedEra]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this),
                                            !selectedEra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-xs text-gray-600",
                                                children: "Tip: The same configuration meant different things in different periods. Filter by era for more meaningful comparisons."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-6",
                                children: [
                                    results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mb-2",
                                                children: "Estimated Duration"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl font-bold mb-1",
                                                style: {
                                                    color: risk?.color || '#f97316'
                                                },
                                                children: [
                                                    "~",
                                                    results.durationEstimate
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 mb-4",
                                                children: "years"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 371,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-6 mb-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-white font-semibold",
                                                                children: [
                                                                    results.durationRange[0],
                                                                    "–",
                                                                    results.durationRange[1]
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 376,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500 uppercase",
                                                                children: "Range"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 377,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 375,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-white font-semibold",
                                                                children: [
                                                                    Math.round(results.confidence * 100),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 380,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-500 uppercase",
                                                                children: "Confidence"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 381,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 379,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this),
                                            risk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block px-4 py-2 rounded-lg text-sm font-medium",
                                                style: {
                                                    backgroundColor: `${risk.color}15`,
                                                    color: risk.color
                                                },
                                                children: risk.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 387,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    results?.similar?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4",
                                                children: "Most Similar Polities"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: results.similar.map((polity, i)=>{
                                                    const colors = ERA_COLORS[polity.era] || ERA_COLORS['Ancient'];
                                                    const isExpanded = expandedMatch === i;
                                                    const fullPolity = polities.find((p)=>p.name === polity.name);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setExpandedMatch(isExpanded ? null : i),
                                                                className: "w-full text-left p-3 rounded-lg bg-[#0d0d0d] hover:bg-[#111] transition",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `w-2 h-2 rounded-full ${colors.dot}`
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/predict/page.js",
                                                                                            lineNumber: 418,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-medium text-white text-sm truncate",
                                                                                            children: polity.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/predict/page.js",
                                                                                            lineNumber: 419,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/predict/page.js",
                                                                                    lineNumber: 417,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-gray-600 mt-0.5 ml-4",
                                                                                    children: [
                                                                                        polity.duration,
                                                                                        " years · ",
                                                                                        polity.era
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/predict/page.js",
                                                                                    lineNumber: 423,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/predict/page.js",
                                                                            lineNumber: 416,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-semibold text-blue-400",
                                                                                    children: [
                                                                                        polity.similarity,
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/predict/page.js",
                                                                                    lineNumber: 428,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-600 text-xs",
                                                                                    children: isExpanded ? '▼' : '▶'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/predict/page.js",
                                                                                    lineNumber: 431,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/predict/page.js",
                                                                            lineNumber: 427,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/predict/page.js",
                                                                    lineNumber: 415,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 411,
                                                                columnNumber: 25
                                                            }, this),
                                                            isExpanded && fullPolity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandedPolityDetails, {
                                                                config: config,
                                                                polity: polity,
                                                                fullPolity: fullPolity
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 440,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, `${polity.name}-${i}`, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 410,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 403,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600 mt-4",
                                                children: "Estimate is a similarity-weighted average of these polities' durations."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 451,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 399,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border-l-2 border-amber-600/50 bg-[#0d0d0d] rounded-r-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-gray-400",
                                                    children: "Note:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/predict/page.js",
                                                    lineNumber: 460,
                                                    columnNumber: 17
                                                }, this),
                                                " This is pattern-matching, not prediction. Similar configurations produced different outcomes depending on leadership, geography, and luck — none of which are in our model."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/predict/page.js",
                                            lineNumber: 459,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/predict/methodology",
                            className: "text-gray-500 hover:text-gray-300 transition",
                            children: "How does this work? Read the methodology →"
                        }, void 0, false, {
                            fileName: "[project]/src/app/predict/page.js",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/predict/page.js",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s(PredictPage, "5DHxQzvW8oWxo9F+ncwDWodg8l8=");
_c = PredictPage;
// Parameter Control with Slider + Number Input
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
                title: "Value outside historical range",
                children: "⚠️"
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 512,
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
                        lineNumber: 515,
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
                        lineNumber: 518,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 514,
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
                lineNumber: 531,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500 mt-1.5",
                children: param.description
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 549,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/predict/page.js",
        lineNumber: 510,
        columnNumber: 5
    }, this);
}
_s1(ParameterControl, "IUG71HzafWU96FkwMttmSS/PGbU=");
_c1 = ParameterControl;
// Expanded Polity Details
function ExpandedPolityDetails({ config, polity, fullPolity }) {
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
        className: "mt-2 p-4 bg-[#080808] rounded-lg border border-gray-800/50 text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2 text-xs mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-500",
                        children: "Period"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 575,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-300",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$similarity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatYear"])(polity.start),
                            " – ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$similarity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatYear"])(polity.end)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 576,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-500",
                        children: "Duration"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 579,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-300",
                        children: [
                            polity.duration,
                            " years"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 580,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-500",
                        children: "Similarity"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 581,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-300",
                        children: [
                            polity.similarity,
                            "% match"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 582,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 574,
                columnNumber: 7
            }, this),
            hasRawFeatures && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-800 pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-500 mb-2 uppercase tracking-wider",
                        children: "Feature Comparison"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 588,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 gap-1 text-xs mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600",
                                children: "Feature"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 592,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600 text-center",
                                children: "You"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 593,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600 text-center",
                                children: "Them"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 594,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600 text-right",
                                children: "Diff"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 595,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 591,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: featureMapping.map(({ key, label })=>{
                            const yourVal = config[key];
                            const theirVal = fullPolity.rawFeatures[key];
                            const diff = theirVal !== undefined ? theirVal - yourVal : null;
                            const isClose = diff !== null && Math.abs(diff) < 0.5;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-1 text-xs py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 608,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-white",
                                        children: yourVal
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 609,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-gray-300",
                                        children: theirVal !== undefined ? theirVal.toFixed(1) : '—'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 610,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: diff !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-1.5 py-0.5 rounded ${isClose ? 'bg-green-500/20 text-green-400' : diff > 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'}`,
                                            children: isClose ? '≈' : diff > 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/predict/page.js",
                                            lineNumber: 615,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 613,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 607,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 599,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 pt-2 border-t border-gray-800/50 text-xs text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-400",
                                children: "≈"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 633,
                                columnNumber: 13
                            }, this),
                            " close ·",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-400 ml-2",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 634,
                                columnNumber: 13
                            }, this),
                            " higher ·",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-orange-400 ml-2",
                                children: "−"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 635,
                                columnNumber: 13
                            }, this),
                            " lower"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 632,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 587,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/predict/page.js",
        lineNumber: 572,
        columnNumber: 5
    }, this);
}
_c2 = ExpandedPolityDetails;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PredictPage");
__turbopack_context__.k.register(_c1, "ParameterControl");
__turbopack_context__.k.register(_c2, "ExpandedPolityDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_16cdf8a5._.js.map