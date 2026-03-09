(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/lib/api/axios.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
    timeout: 5000
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/lib/api/cocktail.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCocktails",
    ()=>getAllCocktails,
    "getCocktailByID",
    ()=>getCocktailByID,
    "getRanCocktail",
    ()=>getRanCocktail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/lib/api/axios.ts [app-client] (ecmascript)");
;
const getCocktailByID = async (id)=>{
    const respuesta = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/lookup.php?i=${id}`);
    return respuesta.data.drinks?.[0] ?? null;
};
const getAllCocktails = async ()=>{
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const respuestas = await Promise.all(alphabet.map((letter)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/search.php?f=${letter}`)));
    // Combine all results into one single array
    const allCocktails = respuestas.flatMap((respuesta)=>respuesta.data.drinks ?? []);
    return allCocktails;
};
const getRanCocktail = async ()=>{
    const respuesta = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/random.php`);
    return respuesta.data.drinks?.[0] ?? null;
}; /*export const SearchByIng = async (ingrediente: string) => {
  const respuesta = await api.get(`/filter.php?i=${ingrediente}`)
  return respuesta.data.drinks?.[0] ?? null;
};*/ 
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$cocktail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/lib/api/cocktail.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const UnCocktail = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "9007f645880113382362987fb3ffb3a8a8c75bea3b34a842286bab3f9aef1f64") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9007f645880113382362987fb3ffb3a8a8c75bea3b34a842286bab3f9aef1f64";
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$cocktail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCocktailByID"])(String(name)).then((res)=>{
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
            lineNumber: 83,
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
            lineNumber: 91,
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
                    lineNumber: 99,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: cocktail.strDrinkThumb,
                    alt: `Img de ${cocktail.strDrink}`
                }, void 0, false, {
                    fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                    lineNumber: 99,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "infoCard",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Category: ",
                                cocktail.strCategory
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 99,
                            columnNumber: 151
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Type: ",
                                cocktail.strAlcoholic
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 99,
                            columnNumber: 190
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Instructions: ",
                                cocktail.strInstructions
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 99,
                            columnNumber: 226
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Glass: ",
                                cocktail.strGlass
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 99,
                            columnNumber: 273
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Ingredientes:"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 99,
                            columnNumber: 306
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: ingredientes.map((ing, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        medidas[index],
                                        " ",
                                        ing
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 364
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                            lineNumber: 99,
                            columnNumber: 326
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/cocktail/[name]/page.tsx",
                    lineNumber: 99,
                    columnNumber: 125
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
            lineNumber: 109,
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
            lineNumber: 117,
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
_s(UnCocktail, "i/FbvguZIOO47d37vnaNDnNmeSg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = UnCocktail;
const __TURBOPACK__default__export__ = UnCocktail;
var _c;
__turbopack_context__.k.register(_c, "UnCocktail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_VS%20projects_PracticaParcialFront_Cocktail_src_b428a134._.js.map