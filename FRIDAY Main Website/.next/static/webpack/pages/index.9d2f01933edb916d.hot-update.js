"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CounterCard(param) {\n    let { value , limit , label , color  } = param;\n    console.log(limit);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-xs shadow-2xl p-8 flex-grow-0 flex-shrink-0 w-1/2 mr-4 border border-gray-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-3xl font-bold \".concat(color, \" mb-2\"),\n                children: [\n                    value,\n                    \" \",\n                    limit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-black\",\n                        children: [\n                            \"/ \",\n                            limit\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 27\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-sm text-gray-700 uppercase tracking-wide\",\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = CounterCard;\nfunction IncomingRequestsCard(param) {\n    let { logs  } = param;\n    const unsuccessful = logs.filter((log)=>!log.success).slice(0, 3);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-xs shadow-2xl p-8 ml-2 overflow-y-scroll border border-gray-400\",\n        style: {\n            maxHeight: \"400px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-sm text-gray-700 uppercase tracking-wide mb-4\",\n                children: \"Latest Unsuccessful Requests\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-gray-800\",\n                children: unsuccessful.map((log, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RequestContainer, {\n                        log: log\n                    }, index, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c1 = IncomingRequestsCard;\nfunction RequestContainer(param) {\n    let { log  } = param;\n    const { question , answer , success  } = log;\n    const successColor = success ? \"text-green-500\" : \"text-red-500\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border border-green-500 rounded-md p-4 flex items-center justify-between mb-4 shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold\",\n                        children: \"Question:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-700\",\n                        children: question\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold mt-4\",\n                        children: \"Answer:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm font-bold \".concat(successColor),\n                        children: answer\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-200 rounded-full px-2 py-1 \".concat(successColor),\n                children: success ? \"Answered\" : \"Unanswered\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_c2 = RequestContainer;\nfunction Home() {\n    _s();\n    const [totalQueries, setTotalQueries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [unansweredQueries, setUnansweredQueries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [logs, setLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { getUid  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // Added limit state\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                if (getUid() && (getUid() === \"lZLIC6fK2WQOvIxyXKECEjx625w1\" || getUid() === \"Hoz3NtloWXX7MciVcTn8BNAHIJs1\")) {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://friday-backend-server-new.herokuapp.com/queries/log\");\n                    const { queries , totalQueriesCount , unansweredQueriesCount  } = response.data;\n                    setLogs(queries);\n                    setTotalQueries(totalQueriesCount);\n                    setUnansweredQueries(unansweredQueriesCount);\n                }\n                const userInfoResponse = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://friday-backend-server.herokuapp.com/userInfo\", {\n                    params: {\n                        uid: getUid()\n                    }\n                });\n                console.log(userInfoResponse);\n                const userLimit = userInfoResponse.data.limit;\n                console.log(userLimit);\n                setLimit(userLimit);\n            } catch (error) {\n                console.error(error);\n            } finally{\n                setIsLoading(false);\n            }\n        }\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"pt-8 px-4 sm:px-6 lg:px-8 mr-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-4 text-green-900\",\n                children: \"My Dashboard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CounterCard, {\n                        value: \"\".concat(totalQueries),\n                        limit: limit,\n                        label: \"Total Queries / Limit\",\n                        color: \"text-green-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CounterCard, {\n                        value: unansweredQueries,\n                        label: \"Unanswered Queries\",\n                        color: \"text-red-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"animate-spin h-8 w-8 text-gray-600\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    fill: \"none\",\n                    viewBox: \"0 0 24 24\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            className: \"opacity-25\",\n                            cx: \"12\",\n                            cy: \"12\",\n                            r: \"10\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 128,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            className: \"opacity-75\",\n                            fill: \"currentColor\",\n                            d: \"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 136,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 122,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 121,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IncomingRequestsCard, {\n                logs: logs\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 144,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"7CUiLNzBZToYAeefTKsMBJe4Zvo=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c3 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"CounterCard\");\n$RefreshReg$(_c1, \"IncomingRequestsCard\");\n$RefreshReg$(_c2, \"RequestContainer\");\n$RefreshReg$(_c3, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gQ291bnRlckNhcmQoeyB2YWx1ZSwgbGltaXQsIGxhYmVsLCBjb2xvciB9KSB7XHJcbiAgY29uc29sZS5sb2cobGltaXQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteHMgc2hhZG93LTJ4bCBwLTggZmxleC1ncm93LTAgZmxleC1zaHJpbmstMCB3LTEvMiBtci00IGJvcmRlciBib3JkZXItZ3JheS00MDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LTN4bCBmb250LWJvbGQgJHtjb2xvcn0gbWItMmB9PlxyXG4gICAgICAgIHt2YWx1ZX0ge2xpbWl0ICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj4vIHtsaW1pdH08L3NwYW4+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5cclxuICAgICAgICB7bGFiZWx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSW5jb21pbmdSZXF1ZXN0c0NhcmQoeyBsb2dzIH0pIHtcclxuICBjb25zdCB1bnN1Y2Nlc3NmdWwgPSBsb2dzLmZpbHRlcigobG9nKSA9PiAhbG9nLnN1Y2Nlc3MpLnNsaWNlKDAsIDMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YGJnLXdoaXRlIHJvdW5kZWQteHMgc2hhZG93LTJ4bCBwLTggbWwtMiBvdmVyZmxvdy15LXNjcm9sbCBib3JkZXIgYm9yZGVyLWdyYXktNDAwYH1cclxuICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBcIjQwMHB4XCIgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgbWItNFwiPlxyXG4gICAgICAgIExhdGVzdCBVbnN1Y2Nlc3NmdWwgUmVxdWVzdHNcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgIHt1bnN1Y2Nlc3NmdWwubWFwKChsb2csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8UmVxdWVzdENvbnRhaW5lciBrZXk9e2luZGV4fSBsb2c9e2xvZ30gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZXF1ZXN0Q29udGFpbmVyKHsgbG9nIH0pIHtcclxuICBjb25zdCB7IHF1ZXN0aW9uLCBhbnN3ZXIsIHN1Y2Nlc3MgfSA9IGxvZztcclxuICBjb25zdCBzdWNjZXNzQ29sb3IgPSBzdWNjZXNzID8gXCJ0ZXh0LWdyZWVuLTUwMFwiIDogXCJ0ZXh0LXJlZC01MDBcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmVlbi01MDAgcm91bmRlZC1tZCBwLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTQgc2hhZG93LXNtXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5RdWVzdGlvbjo8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57cXVlc3Rpb259PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgbXQtNFwiPkFuc3dlcjo8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtc20gZm9udC1ib2xkICR7c3VjY2Vzc0NvbG9yfWB9PnthbnN3ZXJ9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBweC0yIHB5LTEgJHtzdWNjZXNzQ29sb3J9YH0+XHJcbiAgICAgICAge3N1Y2Nlc3MgPyBcIkFuc3dlcmVkXCIgOiBcIlVuYW5zd2VyZWRcIn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFt0b3RhbFF1ZXJpZXMsIHNldFRvdGFsUXVlcmllc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdW5hbnN3ZXJlZFF1ZXJpZXMsIHNldFVuYW5zd2VyZWRRdWVyaWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtsb2dzLCBzZXRMb2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgeyBnZXRVaWQgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKDApOyAvLyBBZGRlZCBsaW1pdCBzdGF0ZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGdldFVpZCgpICYmXHJcbiAgICAgICAgICAoZ2V0VWlkKCkgPT09IFwibFpMSUM2ZksyV1FPdkl4eVhLRUNFang2MjV3MVwiIHx8XHJcbiAgICAgICAgICAgIGdldFVpZCgpID09PSBcIkhvejNOdGxvV1hYN01jaVZjVG44Qk5BSElKczFcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICBcImh0dHBzOi8vZnJpZGF5LWJhY2tlbmQtc2VydmVyLW5ldy5oZXJva3VhcHAuY29tL3F1ZXJpZXMvbG9nXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCB7IHF1ZXJpZXMsIHRvdGFsUXVlcmllc0NvdW50LCB1bmFuc3dlcmVkUXVlcmllc0NvdW50IH0gPVxyXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgc2V0TG9ncyhxdWVyaWVzKTtcclxuICAgICAgICAgIHNldFRvdGFsUXVlcmllcyh0b3RhbFF1ZXJpZXNDb3VudCk7XHJcbiAgICAgICAgICBzZXRVbmFuc3dlcmVkUXVlcmllcyh1bmFuc3dlcmVkUXVlcmllc0NvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICBcImh0dHBzOi8vZnJpZGF5LWJhY2tlbmQtc2VydmVyLmhlcm9rdWFwcC5jb20vdXNlckluZm9cIixcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgdWlkOiBnZXRVaWQoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvUmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJMaW1pdCA9IHVzZXJJbmZvUmVzcG9uc2UuZGF0YS5saW1pdDtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyTGltaXQpO1xyXG4gICAgICAgIHNldExpbWl0KHVzZXJMaW1pdCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwicHQtOCBweC00IHNtOnB4LTYgbGc6cHgtOCBtci0yXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNCB0ZXh0LWdyZWVuLTkwMFwiPk15IERhc2hib2FyZDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWItOFwiPlxyXG4gICAgICAgIDxDb3VudGVyQ2FyZFxyXG4gICAgICAgICAgdmFsdWU9e2Ake3RvdGFsUXVlcmllc31gfVxyXG4gICAgICAgICAgbGltaXQ9e2xpbWl0fVxyXG4gICAgICAgICAgbGFiZWw9XCJUb3RhbCBRdWVyaWVzIC8gTGltaXRcIlxyXG4gICAgICAgICAgY29sb3I9XCJ0ZXh0LWdyZWVuLTUwMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q291bnRlckNhcmRcclxuICAgICAgICAgIHZhbHVlPXt1bmFuc3dlcmVkUXVlcmllc31cclxuICAgICAgICAgIGxhYmVsPVwiVW5hbnN3ZXJlZCBRdWVyaWVzXCJcclxuICAgICAgICAgIGNvbG9yPVwidGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiBoLTggdy04IHRleHQtZ3JheS02MDBcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktMjVcIlxyXG4gICAgICAgICAgICAgIGN4PVwiMTJcIlxyXG4gICAgICAgICAgICAgIGN5PVwiMTJcIlxyXG4gICAgICAgICAgICAgIHI9XCIxMFwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjRcIlxyXG4gICAgICAgICAgICA+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS03NVwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgZD1cIk00IDEyYTggOCAwIDAxOC04VjBDNS4zNzMgMCAwIDUuMzczIDAgMTJoNHptMiA1LjI5MUE3Ljk2MiA3Ljk2MiAwIDAxNCAxMkgwYzAgMy4wNDIgMS4xMzUgNS44MjQgMyA3LjkzOGwzLTIuNjQ3elwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8SW5jb21pbmdSZXF1ZXN0c0NhcmQgbG9ncz17bG9nc30gLz5cclxuICAgICAgKX1cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZUF1dGgiLCJDb3VudGVyQ2FyZCIsInZhbHVlIiwibGltaXQiLCJsYWJlbCIsImNvbG9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJJbmNvbWluZ1JlcXVlc3RzQ2FyZCIsImxvZ3MiLCJ1bnN1Y2Nlc3NmdWwiLCJmaWx0ZXIiLCJzdWNjZXNzIiwic2xpY2UiLCJzdHlsZSIsIm1heEhlaWdodCIsIm1hcCIsImluZGV4IiwiUmVxdWVzdENvbnRhaW5lciIsInF1ZXN0aW9uIiwiYW5zd2VyIiwic3VjY2Vzc0NvbG9yIiwiSG9tZSIsInRvdGFsUXVlcmllcyIsInNldFRvdGFsUXVlcmllcyIsInVuYW5zd2VyZWRRdWVyaWVzIiwic2V0VW5hbnN3ZXJlZFF1ZXJpZXMiLCJzZXRMb2dzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZ2V0VWlkIiwic2V0TGltaXQiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsInF1ZXJpZXMiLCJ0b3RhbFF1ZXJpZXNDb3VudCIsInVuYW5zd2VyZWRRdWVyaWVzQ291bnQiLCJkYXRhIiwidXNlckluZm9SZXNwb25zZSIsInBhcmFtcyIsInVpZCIsInVzZXJMaW1pdCIsImVycm9yIiwibWFpbiIsImgxIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsImNpcmNsZSIsImN4IiwiY3kiLCJyIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});