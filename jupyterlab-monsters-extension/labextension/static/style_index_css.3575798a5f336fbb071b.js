"use strict";
(self["webpackChunk_tomoyan596_jupyterlab_monsters_extension"] = self["webpackChunk_tomoyan596_jupyterlab_monsters_extension"] || []).push([["style_index_css"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./style/base.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/base.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
    See the JupyterLab Developer Guide for useful CSS Patterns:

    https://jupyterlab.readthedocs.io/en/stable/developer/css.html
*/
`, "",{"version":3,"sources":["webpack://./style/base.css"],"names":[],"mappings":"AAAA;;;;CAIC","sourcesContent":["/*\n    See the JupyterLab Developer Guide for useful CSS Patterns:\n\n    https://jupyterlab.readthedocs.io/en/stable/developer/css.html\n*/\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/custom.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/custom.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.svg */ "./style/images/background.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Custom */

/* Left and top tool bar */
.jp-SideBar.p-TabBar,
#jp-top-panel,
.jp-LabShell[data-shell-mode='single-document'] #jp-menu-panel {
  /*  background-color: rgba(34, 33, 54, 0.65);  /* last value is the transparency */
}

/* Background */

/* Neon NIght Style */

/* .jp-LabShell {
  background: linear-gradient(to bottom right, rgba(0, 255, 255, 0.25),
    rgba(180, 0, 255, 0.25), rgba(140, 0, 255, 0.25), rgba(255, 0, 100, 0.25));
}

.lm-DockPanel-tabBar .lm-TabBar-tab.jp-mod-current:before {
  background: linear-gradient(to right,
    #00000000, #3765e7, #a044ca, #ca44a9, #00000000)
}
*/

/* Neon Sunset Style */

/* .jp-LabShell {
  background: linear-gradient(to bottom right, rgba(77, 8, 187, 0.9),
    rgba(16, 16, 80, 0.5), rgba(16, 16, 80, 0.9));
}

.lm-DockPanel-tabBar .lm-TabBar-tab.jp-mod-current:before{
  background: linear-gradient(to right,
  #00000000, #7334cb, #f36f8f, #ac7453, #00000000);
}
*/

/* or use an image as the background */
.jp-Editor {
  /* .xterm .xterm-screen canvas { */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});

  /* background-blend-mode: darken; */
  background-repeat: no-repeat;
  background-size: 70%;

  /* background-color: #1117; */
  background-position: 60% 50%; /* right of center */
}

.lm-DockPanel-tabBar .lm-TabBar-tab.jp-mod-current::before {
  /* background: linear-gradient(to right,
    #00000000, #3765e7, #a044ca, #ca44a9, #00000000) */
}

/* Fonts */

/* Code font */
:root {
  /* Code font */

  /* --jp-code-font-family: Monaco, 'HackGen Console NF', 'Source Code Pro', monospace; */

  /* Prompt number of cell */

  /* --jp-cell-prompt-font-family:  'Vibur'; */
}

/* Opened files tab bar */
.lm-DockPanel-tabBar .lm-TabBar-tab,
h1 {
  /*  font-family: 'Neon Bugler';
  font-size: 14px; */
}

/* Search tool */
.jp-DocumentSearch-overlay *,
.filter .bp3-input {
  /*  font-family: 'Neon Bugler';
  font-size: 15px; */
}
`, "",{"version":3,"sources":["webpack://./style/custom.css"],"names":[],"mappings":"AAAA,WAAW;;AAEX,0BAA0B;AAC1B;;;EAGE,kFAAkF;AACpF;;AAEA,eAAe;;AAEf,qBAAqB;;AAErB;;;;;;;;;CASC;;AAED,sBAAsB;;AAEtB;;;;;;;;;CASC;;AAED,sCAAsC;AACtC;EACE,kCAAkC;EAClC,yDAAgD;;EAEhD,mCAAmC;EACnC,4BAA4B;EAC5B,oBAAoB;;EAEpB,6BAA6B;EAC7B,4BAA4B,EAAE,oBAAoB;AACpD;;AAEA;EACE;sDACoD;AACtD;;AAEA,UAAU;;AAEV,cAAc;AACd;EACE,cAAc;;EAEd,uFAAuF;;EAEvF,0BAA0B;;EAE1B,4CAA4C;AAC9C;;AAEA,yBAAyB;AACzB;;EAEE;oBACkB;AACpB;;AAEA,gBAAgB;AAChB;;EAEE;oBACkB;AACpB","sourcesContent":["/* Custom */\n\n/* Left and top tool bar */\n.jp-SideBar.p-TabBar,\n#jp-top-panel,\n.jp-LabShell[data-shell-mode='single-document'] #jp-menu-panel {\n  /*  background-color: rgba(34, 33, 54, 0.65);  /* last value is the transparency */\n}\n\n/* Background */\n\n/* Neon NIght Style */\n\n/* .jp-LabShell {\n  background: linear-gradient(to bottom right, rgba(0, 255, 255, 0.25),\n    rgba(180, 0, 255, 0.25), rgba(140, 0, 255, 0.25), rgba(255, 0, 100, 0.25));\n}\n\n.lm-DockPanel-tabBar .lm-TabBar-tab.jp-mod-current:before {\n  background: linear-gradient(to right,\n    #00000000, #3765e7, #a044ca, #ca44a9, #00000000)\n}\n*/\n\n/* Neon Sunset Style */\n\n/* .jp-LabShell {\n  background: linear-gradient(to bottom right, rgba(77, 8, 187, 0.9),\n    rgba(16, 16, 80, 0.5), rgba(16, 16, 80, 0.9));\n}\n\n.lm-DockPanel-tabBar .lm-TabBar-tab.jp-mod-current:before{\n  background: linear-gradient(to right,\n  #00000000, #7334cb, #f36f8f, #ac7453, #00000000);\n}\n*/\n\n/* or use an image as the background */\n.jp-Editor {\n  /* .xterm .xterm-screen canvas { */\n  background-image: url('./images/background.svg');\n\n  /* background-blend-mode: darken; */\n  background-repeat: no-repeat;\n  background-size: 70%;\n\n  /* background-color: #1117; */\n  background-position: 60% 50%; /* right of center */\n}\n\n.lm-DockPanel-tabBar .lm-TabBar-tab.jp-mod-current::before {\n  /* background: linear-gradient(to right,\n    #00000000, #3765e7, #a044ca, #ca44a9, #00000000) */\n}\n\n/* Fonts */\n\n/* Code font */\n:root {\n  /* Code font */\n\n  /* --jp-code-font-family: Monaco, 'HackGen Console NF', 'Source Code Pro', monospace; */\n\n  /* Prompt number of cell */\n\n  /* --jp-cell-prompt-font-family:  'Vibur'; */\n}\n\n/* Opened files tab bar */\n.lm-DockPanel-tabBar .lm-TabBar-tab,\nh1 {\n  /*  font-family: 'Neon Bugler';\n  font-size: 14px; */\n}\n\n/* Search tool */\n.jp-DocumentSearch-overlay *,\n.filter .bp3-input {\n  /*  font-family: 'Neon Bugler';\n  font-size: 15px; */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/index.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/index.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./style/base.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./variables.css */ "./node_modules/css-loader/dist/cjs.js!./style/variables.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./custom.css */ "./node_modules/css-loader/dist/cjs.js!./style/custom.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -----------------------------------------------------------------------------
| reference:
| https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/theme-dark-extension/style/theme.css
|---------------------------------------------------------------------------- */

/* @import url('./neondreams.css'); */

/* Set the default typography for monospace elements */
.jp-ThemedContainer tt,
.jp-ThemedContainer code,
.jp-ThemedContainer kbd,
.jp-ThemedContainer samp,
.jp-ThemedContainer pre {
  font-family: var(--jp-code-font-family);
  font-size: var(--jp-code-font-size);
  line-height: var(--jp-code-line-height);
}

#jupyterlab-splash.dark {
  background-color: var(--jp-layout-color3);
}

.lm-DockPanel-tabBar,
.lm-TabPanel-tabBar {
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size2);
}

/* CodeMirror 6 custom & fix */

/* .cm-editor {
    letter-spacing: 1.5px;  /* for HacGen 
} */

/* .ͼ1 .cm-scroller {
  font-family: inherit; /* fix code Font Family setting 
  line-height: inherit; /* fix code Line Height setting 
} */

/* https://developer.mozilla.org/ja/docs/Web/CSS/gradient/radial-gradient */

/* .ͼ1 .cm-highlightSpace {
  background-image: radial-gradient(farthest-corner at 45% 150%, #dd0 20%, #d00 40%, #1ae 40%, transparent 60%);
} */
.ͼ1 .cm-highlightSpace {
  background-image: radial-gradient(circle at 50% 55%, #6a6 8%, transparent 0%);
}

.ͼ1 .cm-gutters {
  color: var(--jp-ui-font-color1);
}

/* fix illegible yellow background in exception stacktrace */
:where(
  .jp-RenderedText[data-mime-type='application/vnd.jupyter.stderr']
    pre
    .ansi-yellow-bg
) {
  color: black;
}

.jp-DirListing-item {
  padding: var(--jp-dirlisting-padding-height)
    var(--jp-dirlisting-padding-width);
}
`, "",{"version":3,"sources":["webpack://./style/index.css"],"names":[],"mappings":"AAAA;;;+EAG+E;;AAK/E,qCAAqC;;AAErC,sDAAsD;AACtD;;;;;EAKE,uCAAuC;EACvC,mCAAmC;EACnC,uCAAuC;AACzC;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;;EAEE,+BAA+B;EAC/B,kCAAkC;AACpC;;AAEA,8BAA8B;;AAE9B;;GAEG;;AAEH;;;GAGG;;AAEH,2EAA2E;;AAE3E;;GAEG;AACH;EACE,6EAA6E;AAC/E;;AAEA;EACE,+BAA+B;AACjC;;AAEA,4DAA4D;AAC5D;;;;;EAKE,YAAY;AACd;;AAEA;EACE;sCACoC;AACtC","sourcesContent":["/* -----------------------------------------------------------------------------\n| reference:\n| https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/theme-dark-extension/style/theme.css\n|---------------------------------------------------------------------------- */\n@import url('base.css');\n@import url('variables.css');\n@import url('custom.css');\n\n/* @import url('./neondreams.css'); */\n\n/* Set the default typography for monospace elements */\n.jp-ThemedContainer tt,\n.jp-ThemedContainer code,\n.jp-ThemedContainer kbd,\n.jp-ThemedContainer samp,\n.jp-ThemedContainer pre {\n  font-family: var(--jp-code-font-family);\n  font-size: var(--jp-code-font-size);\n  line-height: var(--jp-code-line-height);\n}\n\n#jupyterlab-splash.dark {\n  background-color: var(--jp-layout-color3);\n}\n\n.lm-DockPanel-tabBar,\n.lm-TabPanel-tabBar {\n  color: var(--jp-ui-font-color1);\n  font-size: var(--jp-ui-font-size2);\n}\n\n/* CodeMirror 6 custom & fix */\n\n/* .cm-editor {\n    letter-spacing: 1.5px;  /* for HacGen \n} */\n\n/* .ͼ1 .cm-scroller {\n  font-family: inherit; /* fix code Font Family setting \n  line-height: inherit; /* fix code Line Height setting \n} */\n\n/* https://developer.mozilla.org/ja/docs/Web/CSS/gradient/radial-gradient */\n\n/* .ͼ1 .cm-highlightSpace {\n  background-image: radial-gradient(farthest-corner at 45% 150%, #dd0 20%, #d00 40%, #1ae 40%, transparent 60%);\n} */\n.ͼ1 .cm-highlightSpace {\n  background-image: radial-gradient(circle at 50% 55%, #6a6 8%, transparent 0%);\n}\n\n.ͼ1 .cm-gutters {\n  color: var(--jp-ui-font-color1);\n}\n\n/* fix illegible yellow background in exception stacktrace */\n:where(\n  .jp-RenderedText[data-mime-type='application/vnd.jupyter.stderr']\n    pre\n    .ansi-yellow-bg\n) {\n  color: black;\n}\n\n.jp-DirListing-item {\n  padding: var(--jp-dirlisting-padding-height)\n    var(--jp-dirlisting-padding-width);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style/variables.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/variables.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|--------------------------------------------------------------------------- */

/*
The following CSS variables define the main, public API for styling JupyterLab.
These variables should be used by all plugins wherever possible. In other
words, plugins should not define custom colors, sizes, etc unless absolutely
necessary. This enables users to change the visual theme of JupyterLab
by changing these variables.

Many variables appear in an ordered sequence (0,1,2,3). These sequences
are designed to work well together, so for example, \`--jp-border-color1\` should
be used with \`--jp-layout-color1\`. The numbers have the following meanings:

* 0: super-primary, reserved for special emphasis
* 1: primary, most important under normal situations
* 2: secondary, next most important under normal situations
* 3: tertiary, next most important under normal situations

Throughout JupyterLab, we are mostly following principles from Google's
Material Design when selecting colors. We are not, however, following
all of MD as it is not optimized for dense, information rich UIs.
*/

:root {
  /* Elevation
   *
   * We style box-shadows using Material Design's idea of elevation. These particular numbers are taken from here:
   *
   * https://github.com/material-components/material-components-web
   * https://material-components-web.appspot.com/elevation.html
   */

  --jp-dirlisting-padding-height: 1px;
  --jp-dirlisting-padding-width: 4px;

  /* The dark theme shadows need a bit of work, but this will probably also require work on the core layout
   * colors used in the theme as well. */
  --jp-shadow-base-lightness: 32;
  --jp-shadow-umbra-color: rgb(
    var(--jp-shadow-base-lightness) var(--jp-shadow-base-lightness)
      var(--jp-shadow-base-lightness) / 20%
  );
  --jp-shadow-penumbra-color: rgb(
    var(--jp-shadow-base-lightness) var(--jp-shadow-base-lightness)
      var(--jp-shadow-base-lightness) / 14%
  );
  --jp-shadow-ambient-color: rgb(
    var(--jp-shadow-base-lightness) var(--jp-shadow-base-lightness)
      var(--jp-shadow-base-lightness) / 12%
  );
  --jp-elevation-z0: none;
  --jp-elevation-z1:
    0 2px 1px -1px var(--jp-shadow-umbra-color),
    0 1px 1px 0 var(--jp-shadow-penumbra-color),
    0 1px 3px 0 var(--jp-shadow-ambient-color);
  --jp-elevation-z2:
    0 3px 1px -2px var(--jp-shadow-umbra-color),
    0 2px 2px 0 var(--jp-shadow-penumbra-color),
    0 1px 5px 0 var(--jp-shadow-ambient-color);
  --jp-elevation-z4:
    0 2px 4px -1px var(--jp-shadow-umbra-color),
    0 4px 5px 0 var(--jp-shadow-penumbra-color),
    0 1px 10px 0 var(--jp-shadow-ambient-color);
  --jp-elevation-z6:
    0 3px 5px -1px var(--jp-shadow-umbra-color),
    0 6px 10px 0 var(--jp-shadow-penumbra-color),
    0 1px 18px 0 var(--jp-shadow-ambient-color);
  --jp-elevation-z8:
    0 5px 5px -3px var(--jp-shadow-umbra-color),
    0 8px 10px 1px var(--jp-shadow-penumbra-color),
    0 3px 14px 2px var(--jp-shadow-ambient-color);
  --jp-elevation-z12:
    0 7px 8px -4px var(--jp-shadow-umbra-color),
    0 12px 17px 2px var(--jp-shadow-penumbra-color),
    0 5px 22px 4px var(--jp-shadow-ambient-color);
  --jp-elevation-z16:
    0 8px 10px -5px var(--jp-shadow-umbra-color),
    0 16px 24px 2px var(--jp-shadow-penumbra-color),
    0 6px 30px 5px var(--jp-shadow-ambient-color);
  --jp-elevation-z20:
    0 10px 13px -6px var(--jp-shadow-umbra-color),
    0 20px 31px 3px var(--jp-shadow-penumbra-color),
    0 8px 38px 7px var(--jp-shadow-ambient-color);
  --jp-elevation-z24:
    0 11px 15px -7px var(--jp-shadow-umbra-color),
    0 24px 38px 3px var(--jp-shadow-penumbra-color),
    0 9px 46px 8px var(--jp-shadow-ambient-color);

  /* shortcut buttons
   *
   * The following css variables are used to specify the visual
   * styling of the keyboard shortcut buttons
   */

  --jp-shortcuts-button-background: var(--jp-brand-color2);
  --jp-shortcuts-button-hover-background: var(--jp-brand-color1);

  /* Borders
   *
   * The following variables, specify the visual styling of borders in JupyterLab.
   */

  --jp-border-width: 1px;
  --jp-border-color0: var(--md-grey-700, #616161);
  --jp-border-color1: var(--md-grey-700, #616161);
  --jp-border-color2: var(--md-grey-800, #424242);
  --jp-border-color3: var(--md-grey-900, #212121);
  --jp-inverse-border-color: var(--md-grey-600, #757575);
  --jp-border-radius: 2px;

  /* UI Fonts
   *
   * The UI font CSS variables are used for the typography all of the JupyterLab
   * user interface elements that are not directly user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-ui-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-ui-font-scale-factor: 1.2;
  --jp-ui-font-size0: 0.8333em;
  --jp-ui-font-size1: 13px; /* Base font size */
  --jp-ui-font-size2: 0.9em; /* 1.2em */
  --jp-ui-font-size3: 1.44em;
  --jp-ui-font-family:
    system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI', helvetica, arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  /*
   * Use these font colors against the corresponding main layout colors.
   * In a light theme, these go from dark to light.
   */

  /* Defaults use Material Design specification */
  --jp-ui-font-color0: rgb(212 221 30 / 100%); /* #d4dd1e 255, 255, 255 1 */
  --jp-ui-font-color1: rgb(212 221 30 / 87%); /* 255, 255, 255 0.87 */
  --jp-ui-font-color2: rgb(212 221 30 / 54%); /* 255, 255, 255 0.54 */
  --jp-ui-font-color3: rgb(212 221 30 / 38%); /* 255, 255, 255 0.38 */

  /*
   * Use these against the brand/accent/warn/error colors.
   * These will typically go from light to darker, in both a dark and light theme.
   */

  --jp-ui-inverse-font-color0: rgb(0 0 0 / 100%);
  --jp-ui-inverse-font-color1: rgb(0 0 0 / 80%);
  --jp-ui-inverse-font-color2: rgb(0 0 0 / 50%);
  --jp-ui-inverse-font-color3: rgb(0 0 0 / 30%);

  /* Content Fonts
   *
   * Content font variables are used for typography of user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-content-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-content-line-height: 1.6;
  --jp-content-font-scale-factor: 1.2;
  --jp-content-font-size0: 0.8333em;
  --jp-content-font-size1: 14px; /* Base font size */
  --jp-content-font-size2: 1.2em;
  --jp-content-font-size3: 1.44em;
  --jp-content-font-size4: 1.728em;
  --jp-content-font-size5: 2.0736em;

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-content-presentation-font-size1: 17px;
  --jp-content-heading-line-height: 1;
  --jp-content-heading-margin-top: 1.2em;
  --jp-content-heading-margin-bottom: 0.8em;
  --jp-content-heading-font-weight: 500;

  /* Defaults use Material Design specification */
  --jp-content-font-color0: rgb(255 255 255 / 100%);
  --jp-content-font-color1: rgb(255 255 255 / 100%);
  --jp-content-font-color2: rgb(255 255 255 / 70%);
  --jp-content-font-color3: rgb(255 255 255 / 50%);
  --jp-content-link-color: var(--md-blue-300, #64b5f6);
  --jp-content-link-visited-color: var(--md-purple-300, #ba68c8);
  --jp-content-link-hover-color: var(--md-blue-400, #42a5f5);
  --jp-content-font-family:
    system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI', helvetica, arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  /*
   * Code Fonts
   *
   * Code font variables are used for typography of code and other monospaces content.
   */

  --jp-code-font-size: 13px;
  --jp-code-line-height: 1.3077; /* 17px for 13px base */
  --jp-code-padding: 5px; /* 5px for 13px base, codemirror highlighting needs integer px value */
  --jp-code-font-family-default: menlo, consolas, 'DejaVu Sans Mono', monospace;
  --jp-code-font-family: var(--jp-code-font-family-default);

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-code-presentation-font-size: 16px;

  /* may need to tweak cursor width if you change font size */
  --jp-code-cursor-width0: 1.4px;
  --jp-code-cursor-width1: 2px;
  --jp-code-cursor-width2: 4px;

  /* Layout
   *
   * The following are the main layout colors use in JupyterLab. In a light
   * theme these would go from light to dark.
   */

  --jp-layout-color0: #080348;
  --jp-layout-color1: #181560; /* +101212 */
  --jp-layout-color2: #282772; /* +101212 */
  --jp-layout-color3: #383184; /* +101212 */
  --jp-layout-color4: #484396; /* +101212 */
  --jp-layout-color5: #b0a71e; /* 888bde->fdc30b +404848 */

  /* Inverse Layout
   *
   * The following are the inverse layout colors use in JupyterLab. In a light
   * theme these would go from dark to light.
   */

  --jp-inverse-layout-color0: white;
  --jp-inverse-layout-color1: white;
  --jp-inverse-layout-color2: var(--md-grey-200, #eee);
  --jp-inverse-layout-color3: var(--jp-layout-color5, #bdbdbd);
  --jp-inverse-layout-color4: var(--md-grey-600, #757575);

  /* Brand/accent */

  --jp-brand-color0: var(--md-blue-700, #1976d2);
  --jp-brand-color1: var(--md-blue-500, #2196f3);
  --jp-brand-color2: var(--md-blue-300, #64b5f6);
  --jp-brand-color3: var(--md-blue-100, #bbdefb);
  --jp-brand-color4: var(--md-blue-50, #e3f2fd);
  --jp-accent-color0: var(--md-green-700, #388e3c);
  --jp-accent-color1: var(--md-green-500, #4caf50);
  --jp-accent-color2: var(--md-green-300, #81c784);
  --jp-accent-color3: var(--md-green-100, #c8e6c9);

  /* State colors (warn, error, success, info) */

  --jp-warn-color0: var(--md-orange-700, #f57c00);
  --jp-warn-color1: var(--md-orange-500, #ff9800);
  --jp-warn-color2: var(--md-orange-300, #ffb74d);
  --jp-warn-color3: var(--md-orange-100, #ffe0b2);
  --jp-error-color0: var(--md-red-700, #d32f2f);
  --jp-error-color1: var(--md-red-500, #f44336);
  --jp-error-color2: var(--md-red-300, #e57373);
  --jp-error-color3: var(--md-red-100, #ffcdd2);
  --jp-success-color0: var(--md-green-700, #388e3c);
  --jp-success-color1: var(--md-green-500, #4caf50);
  --jp-success-color2: var(--md-green-300, #81c784);
  --jp-success-color3: var(--md-green-100, #c8e6c9);
  --jp-info-color0: var(--md-cyan-700, #0097a7);
  --jp-info-color1: var(--md-cyan-500, #00bcd4);
  --jp-info-color2: var(--md-cyan-300, #4dd0e1);
  --jp-info-color3: var(--md-cyan-100, #b2ebf2);

  /* Cell specific styles */

  --jp-cell-padding: 5px;
  --jp-cell-collapser-width: 8px;
  --jp-cell-collapser-min-height: 20px;
  --jp-cell-collapser-not-active-hover-opacity: 0.6;
  --jp-cell-editor-background: var(--jp-layout-color1);
  --jp-cell-editor-border-color: var(--md-grey-700, #616161);
  --jp-cell-editor-box-shadow: inset 0 0 2px var(--md-blue-300, #64b5f6);
  --jp-cell-editor-active-background: var(--jp-layout-color0);
  --jp-cell-editor-active-border-color: var(--jp-brand-color1);
  --jp-cell-prompt-width: 64px;
  --jp-cell-prompt-font-family: var(--jp-code-font-family-default);
  --jp-cell-prompt-letter-spacing: 0;
  --jp-cell-prompt-opacity: 1;
  --jp-cell-prompt-not-active-opacity: 1;
  --jp-cell-prompt-not-active-font-color: var(--md-grey-300, #e0e0e0);

  /* A custom blend of MD grey and blue 600
   * See https://meyerweb.com/eric/tools/color-blend/#546E7A:1E88E5:5:hex */
  --jp-cell-inprompt-font-color: #307fc1;

  /* A custom blend of MD grey and orange 600
   * https://meyerweb.com/eric/tools/color-blend/#546E7A:F4511E:5:hex */
  --jp-cell-outprompt-font-color: #bf5b3d;

  /* Notebook specific styles */

  --jp-notebook-padding: 10px;
  --jp-notebook-select-background: var(--jp-layout-color1);
  --jp-notebook-multiselected-color: rgb(33 150 243 / 24%);

  /* The scroll padding is calculated to fill enough space at the bottom of the
  notebook to show one single-line cell (with appropriate padding) at the top
  when the notebook is scrolled all the way to the bottom. We also subtract one
  pixel so that no scrollbar appears if we have just one single-line cell in the
  notebook. This padding is to enable a 'scroll past end' feature in a notebook.
  */
  --jp-notebook-scroll-padding: calc(
    100% - var(--jp-code-font-size) * var(--jp-code-line-height) -
      var(--jp-code-padding) - var(--jp-cell-padding) - 1px
  );

  /* Rendermime styles */

  --jp-rendermime-error-background: rgb(244 67 54 / 28%);
  --jp-rendermime-table-row-background: var(--md-grey-900, #212121);
  --jp-rendermime-table-row-hover-background: rgb(3 169 244 / 20%);

  /* Dialog specific styles */

  --jp-dialog-background: rgb(0 0 0 / 60%);

  /* Console specific styles */

  --jp-console-padding: 10px;

  /* Toolbar specific styles */

  --jp-toolbar-border-color: var(--jp-border-color2);
  --jp-toolbar-micro-height: 8px;
  --jp-toolbar-background: var(--jp-layout-color1);
  --jp-toolbar-box-shadow: 0 0 2px 0 rgb(0 0 0 / 80%);
  --jp-toolbar-header-margin: 4px 4px 0 4px;
  --jp-toolbar-active-background: var(--jp-layout-color0);

  /* Statusbar specific styles */

  --jp-statusbar-height: 24px;

  /* Input field styles */

  --jp-input-box-shadow: inset 0 0 2px var(--md-blue-300, #64b5f6);
  --jp-input-active-background: var(--jp-layout-color0);
  --jp-input-hover-background: var(--jp-layout-color2);
  --jp-input-background: var(--md-grey-800, #424242);
  --jp-input-border-color: var(--jp-inverse-border-color);
  --jp-input-active-border-color: var(--jp-brand-color1);
  --jp-input-active-box-shadow-color: rgb(19 124 189 / 30%);

  /* General editor styles */

  --jp-editor-selected-background: var(--jp-layout-color2);
  --jp-editor-selected-focused-background: rgb(33 150 243 / 24%);
  --jp-editor-cursor-color: var(--jp-ui-font-color0);

  /* Code mirror specific styles */

  --jp-mirror-editor-keyword-color: var(--md-green-500, #4caf50);
  --jp-mirror-editor-atom-color: var(--md-blue-300, #64b5f6);
  --jp-mirror-editor-number-color: var(--md-green-400, #66bb6a);
  --jp-mirror-editor-def-color: var(--md-blue-600, #1e88e5);
  --jp-mirror-editor-variable-color: var(--md-grey-300, #e0e0e0);
  --jp-mirror-editor-variable-2-color: var(--md-blue-500, #2196f3);
  --jp-mirror-editor-variable-3-color: var(--md-green-600, #43a047);
  --jp-mirror-editor-punctuation-color: var(--md-blue-400, #42a5f5);
  --jp-mirror-editor-property-color: var(--md-blue-400, #42a5f5);
  --jp-mirror-editor-operator-color: #d48fff;
  --jp-mirror-editor-comment-color: #408080;
  --jp-mirror-editor-string-color: #ff7070;
  --jp-mirror-editor-string-2-color: var(--md-purple-300, #ba68c8);
  --jp-mirror-editor-meta-color: #a2f;
  --jp-mirror-editor-qualifier-color: #555;
  --jp-mirror-editor-builtin-color: var(--md-green-600, #43a047);
  --jp-mirror-editor-bracket-color: #997;
  --jp-mirror-editor-tag-color: var(--md-green-700, #388e3c);
  --jp-mirror-editor-attribute-color: var(--md-blue-700, #1976d2);
  --jp-mirror-editor-header-color: var(--md-blue-500, #2196f3);
  --jp-mirror-editor-quote-color: var(--md-green-300, #81c784);
  --jp-mirror-editor-link-color: var(--md-blue-700, #1976d2);
  --jp-mirror-editor-error-color: #f00;
  --jp-mirror-editor-hr-color: #999;

  /*
    RTC user specific colors.
    These colors are used for the cursor, username in the editor,
    and the icon of the user.
  */

  --jp-collaborator-color1: #ad4a00;
  --jp-collaborator-color2: #7b6a00;
  --jp-collaborator-color3: #007e00;
  --jp-collaborator-color4: #008772;
  --jp-collaborator-color5: #0079b9;
  --jp-collaborator-color6: #8b45c6;
  --jp-collaborator-color7: #be208b;

  /* File or activity icons and switch semantic variables */

  /*
  --jp-jupyter-icon-color: var(--md-orange-900);
  --jp-notebook-icon-color: var(--md-orange-700);
  --jp-json-icon-color: var(--md-orange-700);
  --jp-console-icon-background-color: var(--md-blue-700);
  --jp-console-icon-color: white;
  --jp-terminal-icon-background-color: var(--md-grey-200);
  --jp-terminal-icon-color: var(--md-grey-800);
  --jp-text-editor-icon-color: var(--md-grey-200);
  --jp-inspector-icon-color: var(--md-grey-200);
  --jp-switch-color: var(--md-grey-400);
  --jp-switch-true-position-color: var(--md-orange-700);
  --jp-switch-cursor-color: rgba(0, 0, 0, 0.8);
*/

  /* Vega extension styles */

  --jp-vega-background: var(--md-grey-400, #bdbdbd);

  /* Sidebar-related styles */

  --jp-sidebar-min-width: 250px;

  /* Search-related styles */

  --jp-search-toggle-off-opacity: 0.6;
  --jp-search-toggle-hover-opacity: 0.8;
  --jp-search-toggle-on-opacity: 1;
  --jp-search-selected-match-background-color: rgb(255 225 0);
  --jp-search-selected-match-color: black;
  --jp-search-unselected-match-background-color: var(
    --jp-inverse-layout-color0
  );
  --jp-search-unselected-match-color: var(--jp-ui-inverse-font-color0);

  /* scrollbar related styles. Supports every browser except Edge. */

  /* colors based on JetBrain's Darcula theme */

  --jp-scrollbar-background-color: #3f4244;
  --jp-scrollbar-thumb-color:
    88, 96, 97; /* need to specify thumb color as an RGB triplet */

  --jp-scrollbar-endpad: 3px; /* the minimum gap between the thumb and the ends of a scrollbar */

  /* hacks for setting the thumb shape. These do nothing in Firefox */

  --jp-scrollbar-thumb-margin: 3.5px; /* the space in between the sides of the thumb and the track */
  --jp-scrollbar-thumb-radius: 9px; /* set to a large-ish value for rounded endcaps on the thumb */

  /* Icon colors that work well with light or dark backgrounds */
  --jp-icon-contrast-color0: var(--md-purple-600, #8e24aa);
  --jp-icon-contrast-color1: var(--md-green-600, #43a047);
  --jp-icon-contrast-color2: var(--md-pink-600, #d81b60);
  --jp-icon-contrast-color3: var(--md-blue-600, #1e88e5);

  /* Button colors */
  --jp-accept-color-normal: var(--md-blue-700, #1976d2);
  --jp-accept-color-hover: var(--md-blue-800, #1565c0);
  --jp-accept-color-active: var(--md-blue-900, #0d47a1);
  --jp-warn-color-normal: var(--md-red-700, #d32f2f);
  --jp-warn-color-hover: var(--md-red-800, #c62828);
  --jp-warn-color-active: var(--md-red-900, #b71c1c);
  --jp-reject-color-normal: var(--md-grey-600, #757575);
  --jp-reject-color-hover: var(--md-grey-700, #616161);
  --jp-reject-color-active: var(--md-grey-800, #424242);

  /* File or activity icons and switch semantic variables */
  --jp-jupyter-icon-color: #f37626;
  --jp-notebook-icon-color: #f37626;
  --jp-json-icon-color: var(--md-orange-500, #ff9800);
  --jp-console-icon-background-color: var(--md-blue-500, #2196f3);
  --jp-console-icon-color: white;
  --jp-terminal-icon-background-color: var(--md-grey-200, #eee);
  --jp-terminal-icon-color: var(--md-grey-800, #424242);
  --jp-text-editor-icon-color: var(--md-grey-200, #eee);
  --jp-inspector-icon-color: var(--md-grey-200, #eee);
  --jp-switch-color: var(--md-grey-400, #bdbdbd);
  --jp-switch-true-position-color: var(--md-orange-700, #f57c00);
}

/* Completer specific styles */

.jp-Completer {
  --jp-completer-type-background0: transparent;
  --jp-completer-type-background1: #1f77b4;
  --jp-completer-type-background2: #ff7f0e;
  --jp-completer-type-background3: #2ca02c;
  --jp-completer-type-background4: #d62728;
  --jp-completer-type-background5: #9467bd;
  --jp-completer-type-background6: #8c564b;
  --jp-completer-type-background7: #e377c2;
  --jp-completer-type-background8: #7f7f7f;
  --jp-completer-type-background9: #bcbd22;
  --jp-completer-type-background10: #17becf;
}
`, "",{"version":3,"sources":["webpack://./style/variables.css"],"names":[],"mappings":"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","sourcesContent":["/* ----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|--------------------------------------------------------------------------- */\n\n/*\nThe following CSS variables define the main, public API for styling JupyterLab.\nThese variables should be used by all plugins wherever possible. In other\nwords, plugins should not define custom colors, sizes, etc unless absolutely\nnecessary. This enables users to change the visual theme of JupyterLab\nby changing these variables.\n\nMany variables appear in an ordered sequence (0,1,2,3). These sequences\nare designed to work well together, so for example, `--jp-border-color1` should\nbe used with `--jp-layout-color1`. The numbers have the following meanings:\n\n* 0: super-primary, reserved for special emphasis\n* 1: primary, most important under normal situations\n* 2: secondary, next most important under normal situations\n* 3: tertiary, next most important under normal situations\n\nThroughout JupyterLab, we are mostly following principles from Google's\nMaterial Design when selecting colors. We are not, however, following\nall of MD as it is not optimized for dense, information rich UIs.\n*/\n\n:root {\n  /* Elevation\n   *\n   * We style box-shadows using Material Design's idea of elevation. These particular numbers are taken from here:\n   *\n   * https://github.com/material-components/material-components-web\n   * https://material-components-web.appspot.com/elevation.html\n   */\n\n  --jp-dirlisting-padding-height: 1px;\n  --jp-dirlisting-padding-width: 4px;\n\n  /* The dark theme shadows need a bit of work, but this will probably also require work on the core layout\n   * colors used in the theme as well. */\n  --jp-shadow-base-lightness: 32;\n  --jp-shadow-umbra-color: rgb(\n    var(--jp-shadow-base-lightness) var(--jp-shadow-base-lightness)\n      var(--jp-shadow-base-lightness) / 20%\n  );\n  --jp-shadow-penumbra-color: rgb(\n    var(--jp-shadow-base-lightness) var(--jp-shadow-base-lightness)\n      var(--jp-shadow-base-lightness) / 14%\n  );\n  --jp-shadow-ambient-color: rgb(\n    var(--jp-shadow-base-lightness) var(--jp-shadow-base-lightness)\n      var(--jp-shadow-base-lightness) / 12%\n  );\n  --jp-elevation-z0: none;\n  --jp-elevation-z1:\n    0 2px 1px -1px var(--jp-shadow-umbra-color),\n    0 1px 1px 0 var(--jp-shadow-penumbra-color),\n    0 1px 3px 0 var(--jp-shadow-ambient-color);\n  --jp-elevation-z2:\n    0 3px 1px -2px var(--jp-shadow-umbra-color),\n    0 2px 2px 0 var(--jp-shadow-penumbra-color),\n    0 1px 5px 0 var(--jp-shadow-ambient-color);\n  --jp-elevation-z4:\n    0 2px 4px -1px var(--jp-shadow-umbra-color),\n    0 4px 5px 0 var(--jp-shadow-penumbra-color),\n    0 1px 10px 0 var(--jp-shadow-ambient-color);\n  --jp-elevation-z6:\n    0 3px 5px -1px var(--jp-shadow-umbra-color),\n    0 6px 10px 0 var(--jp-shadow-penumbra-color),\n    0 1px 18px 0 var(--jp-shadow-ambient-color);\n  --jp-elevation-z8:\n    0 5px 5px -3px var(--jp-shadow-umbra-color),\n    0 8px 10px 1px var(--jp-shadow-penumbra-color),\n    0 3px 14px 2px var(--jp-shadow-ambient-color);\n  --jp-elevation-z12:\n    0 7px 8px -4px var(--jp-shadow-umbra-color),\n    0 12px 17px 2px var(--jp-shadow-penumbra-color),\n    0 5px 22px 4px var(--jp-shadow-ambient-color);\n  --jp-elevation-z16:\n    0 8px 10px -5px var(--jp-shadow-umbra-color),\n    0 16px 24px 2px var(--jp-shadow-penumbra-color),\n    0 6px 30px 5px var(--jp-shadow-ambient-color);\n  --jp-elevation-z20:\n    0 10px 13px -6px var(--jp-shadow-umbra-color),\n    0 20px 31px 3px var(--jp-shadow-penumbra-color),\n    0 8px 38px 7px var(--jp-shadow-ambient-color);\n  --jp-elevation-z24:\n    0 11px 15px -7px var(--jp-shadow-umbra-color),\n    0 24px 38px 3px var(--jp-shadow-penumbra-color),\n    0 9px 46px 8px var(--jp-shadow-ambient-color);\n\n  /* shortcut buttons\n   *\n   * The following css variables are used to specify the visual\n   * styling of the keyboard shortcut buttons\n   */\n\n  --jp-shortcuts-button-background: var(--jp-brand-color2);\n  --jp-shortcuts-button-hover-background: var(--jp-brand-color1);\n\n  /* Borders\n   *\n   * The following variables, specify the visual styling of borders in JupyterLab.\n   */\n\n  --jp-border-width: 1px;\n  --jp-border-color0: var(--md-grey-700, #616161);\n  --jp-border-color1: var(--md-grey-700, #616161);\n  --jp-border-color2: var(--md-grey-800, #424242);\n  --jp-border-color3: var(--md-grey-900, #212121);\n  --jp-inverse-border-color: var(--md-grey-600, #757575);\n  --jp-border-radius: 2px;\n\n  /* UI Fonts\n   *\n   * The UI font CSS variables are used for the typography all of the JupyterLab\n   * user interface elements that are not directly user generated content.\n   *\n   * The font sizing here is done assuming that the body font size of --jp-ui-font-size1\n   * is applied to a parent element. When children elements, such as headings, are sized\n   * in em all things will be computed relative to that body size.\n   */\n\n  --jp-ui-font-scale-factor: 1.2;\n  --jp-ui-font-size0: 0.8333em;\n  --jp-ui-font-size1: 13px; /* Base font size */\n  --jp-ui-font-size2: 0.9em; /* 1.2em */\n  --jp-ui-font-size3: 1.44em;\n  --jp-ui-font-family:\n    system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI', helvetica, arial,\n    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n\n  /*\n   * Use these font colors against the corresponding main layout colors.\n   * In a light theme, these go from dark to light.\n   */\n\n  /* Defaults use Material Design specification */\n  --jp-ui-font-color0: rgb(212 221 30 / 100%); /* #d4dd1e 255, 255, 255 1 */\n  --jp-ui-font-color1: rgb(212 221 30 / 87%); /* 255, 255, 255 0.87 */\n  --jp-ui-font-color2: rgb(212 221 30 / 54%); /* 255, 255, 255 0.54 */\n  --jp-ui-font-color3: rgb(212 221 30 / 38%); /* 255, 255, 255 0.38 */\n\n  /*\n   * Use these against the brand/accent/warn/error colors.\n   * These will typically go from light to darker, in both a dark and light theme.\n   */\n\n  --jp-ui-inverse-font-color0: rgb(0 0 0 / 100%);\n  --jp-ui-inverse-font-color1: rgb(0 0 0 / 80%);\n  --jp-ui-inverse-font-color2: rgb(0 0 0 / 50%);\n  --jp-ui-inverse-font-color3: rgb(0 0 0 / 30%);\n\n  /* Content Fonts\n   *\n   * Content font variables are used for typography of user generated content.\n   *\n   * The font sizing here is done assuming that the body font size of --jp-content-font-size1\n   * is applied to a parent element. When children elements, such as headings, are sized\n   * in em all things will be computed relative to that body size.\n   */\n\n  --jp-content-line-height: 1.6;\n  --jp-content-font-scale-factor: 1.2;\n  --jp-content-font-size0: 0.8333em;\n  --jp-content-font-size1: 14px; /* Base font size */\n  --jp-content-font-size2: 1.2em;\n  --jp-content-font-size3: 1.44em;\n  --jp-content-font-size4: 1.728em;\n  --jp-content-font-size5: 2.0736em;\n\n  /* This gives a magnification of about 125% in presentation mode over normal. */\n  --jp-content-presentation-font-size1: 17px;\n  --jp-content-heading-line-height: 1;\n  --jp-content-heading-margin-top: 1.2em;\n  --jp-content-heading-margin-bottom: 0.8em;\n  --jp-content-heading-font-weight: 500;\n\n  /* Defaults use Material Design specification */\n  --jp-content-font-color0: rgb(255 255 255 / 100%);\n  --jp-content-font-color1: rgb(255 255 255 / 100%);\n  --jp-content-font-color2: rgb(255 255 255 / 70%);\n  --jp-content-font-color3: rgb(255 255 255 / 50%);\n  --jp-content-link-color: var(--md-blue-300, #64b5f6);\n  --jp-content-link-visited-color: var(--md-purple-300, #ba68c8);\n  --jp-content-link-hover-color: var(--md-blue-400, #42a5f5);\n  --jp-content-font-family:\n    system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI', helvetica, arial,\n    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n\n  /*\n   * Code Fonts\n   *\n   * Code font variables are used for typography of code and other monospaces content.\n   */\n\n  --jp-code-font-size: 13px;\n  --jp-code-line-height: 1.3077; /* 17px for 13px base */\n  --jp-code-padding: 5px; /* 5px for 13px base, codemirror highlighting needs integer px value */\n  --jp-code-font-family-default: menlo, consolas, 'DejaVu Sans Mono', monospace;\n  --jp-code-font-family: var(--jp-code-font-family-default);\n\n  /* This gives a magnification of about 125% in presentation mode over normal. */\n  --jp-code-presentation-font-size: 16px;\n\n  /* may need to tweak cursor width if you change font size */\n  --jp-code-cursor-width0: 1.4px;\n  --jp-code-cursor-width1: 2px;\n  --jp-code-cursor-width2: 4px;\n\n  /* Layout\n   *\n   * The following are the main layout colors use in JupyterLab. In a light\n   * theme these would go from light to dark.\n   */\n\n  --jp-layout-color0: #080348;\n  --jp-layout-color1: #181560; /* +101212 */\n  --jp-layout-color2: #282772; /* +101212 */\n  --jp-layout-color3: #383184; /* +101212 */\n  --jp-layout-color4: #484396; /* +101212 */\n  --jp-layout-color5: #b0a71e; /* 888bde->fdc30b +404848 */\n\n  /* Inverse Layout\n   *\n   * The following are the inverse layout colors use in JupyterLab. In a light\n   * theme these would go from dark to light.\n   */\n\n  --jp-inverse-layout-color0: white;\n  --jp-inverse-layout-color1: white;\n  --jp-inverse-layout-color2: var(--md-grey-200, #eee);\n  --jp-inverse-layout-color3: var(--jp-layout-color5, #bdbdbd);\n  --jp-inverse-layout-color4: var(--md-grey-600, #757575);\n\n  /* Brand/accent */\n\n  --jp-brand-color0: var(--md-blue-700, #1976d2);\n  --jp-brand-color1: var(--md-blue-500, #2196f3);\n  --jp-brand-color2: var(--md-blue-300, #64b5f6);\n  --jp-brand-color3: var(--md-blue-100, #bbdefb);\n  --jp-brand-color4: var(--md-blue-50, #e3f2fd);\n  --jp-accent-color0: var(--md-green-700, #388e3c);\n  --jp-accent-color1: var(--md-green-500, #4caf50);\n  --jp-accent-color2: var(--md-green-300, #81c784);\n  --jp-accent-color3: var(--md-green-100, #c8e6c9);\n\n  /* State colors (warn, error, success, info) */\n\n  --jp-warn-color0: var(--md-orange-700, #f57c00);\n  --jp-warn-color1: var(--md-orange-500, #ff9800);\n  --jp-warn-color2: var(--md-orange-300, #ffb74d);\n  --jp-warn-color3: var(--md-orange-100, #ffe0b2);\n  --jp-error-color0: var(--md-red-700, #d32f2f);\n  --jp-error-color1: var(--md-red-500, #f44336);\n  --jp-error-color2: var(--md-red-300, #e57373);\n  --jp-error-color3: var(--md-red-100, #ffcdd2);\n  --jp-success-color0: var(--md-green-700, #388e3c);\n  --jp-success-color1: var(--md-green-500, #4caf50);\n  --jp-success-color2: var(--md-green-300, #81c784);\n  --jp-success-color3: var(--md-green-100, #c8e6c9);\n  --jp-info-color0: var(--md-cyan-700, #0097a7);\n  --jp-info-color1: var(--md-cyan-500, #00bcd4);\n  --jp-info-color2: var(--md-cyan-300, #4dd0e1);\n  --jp-info-color3: var(--md-cyan-100, #b2ebf2);\n\n  /* Cell specific styles */\n\n  --jp-cell-padding: 5px;\n  --jp-cell-collapser-width: 8px;\n  --jp-cell-collapser-min-height: 20px;\n  --jp-cell-collapser-not-active-hover-opacity: 0.6;\n  --jp-cell-editor-background: var(--jp-layout-color1);\n  --jp-cell-editor-border-color: var(--md-grey-700, #616161);\n  --jp-cell-editor-box-shadow: inset 0 0 2px var(--md-blue-300, #64b5f6);\n  --jp-cell-editor-active-background: var(--jp-layout-color0);\n  --jp-cell-editor-active-border-color: var(--jp-brand-color1);\n  --jp-cell-prompt-width: 64px;\n  --jp-cell-prompt-font-family: var(--jp-code-font-family-default);\n  --jp-cell-prompt-letter-spacing: 0;\n  --jp-cell-prompt-opacity: 1;\n  --jp-cell-prompt-not-active-opacity: 1;\n  --jp-cell-prompt-not-active-font-color: var(--md-grey-300, #e0e0e0);\n\n  /* A custom blend of MD grey and blue 600\n   * See https://meyerweb.com/eric/tools/color-blend/#546E7A:1E88E5:5:hex */\n  --jp-cell-inprompt-font-color: #307fc1;\n\n  /* A custom blend of MD grey and orange 600\n   * https://meyerweb.com/eric/tools/color-blend/#546E7A:F4511E:5:hex */\n  --jp-cell-outprompt-font-color: #bf5b3d;\n\n  /* Notebook specific styles */\n\n  --jp-notebook-padding: 10px;\n  --jp-notebook-select-background: var(--jp-layout-color1);\n  --jp-notebook-multiselected-color: rgb(33 150 243 / 24%);\n\n  /* The scroll padding is calculated to fill enough space at the bottom of the\n  notebook to show one single-line cell (with appropriate padding) at the top\n  when the notebook is scrolled all the way to the bottom. We also subtract one\n  pixel so that no scrollbar appears if we have just one single-line cell in the\n  notebook. This padding is to enable a 'scroll past end' feature in a notebook.\n  */\n  --jp-notebook-scroll-padding: calc(\n    100% - var(--jp-code-font-size) * var(--jp-code-line-height) -\n      var(--jp-code-padding) - var(--jp-cell-padding) - 1px\n  );\n\n  /* Rendermime styles */\n\n  --jp-rendermime-error-background: rgb(244 67 54 / 28%);\n  --jp-rendermime-table-row-background: var(--md-grey-900, #212121);\n  --jp-rendermime-table-row-hover-background: rgb(3 169 244 / 20%);\n\n  /* Dialog specific styles */\n\n  --jp-dialog-background: rgb(0 0 0 / 60%);\n\n  /* Console specific styles */\n\n  --jp-console-padding: 10px;\n\n  /* Toolbar specific styles */\n\n  --jp-toolbar-border-color: var(--jp-border-color2);\n  --jp-toolbar-micro-height: 8px;\n  --jp-toolbar-background: var(--jp-layout-color1);\n  --jp-toolbar-box-shadow: 0 0 2px 0 rgb(0 0 0 / 80%);\n  --jp-toolbar-header-margin: 4px 4px 0 4px;\n  --jp-toolbar-active-background: var(--jp-layout-color0);\n\n  /* Statusbar specific styles */\n\n  --jp-statusbar-height: 24px;\n\n  /* Input field styles */\n\n  --jp-input-box-shadow: inset 0 0 2px var(--md-blue-300, #64b5f6);\n  --jp-input-active-background: var(--jp-layout-color0);\n  --jp-input-hover-background: var(--jp-layout-color2);\n  --jp-input-background: var(--md-grey-800, #424242);\n  --jp-input-border-color: var(--jp-inverse-border-color);\n  --jp-input-active-border-color: var(--jp-brand-color1);\n  --jp-input-active-box-shadow-color: rgb(19 124 189 / 30%);\n\n  /* General editor styles */\n\n  --jp-editor-selected-background: var(--jp-layout-color2);\n  --jp-editor-selected-focused-background: rgb(33 150 243 / 24%);\n  --jp-editor-cursor-color: var(--jp-ui-font-color0);\n\n  /* Code mirror specific styles */\n\n  --jp-mirror-editor-keyword-color: var(--md-green-500, #4caf50);\n  --jp-mirror-editor-atom-color: var(--md-blue-300, #64b5f6);\n  --jp-mirror-editor-number-color: var(--md-green-400, #66bb6a);\n  --jp-mirror-editor-def-color: var(--md-blue-600, #1e88e5);\n  --jp-mirror-editor-variable-color: var(--md-grey-300, #e0e0e0);\n  --jp-mirror-editor-variable-2-color: var(--md-blue-500, #2196f3);\n  --jp-mirror-editor-variable-3-color: var(--md-green-600, #43a047);\n  --jp-mirror-editor-punctuation-color: var(--md-blue-400, #42a5f5);\n  --jp-mirror-editor-property-color: var(--md-blue-400, #42a5f5);\n  --jp-mirror-editor-operator-color: #d48fff;\n  --jp-mirror-editor-comment-color: #408080;\n  --jp-mirror-editor-string-color: #ff7070;\n  --jp-mirror-editor-string-2-color: var(--md-purple-300, #ba68c8);\n  --jp-mirror-editor-meta-color: #a2f;\n  --jp-mirror-editor-qualifier-color: #555;\n  --jp-mirror-editor-builtin-color: var(--md-green-600, #43a047);\n  --jp-mirror-editor-bracket-color: #997;\n  --jp-mirror-editor-tag-color: var(--md-green-700, #388e3c);\n  --jp-mirror-editor-attribute-color: var(--md-blue-700, #1976d2);\n  --jp-mirror-editor-header-color: var(--md-blue-500, #2196f3);\n  --jp-mirror-editor-quote-color: var(--md-green-300, #81c784);\n  --jp-mirror-editor-link-color: var(--md-blue-700, #1976d2);\n  --jp-mirror-editor-error-color: #f00;\n  --jp-mirror-editor-hr-color: #999;\n\n  /*\n    RTC user specific colors.\n    These colors are used for the cursor, username in the editor,\n    and the icon of the user.\n  */\n\n  --jp-collaborator-color1: #ad4a00;\n  --jp-collaborator-color2: #7b6a00;\n  --jp-collaborator-color3: #007e00;\n  --jp-collaborator-color4: #008772;\n  --jp-collaborator-color5: #0079b9;\n  --jp-collaborator-color6: #8b45c6;\n  --jp-collaborator-color7: #be208b;\n\n  /* File or activity icons and switch semantic variables */\n\n  /*\n  --jp-jupyter-icon-color: var(--md-orange-900);\n  --jp-notebook-icon-color: var(--md-orange-700);\n  --jp-json-icon-color: var(--md-orange-700);\n  --jp-console-icon-background-color: var(--md-blue-700);\n  --jp-console-icon-color: white;\n  --jp-terminal-icon-background-color: var(--md-grey-200);\n  --jp-terminal-icon-color: var(--md-grey-800);\n  --jp-text-editor-icon-color: var(--md-grey-200);\n  --jp-inspector-icon-color: var(--md-grey-200);\n  --jp-switch-color: var(--md-grey-400);\n  --jp-switch-true-position-color: var(--md-orange-700);\n  --jp-switch-cursor-color: rgba(0, 0, 0, 0.8);\n*/\n\n  /* Vega extension styles */\n\n  --jp-vega-background: var(--md-grey-400, #bdbdbd);\n\n  /* Sidebar-related styles */\n\n  --jp-sidebar-min-width: 250px;\n\n  /* Search-related styles */\n\n  --jp-search-toggle-off-opacity: 0.6;\n  --jp-search-toggle-hover-opacity: 0.8;\n  --jp-search-toggle-on-opacity: 1;\n  --jp-search-selected-match-background-color: rgb(255 225 0);\n  --jp-search-selected-match-color: black;\n  --jp-search-unselected-match-background-color: var(\n    --jp-inverse-layout-color0\n  );\n  --jp-search-unselected-match-color: var(--jp-ui-inverse-font-color0);\n\n  /* scrollbar related styles. Supports every browser except Edge. */\n\n  /* colors based on JetBrain's Darcula theme */\n\n  --jp-scrollbar-background-color: #3f4244;\n  --jp-scrollbar-thumb-color:\n    88, 96, 97; /* need to specify thumb color as an RGB triplet */\n\n  --jp-scrollbar-endpad: 3px; /* the minimum gap between the thumb and the ends of a scrollbar */\n\n  /* hacks for setting the thumb shape. These do nothing in Firefox */\n\n  --jp-scrollbar-thumb-margin: 3.5px; /* the space in between the sides of the thumb and the track */\n  --jp-scrollbar-thumb-radius: 9px; /* set to a large-ish value for rounded endcaps on the thumb */\n\n  /* Icon colors that work well with light or dark backgrounds */\n  --jp-icon-contrast-color0: var(--md-purple-600, #8e24aa);\n  --jp-icon-contrast-color1: var(--md-green-600, #43a047);\n  --jp-icon-contrast-color2: var(--md-pink-600, #d81b60);\n  --jp-icon-contrast-color3: var(--md-blue-600, #1e88e5);\n\n  /* Button colors */\n  --jp-accept-color-normal: var(--md-blue-700, #1976d2);\n  --jp-accept-color-hover: var(--md-blue-800, #1565c0);\n  --jp-accept-color-active: var(--md-blue-900, #0d47a1);\n  --jp-warn-color-normal: var(--md-red-700, #d32f2f);\n  --jp-warn-color-hover: var(--md-red-800, #c62828);\n  --jp-warn-color-active: var(--md-red-900, #b71c1c);\n  --jp-reject-color-normal: var(--md-grey-600, #757575);\n  --jp-reject-color-hover: var(--md-grey-700, #616161);\n  --jp-reject-color-active: var(--md-grey-800, #424242);\n\n  /* File or activity icons and switch semantic variables */\n  --jp-jupyter-icon-color: #f37626;\n  --jp-notebook-icon-color: #f37626;\n  --jp-json-icon-color: var(--md-orange-500, #ff9800);\n  --jp-console-icon-background-color: var(--md-blue-500, #2196f3);\n  --jp-console-icon-color: white;\n  --jp-terminal-icon-background-color: var(--md-grey-200, #eee);\n  --jp-terminal-icon-color: var(--md-grey-800, #424242);\n  --jp-text-editor-icon-color: var(--md-grey-200, #eee);\n  --jp-inspector-icon-color: var(--md-grey-200, #eee);\n  --jp-switch-color: var(--md-grey-400, #bdbdbd);\n  --jp-switch-true-position-color: var(--md-orange-700, #f57c00);\n}\n\n/* Completer specific styles */\n\n.jp-Completer {\n  --jp-completer-type-background0: transparent;\n  --jp-completer-type-background1: #1f77b4;\n  --jp-completer-type-background2: #ff7f0e;\n  --jp-completer-type-background3: #2ca02c;\n  --jp-completer-type-background4: #d62728;\n  --jp-completer-type-background5: #9467bd;\n  --jp-completer-type-background6: #8c564b;\n  --jp-completer-type-background7: #e377c2;\n  --jp-completer-type-background8: #7f7f7f;\n  --jp-completer-type-background9: #bcbd22;\n  --jp-completer-type-background10: #17becf;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./style/images/background.svg":
/*!*************************************!*\
  !*** ./style/images/background.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6fd5ad12311a48c10c7.svg";

/***/ }),

/***/ "./style/index.css":
/*!*************************!*\
  !*** ./style/index.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./style/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=style_index_css.3575798a5f336fbb071b.js.map