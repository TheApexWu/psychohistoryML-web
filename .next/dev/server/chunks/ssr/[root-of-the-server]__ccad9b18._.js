module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/visualizations/AnimatedStats.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/visualizations/AnimatedStats.jsx
__turbopack_context__.s([
    "ModelJourney",
    ()=>ModelJourney,
    "StatsRow",
    ()=>StatsRow,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function AnimatedNumber({ value, decimals = 0, prefix = '', suffix = '', duration = 2000 }) {
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) setIsVisible(true);
        }, {
            threshold: 0.5
        });
        if (ref.current) observer.observe(ref.current);
        return ()=>observer.disconnect();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible) return;
        const start = Date.now();
        const startValue = 0;
        const animate = ()=>{
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(startValue + (value - startValue) * eased);
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [
        isVisible,
        value,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: [
            prefix,
            displayValue.toFixed(decimals),
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function StatsRow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-a8bc8d718af8275b" + " " + "stats-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a8bc8d718af8275b" + " " + "stat",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-a8bc8d718af8275b" + " " + "stat-value",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                            value: 256,
                            duration: 1500
                        }, void 0, false, {
                            fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-a8bc8d718af8275b" + " " + "stat-label",
                        children: "Civilizations"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a8bc8d718af8275b" + " " + "stat",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-a8bc8d718af8275b" + " " + "stat-value",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                            value: 0.744,
                            decimals: 3,
                            duration: 2000
                        }, void 0, false, {
                            fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-a8bc8d718af8275b" + " " + "stat-label",
                        children: "Model AUC"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a8bc8d718af8275b" + " " + "stat",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-a8bc8d718af8275b" + " " + "stat-value",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                            value: 10000,
                            duration: 2500,
                            suffix: "+"
                        }, void 0, false, {
                            fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-a8bc8d718af8275b" + " " + "stat-label",
                        children: "Years of History"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "a8bc8d718af8275b",
                children: ".stats-row.jsx-a8bc8d718af8275b{border-top:1px solid var(--border);border-bottom:1px solid var(--border);justify-content:center;gap:4rem;margin:4rem 0;padding:3rem 0;display:flex}.stat.jsx-a8bc8d718af8275b{text-align:center}.stat-value.jsx-a8bc8d718af8275b{font-family:var(--font-jetbrains),monospace;color:var(--accent);font-size:2.5rem;display:block}.stat-label.jsx-a8bc8d718af8275b{color:var(--text-muted);text-transform:uppercase;letter-spacing:.1em;margin-top:.5rem;font-size:.8rem;display:block}@media (width<=600px){.stats-row.jsx-a8bc8d718af8275b{flex-direction:column;gap:2rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
function ModelJourney() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) setIsVisible(true);
        }, {
            threshold: 0.2
        });
        const element = document.getElementById('model-journey');
        if (element) observer.observe(element);
        return ()=>observer.disconnect();
    }, []);
    const stages = [
        {
            label: 'Baseline',
            auc: 0.505,
            description: 'Complexity alone'
        },
        {
            label: '+ Warfare',
            auc: 0.648,
            description: 'Added military tech'
        },
        {
            label: '+ Religion',
            auc: 0.744,
            description: 'Added ideology scores'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "model-journey",
        className: "jsx-5a706a0de407d11f" + " " + "journey-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "jsx-5a706a0de407d11f" + " " + "chart-title",
                children: "Model Evolution"
            }, void 0, false, {
                fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-5a706a0de407d11f" + " " + "journey-track",
                children: stages.map((stage, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: `all 0.6s ease ${index * 300}ms`
                        },
                        className: "jsx-5a706a0de407d11f" + " " + "journey-stage",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: index === stages.length - 1 ? 'var(--accent)' : 'var(--border)'
                                },
                                className: "jsx-5a706a0de407d11f" + " " + "stage-dot",
                                children: index < stages.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5a706a0de407d11f" + " " + "stage-connector"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                                    lineNumber: 154,
                                    columnNumber: 45
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-5a706a0de407d11f" + " " + "stage-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-5a706a0de407d11f" + " " + "stage-auc",
                                        children: stage.auc.toFixed(3)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-5a706a0de407d11f" + " " + "stage-label",
                                        children: stage.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-5a706a0de407d11f" + " " + "stage-desc",
                                        children: stage.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stage.label, true, {
                        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "5a706a0de407d11f",
                children: ".journey-container.jsx-5a706a0de407d11f{background:var(--bg-secondary);border:1px solid var(--border);border-radius:4px;margin:2rem 0;padding:2rem}.chart-title.jsx-5a706a0de407d11f{font-family:var(--font-jetbrains),monospace;text-transform:uppercase;letter-spacing:.1em;color:var(--text-muted);margin-bottom:2rem;font-size:.8rem}.journey-track.jsx-5a706a0de407d11f{justify-content:space-between;display:flex;position:relative}.journey-stage.jsx-5a706a0de407d11f{flex-direction:column;flex:1;align-items:center;display:flex;position:relative}.stage-dot.jsx-5a706a0de407d11f{z-index:2;border-radius:50%;width:16px;height:16px;position:relative}.stage-connector.jsx-5a706a0de407d11f{background:var(--border);width:200%;height:2px;position:absolute;top:50%;left:100%;transform:translateY(-50%)}.stage-content.jsx-5a706a0de407d11f{text-align:center;margin-top:1rem}.stage-auc.jsx-5a706a0de407d11f{font-family:var(--font-jetbrains),monospace;color:var(--text-primary);font-size:1.5rem;display:block}.stage-label.jsx-5a706a0de407d11f{color:var(--text-primary);margin-top:.25rem;font-size:.9rem;display:block}.stage-desc.jsx-5a706a0de407d11f{color:var(--text-muted);margin-top:.25rem;font-size:.75rem;display:block}@media (width<=600px){.journey-track.jsx-5a706a0de407d11f{flex-direction:column;gap:2rem}.stage-connector.jsx-5a706a0de407d11f{display:none}.stage-improvement.jsx-5a706a0de407d11f{margin-top:.5rem;position:static}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/visualizations/AnimatedStats.jsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = AnimatedNumber;
}),
"[project]/src/components/visualizations/DiscoveriesSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/visualizations/DiscoveriesSection.jsx
__turbopack_context__.s([
    "default",
    ()=>DiscoveriesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const discoveries = [
    {
        id: 1,
        title: "Religion shows complex effects",
        summary: "Religious features account for 27% of model decisions, but direction varies",
        detail: "Religious variables collectively dominate model importance (27.2%), but the relationship is nuanced. Total religious institutionalization shows stabilizing effects, while ideology scores show context-dependent patterns. The 'software' of shared meaning matters - but more isn't always better.",
        stat: "27.2%",
        statLabel: "combined importance",
        icon: "◉"
    },
    {
        id: 2,
        title: "Era trumps geography",
        summary: "Historical period matters more than where a civilization was located",
        detail: "Civilizations cluster by time, not space. The relationship between complexity and duration completely reverses across eras: Ancient polities show strong negative effects (B=-159), while Early Modern polities show slight positive effects (B=+6). The 'rules' of survival changed over millennia.",
        stat: "B=-159 to +6",
        statLabel: "coefficient shift",
        icon: "◈"
    },
    {
        id: 3,
        title: "Warfare technology matters",
        summary: "Adding military features improved model prediction by 28%",
        detail: "Military technology doesn't just correlate with outcomes - it moderates how complexity affects survival. The model jumped from coin-flip (0.505 AUC) to meaningful signal (0.648 AUC) when warfare variables were added. Context matters as much as capacity.",
        stat: "+28%",
        statLabel: "AUC improvement",
        icon: "◇"
    },
    {
        id: 4,
        title: "Classical era is special",
        summary: "500 BCE - 500 CE shows unique dynamics across all analyses",
        detail: "The Classical period consistently emerges as exceptional: warfare moderation peaks here (+0.634 effect), the complexity-duration relationship moderates significantly compared to Ancient times, and the era produced history's most durable complex societies. Rome, Han China, Persia - something was different.",
        stat: "+0.634",
        statLabel: "warfare moderation",
        icon: "◆"
    }
];
function DiscoveriesSection() {
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [visibleItems, setVisibleItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const id = parseInt(entry.target.dataset.id);
                    setVisibleItems((prev)=>[
                            ...new Set([
                                ...prev,
                                id
                            ])
                        ]);
                }
            });
        }, {
            threshold: 0.2
        });
        document.querySelectorAll('.discovery-item').forEach((el)=>{
            observer.observe(el);
        });
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-b69f59105ea442c4" + " " + "discoveries-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "jsx-b69f59105ea442c4" + " " + "section-title",
                children: "What the Model Revealed"
            }, void 0, false, {
                fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "jsx-b69f59105ea442c4" + " " + "section-subtitle",
                children: "Four key findings from analyzing 10,000 years of civilizational data"
            }, void 0, false, {
                fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b69f59105ea442c4" + " " + "discoveries-grid",
                children: discoveries.map((discovery, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-id": discovery.id,
                        style: {
                            transitionDelay: `${index * 100}ms`
                        },
                        onClick: ()=>setExpandedId(expandedId === discovery.id ? null : discovery.id),
                        className: "jsx-b69f59105ea442c4" + " " + `discovery-item ${expandedId === discovery.id ? 'expanded' : ''} ${visibleItems.includes(discovery.id) ? 'visible' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b69f59105ea442c4" + " " + "discovery-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-b69f59105ea442c4" + " " + "discovery-icon",
                                        children: discovery.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-b69f59105ea442c4" + " " + "discovery-num",
                                        children: String(discovery.id).padStart(2, '0')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-b69f59105ea442c4" + " " + "discovery-title",
                                children: discovery.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-b69f59105ea442c4" + " " + "discovery-summary",
                                children: discovery.summary
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b69f59105ea442c4" + " " + "discovery-stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-b69f59105ea442c4" + " " + "stat-value",
                                        children: discovery.stat
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-b69f59105ea442c4" + " " + "stat-label",
                                        children: discovery.statLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b69f59105ea442c4" + " " + "discovery-detail",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-b69f59105ea442c4",
                                    children: discovery.detail
                                }, void 0, false, {
                                    fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-b69f59105ea442c4" + " " + "expand-hint",
                                children: expandedId === discovery.id ? '- Less' : '+ More'
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, discovery.id, true, {
                        fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "b69f59105ea442c4",
                children: ".discoveries-section.jsx-b69f59105ea442c4{padding:4rem 0}.section-title.jsx-b69f59105ea442c4{letter-spacing:.05em;text-transform:uppercase;color:var(--text-muted);margin-bottom:.5rem;font-size:1.1rem;font-weight:600}.section-subtitle.jsx-b69f59105ea442c4{color:var(--text-muted);margin-bottom:3rem}.discoveries-grid.jsx-b69f59105ea442c4{grid-template-columns:repeat(2,1fr);gap:1.5rem;display:grid}.discovery-item.jsx-b69f59105ea442c4{background:var(--bg-secondary);border:1px solid var(--border);cursor:pointer;opacity:0;border-radius:4px;padding:1.5rem;transition:all .3s;transform:translateY(20px)}.discovery-item.visible.jsx-b69f59105ea442c4{opacity:1;transform:translateY(0)}.discovery-item.jsx-b69f59105ea442c4:hover{border-color:var(--accent-dim)}.discovery-item.expanded.jsx-b69f59105ea442c4{border-color:var(--accent)}.discovery-header.jsx-b69f59105ea442c4{justify-content:space-between;align-items:center;margin-bottom:1rem;display:flex}.discovery-icon.jsx-b69f59105ea442c4{color:var(--accent);font-size:1.5rem}.discovery-num.jsx-b69f59105ea442c4{font-family:var(--font-jetbrains),monospace;color:var(--text-muted);font-size:.7rem}.discovery-title.jsx-b69f59105ea442c4{color:var(--text-primary);margin-bottom:.5rem;font-size:1.1rem;font-weight:500}.discovery-summary.jsx-b69f59105ea442c4{color:var(--text-muted);margin-bottom:1rem;font-size:.9rem;line-height:1.5}.discovery-stat.jsx-b69f59105ea442c4{background:var(--bg-primary);border-radius:4px;align-items:baseline;gap:.5rem;margin-bottom:1rem;padding:.75rem;display:flex}.discovery-stat.jsx-b69f59105ea442c4 .stat-value.jsx-b69f59105ea442c4{font-family:var(--font-jetbrains),monospace;color:var(--accent);font-size:1.25rem}.discovery-stat.jsx-b69f59105ea442c4 .stat-label.jsx-b69f59105ea442c4{color:var(--text-muted);font-size:.75rem}.discovery-detail.jsx-b69f59105ea442c4{max-height:0;transition:max-height .3s;overflow:hidden}.discovery-item.expanded.jsx-b69f59105ea442c4 .discovery-detail.jsx-b69f59105ea442c4{max-height:200px}.discovery-detail.jsx-b69f59105ea442c4 p.jsx-b69f59105ea442c4{color:var(--text-muted);border-top:1px solid var(--border);padding-top:1rem;font-size:.85rem;line-height:1.6}.expand-hint.jsx-b69f59105ea442c4{font-family:var(--font-jetbrains),monospace;color:var(--accent-dim);text-align:right;margin-top:.5rem;font-size:.7rem;display:block}@media (width<=700px){.discoveries-grid.jsx-b69f59105ea442c4{grid-template-columns:1fr}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/visualizations/DiscoveriesSection.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ccad9b18._.js.map