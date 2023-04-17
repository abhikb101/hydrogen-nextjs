"use strict";
exports.id = 62;
exports.ids = [62];
exports.modules = {

/***/ 4062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4996);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const { blog_folder  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .settings */ .Xd;
const Post = ({ post , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "card",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "flex items-center space-x-4",
                    children: post.frontmatter.categories.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "text-primary",
                                href: `/categories/${category.toLowerCase()}`,
                                children: category
                            })
                        }, index))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "my-4",
                    children: (0,_lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_2__/* .dateFormat */ .v)(post.frontmatter.date)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "h3 mb-2 font-normal",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/${blog_folder}/${post.slug}`,
                        className: "block",
                        children: post.frontmatter.title
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    className: "btn-link mt-7 inline-flex items-center hover:text-primary",
                    href: `/${blog_folder}/${post.slug}`,
                    children: [
                        "Continue Reading",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "ml-1",
                            width: "22",
                            height: "11",
                            viewBox: "0 0 16 8",
                            fill: "currentcolor",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M15.3536 4.35355c.1952-.19526.1952-.51184.0-.7071L12.1716.464467C11.9763.269205 11.6597.269205 11.4645.464467c-.1953.195262-.1953.511845.0.707103L14.2929 4 11.4645 6.82843c-.1953.19526-.1953.51184.0.7071C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553l3.182-3.18198zM-.437114e-7 4.5H15v-1H.437114e-7l-.874228e-7 1z"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);


/***/ }),

/***/ 4996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ dateFormat)
/* harmony export */ });
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5465);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_tz__WEBPACK_IMPORTED_MODULE_0__);

const dateFormat = (date, format, region)=>{
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_0__.formatInTimeZone)(date, region ? region : "America/New_York", format ? format : "dd MMM yyyy");
};


/***/ })

};
;