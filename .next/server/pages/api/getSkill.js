"use strict";
(() => {
var exports = {};
exports.id = 467;
exports.ids = [467];
exports.modules = {

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ 459:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i3": () => (/* binding */ sanityClient)
/* harmony export */ });
/* unused harmony exports config, urlFor */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);
next_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const config = {
    projectId: "4hzacqb1",
    dataset: "production" || 0,
    apiVersion: "2023-02-25",
    useCdn: "production" == "production"
};
const sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);
const urlFor = (source)=>createImageUrlBuilder(config).image(source);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "skillQuery": () => (/* binding */ skillQuery)
/* harmony export */ });
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(459);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__]);
([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const skillQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`
*[_type == 'skill']`;
async function handler(req, res) {
    const skill = await _sanity__WEBPACK_IMPORTED_MODULE_1__/* .sanityClient.fetch */ .i3.fetch(skillQuery);
    res.status(200).json({
        skill
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8860));
module.exports = __webpack_exports__;

})();