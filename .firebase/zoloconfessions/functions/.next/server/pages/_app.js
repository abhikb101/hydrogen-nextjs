(() => {
  var exports = {};
  exports.id = 888;
  exports.ids = [888];
  exports.modules = {
    /***/ 8484: /***/ (module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997);
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
              );
            /* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(6626);
            /* harmony import */ var _config_theme_json__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(5977);
            /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(968);
            /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_head__WEBPACK_IMPORTED_MODULE_3__
              );
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(6689);
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default =
              /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_4__
              );
            /* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(7935);
            /* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_5___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_gtm_module__WEBPACK_IMPORTED_MODULE_5__
              );
            /* harmony import */ var styles_style_scss__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(1733);
            /* harmony import */ var styles_style_scss__WEBPACK_IMPORTED_MODULE_6___default =
              /*#__PURE__*/ __webpack_require__.n(
                styles_style_scss__WEBPACK_IMPORTED_MODULE_6__
              );
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(3745);
            /* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(9500);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                firebase_app__WEBPACK_IMPORTED_MODULE_7__,
                firebase_analytics__WEBPACK_IMPORTED_MODULE_8__,
              ]);
            [
              firebase_app__WEBPACK_IMPORTED_MODULE_7__,
              firebase_analytics__WEBPACK_IMPORTED_MODULE_8__,
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__;

            // import { JsonContext } from "context/state";

            // Import the functions you need from the SDKs you need

            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries
            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            const firebaseConfig = {
              apiKey: "AIzaSyBemClpyB1plR0jjQaYZUXm70tTKT3JtYw",
              authDomain: "zoloconfessions.firebaseapp.com",
              projectId: "zoloconfessions",
              storageBucket: "zoloconfessions.appspot.com",
              messagingSenderId: "796601033878",
              appId: "1:796601033878:web:4877fb282a0a0602b20eb7",
              measurementId: "G-ECC34E8YW0",
            };
            // Initialize Firebase
            const app = (0,
            firebase_app__WEBPACK_IMPORTED_MODULE_7__.initializeApp)(
              firebaseConfig
            );
            // const analytics = getAnalytics(app);
            const App = ({ Component, pageProps }) => {
              // import google font css
              const pf =
                _config_theme_json__WEBPACK_IMPORTED_MODULE_2__ /* .fonts.font_family.primary */
                  .R.k.T;
              const sf =
                _config_theme_json__WEBPACK_IMPORTED_MODULE_2__ /* .fonts.font_family.secondary */
                  .R.k.secondary;
              const [fontcss, setFontcss] = (0,
              react__WEBPACK_IMPORTED_MODULE_4__.useState)();
              (0, react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
                fetch(
                  `https://fonts.googleapis.com/css2?family=${pf}${
                    sf ? "&family=" + sf : ""
                  }&display=swap`
                ).then((res) => res.text().then((css) => setFontcss(css)));
              }, [pf, sf]);
              // google tag manager (gtm)
              const tagManagerArgs = {
                gtmId:
                  _config_config_json__WEBPACK_IMPORTED_MODULE_1__ /* .params.tag_manager_id */
                    .f.tag_manager_id,
              };
              (0, react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
                setTimeout(() => {
                  true &&
                    _config_config_json__WEBPACK_IMPORTED_MODULE_1__ /* .params.tag_manager_id */
                      .f.tag_manager_id &&
                    react_gtm_module__WEBPACK_IMPORTED_MODULE_5___default().initialize(
                      tagManagerArgs
                    );
                }, 5000);
                // eslint-disable-next-line react-hooks/exhaustive-deps
              }, []);
              return /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      next_head__WEBPACK_IMPORTED_MODULE_3___default(),
                      {
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            "link",
                            {
                              rel: "preconnect",
                              href: "https://fonts.gstatic.com",
                              crossOrigin: "true",
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            "style",
                            {
                              dangerouslySetInnerHTML: {
                                __html: `${fontcss}`,
                              },
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            "meta",
                            {
                              name: "viewport",
                              content:
                                "width=device-width, initial-scale=1, maximum-scale=5",
                            }
                          ),
                        ],
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      Component,
                      {
                        ...pageProps,
                      }
                    ),
                  ],
                }
              );
            };
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = App;

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        }
      );

      /***/
    },

    /***/ 1733: /***/ () => {
      /***/
    },

    /***/ 968: /***/ (module) => {
      "use strict";
      module.exports = require("next/head");

      /***/
    },

    /***/ 6689: /***/ (module) => {
      "use strict";
      module.exports = require("react");

      /***/
    },

    /***/ 7935: /***/ (module) => {
      "use strict";
      module.exports = require("react-gtm-module");

      /***/
    },

    /***/ 997: /***/ (module) => {
      "use strict";
      module.exports = require("react/jsx-runtime");

      /***/
    },

    /***/ 9500: /***/ (module) => {
      "use strict";
      module.exports = import("firebase/analytics");

      /***/
    },

    /***/ 3745: /***/ (module) => {
      "use strict";
      module.exports = import("firebase/app");

      /***/
    },

    /***/ 6626: /***/ (module) => {
      "use strict";
      module.exports = JSON.parse(
        '{"lz":{"title":"Hydrogen Nextjs","base_url":"/","favicon":"/images/developer.png"},"Xd":{"pagination":6,"summary_length":200,"blog_folder":"posts"},"N5":{"name":"Zolo Confessions","bio":"A Full Stack Front-end Developer based in New York. Meticulous web developer with over 2 years of front end experience and passion for responsive and mobile-first website design."},"f":{"contact_form_action":"#","tag_manager_id":"","copyright":"Copyright © 2022 a theme by [statichunt](https://statichunt.com)"},"Pu":{"meta_author":"Statichunt","meta_image":"","meta_description":""},"PF":{"w":true,"Q":"themefisher-template"}}'
      );

      /***/
    },

    /***/ 5977: /***/ (module) => {
      "use strict";
      module.exports = JSON.parse(
        '{"R":{"k":{"T":"Questrial:wght@400;500;600;700"}}}'
      );

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require("../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(8484);
  module.exports = __webpack_exports__;
})();
