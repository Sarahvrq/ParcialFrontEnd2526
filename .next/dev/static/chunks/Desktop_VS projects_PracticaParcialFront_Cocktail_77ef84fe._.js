(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const UnPais = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "95c55a096ecf57a3c570237ca084959ce1e5d557cc9b9debb4b0118c46b39d73") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "95c55a096ecf57a3c570237ca084959ce1e5d557cc9b9debb4b0118c46b39d73";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { name } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [cocktail, setCocktail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [miError, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    let t1;
    if ($[1] !== name) {
        t0 = ()=>{
            decodeURIComponent(String(name));
            getCocktailById(String(name)).then((res)=>{
                setCocktail(res);
            }).catch((e)=>{
                setError(`Error cargando los datos: ${e.message}`);
            }).finally(()=>{
                setLoading(false);
            });
        };
        t1 = [
            name
        ];
        $[1] = name;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = cocktail?.strIngredient1;
    const t3 = cocktail?.strIngredient2;
    const t4 = cocktail?.strIngredient3;
    const t5 = cocktail?.strIngredient4;
    const t6 = cocktail?.strIngredient5;
    let t7;
    if ($[4] !== t2 || $[5] !== t3 || $[6] !== t4 || $[7] !== t5 || $[8] !== t6) {
        t7 = [
            t2,
            t3,
            t4,
            t5,
            t6
        ].filter(Boolean);
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const ingredientes = t7;
    const t8 = cocktail?.strMeasure1;
    const t9 = cocktail?.strMeasure2;
    const t10 = cocktail?.strMeasure3;
    const t11 = cocktail?.strMeasure4;
    const t12 = cocktail?.strMeasure5;
    let t13;
    if ($[10] !== t10 || $[11] !== t11 || $[12] !== t12 || $[13] !== t8 || $[14] !== t9) {
        t13 = [
            t8,
            t9,
            t10,
            t11,
            t12
        ].filter(Boolean);
        $[10] = t10;
        $[11] = t11;
        $[12] = t12;
        $[13] = t8;
        $[14] = t9;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    const medidas = t13;
    let t14;
    if ($[16] !== loading) {
        t14 = loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
            lineNumber: 84,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = loading;
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] !== miError) {
        t15 = miError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: miError
        }, void 0, false, {
            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
            lineNumber: 92,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = miError;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== cocktail || $[21] !== ingredientes || $[22] !== medidas) {
        t16 = cocktail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: cocktail.strDrink
                }, void 0, false, {
                    fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                    lineNumber: 100,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: cocktail.strDrinkThumb,
                    alt: `Bandera de ${cocktail.strDrink}`
                }, void 0, false, {
                    fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                    lineNumber: 100,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "infoCard",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Drink: ",
                                cocktail.strDrink
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 155
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Drink Alternate ",
                                cocktail.strDrinkAlternate
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 188
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Category: ",
                                cocktail.strCategory
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 239
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Alcohol Base ",
                                cocktail.strAlcoholic
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 278
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Glass: ",
                                cocktail.strGlass
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 321
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Instructions: ",
                                cocktail.strInstructionsES
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 354
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Glass: ",
                                cocktail.strGlass
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 403
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Glass: ",
                                cocktail.strGlass
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 436
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: ingredientes.map(_temp)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 469
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: ingredientes.map((ing_0, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        medidas[index_0],
                                        " ",
                                        ing_0
                                    ]
                                }, index_0, true, {
                                    fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 545
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 503
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                    lineNumber: 100,
                    columnNumber: 129
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[20] = cocktail;
        $[21] = ingredientes;
        $[22] = medidas;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== router) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "botonVolver",
            onClick: ()=>router.push("/"),
            children: "Volver"
        }, void 0, false, {
            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = router;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] !== t14 || $[27] !== t15 || $[28] !== t16 || $[29] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "containerDetalle",
            children: [
                t14,
                t15,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t14;
        $[27] = t15;
        $[28] = t16;
        $[29] = t17;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    return t18;
};
_s(UnPais, "i/FbvguZIOO47d37vnaNDnNmeSg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = UnPais;
const __TURBOPACK__default__export__ = UnPais;
function _temp(ing, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: ing
    }, index, false, {
        fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
        lineNumber: 131,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "UnPais");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
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
    var React = __turbopack_context__.r("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
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
"[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_VS%20projects_PracticaParcialFront_Cocktail_77ef84fe._.js.map