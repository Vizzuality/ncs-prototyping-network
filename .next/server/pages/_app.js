/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/media-query/index.ts":
/*!*********************************************!*\
  !*** ./src/components/media-query/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Media\": () => (/* binding */ Media),\n/* harmony export */   \"MediaContextProvider\": () => (/* binding */ MediaContextProvider),\n/* harmony export */   \"mediaStyles\": () => (/* binding */ mediaStyles)\n/* harmony export */ });\n/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @artsy/fresnel */ \"@artsy/fresnel\");\n/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styles_styles_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/styles.config */ \"./src/styles/styles.config.js\");\n/* harmony import */ var styles_styles_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_styles_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst typedScreens = styles_styles_config__WEBPACK_IMPORTED_MODULE_1__.screens;\nconst ExampleAppMedia = (0,_artsy_fresnel__WEBPACK_IMPORTED_MODULE_0__.createMedia)({\n    breakpoints: Object.keys(styles_styles_config__WEBPACK_IMPORTED_MODULE_1__.screens).reduce((res, key)=>({\n            ...res,\n            // We extract the pixel value of the breakpoint (e.g. `'1024px'` => `1024`)\n            [key]: parseInt(typedScreens[key].match(/(\\d+)px/)?.[1] ?? \"0\", 10)\n        }), {\n        // We need a breakpoint starting at 0 to target screens smaller than sm\n        \"0\": 0\n    })\n});\n// Make styles for injection into the header of the page\nconst mediaStyles = ExampleAppMedia.createMediaStyle();\nconst { Media , MediaContextProvider  } = ExampleAppMedia;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tZWRpYS1xdWVyeS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBRUU7QUFDL0MsTUFBTUUsZUFBZUQseURBQU9BO0FBRTVCLE1BQU1FLGtCQUFrQkgsMkRBQVdBLENBSWpDO0lBQ0FJLGFBQWFDLE9BQU9DLElBQUksQ0FBQ0wseURBQU9BLEVBQUVNLE1BQU0sQ0FDdEMsQ0FBQ0MsS0FBS0MsTUFBUztZQUNiLEdBQUdELEdBQUc7WUFDTiwyRUFBMkU7WUFDM0UsQ0FBQ0MsSUFBSSxFQUFFQyxTQUFTUixZQUFZLENBQUNPLElBQUksQ0FBQ0UsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksS0FBSztRQUNsRSxJQUNBO1FBQ0UsdUVBQXVFO1FBQ3ZFLEtBQUs7SUFDUDtBQUVKO0FBRUEsd0RBQXdEO0FBQ2pELE1BQU1DLGNBQWNULGdCQUFnQlUsZ0JBQWdCLEdBQUc7QUFFdkQsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLHFCQUFvQixFQUFFLEdBQUdaLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC1zY2FmZm9sZC8uL3NyYy9jb21wb25lbnRzL21lZGlhLXF1ZXJ5L2luZGV4LnRzPzQzZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCc7XG5cbmltcG9ydCB7IHNjcmVlbnMgfSBmcm9tICdzdHlsZXMvc3R5bGVzLmNvbmZpZyc7XG5jb25zdCB0eXBlZFNjcmVlbnMgPSBzY3JlZW5zIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbmNvbnN0IEV4YW1wbGVBcHBNZWRpYSA9IGNyZWF0ZU1lZGlhPFxuICB7IGJyZWFrcG9pbnRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+IH0sXG4gICcwJyB8IGtleW9mIHR5cGVvZiBzY3JlZW5zLFxuICBuZXZlclxuPih7XG4gIGJyZWFrcG9pbnRzOiBPYmplY3Qua2V5cyhzY3JlZW5zKS5yZWR1Y2UoXG4gICAgKHJlcywga2V5KSA9PiAoe1xuICAgICAgLi4ucmVzLFxuICAgICAgLy8gV2UgZXh0cmFjdCB0aGUgcGl4ZWwgdmFsdWUgb2YgdGhlIGJyZWFrcG9pbnQgKGUuZy4gYCcxMDI0cHgnYCA9PiBgMTAyNGApXG4gICAgICBba2V5XTogcGFyc2VJbnQodHlwZWRTY3JlZW5zW2tleV0ubWF0Y2goLyhcXGQrKXB4Lyk/LlsxXSA/PyAnMCcsIDEwKSxcbiAgICB9KSxcbiAgICB7XG4gICAgICAvLyBXZSBuZWVkIGEgYnJlYWtwb2ludCBzdGFydGluZyBhdCAwIHRvIHRhcmdldCBzY3JlZW5zIHNtYWxsZXIgdGhhbiBzbVxuICAgICAgJzAnOiAwLFxuICAgIH1cbiAgKSxcbn0pO1xuXG4vLyBNYWtlIHN0eWxlcyBmb3IgaW5qZWN0aW9uIGludG8gdGhlIGhlYWRlciBvZiB0aGUgcGFnZVxuZXhwb3J0IGNvbnN0IG1lZGlhU3R5bGVzID0gRXhhbXBsZUFwcE1lZGlhLmNyZWF0ZU1lZGlhU3R5bGUoKTtcblxuZXhwb3J0IGNvbnN0IHsgTWVkaWEsIE1lZGlhQ29udGV4dFByb3ZpZGVyIH0gPSBFeGFtcGxlQXBwTWVkaWE7XG4iXSwibmFtZXMiOlsiY3JlYXRlTWVkaWEiLCJzY3JlZW5zIiwidHlwZWRTY3JlZW5zIiwiRXhhbXBsZUFwcE1lZGlhIiwiYnJlYWtwb2ludHMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwicmVzIiwia2V5IiwicGFyc2VJbnQiLCJtYXRjaCIsIm1lZGlhU3R5bGVzIiwiY3JlYXRlTWVkaWFTdHlsZSIsIk1lZGlhIiwiTWVkaWFDb250ZXh0UHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/media-query/index.ts\n");

/***/ }),

/***/ "./src/lib/analytics/ga.ts":
/*!*********************************!*\
  !*** ./src/lib/analytics/ga.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GAEvent\": () => (/* binding */ GAEvent),\n/* harmony export */   \"GAPage\": () => (/* binding */ GAPage),\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID)\n/* harmony export */ });\nconst GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;\n// log the pageview with their URL\nconst GAPage = (url)=>{\n    if (window.gtag) {\n        window.gtag(\"config\", GA_TRACKING_ID, {\n            page_path: url\n        });\n    }\n};\n// log specific events happening.\nconst GAEvent = ({ action , params  })=>{\n    if (window.gtag) {\n        window.gtag(\"event\", action, params);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2FuYWx5dGljcy9nYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxpQkFBaUJDLFFBQVFDLEdBQUcsQ0FBQ0MsMEJBQTBCLENBQUM7QUFFckUsa0NBQWtDO0FBQzNCLE1BQU1DLFNBQVMsQ0FBQ0MsTUFBc0I7SUFDM0MsSUFBSUMsT0FBT0MsSUFBSSxFQUFFO1FBQ2ZELE9BQU9DLElBQUksQ0FBQyxVQUFVUCxnQkFBZ0I7WUFDcENRLFdBQVdIO1FBQ2I7SUFDRixDQUFDO0FBQ0gsRUFBRTtBQUVGLGlDQUFpQztBQUMxQixNQUFNSSxVQUFVLENBQUMsRUFBRUMsT0FBTSxFQUFFQyxPQUFNLEVBQUUsR0FBVztJQUNuRCxJQUFJTCxPQUFPQyxJQUFJLEVBQUU7UUFDZkQsT0FBT0MsSUFBSSxDQUFDLFNBQVNHLFFBQVFDO0lBQy9CLENBQUM7QUFDSCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLXNjYWZmb2xkLy4vc3JjL2xpYi9hbmFseXRpY3MvZ2EudHM/ZmY4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HQV9UUkFDS0lOR19JRDtcblxuLy8gbG9nIHRoZSBwYWdldmlldyB3aXRoIHRoZWlyIFVSTFxuZXhwb3J0IGNvbnN0IEdBUGFnZSA9ICh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBpZiAod2luZG93Lmd0YWcpIHtcbiAgICB3aW5kb3cuZ3RhZygnY29uZmlnJywgR0FfVFJBQ0tJTkdfSUQsIHtcbiAgICAgIHBhZ2VfcGF0aDogdXJsLFxuICAgIH0pO1xuICB9XG59O1xuXG4vLyBsb2cgc3BlY2lmaWMgZXZlbnRzIGhhcHBlbmluZy5cbmV4cG9ydCBjb25zdCBHQUV2ZW50ID0gKHsgYWN0aW9uLCBwYXJhbXMgfSk6IHZvaWQgPT4ge1xuICBpZiAod2luZG93Lmd0YWcpIHtcbiAgICB3aW5kb3cuZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHBhcmFtcyk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiR0FfVFJBQ0tJTkdfSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR0FfVFJBQ0tJTkdfSUQiLCJHQVBhZ2UiLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiR0FFdmVudCIsImFjdGlvbiIsInBhcmFtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/analytics/ga.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lib_analytics_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/analytics/ga */ \"./src/lib/analytics/ga.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var components_media_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/media-query */ \"./src/components/media-query/index.ts\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__]);\n_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Never ever instantiate the client outside a component, hook or callback as it can leak data\n    // between users\n    const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient());\n    const handleRouteChangeCompleted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((url)=>{\n        (0,lib_analytics_ga__WEBPACK_IMPORTED_MODULE_3__.GAPage)(url);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        router.events.on(\"routeChangeComplete\", handleRouteChangeCompleted);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChangeCompleted);\n        };\n    }, [\n        router.events,\n        handleRouteChangeCompleted\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.Hydrate, {\n            state: pageProps.dehydratedState,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_media_query__WEBPACK_IMPORTED_MODULE_5__.MediaContextProvider, {\n                disableDynamicMediaQueries: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/anamontiaga/Projects/tnc-prototype-dashboard/src/pages/_app.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anamontiaga/Projects/tnc-prototype-dashboard/src/pages/_app.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anamontiaga/Projects/tnc-prototype-dashboard/src/pages/_app.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anamontiaga/Projects/tnc-prototype-dashboard/src/pages/_app.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUdqQjtBQUVFO0FBRXdDO0FBRXBCO0FBRWxDO0FBTTVCLE1BQU1TLFFBQVEsQ0FBQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBdUIsR0FBSztJQUMvRCxNQUFNQyxTQUFTVCxzREFBU0E7SUFFeEIsOEZBQThGO0lBQzlGLGdCQUFnQjtJQUNoQixNQUFNLENBQUNVLFlBQVksR0FBR1gsK0NBQVFBLENBQUMsSUFBTSxJQUFJRyw4REFBV0E7SUFFcEQsTUFBTVMsNkJBQTZCZCxrREFBV0EsQ0FBQyxDQUFDZSxNQUFnQjtRQUM5RFgsd0RBQU1BLENBQUNXO0lBQ1QsR0FBRyxFQUFFO0lBRUxkLGdEQUFTQSxDQUFDLElBQU07UUFDZFcsT0FBT0ksTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCSDtRQUV4QyxPQUFPLElBQU07WUFDWEYsT0FBT0ksTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCSjtRQUMzQztJQUNGLEdBQUc7UUFBQ0YsT0FBT0ksTUFBTTtRQUFFRjtLQUEyQjtJQUU5QyxxQkFDRSw4REFBQ1Isc0VBQW1CQTtRQUFDYSxRQUFRTjtrQkFDM0IsNEVBQUNOLDBEQUFPQTtZQUFDYSxPQUFPVCxVQUFVVSxlQUFlO3NCQUN2Qyw0RUFBQ2Isd0VBQW9CQTtnQkFBQ2MsMEJBQTBCOzBCQUM5Qyw0RUFBQ1o7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQtc2NhZmZvbGQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHsgR0FQYWdlIH0gZnJvbSAnbGliL2FuYWx5dGljcy9nYSc7XG5cbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyLCBIeWRyYXRlIH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcblxuaW1wb3J0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIgfSBmcm9tICdjb21wb25lbnRzL21lZGlhLXF1ZXJ5JztcblxuaW1wb3J0ICdzdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG50eXBlIFBhZ2VQcm9wcyA9IHtcbiAgZGVoeWRyYXRlZFN0YXRlOiB1bmtub3duO1xufTtcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wczxQYWdlUHJvcHM+KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIE5ldmVyIGV2ZXIgaW5zdGFudGlhdGUgdGhlIGNsaWVudCBvdXRzaWRlIGEgY29tcG9uZW50LCBob29rIG9yIGNhbGxiYWNrIGFzIGl0IGNhbiBsZWFrIGRhdGFcbiAgLy8gYmV0d2VlbiB1c2Vyc1xuICBjb25zdCBbcXVlcnlDbGllbnRdID0gdXNlU3RhdGUoKCkgPT4gbmV3IFF1ZXJ5Q2xpZW50KCkpO1xuXG4gIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlQ29tcGxldGVkID0gdXNlQ2FsbGJhY2soKHVybDogc3RyaW5nKSA9PiB7XG4gICAgR0FQYWdlKHVybCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlZCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlZCk7XG4gICAgfTtcbiAgfSwgW3JvdXRlci5ldmVudHMsIGhhbmRsZVJvdXRlQ2hhbmdlQ29tcGxldGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxIeWRyYXRlIHN0YXRlPXtwYWdlUHJvcHMuZGVoeWRyYXRlZFN0YXRlfT5cbiAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyIGRpc2FibGVEeW5hbWljTWVkaWFRdWVyaWVzPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cbiAgICAgIDwvSHlkcmF0ZT5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiR0FQYWdlIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiSHlkcmF0ZSIsIk1lZGlhQ29udGV4dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJxdWVyeUNsaWVudCIsImhhbmRsZVJvdXRlQ2hhbmdlQ29tcGxldGVkIiwidXJsIiwiZXZlbnRzIiwib24iLCJvZmYiLCJjbGllbnQiLCJzdGF0ZSIsImRlaHlkcmF0ZWRTdGF0ZSIsImRpc2FibGVEeW5hbWljTWVkaWFRdWVyaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/styles.config.js":
/*!*************************************!*\
  !*** ./src/styles/styles.config.js ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("/**\n * This file contain Tailwind CSS variables that are shared between the JS bundle and the Tailwind\n * configuration file (tailwind.config.js). Only add here variables that you want to access from the\n * JS/TS files.\n *\n * Please follow the Tailwind syntax in this file.\n */ \nmodule.exports = {\n    screens: {\n        sm: \"640px\",\n        md: \"768px\",\n        lg: \"1024px\",\n        xl: \"1280px\",\n        \"2xl\": \"1536px\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3N0eWxlcy5jb25maWcuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztDQU1DO0FBQ0RBLE9BQU9DLE9BQU8sR0FBRztJQUNmQyxTQUFTO1FBQ1BDLElBQUk7UUFDSkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7UUFDSixPQUFPO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC1zY2FmZm9sZC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNvbmZpZy5qcz9iYzQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW4gVGFpbHdpbmQgQ1NTIHZhcmlhYmxlcyB0aGF0IGFyZSBzaGFyZWQgYmV0d2VlbiB0aGUgSlMgYnVuZGxlIGFuZCB0aGUgVGFpbHdpbmRcbiAqIGNvbmZpZ3VyYXRpb24gZmlsZSAodGFpbHdpbmQuY29uZmlnLmpzKS4gT25seSBhZGQgaGVyZSB2YXJpYWJsZXMgdGhhdCB5b3Ugd2FudCB0byBhY2Nlc3MgZnJvbSB0aGVcbiAqIEpTL1RTIGZpbGVzLlxuICpcbiAqIFBsZWFzZSBmb2xsb3cgdGhlIFRhaWx3aW5kIHN5bnRheCBpbiB0aGlzIGZpbGUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzY3JlZW5zOiB7XG4gICAgc206ICc2NDBweCcsXG4gICAgbWQ6ICc3NjhweCcsXG4gICAgbGc6ICcxMDI0cHgnLFxuICAgIHhsOiAnMTI4MHB4JyxcbiAgICAnMnhsJzogJzE1MzZweCcsXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzY3JlZW5zIiwic20iLCJtZCIsImxnIiwieGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/styles.config.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@artsy/fresnel":
/*!*********************************!*\
  !*** external "@artsy/fresnel" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@artsy/fresnel");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();