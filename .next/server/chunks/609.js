"use strict";
exports.id = 609;
exports.ids = [609];
exports.modules = {

/***/ 1843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);

const isBrowser = typeof document !== "undefined";
// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    let insertionPoint;
    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
        insertionPoint = emotionInsertionPoint ?? undefined;
    }
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
        key: "mui-style",
        insertionPoint
    });
}


/***/ }),

/***/ 3309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* reexport default from dynamic */ next_font_google_target_css_path_src_utils_theme_ts_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_font_google_target_css_path_src_utils_theme_ts_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6991);
/* harmony import */ var next_font_google_target_css_path_src_utils_theme_ts_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_utils_theme_ts_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5574);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);



// Create a theme instance.
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    palette: {
        primary: {
            light: "#69696a",
            main: "#28282a",
            dark: "#1e1e1f"
        },
        secondary: {
            light: "#fff5f8",
            main: "#ff3366",
            dark: "#e62958"
        },
        warning: {
            main: "#ffc071",
            dark: "#ffb25e"
        },
        error: {
            light: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red[50],
            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red[500],
            dark: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red[700]
        },
        success: {
            light: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.green[50],
            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.green[500],
            dark: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.green[700]
        }
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);



/***/ })

};
;