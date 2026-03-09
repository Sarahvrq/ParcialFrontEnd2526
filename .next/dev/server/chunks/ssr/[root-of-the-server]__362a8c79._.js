module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/lib/api/axios.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
    timeout: 5000
});
const __TURBOPACK__default__export__ = api;
}),
"[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/lib/api/cocktail.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCocktails",
    ()=>getAllCocktails,
    "getCocktailByID",
    ()=>getCocktailByID,
    "getRanCocktail",
    ()=>getRanCocktail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/lib/api/axios.ts [app-ssr] (ecmascript)");
;
const getCocktailByID = async (id)=>{
    const respuesta = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/lookup.php?i=${id}`);
    return respuesta.data.drinks?.[0] ?? null;
};
const getAllCocktails = async ()=>{
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const respuestas = await Promise.all(alphabet.map((letter)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/search.php?f=${letter}`)));
    // Combine all results into one single array
    const allCocktails = respuestas.flatMap((respuesta)=>respuesta.data.drinks ?? []);
    return allCocktails;
};
const getRanCocktail = async ()=>{
    const respuesta = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/random.php`);
    return respuesta.data.drinks?.[0] ?? null;
}; /*export const SearchByIng = async (ingrediente: string) => {
  const respuesta = await api.get(`/filter.php?i=${ingrediente}`)
  return respuesta.data.drinks?.[0] ?? null;
};*/ 
}),
"[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$cocktail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/lib/api/cocktail.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/Cocktail/cocktailList'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
;
const Main = ()=>{
    const [searchFiltro, setSearchFiltro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchFiltroIng, setSearchFiltroIng] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cocktails, setCocktails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cocktail, setCocktail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(12);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$cocktail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllCocktails"])().then((res)=>{
            const sorted = res.sort((a, b)=>a.strDrink.localeCompare(b.strDrink));
            setCocktails(sorted);
        }).catch((e)=>{
            setError(`Error cargando los datos: ${e.message}`);
        }).finally(()=>{
            setLoading(false);
        });
    }, []);
    //para ser igual, copiamos lo mismo que tenemos para la cajita:
    const ingredientes = [
        cocktail?.strIngredient1,
        cocktail?.strIngredient2,
        cocktail?.strIngredient3,
        cocktail?.strIngredient4,
        cocktail?.strIngredient5
    ].filter(Boolean);
    const medidas = [
        cocktail?.strMeasure1,
        cocktail?.strMeasure2,
        cocktail?.strMeasure3,
        cocktail?.strMeasure4,
        cocktail?.strMeasure5
    ].filter(Boolean);
    //filtrado
    const filtrados = cocktails.filter((c)=>c.strDrink.toLowerCase().includes(searchFiltro.toLowerCase()));
    /*filtrado por ingrediente
  const combinados = cocktails.filter((c) => {
    const matchNombre = c.strDrink
      .toLowerCase()
      .includes(searchFiltro.toLowerCase());
    const matchIngrediente =
      c.strIngredient1?.toLowerCase().includes(searchFiltroIng.toLowerCase()) ||
      c.strIngredient2?.toLowerCase().includes(searchFiltroIng.toLowerCase()) ||
      c.strIngredient3?.toLowerCase().includes(searchFiltroIng.toLowerCase()) ||
      c.strIngredient4?.toLowerCase().includes(searchFiltroIng.toLowerCase()) ||
      c.strIngredient5?.toLowerCase().includes(searchFiltroIng.toLowerCase());

    return matchNombre || matchIngrediente;
  });*/ //randomizer
    const handleRandomClick = async ()=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$src$2f$lib$2f$api$2f$cocktail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRanCocktail"])();
        setCocktail(result);
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mainContainer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "tituloPrincipal",
                children: "Encuentra tu Cocktail"
            }, void 0, false, {
                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "subtitulo",
                children: "By Sarah Rojas"
            }, void 0, false, {
                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "CajitaFiltro",
                type: "text",
                placeholder: "Buscar cocktail...",
                value: searchFiltro,
                onChange: (e)=>setSearchFiltro(e.target.value)
            }, void 0, false, {
                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CocktailList, {
                cocktails: filtrados.slice(0, visibleCount)
            }, void 0, false, {
                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            visibleCount < filtrados.length && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "botonCargarMas",
                onClick: ()=>setVisibleCount((prev)=>prev + 12),
                children: "Cargar más"
            }, void 0, false, {
                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "BotonRandom",
                        onClick: handleRandomClick,
                        disabled: loading,
                        children: loading ? "Loading..." : "Get Random Cocktail"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    cocktail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "infoCardRandom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: cocktail.strDrink
                            }, void 0, false, {
                                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: cocktail.strDrinkThumb,
                                alt: `Img de ${cocktail.strDrink}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Category: ",
                                    cocktail.strCategory
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Type: ",
                                    cocktail.strAlcoholic
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Instructions: ",
                                    cocktail.strInstructions
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Glass: ",
                                    cocktail.strGlass
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Ingredientes:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: ingredientes.map((ing, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            medidas[index],
                                            " ",
                                            ing
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                lineNumber: 135,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$VS__projects$2f$PracticaParcialFront$2f$Cocktail$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: error
            }, void 0, false, {
                fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
                lineNumber: 136,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/VS projects/PracticaParcialFront/Cocktail/src/app/page.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Main;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__362a8c79._.js.map