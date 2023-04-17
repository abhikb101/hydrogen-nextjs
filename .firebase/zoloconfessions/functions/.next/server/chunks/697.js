"use strict";
exports.id = 697;
exports.ids = [697];
exports.modules = {

/***/ 8906:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: TaxonomySlugProvider, useHeaderContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./.json/posts.json
const posts_namespaceObject = [];
;// CONCATENATED MODULE: ./context/state.js



const HeaderContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext()));
const TaxonomySlugProvider = ({ children  })=>{
    const categories = [
        ...new Set(posts.reduce((acc, post)=>[
                ...acc,
                ...post.frontmatter.categories
            ], []))
    ].map((item)=>({
            name: item,
            url: `/categories/${item.toLowerCase()}`
        }));
    return /*#__PURE__*/ _jsx(HeaderContext.Provider, {
        value: {
            categories
        },
        children: children
    });
};
const useHeaderContext = ()=>{
    return useContext(HeaderContext);
};


/***/ }),

/***/ 697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1360);
/* harmony import */ var _partials_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9183);
/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7601);
/* harmony import */ var context_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8906);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__, _partials_Footer__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__, _partials_Footer__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Base = ({ title , meta_title , description , image , noindex , canonical , children  })=>{
    const { meta_image , meta_author , meta_description  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .metadata */ .Pu;
    const { base_url  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .site */ .lz;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .site.title */ .lz.title)
                    }),
                    canonical && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: canonical,
                        itemProp: "url"
                    }),
                    noindex && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "noindex,nofollow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: meta_author
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .site.title */ .lz.title)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: `${base_url}/${router.asPath.replace("/", "")}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .site.title */ .lz.title)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: `${base_url}${image ? image : meta_image}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: `${base_url}${image ? image : meta_image}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9183:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Footer = ()=>{
    const { copyright  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .params */ .f;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "pt-16 pb-16",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container text-center",
            children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .markdownify */ .gI)(copyright, "p", "text-text")
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7601:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./config/menu.json
const menu_namespaceObject = {};
// EXTERNAL MODULE: ./context/state.js + 1 modules
var state = __webpack_require__(8906);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./layouts/partials/Header.js






const Header = ()=>{
    // router
    const router = useRouter();
    //context
    const { categories  } = useHeaderContext();
    //local state
    const [openMenu, setOpenMenu] = useState(false);
    const [navMenu, setNavMenu] = useState(menu.main.map((item)=>({
            ...item,
            type: "main"
        })));
    useEffect(()=>{
        const matchRoute = menu.main.find((item)=>item.url === router.asPath);
        const navList = [
            ...menu.main
        ];
        if (matchRoute) {
            if (matchRoute.url === "/") {
                const arr = categories.slice(0, 4);
                navList.splice(1, 0, ...arr);
                setNavMenu(navList);
            } else {
                setNavMenu(menu.main);
            }
        } else {
            //if route not match
            navList.splice(1, 0, ...categories);
            navList.splice(navList.length - 2, menu.main.length - 1);
            setNavMenu(navList);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router.asPath,
        menu.main,
        categories
    ]);
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("header", {
            className: `header mt-8 pt-12 pb-3`,
            children: /*#__PURE__*/ _jsxs("nav", {
                className: "navbar container text-center md:text-left",
                children: [
                    /*#__PURE__*/ _jsxs("button", {
                        className: "btn btn-primary inline-flex items-center md:hidden",
                        onClick: ()=>setOpenMenu(!openMenu),
                        children: [
                            openMenu ? /*#__PURE__*/ _jsxs("svg", {
                                className: "mr-1 h-4 w-4 fill-current",
                                viewBox: "0 0 20 20",
                                children: [
                                    /*#__PURE__*/ _jsx("title", {
                                        children: "Menu Close"
                                    }),
                                    /*#__PURE__*/ _jsx("polygon", {
                                        points: "11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2",
                                        transform: "rotate(45 10 10)"
                                    })
                                ]
                            }) : /*#__PURE__*/ _jsxs("svg", {
                                className: "mr-1 h-4 w-4 fill-current",
                                viewBox: "0 0 20 20",
                                children: [
                                    /*#__PURE__*/ _jsx("title", {
                                        children: "Menu Open"
                                    }),
                                    /*#__PURE__*/ _jsx("path", {
                                        d: "M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"
                                    })
                                ]
                            }),
                            "Menu"
                        ]
                    }),
                    router.asPath !== "/" && /*#__PURE__*/ _jsx("div", {
                        className: "hidden text-center md:block",
                        children: /*#__PURE__*/ _jsxs(Link, {
                            className: "mb-12 inline-flex items-center text-primary hover:underline",
                            href: "/",
                            children: [
                                /*#__PURE__*/ _jsx("svg", {
                                    className: "mr-2",
                                    width: "21",
                                    height: "16",
                                    viewBox: "0 0 21 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ _jsx("path", {
                                        d: "M.292892 7.29289c-.3905235.39053-.3905235 1.02369.0 1.41422L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711 8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8 8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107.928932 7.68054.538408 7.04738.538408 6.65685.928932L.292892 7.29289zM21 7H1V9H21V7z",
                                        fill: "currentcolor"
                                    })
                                }),
                                "Back to Home"
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx("ul", {
                        id: "nav-menu",
                        className: `navbar-nav order-3 ${!openMenu && "hidden"} w-full justify-center md:flex md:w-auto md:space-x-2 md:order-1`,
                        children: navMenu.map((menu, i)=>/*#__PURE__*/ _jsx(React.Fragment, {
                                children: menu.hasChildren ? /*#__PURE__*/ _jsxs("li", {
                                    className: "nav-item nav-dropdown group relative",
                                    children: [
                                        /*#__PURE__*/ _jsxs("span", {
                                            className: "nav-link inline-flex items-center",
                                            children: [
                                                menu.name,
                                                /*#__PURE__*/ _jsx("svg", {
                                                    className: "h-4 w-4 fill-current",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ _jsx("path", {
                                                        d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx("ul", {
                                            className: "nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100",
                                            children: menu.children.map((child, i)=>/*#__PURE__*/ _jsx("li", {
                                                    className: "nav-dropdown-item",
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: child.url,
                                                        className: "nav-dropdown-link block",
                                                        children: child.name
                                                    })
                                                }, `children-${i}`))
                                        })
                                    ]
                                }) : /*#__PURE__*/ _jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        onClick: ()=>setOpenMenu(false),
                                        href: menu.url,
                                        className: `nav-link inline-block ${!menu.url.includes("/categories") && "text-dark"} ${router.asPath === menu.url && "nav-link-active"}`,
                                        children: menu.name
                                    })
                                })
                            }, `menu-${i}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const partials_Header = ((/* unused pure expression or super */ null && (Header)));


/***/ }),

/***/ 1360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OI": () => (/* binding */ humanize),
/* harmony export */   "ab": () => (/* binding */ plainify),
/* harmony export */   "gI": () => (/* binding */ markdownify),
/* harmony export */   "lV": () => (/* binding */ slugify)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1578);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([github_slugger__WEBPACK_IMPORTED_MODULE_1__, marked__WEBPACK_IMPORTED_MODULE_2__]);
([github_slugger__WEBPACK_IMPORTED_MODULE_1__, marked__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// slugify
const slugify = (content)=>{
    if (!content) return null;
    return (0,github_slugger__WEBPACK_IMPORTED_MODULE_1__.slug)(content);
};
// markdownify
const markdownify = (content, tag, className)=>{
    if (!content) return null;
    const Tag = tag;
    return tag ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
        className: className,
        dangerouslySetInnerHTML: {
            __html: tag === "div" ? marked__WEBPACK_IMPORTED_MODULE_2__.marked.parse(content) : marked__WEBPACK_IMPORTED_MODULE_2__.marked.parseInline(content)
        }
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: className,
        dangerouslySetInnerHTML: {
            __html: marked__WEBPACK_IMPORTED_MODULE_2__.marked.parseInline(content)
        }
    });
};
// humanize
const humanize = (content)=>{
    if (!content) return null;
    return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(m) {
        return m.toUpperCase();
    });
};
// plainify
const plainify = (content)=>{
    if (!content) return null;
    const mdParsed = marked__WEBPACK_IMPORTED_MODULE_2__.marked.parseInline(String(content));
    const filterBrackets = mdParsed.replace(/<\/?[^>]+(>|$)/gm, "");
    const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    const stripHTML = htmlEntityDecoder(filterSpaces);
    return stripHTML;
};
// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities)=>{
    let entityList = {
        "&nbsp;": " ",
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&#39;": "'"
    };
    let htmlWithoutEntities = htmlWithEntities.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, (entity)=>{
        return entityList[entity];
    });
    return htmlWithoutEntities;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;