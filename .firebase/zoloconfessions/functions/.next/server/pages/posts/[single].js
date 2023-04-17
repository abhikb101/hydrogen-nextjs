"use strict";
(() => {
var exports = {};
exports.id = 823;
exports.ids = [823];
exports.modules = {

/***/ 2204:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4996);
/* harmony import */ var _lib_utils_readingTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8361);
/* harmony import */ var _lib_utils_similarItems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1503);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1360);
/* harmony import */ var _shortcodes_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4113);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1527);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(276);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Baseof__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(697);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4062);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_3__, _Baseof__WEBPACK_IMPORTED_MODULE_9__]);
([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_3__, _Baseof__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const PostSingle = ({ post , mdxContent , slug , posts  })=>{
    const { frontmatter , content  } = post[0];
    let { description , title , date , image , categories  } = frontmatter;
    description = description ? description : content.slice(0, 120);
    const similarPosts = (0,_lib_utils_similarItems__WEBPACK_IMPORTED_MODULE_11__/* .similerItems */ .R)(post, posts, slug);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Baseof__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        title: title,
        description: description,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "pt-20 pb-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mx-auto lg:col-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    className: "mb-12 inline-flex items-center text-primary hover:underline",
                                    href: "/",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: "mr-2",
                                            width: "21",
                                            height: "16",
                                            viewBox: "0 0 21 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M.292892 7.29289c-.3905235.39053-.3905235 1.02369.0 1.41422L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711 8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8 8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107.928932 7.68054.538408 7.04738.538408 6.65685.928932L.292892 7.29289zM21 7H1V9H21V7z",
                                                fill: "currentcolor"
                                            })
                                        }),
                                        "Back to Home"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                    children: [
                                        image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            className: "w-full",
                                            src: image,
                                            height: "500",
                                            width: "1000",
                                            alt: title,
                                            priority: true
                                        }),
                                        (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_3__/* .markdownify */ .gI)(title, "h1", "h2 mt-12"),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "mt-4 mb-8 text-text",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "mb-2 mr-4 inline-block",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        children: [
                                                            categories.map((category, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "inline-block",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                        href: `/categories/${(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_3__/* .slugify */ .lV)(category)}`,
                                                                        className: "mr-3 text-primary",
                                                                        children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_3__/* .humanize */ .OI)(category)
                                                                    })
                                                                }, `category-${i}`)),
                                                            "|"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "mb-2 mr-4 inline-block",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "mr-2 inline-block",
                                                            children: (0,_lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_2__/* .dateFormat */ .v)(date)
                                                        }),
                                                        " ",
                                                        "|"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "mb-2 mr-4 inline-block",
                                                    children: (0,_lib_utils_readingTime__WEBPACK_IMPORTED_MODULE_12__/* .readingTime */ .f)(content)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "content text-left",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__.MDXRemote, {
                                                ...mdxContent,
                                                components: _shortcodes_all__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                                            })
                                        })
                                    ]
                                }),
                                _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .disqus.enable */ .PF.w && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(disqus_react__WEBPACK_IMPORTED_MODULE_5__.DiscussionEmbed, {
                                    shortname: _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .disqus.shortname */ .PF.Q,
                                    config: _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .disqus.settings */ .PF.settings
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pt-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "h2 text-center",
                                children: "Related Posts"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-12 justify-center",
                                children: similarPosts.map((post, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        className: "col-12 mb-6 md:col-4",
                                        post: post
                                    }, "key-" + i))
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostSingle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ readingTime)
/* harmony export */ });
// content reading
const readingTime = (content)=>{
    const WPS = 275 / 60;
    let images = 0;
    const regex = /\w/;
    let words = content.split(" ").filter((word)=>{
        if (word.includes("<img")) {
            images += 1;
        }
        return regex.test(word);
    }).length;
    let imageAdjust = images * 4;
    let imageSecs = 0;
    let imageFactor = 12;
    while(images){
        imageSecs += imageFactor;
        if (imageFactor > 3) {
            imageFactor -= 1;
        }
        images -= 1;
    }
    const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);
    if (minutes < 10) {
        if (minutes < 2) {
            return "0" + minutes + ` Min read`;
        } else {
            return "0" + minutes + ` Mins read`;
        }
    } else {
        return minutes + ` Mins read`;
    }
};


/***/ }),

/***/ 1503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ similerItems)
/* harmony export */ });
// similer products
const similerItems = (currentItem, allItems, slug)=>{
    let categories = [];
    // set categories
    if (currentItem[0].frontmatter.categories.length > 0) {
        categories = currentItem[0].frontmatter.categories;
    }
    // filter by categories
    const filterByCategories = allItems.filter((item)=>categories.find((category)=>item.frontmatter.categories.includes(category)));
    // merged after filter
    const mergedItems = [
        ...new Set([
            ...filterByCategories
        ])
    ];
    // filter by slug
    const filterBySlug = mergedItems.filter((product)=>product.slug !== slug);
    return filterBySlug;
};


/***/ }),

/***/ 3711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _layouts_PostSingle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2204);
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4879);
/* harmony import */ var _lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_PostSingle__WEBPACK_IMPORTED_MODULE_2__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_3__, _lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_4__]);
([_layouts_PostSingle__WEBPACK_IMPORTED_MODULE_2__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_3__, _lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const { blog_folder  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .settings */ .Xd;
// post single layout
const Article = ({ post , mdxContent , slug , posts  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_PostSingle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        mdxContent: mdxContent,
        slug: slug,
        post: post,
        posts: posts
    });
};
// get post single slug
const getStaticPaths = ()=>{
    const allSlug = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_3__/* .getSinglePage */ .il)(`content/${blog_folder}`);
    const paths = allSlug.map((item)=>({
            params: {
                single: item.slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};
// get post single content
const getStaticProps = async ({ params  })=>{
    const { single  } = params;
    const posts = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_3__/* .getSinglePage */ .il)(`content/${blog_folder}`);
    const post = posts?.filter((p)=>p.slug == single);
    const mdxContent = await (0,_lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_4__/* .parseMDX */ .x)(post[0].content);
    return {
        props: {
            post: post,
            mdxContent: mdxContent,
            slug: single,
            posts: posts
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5465:
/***/ ((module) => {

module.exports = require("date-fns-tz");

/***/ }),

/***/ 1527:
/***/ ((module) => {

module.exports = require("disqus-react");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 276:
/***/ ((module) => {

module.exports = require("next-mdx-remote");

/***/ }),

/***/ 7112:
/***/ ((module) => {

module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 727:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 7079:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/hljs");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1578:
/***/ ((module) => {

module.exports = import("github-slugger");;

/***/ }),

/***/ 8974:
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675,580,251,697,62,113], () => (__webpack_exec__(3711)));
module.exports = __webpack_exports__;

})();