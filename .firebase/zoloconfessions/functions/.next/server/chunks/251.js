"use strict";
exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 4879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bk": () => (/* binding */ getRegularPage),
/* harmony export */   "il": () => (/* binding */ getSinglePage)
/* harmony export */ });
/* unused harmony export getListPage */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_mdxParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_mdxParser__WEBPACK_IMPORTED_MODULE_3__]);
_utils_mdxParser__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// get list page data, ex: _index.md
const getListPage = async (filePath)=>{
    const pageData = fs.readFileSync(path.join(filePath), "utf-8");
    const pageDataParsed = matter(pageData);
    const notFoundPage = fs.readFileSync(path.join("content/404.md"), "utf-8");
    const notFoundDataParsed = matter(notFoundPage);
    let frontmatter, content;
    if (pageDataParsed) {
        content = pageDataParsed.content;
        frontmatter = pageDataParsed.data;
    } else {
        content = notFoundDataParsed.content;
        frontmatter = notFoundDataParsed.data;
    }
    const mdxContent = await parseMDX(content);
    return {
        frontmatter,
        content,
        mdxContent
    };
};
// get all single pages, ex: blog/post.md
const getSinglePage = (folder)=>{
    const filesPath = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(folder));
    const sanitizeFiles = filesPath.filter((file)=>file.includes(".md"));
    const filterSingleFiles = sanitizeFiles.filter((file)=>file.match(/^(?!_)/));
    const singlePages = filterSingleFiles.map((filename)=>{
        const slug = filename.replace(".md", "");
        const pageData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(folder, filename), "utf-8");
        const pageDataParsed = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(pageData);
        const frontmatterString = JSON.stringify(pageDataParsed.data);
        const frontmatter = JSON.parse(frontmatterString);
        const content = pageDataParsed.content;
        const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;
        return {
            frontmatter: frontmatter,
            slug: url,
            content: content
        };
    });
    const publishedPages = singlePages.filter((page)=>!page.frontmatter.draft && page.frontmatter.layout !== "404" && page);
    const filterByDate = publishedPages.filter((page)=>new Date(page.frontmatter.date || new Date()) <= new Date());
    return filterByDate;
};
// get a regular page data from many pages, ex: about.md
const getRegularPage = async (slug)=>{
    const publishedPages = getSinglePage("content");
    const pageData = publishedPages.filter((data)=>data.slug === slug);
    const notFoundPage = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join("content/404.md"), "utf-8");
    const notFoundDataParsed = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(notFoundPage);
    let frontmatter, content;
    if (pageData[0]) {
        content = pageData[0].content;
        frontmatter = pageData[0].frontmatter;
    } else {
        content = notFoundDataParsed.content;
        frontmatter = notFoundDataParsed.data;
    }
    const mdxContent = await (0,_utils_mdxParser__WEBPACK_IMPORTED_MODULE_3__/* .parseMDX */ .x)(content);
    return {
        frontmatter,
        content,
        mdxContent
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ parseMDX)
/* harmony export */ });
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7112);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7752);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6809);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([rehype_slug__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__]);
([rehype_slug__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// mdx content parser
const parseMDX = async (content)=>{
    const options = {
        mdxOptions: {
            rehypePlugins: [
                rehype_slug__WEBPACK_IMPORTED_MODULE_1__["default"]
            ],
            remarkPlugins: [
                remark_gfm__WEBPACK_IMPORTED_MODULE_2__["default"]
            ]
        }
    };
    return await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__.serialize)(content, options);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6626:
/***/ ((module) => {

module.exports = JSON.parse('{"lz":{"title":"Hydrogen Nextjs","base_url":"/","favicon":"/images/developer.png"},"Xd":{"pagination":6,"summary_length":200,"blog_folder":"posts"},"N5":{"name":"Zolo Confessions","bio":"A Full Stack Front-end Developer based in New York. Meticulous web developer with over 2 years of front end experience and passion for responsive and mobile-first website design."},"f":{"contact_form_action":"#","tag_manager_id":"","copyright":"Copyright © 2022 a theme by [statichunt](https://statichunt.com)"},"Pu":{"meta_author":"Statichunt","meta_image":"","meta_description":""},"PF":{"w":true,"Q":"themefisher-template"}}');

/***/ })

};
;