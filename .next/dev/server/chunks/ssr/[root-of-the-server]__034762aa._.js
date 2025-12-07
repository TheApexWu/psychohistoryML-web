module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/visualizations/AnimatedROC.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/visualizations/AnimatedROC.jsx
__turbopack_context__.s([
    "default",
    ()=>AnimatedROC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// Actual data points from your 07_roc_curves.png
const rocData = {
    randomForest: [
        [
            0,
            0
        ],
        [
            0.05,
            0.42
        ],
        [
            0.1,
            0.54
        ],
        [
            0.15,
            0.62
        ],
        [
            0.2,
            0.65
        ],
        [
            0.25,
            0.69
        ],
        [
            0.3,
            0.69
        ],
        [
            0.35,
            0.69
        ],
        [
            0.4,
            0.77
        ],
        [
            0.45,
            0.77
        ],
        [
            0.5,
            0.81
        ],
        [
            0.55,
            0.85
        ],
        [
            0.6,
            1.0
        ],
        [
            1,
            1
        ]
    ],
    logistic: [
        [
            0,
            0
        ],
        [
            0.05,
            0.15
        ],
        [
            0.1,
            0.15
        ],
        [
            0.15,
            0.31
        ],
        [
            0.2,
            0.46
        ],
        [
            0.25,
            0.58
        ],
        [
            0.3,
            0.58
        ],
        [
            0.35,
            0.62
        ],
        [
            0.4,
            0.65
        ],
        [
            0.45,
            0.65
        ],
        [
            0.5,
            0.69
        ],
        [
            0.6,
            0.85
        ],
        [
            0.7,
            0.88
        ],
        [
            0.8,
            0.92
        ],
        [
            0.9,
            0.96
        ],
        [
            1,
            1
        ]
    ]
};
function AnimatedROC() {
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.3
        });
        const element = document.getElementById('roc-chart');
        if (element) observer.observe(element);
        return ()=>observer.disconnect();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible) return;
        const duration = 2000;
        const start = Date.now();
        const animate = ()=>{
            const elapsed = Date.now() - start;
            const newProgress = Math.min(elapsed / duration, 1);
            setProgress(newProgress);
            if (newProgress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [
        isVisible
    ]);
    const width = 400;
    const height = 400;
    const padding = 50;
    const scaleX = (x)=>padding + x * (width - 2 * padding);
    const scaleY = (y)=>height - padding - y * (height - 2 * padding);
    const getPathData = (points, progress)=>{
        const visiblePoints = Math.floor(points.length * progress);
        if (visiblePoints < 2) return '';
        return points.slice(0, visiblePoints).map((point, i)=>{
            const x = scaleX(point[0]);
            const y = scaleY(point[1]);
            return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
        }).join(' ');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "roc-chart",
        className: "jsx-17797318fa7e4b4e" + " " + "roc-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "jsx-17797318fa7e4b4e" + " " + "chart-title",
                children: "Model Performance"
            }, void 0, false, {
                fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: `0 0 ${width} ${height}`,
                className: "jsx-17797318fa7e4b4e" + " " + "roc-svg",
                children: [
                    [
                        0.2,
                        0.4,
                        0.6,
                        0.8
                    ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            className: "jsx-17797318fa7e4b4e",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: scaleX(v),
                                    y1: scaleY(0),
                                    x2: scaleX(v),
                                    y2: scaleY(1),
                                    stroke: "var(--border)",
                                    strokeWidth: "1",
                                    opacity: "0.3",
                                    className: "jsx-17797318fa7e4b4e"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: scaleX(0),
                                    y1: scaleY(v),
                                    x2: scaleX(1),
                                    y2: scaleY(v),
                                    stroke: "var(--border)",
                                    strokeWidth: "1",
                                    opacity: "0.3",
                                    className: "jsx-17797318fa7e4b4e"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, v, true, {
                            fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: scaleX(0),
                        y1: scaleY(0),
                        x2: scaleX(1),
                        y2: scaleY(1),
                        stroke: "var(--text-muted)",
                        strokeWidth: "1",
                        strokeDasharray: "5,5",
                        opacity: "0.5",
                        className: "jsx-17797318fa7e4b4e"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: getPathData(rocData.logistic, progress),
                        fill: "none",
                        stroke: "#6b7280",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        className: "jsx-17797318fa7e4b4e"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: getPathData(rocData.randomForest, progress),
                        fill: "none",
                        stroke: "var(--accent)",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        className: "jsx-17797318fa7e4b4e"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: scaleX(0),
                        y1: scaleY(0),
                        x2: scaleX(1),
                        y2: scaleY(0),
                        stroke: "var(--text-muted)",
                        strokeWidth: "1",
                        className: "jsx-17797318fa7e4b4e"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: scaleX(0),
                        y1: scaleY(0),
                        x2: scaleX(0),
                        y2: scaleY(1),
                        stroke: "var(--text-muted)",
                        strokeWidth: "1",
                        className: "jsx-17797318fa7e4b4e"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: width / 2,
                        y: height - 10,
                        textAnchor: "middle",
                        className: "jsx-17797318fa7e4b4e" + " " + "axis-label",
                        children: "False Positive Rate"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: 15,
                        y: height / 2,
                        textAnchor: "middle",
                        transform: `rotate(-90, 15, ${height / 2})`,
                        className: "jsx-17797318fa7e4b4e" + " " + "axis-label",
                        children: "True Positive Rate"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-17797318fa7e4b4e" + " " + "roc-legend",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-17797318fa7e4b4e" + " " + "legend-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-17797318fa7e4b4e" + " " + "legend-line accent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-17797318fa7e4b4e",
                                children: "Random Forest (AUC = 0.744)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-17797318fa7e4b4e" + " " + "legend-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-17797318fa7e4b4e" + " " + "legend-line muted"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-17797318fa7e4b4e",
                                children: "Logistic Regression (AUC = 0.669)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-17797318fa7e4b4e" + " " + "legend-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-17797318fa7e4b4e" + " " + "legend-line dashed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-17797318fa7e4b4e",
                                children: "Random Chance (AUC = 0.500)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "17797318fa7e4b4e",
                children: ".roc-container.jsx-17797318fa7e4b4e{background:var(--bg-secondary);border:1px solid var(--border);border-radius:4px;margin:2rem 0;padding:2rem}.chart-title.jsx-17797318fa7e4b4e{font-family:var(--font-jetbrains),monospace;text-transform:uppercase;letter-spacing:.1em;color:var(--text-muted);margin-bottom:1rem;font-size:.8rem}.roc-svg.jsx-17797318fa7e4b4e{width:100%;max-width:400px;margin:0 auto;display:block}.axis-label.jsx-17797318fa7e4b4e{font-family:var(--font-jetbrains),monospace;fill:var(--text-muted);font-size:10px}.roc-legend.jsx-17797318fa7e4b4e{color:var(--text-muted);flex-wrap:wrap;justify-content:center;gap:1.5rem;margin-top:1.5rem;font-size:.85rem;display:flex}.legend-item.jsx-17797318fa7e4b4e{align-items:center;gap:.5rem;display:flex}.legend-line.jsx-17797318fa7e4b4e{border-radius:2px;width:24px;height:3px}.legend-line.accent.jsx-17797318fa7e4b4e{background:var(--accent)}.legend-line.muted.jsx-17797318fa7e4b4e{background:#6b7280}.legend-line.dashed.jsx-17797318fa7e4b4e{background:repeating-linear-gradient(90deg,var(--text-muted)0px,var(--text-muted)4px,transparent 4px,transparent 8px)}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/visualizations/AnimatedROC.jsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/visualizations/FeatureImportance.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/visualizations/FeatureImportance.jsx
__turbopack_context__.s([
    "default",
    ()=>FeatureImportance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// Data from your 07_feature_importance.png
const features = [
    {
        name: 'Ideology Score',
        key: 'ideol_score',
        value: 0.127,
        category: 'religion'
    },
    {
        name: 'Hierarchy (PC1)',
        key: 'PC1_hier',
        value: 0.115,
        category: 'complexity'
    },
    {
        name: 'Government (PC2)',
        key: 'PC2_hier',
        value: 0.087,
        category: 'complexity'
    },
    {
        name: 'Infrastructure (PC3)',
        key: 'PC3_hier',
        value: 0.085,
        category: 'complexity'
    },
    {
        name: 'Complexity²',
        key: 'PC1_squared',
        value: 0.072,
        category: 'complexity'
    },
    {
        name: 'Total Religion',
        key: 'total_rel',
        value: 0.071,
        category: 'religion'
    },
    {
        name: 'PC1 × PC2',
        key: 'PC1_x_PC2',
        value: 0.069,
        category: 'complexity'
    },
    {
        name: 'Warfare Tech',
        key: 'total_warfare',
        value: 0.055,
        category: 'warfare'
    },
    {
        name: 'Moral Religion',
        key: 'moral_score',
        value: 0.051,
        category: 'religion'
    },
    {
        name: 'Weapons',
        key: 'weapons',
        value: 0.045,
        category: 'warfare'
    }
];
const categoryColors = {
    religion: '#c9a55c',
    complexity: '#6b8cce',
    warfare: '#ce6b6b'
};
function FeatureImportance() {
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.2
        });
        const element = document.getElementById('feature-chart');
        if (element) observer.observe(element);
        return ()=>observer.disconnect();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible) return;
        const duration = 1500;
        const start = Date.now();
        const animate = ()=>{
            const elapsed = Date.now() - start;
            const newProgress = Math.min(elapsed / duration, 1);
            // Easing function for smooth animation
            const eased = 1 - Math.pow(1 - newProgress, 3);
            setProgress(eased);
            if (newProgress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [
        isVisible
    ]);
    const maxValue = Math.max(...features.map((f)=>f.value));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "feature-chart",
        className: "jsx-2693df23583b72b3" + " " + "feature-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "jsx-2693df23583b72b3" + " " + "chart-title",
                children: "What Predicts Instability?"
            }, void 0, false, {
                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "jsx-2693df23583b72b3" + " " + "chart-subtitle",
                children: "Feature importance from Random Forest model"
            }, void 0, false, {
                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-2693df23583b72b3" + " " + "bars",
                children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDelay: `${index * 80}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                            transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`
                        },
                        className: "jsx-2693df23583b72b3" + " " + "bar-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-2693df23583b72b3" + " " + "bar-label",
                                children: feature.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-2693df23583b72b3" + " " + "bar-track",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: `${feature.value / maxValue * 100 * progress}%`,
                                        backgroundColor: categoryColors[feature.category]
                                    },
                                    className: "jsx-2693df23583b72b3" + " " + "bar-fill"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-2693df23583b72b3" + " " + "bar-value",
                                children: [
                                    (feature.value * 100 * progress).toFixed(1),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, feature.key, true, {
                        fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-2693df23583b72b3" + " " + "category-legend",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-2693df23583b72b3" + " " + "legend-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: categoryColors.religion
                                },
                                className: "jsx-2693df23583b72b3" + " " + "legend-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-2693df23583b72b3",
                                children: "Religion"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-2693df23583b72b3" + " " + "legend-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: categoryColors.complexity
                                },
                                className: "jsx-2693df23583b72b3" + " " + "legend-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-2693df23583b72b3",
                                children: "Complexity"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-2693df23583b72b3" + " " + "legend-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: categoryColors.warfare
                                },
                                className: "jsx-2693df23583b72b3" + " " + "legend-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-2693df23583b72b3",
                                children: "Warfare"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-2693df23583b72b3" + " " + "insight-callout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-2693df23583b72b3" + " " + "insight-icon",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-2693df23583b72b3" + " " + "insight-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "jsx-2693df23583b72b3",
                                children: "Ideology"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            " (religious cohesion) outweighs all complexity measures as a predictor"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "2693df23583b72b3",
                children: ".feature-container.jsx-2693df23583b72b3{background:var(--bg-secondary);border:1px solid var(--border);border-radius:4px;margin:2rem 0;padding:2rem}.chart-title.jsx-2693df23583b72b3{font-family:var(--font-jetbrains),monospace;text-transform:uppercase;letter-spacing:.1em;color:var(--text-muted);margin-bottom:.25rem;font-size:.8rem}.chart-subtitle.jsx-2693df23583b72b3{color:var(--text-muted);margin-bottom:1.5rem;font-size:.9rem}.bars.jsx-2693df23583b72b3{flex-direction:column;gap:.75rem;display:flex}.bar-row.jsx-2693df23583b72b3{grid-template-columns:140px 1fr 50px;align-items:center;gap:1rem;display:grid}.bar-label.jsx-2693df23583b72b3{color:var(--text-primary);text-align:right;font-size:.85rem}.bar-track.jsx-2693df23583b72b3{background:var(--bg-primary);border-radius:2px;height:24px;overflow:hidden}.bar-fill.jsx-2693df23583b72b3{border-radius:2px;height:100%;transition:width .1s linear}.bar-value.jsx-2693df23583b72b3{font-family:var(--font-jetbrains),monospace;color:var(--text-muted);font-size:.75rem}.category-legend.jsx-2693df23583b72b3{border-top:1px solid var(--border);justify-content:center;gap:1.5rem;margin-top:1.5rem;padding-top:1rem;display:flex}.legend-item.jsx-2693df23583b72b3{color:var(--text-muted);align-items:center;gap:.5rem;font-size:.8rem;display:flex}.legend-dot.jsx-2693df23583b72b3{border-radius:50%;width:10px;height:10px}.insight-callout.jsx-2693df23583b72b3{border-left:3px solid var(--accent);background:#c9a55c1a;border-radius:0 4px 4px 0;align-items:flex-start;gap:.75rem;margin-top:1.5rem;padding:1rem;display:flex}.insight-icon.jsx-2693df23583b72b3{color:var(--accent);font-weight:700}.insight-text.jsx-2693df23583b72b3{color:var(--text-primary);font-size:.9rem;line-height:1.4}.insight-text.jsx-2693df23583b72b3 strong.jsx-2693df23583b72b3{color:var(--accent)}@media (width<=600px){.bar-row.jsx-2693df23583b72b3{grid-template-columns:100px 1fr 45px;gap:.5rem}.bar-label.jsx-2693df23583b72b3{font-size:.75rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/visualizations/FeatureImportance.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/visualizations/EraStratification.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/visualizations/EraStratification.jsx
__turbopack_context__.s([
    "default",
    ()=>EraStratification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const eraData = [
    {
        era: 'Ancient',
        period: 'pre-500 BCE',
        n: 77,
        coefficient: -159,
        color: '#4ade80',
        interpretation: 'Complexity strongly hurts duration'
    },
    {
        era: 'Classical',
        period: '500 BCE - 500 CE',
        n: 44,
        coefficient: -20,
        color: '#fb923c',
        interpretation: 'Complexity mildly hurts duration'
    },
    {
        era: 'Medieval',
        period: '500 - 1500 CE',
        n: 92,
        coefficient: -11,
        color: '#60a5fa',
        interpretation: 'Complexity effect nearly zero'
    },
    {
        era: 'Early Modern',
        period: '1500+ CE',
        n: 43,
        coefficient: 6,
        color: '#f472b6',
        interpretation: 'Complexity slightly helps duration'
    }
];
const MAX_COEFFICIENT = 159;
function EraStratification() {
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeEra, setActiveEra] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Intersection observer for scroll trigger
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const element = document.getElementById('era-chart');
        if (!element) return;
        const observer = new IntersectionObserver(([entry])=>entry.isIntersecting && setIsVisible(true), {
            threshold: 0.2
        });
        observer.observe(element);
        return ()=>observer.disconnect();
    }, []);
    // Animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible) return;
        const duration = 1200;
        const start = Date.now();
        const animate = ()=>{
            const elapsed = Date.now() - start;
            const t = Math.min(elapsed / duration, 1);
            setProgress(1 - Math.pow(1 - t, 3)); // ease-out cubic
            if (t < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [
        isVisible
    ]);
    const activeData = eraData.find((e)=>e.era === activeEra);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "era-chart",
        className: "jsx-98a5485de448f12d" + " " + "era-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "jsx-98a5485de448f12d" + " " + "chart-title",
                children: "The Era Effect"
            }, void 0, false, {
                fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "jsx-98a5485de448f12d" + " " + "chart-subtitle",
                children: "How complexity affects duration changes dramatically across historical periods"
            }, void 0, false, {
                fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-98a5485de448f12d" + " " + "chart-area",
                children: [
                    eraData.map((era, index)=>{
                        const barWidthPercent = Math.abs(era.coefficient) / MAX_COEFFICIENT * 100 * progress;
                        const isNegative = era.coefficient < 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onMouseEnter: ()=>setActiveEra(era.era),
                            onMouseLeave: ()=>setActiveEra(null),
                            style: {
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: `all 0.5s ease ${index * 150}ms`
                            },
                            className: "jsx-98a5485de448f12d" + " " + `row ${activeEra === era.era ? 'active' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-98a5485de448f12d" + " " + "label",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-98a5485de448f12d" + " " + "name",
                                            children: era.era
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-98a5485de448f12d" + " " + "period",
                                            children: era.period
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-98a5485de448f12d" + " " + "bar-area",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-98a5485de448f12d" + " " + "half left",
                                            children: isNegative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: `${barWidthPercent}%`,
                                                    backgroundColor: era.color
                                                },
                                                className: "jsx-98a5485de448f12d" + " " + "bar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                                lineNumber: 115,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-98a5485de448f12d" + " " + "center-line"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-98a5485de448f12d" + " " + "half right",
                                            children: !isNegative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: `${barWidthPercent}%`,
                                                    backgroundColor: era.color
                                                },
                                                className: "jsx-98a5485de448f12d" + " " + "bar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-98a5485de448f12d" + " " + "value",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-98a5485de448f12d" + " " + "beta",
                                            children: [
                                                "B = ",
                                                era.coefficient > 0 ? '+' : '',
                                                Math.round(era.coefficient * progress)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-98a5485de448f12d" + " " + "n",
                                            children: [
                                                "n=",
                                                era.n
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, era.era, true, {
                            fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-98a5485de448f12d" + " " + "axis-labels",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-98a5485de448f12d",
                                children: "Complexity Hurts"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-98a5485de448f12d",
                                children: "Complexity Helps"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-98a5485de448f12d" + " " + "interpretation",
                children: activeData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "jsx-98a5485de448f12d",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: activeData.color
                            },
                            className: "jsx-98a5485de448f12d",
                            children: [
                                activeData.era,
                                ":"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this),
                        ' ',
                        activeData.interpretation
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "jsx-98a5485de448f12d",
                    children: [
                        "In the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: '#4ade80'
                            },
                            className: "jsx-98a5485de448f12d",
                            children: "Ancient"
                        }, void 0, false, {
                            fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                            lineNumber: 169,
                            columnNumber: 20
                        }, this),
                        " world, each unit of complexity reduced duration by ~159 years. By the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: '#f472b6'
                            },
                            className: "jsx-98a5485de448f12d",
                            children: "Early Modern"
                        }, void 0, false, {
                            fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                            lineNumber: 171,
                            columnNumber: 20
                        }, this),
                        " period, the relationship reversed."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/visualizations/EraStratification.jsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "98a5485de448f12d",
                children: ".era-container.jsx-98a5485de448f12d{background:var(--bg-secondary);border:1px solid var(--border);border-radius:4px;margin:2rem 0;padding:2rem}.chart-title.jsx-98a5485de448f12d{font-family:var(--font-jetbrains),monospace;text-transform:uppercase;letter-spacing:.1em;color:var(--text-muted);margin-bottom:.25rem;font-size:.8rem}.chart-subtitle.jsx-98a5485de448f12d{color:var(--text-muted);margin-bottom:2rem;font-size:.9rem}.chart-area.jsx-98a5485de448f12d{flex-direction:column;gap:1rem;display:flex}.row.jsx-98a5485de448f12d{cursor:pointer;border-radius:4px;grid-template-columns:120px 1fr 80px;align-items:center;gap:1rem;padding:.5rem;transition:background .2s;display:grid}.row.jsx-98a5485de448f12d:hover,.row.active.jsx-98a5485de448f12d{background:#ffffff08}.label.jsx-98a5485de448f12d{text-align:right}.name.jsx-98a5485de448f12d{color:var(--text-primary);font-size:.9rem;font-weight:500;display:block}.period.jsx-98a5485de448f12d{color:var(--text-muted);font-size:.7rem}.bar-area.jsx-98a5485de448f12d{align-items:center;height:28px;display:flex}.half.jsx-98a5485de448f12d{flex:1;align-items:center;height:20px;display:flex}.half.left.jsx-98a5485de448f12d{justify-content:flex-end}.half.right.jsx-98a5485de448f12d{justify-content:flex-start}.center-line.jsx-98a5485de448f12d{background:var(--text-muted);opacity:.5;flex-shrink:0;width:1px;height:100%}.bar.jsx-98a5485de448f12d{border-radius:2px;height:100%;transition:width .1s linear}.value.jsx-98a5485de448f12d{flex-direction:column;display:flex}.beta.jsx-98a5485de448f12d{font-family:var(--font-jetbrains),monospace;color:var(--text-primary);font-size:.85rem}.n.jsx-98a5485de448f12d{font-family:var(--font-jetbrains),monospace;color:var(--text-muted);font-size:.65rem}.axis-labels.jsx-98a5485de448f12d{color:var(--text-muted);border-top:1px solid var(--border);justify-content:space-between;margin-top:.5rem;padding:1rem 0 0;font-size:.75rem;display:flex}.interpretation.jsx-98a5485de448f12d{background:var(--bg-primary);border-radius:4px;min-height:60px;margin-top:1.5rem;padding:1rem}.interpretation.jsx-98a5485de448f12d p.jsx-98a5485de448f12d{color:var(--text-muted);margin:0;font-size:.9rem;line-height:1.5}.interpretation.jsx-98a5485de448f12d strong.jsx-98a5485de448f12d{color:var(--text-primary)}@media (width<=600px){.row.jsx-98a5485de448f12d{grid-template-columns:90px 1fr 70px}.name.jsx-98a5485de448f12d{font-size:.8rem}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/visualizations/EraStratification.jsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__034762aa._.js.map