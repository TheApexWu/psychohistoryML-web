(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/constants.js
// Parameter definitions and constants for the Polity Simulator
// Ranges verified against Seshat Equinox 2022 dataset
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
const PARAMETERS = {
    hierarchy: {
        min: 1,
        max: 9,
        default: 3,
        step: 1,
        label: 'Hierarchy',
        description: '1 = village, 3 = chiefdom, 5 = kingdom, 7 = empire, 9 = superpower',
        category: 'complexity'
    },
    government: {
        min: 0,
        max: 1,
        default: 0.3,
        step: 0.1,
        label: 'Government',
        description: '0 = none, 0.3 = basic, 0.5 = moderate, 0.9 = sophisticated bureaucracy',
        category: 'complexity'
    },
    information: {
        min: 0,
        max: 1,
        default: 0.3,
        step: 0.1,
        label: 'Information Systems',
        description: '0 = oral only, 0.5 = basic writing, 0.9 = full literacy & records',
        category: 'complexity'
    },
    infrastructure: {
        min: 0,
        max: 1,
        default: 0.5,
        step: 0.1,
        label: 'Infrastructure',
        description: '0 = none, 0.5 = roads/irrigation, 1 = advanced (aqueducts, ports)',
        category: 'complexity'
    },
    weapons: {
        min: 0,
        max: 6,
        default: 3,
        step: 0.5,
        label: 'Weapons',
        description: '0 = stone, 2 = bronze, 4 = iron swords, 6 = advanced steel',
        category: 'warfare'
    },
    armor: {
        min: 0,
        max: 8,
        default: 3,
        step: 1,
        label: 'Armor',
        description: '0 = none, 3 = leather/bronze, 5 = chainmail, 8 = full plate',
        category: 'warfare'
    },
    cavalry: {
        min: 0,
        max: 1,
        default: 0,
        step: 0.5,
        label: 'Cavalry',
        description: '0 = none, 0.5 = some mounted units, 1 = significant cavalry',
        category: 'warfare'
    },
    fortifications: {
        min: 0,
        max: 11,
        default: 3,
        step: 1,
        label: 'Fortifications',
        description: '0 = none, 3 = walls, 6 = castles, 9 = advanced fortifications',
        category: 'warfare'
    },
    ironWorking: {
        min: 0,
        max: 1,
        default: 0,
        step: 1,
        label: 'Iron Working',
        description: '0 = no iron, 1 = iron/steel technology',
        category: 'warfare'
    },
    religion: {
        min: 0,
        max: 10,
        default: 2,
        step: 1,
        label: 'Religious Hierarchy',
        description: '0 = animist, 2 = local priests, 5 = state religion, 10 = complex hierarchy',
        category: 'religion'
    }
};
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
    'religion' // ReligLev
];
const ERAS = [
    'Ancient',
    'Classical',
    'Medieval',
    'Early Modern'
];
const ERA_DESCRIPTIONS = {
    'Ancient': 'Before 500 BCE — Egypt, Mesopotamia, early China, Bronze Age',
    'Classical': '500 BCE – 500 CE — Rome, Han China, Persia, Greece',
    'Medieval': '500 – 1500 CE — Byzantine, Tang, Caliphates, feudal Europe',
    'Early Modern': '1500+ CE — Ottomans, Mughals, Ming, European colonial powers'
};
const CATEGORY_COLORS = {
    complexity: '#60a5fa',
    warfare: '#f87171',
    religion: '#d4a574' // gold/tan
};
const PRESETS = {
    'Simple Chiefdom': {
        hierarchy: 2,
        government: 0.1,
        information: 0,
        infrastructure: 0.2,
        weapons: 1,
        armor: 0,
        cavalry: 0,
        fortifications: 0,
        ironWorking: 0,
        religion: 1
    },
    'Bronze Age Kingdom': {
        hierarchy: 3,
        government: 0.2,
        information: 0.3,
        infrastructure: 0.4,
        weapons: 3,
        armor: 3,
        cavalry: 0,
        fortifications: 3,
        ironWorking: 0,
        religion: 2
    },
    'Roman Republic': {
        // Based on actual Seshat values
        hierarchy: 5,
        government: 0.4,
        information: 0.9,
        infrastructure: 0.7,
        weapons: 5,
        armor: 7,
        cavalry: 1,
        fortifications: 6,
        ironWorking: 1,
        religion: 4
    },
    'Medieval Kingdom': {
        hierarchy: 4,
        government: 0.3,
        information: 0.4,
        infrastructure: 0.5,
        weapons: 4,
        armor: 5,
        cavalry: 1,
        fortifications: 5,
        ironWorking: 1,
        religion: 4
    },
    'Steppe Nomads': {
        hierarchy: 2,
        government: 0.1,
        information: 0.1,
        infrastructure: 0.1,
        weapons: 3,
        armor: 2,
        cavalry: 1,
        fortifications: 0,
        ironWorking: 1,
        religion: 1
    },
    'Spanish Empire': {
        // Based on actual Seshat values - one of the most complex
        hierarchy: 9,
        government: 0.9,
        information: 0.9,
        infrastructure: 0.8,
        weapons: 6,
        armor: 7,
        cavalry: 1,
        fortifications: 8,
        ironWorking: 1,
        religion: 10
    }
};
const DEFAULT_CONFIG = {
    hierarchy: 3,
    government: 0.3,
    information: 0.3,
    infrastructure: 0.5,
    weapons: 3,
    armor: 3,
    cavalry: 0,
    fortifications: 3,
    ironWorking: 0,
    religion: 2
};
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
        }
    }["PredictPage.useEffect"], [
        config,
        selectedEra,
        polities,
        scalerParams
    ]);
    const handleParamChange = (key, value)=>{
        const param = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"][key];
        const numValue = parseFloat(value);
        // Clamp to valid range
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
            className: "min-h-screen bg-[#0a0a0a] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400 text-lg",
                children: "Loading historical data..."
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/predict/page.js",
            lineNumber: 89,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0a0a0a] text-gray-100 font-[system-ui]",
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
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-3 text-base text-gray-500",
                                        children: "/ Simulator"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 101,
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
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/predict/methodology",
                                        className: "text-gray-400 hover:text-white transition",
                                        children: "Methodology"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/predict/page.js",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 98,
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
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-400",
                                children: "Configure a society and find historically similar polities from the Seshat database."
                            }, void 0, false, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-5 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-3 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-900/50 rounded-xl p-5 border border-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4",
                                                children: "Quick Presets"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-3",
                                                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRESETS"]).map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handlePresetSelect(preset),
                                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition ${activePreset === preset ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`,
                                                        children: preset
                                                    }, preset, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-900/50 rounded-xl p-6 border border-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6",
                                                children: "Configure Your Polity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 150,
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
                                                                lineNumber: 155,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Complexity"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 154,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-5",
                                                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"]).filter(([_, p])=>p.category === 'complexity').map(([key, param])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParameterControl, {
                                                                paramKey: key,
                                                                param: param,
                                                                value: config[key],
                                                                onChange: handleParamChange
                                                            }, key, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 162,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 158,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 153,
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
                                                                lineNumber: 176,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Warfare"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 175,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-5",
                                                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"]).filter(([_, p])=>p.category === 'warfare').map(([key, param])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParameterControl, {
                                                                paramKey: key,
                                                                param: param,
                                                                value: config[key],
                                                                onChange: handleParamChange
                                                            }, key, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 183,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 179,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 174,
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
                                                                lineNumber: 197,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Religion"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 196,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-5",
                                                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARAMETERS"]).filter(([_, p])=>p.category === 'religion').map(([key, param])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParameterControl, {
                                                                paramKey: key,
                                                                param: param,
                                                                value: config[key],
                                                                onChange: handleParamChange
                                                            }, key, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 204,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 200,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-900/50 rounded-xl p-5 border border-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4",
                                                children: "Filter by Era"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedEra(null),
                                                        className: `px-4 py-2 rounded-lg text-sm font-medium transition ${selectedEra === null ? 'bg-gray-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`,
                                                        children: "All Eras"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 220,
                                                        columnNumber: 17
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERAS"].map((era)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedEra(era),
                                                            className: `px-4 py-2 rounded-lg text-sm font-medium transition ${selectedEra === era ? 'bg-gray-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`,
                                                            children: era
                                                        }, era, false, {
                                                            fileName: "[project]/src/app/predict/page.js",
                                                            lineNumber: 231,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            selectedEra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm text-gray-500",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERA_DESCRIPTIONS"][selectedEra]
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-6",
                                children: [
                                    results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-900/50 rounded-xl p-6 border border-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6",
                                                children: "Duration Estimate"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-6xl font-bold tracking-tight",
                                                        style: {
                                                            color: risk?.color
                                                        },
                                                        children: results.durationEstimate ? `~${results.durationEstimate}` : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 259,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-lg text-gray-400 mt-1",
                                                        children: "years"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 262,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this),
                                            risk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-sm font-medium px-4 py-2 rounded-full mx-auto w-fit",
                                                style: {
                                                    backgroundColor: `${risk.color}20`,
                                                    color: risk.color
                                                },
                                                children: risk.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 266,
                                                columnNumber: 19
                                            }, this),
                                            results.durationRange[0] !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 text-center text-sm text-gray-500",
                                                children: [
                                                    "Range: ",
                                                    results.durationRange[0],
                                                    " – ",
                                                    results.durationRange[1],
                                                    " years"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 278,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 pt-5 border-t border-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-sm text-gray-500 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Confidence"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 285,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    (results.confidence * 100).toFixed(0),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 286,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2 bg-gray-800 rounded-full overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full bg-blue-500 rounded-full transition-all duration-300",
                                                            style: {
                                                                width: `${results.confidence * 100}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/predict/page.js",
                                                            lineNumber: 289,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 288,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this),
                                    results && results.similar.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-900/50 rounded-xl p-6 border border-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4",
                                                children: "Similar Historical Polities"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: results.similar.map((polity, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition cursor-pointer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-semibold text-white text-base",
                                                                            children: polity.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/predict/page.js",
                                                                            lineNumber: 312,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm text-gray-500 mt-1",
                                                                            children: [
                                                                                polity.era,
                                                                                " · ",
                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$similarity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatYear"])(polity.start),
                                                                                " – ",
                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$similarity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatYear"])(polity.end)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/predict/page.js",
                                                                            lineNumber: 313,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/predict/page.js",
                                                                    lineNumber: 311,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-base font-semibold text-blue-400",
                                                                            children: [
                                                                                polity.similarity,
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/predict/page.js",
                                                                            lineNumber: 318,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm text-gray-500",
                                                                            children: [
                                                                                polity.duration,
                                                                                " yrs"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/predict/page.js",
                                                                            lineNumber: 321,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/predict/page.js",
                                                                    lineNumber: 317,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/predict/page.js",
                                                            lineNumber: 310,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 306,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 text-xs text-gray-600 text-center",
                                                children: [
                                                    "Based on ",
                                                    results.candidateCount,
                                                    " polities in database"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, this),
                                    eraComparison.length > 0 && !selectedEra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-900/50 rounded-xl p-6 border border-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4",
                                                children: "Same Config, Different Eras"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: eraComparison.map((era)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center py-3 border-b border-gray-800 last:border-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-base text-gray-300",
                                                                children: era.era
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 347,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-white text-base",
                                                                        children: era.durationEstimate ? `${era.durationEstimate} yrs` : '—'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/predict/page.js",
                                                                        lineNumber: 349,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    era.topMatch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-gray-500 truncate max-w-[140px]",
                                                                        children: [
                                                                            "e.g. ",
                                                                            era.topMatch.name
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/predict/page.js",
                                                                        lineNumber: 353,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predict/page.js",
                                                                lineNumber: 348,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, era.era, true, {
                                                        fileName: "[project]/src/app/predict/page.js",
                                                        lineNumber: 343,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4 text-xs text-gray-600",
                                                children: "Historical context changes outcomes dramatically."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predict/page.js",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predict/page.js",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predict/page.js",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 124,
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
                            lineNumber: 371,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/predict/page.js",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(PredictPage, "h0DaY/UAYN/i7QhvuDtdIN1+Tqo=");
_c = PredictPage;
// Parameter Control Component with Slider + Number Input
function ParameterControl({ paramKey, param, value, onChange }) {
    _s1();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value.toString());
    // Sync input when value changes externally (e.g., preset)
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
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-base text-gray-200 font-medium",
                        children: param.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: inputValue,
                        onChange: handleInputChange,
                        onBlur: handleInputBlur,
                        onKeyDown: handleInputKeyDown,
                        className: "w-16 px-2 py-1 text-right text-base font-medium bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500 transition"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predict/page.js",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 413,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: param.min,
                max: param.max,
                step: param.step,
                value: value,
                onChange: (e)=>onChange(paramKey, e.target.value),
                className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition [&::-webkit-slider-thumb]:hover:bg-gray-200 [&::-webkit-slider-thumb]:shadow-md"
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500 mt-1.5",
                children: param.description
            }, void 0, false, {
                fileName: "[project]/src/app/predict/page.js",
                lineNumber: 442,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/predict/page.js",
        lineNumber: 412,
        columnNumber: 5
    }, this);
}
_s1(ParameterControl, "IUG71HzafWU96FkwMttmSS/PGbU=");
_c1 = ParameterControl;
var _c, _c1;
__turbopack_context__.k.register(_c, "PredictPage");
__turbopack_context__.k.register(_c1, "ParameterControl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_13b2a18e._.js.map