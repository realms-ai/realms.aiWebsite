"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ pageInfoQuery)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__]);
([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const pageInfoQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`
*[_type == 'pageInfo'] {
    ...,
    socials[]->
}`;
async function handler(req, res) {
    const pageinformation = await sanityClient.fetch(pageInfoQuery);
    res.status(200).json({
        pageinformation
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ projectQuery)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__]);
([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const projectQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`
*[_type == 'project']`;
async function handler(req, res) {
    const project = await sanityClient.fetch(projectQuery);
    res.status(200).json({
        project
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ skillQuery)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8777);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__]);
([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const skillQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`
*[_type == 'skill']`;
async function handler(req, res) {
    const skill = await sanityClient.fetch(skillQuery);
    res.status(200).json({
        skill
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3505);
/* harmony import */ var components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1547);
/* harmony import */ var components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1079);
/* harmony import */ var components_Skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6471);
/* harmony import */ var components_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(694);
/* harmony import */ var components_ContactUs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2558);
/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8777);
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4260);
/* harmony import */ var _api_getProject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8460);
/* harmony import */ var _api_getSkill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2619);
/* harmony import */ var _api_getPageInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Header__WEBPACK_IMPORTED_MODULE_2__, components_Hero__WEBPACK_IMPORTED_MODULE_3__, components_About__WEBPACK_IMPORTED_MODULE_4__, components_Skills__WEBPACK_IMPORTED_MODULE_5__, components_Projects__WEBPACK_IMPORTED_MODULE_6__, components_ContactUs__WEBPACK_IMPORTED_MODULE_7__, sanity__WEBPACK_IMPORTED_MODULE_8__, _api_getProject__WEBPACK_IMPORTED_MODULE_10__, _api_getSkill__WEBPACK_IMPORTED_MODULE_11__, _api_getPageInfo__WEBPACK_IMPORTED_MODULE_12__]);
([components_Header__WEBPACK_IMPORTED_MODULE_2__, components_Hero__WEBPACK_IMPORTED_MODULE_3__, components_About__WEBPACK_IMPORTED_MODULE_4__, components_Skills__WEBPACK_IMPORTED_MODULE_5__, components_Projects__WEBPACK_IMPORTED_MODULE_6__, components_ContactUs__WEBPACK_IMPORTED_MODULE_7__, sanity__WEBPACK_IMPORTED_MODULE_8__, _api_getProject__WEBPACK_IMPORTED_MODULE_10__, _api_getSkill__WEBPACK_IMPORTED_MODULE_11__, _api_getPageInfo__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Home({ projects , skills , pageInfo  }) {
    if (!pageInfo) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex justify-center items-center bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "rounded-full w-20 h-14 bg-gradient-to-tr from-#F7AB0A to-pink-500",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: " animate-bounce h-20 w-30 rounded-full filter  hover:grayscale-0 cursor-pointer",
                    src: "/realms.png",
                    alt: "loading"
                })
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Realms AI | Answer to you software development needs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "software development"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/realms.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "hero",
                className: "snap-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Hero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    pageInfo: pageInfo
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "about",
                className: "snap-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_About__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    pageInfo: pageInfo
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "skills",
                className: "snap-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Skills__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    skills: skills
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "projects",
                className: "snap-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Projects__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    projects: projects
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "contact",
                className: "snap-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ContactUs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Footer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        ]
    });
}
const getStaticProps = async ()=>{
    const projects = await sanity__WEBPACK_IMPORTED_MODULE_8__/* .sanityClient.fetch */ .i3.fetch(_api_getProject__WEBPACK_IMPORTED_MODULE_10__/* .projectQuery */ .N);
    const skills = await sanity__WEBPACK_IMPORTED_MODULE_8__/* .sanityClient.fetch */ .i3.fetch(_api_getSkill__WEBPACK_IMPORTED_MODULE_11__/* .skillQuery */ .V);
    const pageInfo = await sanity__WEBPACK_IMPORTED_MODULE_8__/* .sanityClient.fetch */ .i3.fetch(_api_getPageInfo__WEBPACK_IMPORTED_MODULE_12__/* .pageInfoQuery */ .r);
    // const projects: projectResponse = await fetch("http://localhost:3000/api/getProject", {
    //   method: "GET", headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(response => {
    //   return response.json()
    // })
    // const skills: skillResponse = await fetch("http://localhost:3000/api/getSkill", {
    //   method: "GET", headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(response => {
    //   return response.json()
    // })
    // const pageInfo: pageResponse = await fetch("http://localhost:3000/api/getPageInfo", {
    //   method: "GET", headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(response => {
    //   return response.json()
    // })
    return {
        props: {
            projects: projects,
            skills: skills,
            pageInfo: pageInfo?.filter((page)=>page.name === "Realms AI")[0]
        },
        revalidate: 30
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8802:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/solid");

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9537:
/***/ ((module) => {

module.exports = require("react-simple-typewriter");

/***/ }),

/***/ 3468:
/***/ ((module) => {

module.exports = require("react-social-icons");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,709], () => (__webpack_exec__(5970)));
module.exports = __webpack_exports__;

})();