(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6991:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Roboto_280e88', '__Roboto_Fallback_280e88', Helvetica, Arial, sans-serif","fontStyle":"normal"},
	"className": "__className_280e88"
};


/***/ }),

/***/ 8257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/CssBaseline"
var CssBaseline_ = __webpack_require__(4960);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/utils/theme.ts
var theme = __webpack_require__(3309);
// EXTERNAL MODULE: ./src/utils/createEmotionCache.ts
var createEmotionCache = __webpack_require__(1843);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: ./store/counter/counterSlice.ts

const initialState = {
    value: 0
};
const counterSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        }
    }
});
// Action creators are generated for each case reducer function
const { increment , decrement  } = counterSlice.actions;
/* harmony default export */ const counter_counterSlice = (counterSlice.reducer);

;// CONCATENATED MODULE: ./store/reducers.tsx


const reducers = (0,external_redux_namespaceObject.combineReducers)({
    counter: counter_counterSlice
});
/* harmony default export */ const store_reducers = (reducers);

;// CONCATENATED MODULE: ./store/store.ts


const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: store_reducers
});

;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: ./pages/_app.tsx









// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
        store: store,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
            value: emotionCache,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
                    theme: theme/* default */.Z,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 1913:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ 5193:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 4960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 5574:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [609], () => (__webpack_exec__(8257)));
module.exports = __webpack_exports__;

})();