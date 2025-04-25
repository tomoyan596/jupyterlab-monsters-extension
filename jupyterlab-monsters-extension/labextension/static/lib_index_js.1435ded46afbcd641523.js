"use strict";
(self["webpackChunk_tomoyan596_jupyterlab_monsters_extension"] = self["webpackChunk_tomoyan596_jupyterlab_monsters_extension"] || []).push([["lib_index_js"],{

/***/ "./lib/dark-blue-monokai.js":
/*!**********************************!*\
  !*** ./lib/dark-blue-monokai.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dark_blue_monokai: () => (/* binding */ dark_blue_monokai),
/* harmony export */   monokaiHighlightStyle: () => (/* binding */ monokaiHighlightStyle),
/* harmony export */   monokaiTheme: () => (/* binding */ monokaiTheme)
/* harmony export */ });
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @codemirror/view */ "webpack/sharing/consume/default/@codemirror/view");
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_codemirror_view__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _codemirror_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @codemirror/language */ "webpack/sharing/consume/default/@codemirror/language");
/* harmony import */ var _codemirror_language__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_codemirror_language__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lezer/highlight */ "webpack/sharing/consume/default/@lezer/highlight");
/* harmony import */ var _lezer_highlight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__);



// Monokai theme colors aligned with the schema
const base00 = '#101050d0', // Background - Alpha a0 enables background image
base01 = '#f8f8f2', // Foreground
base02 = '#4a4a76', // Selection and Selection Match
base03 = '#88846f', // Comment
base04 = '#f8f8f0', // Cursor
base05 = '#F92672', // Keyword, Storage, Tag
base06 = '#FD971F', // Variable, Parameter
base07 = '#66D9EF', // Function, Type
base08 = '#E6DB74', // String, RegExp
base09 = '#AE81FF', // Constant, Number
base0A = '#A6E22E', // Class, Heading
invalid = '#F44747'; // Invalid
const darkBackground = '#2d2d50', // Dropdown background
highlightBackground = '#3e3d3257', // Line highlight with some opacity
tooltipBackground = base01, // Tooltips using foreground color
cursor = base04, // Caret color
selection = base02; // Selection color
// Define the editor theme styles for Monokai.
const monokaiTheme = _codemirror_view__WEBPACK_IMPORTED_MODULE_0__.EditorView.theme({
    '&': {
        color: base01,
        backgroundColor: base00,
    },
    '.cm-content': {
        caretColor: cursor,
    },
    '.cm-cursor, .cm-dropCursor': {
        borderLeftColor: cursor,
    },
    '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
        backgroundColor: selection,
    },
    '.cm-searchMatch': {
        backgroundColor: base02,
        color: base01,
        outline: `1px solid ${base03}`, // Outline using comment color
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
        backgroundColor: base05,
        color: base00, // Background color for high visibility
    },
    '.cm-panels': {
        backgroundColor: darkBackground,
        color: base01,
    },
    '.cm-panels.cm-panels-top': {
        borderBottom: '2px solid black',
    },
    '.cm-panels.cm-panels-bottom': {
        borderTop: '2px solid black',
    },
    '.cm-activeLine': {
        backgroundColor: highlightBackground,
    },
    '.cm-gutters': {
        backgroundColor: darkBackground,
        color: base03, // color: base03,
    },
    //'.cm-scroller': {
    //  fontFamily: 'inherit',  // fix code Font Family setting
    //  lineHeight: 'inherit',  // fix code Line Height setting
    //},
    '.cm-tooltip': {
        backgroundColor: tooltipBackground,
    },
}, { dark: true });
// Define the highlighting style for code in the Monokai theme.
const monokaiHighlightStyle = _codemirror_language__WEBPACK_IMPORTED_MODULE_1__.HighlightStyle.define([
    { tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.keyword, color: base05 },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.name, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.deleted, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.character, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.macroName], color: base06 },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.propertyName], color: base07 },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.processingInstruction, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.string, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.inserted, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.special(_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.string)], color: base08 },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.function(_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.variableName), _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.labelName], color: base07 },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.color, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.constant(_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.name), _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.standard(_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.name)], color: base09 },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.definition(_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.name), _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.separator], color: base06 },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.className], color: base0A },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.number, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.changed, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.annotation, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.modifier, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.self, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.namespace], color: base09 },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.typeName], color: base07 },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.operator, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.operatorKeyword], color: base05 },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.url, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.escape, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.regexp, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.link], color: base08 },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.meta, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.comment], color: base03 },
    { tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.tagName, color: base05 },
    { tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.strong, fontWeight: 'bold' },
    { tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.emphasis, fontStyle: 'italic' },
    { tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.link, textDecoration: 'underline' },
    { tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.heading, fontWeight: 'bold', color: base0A },
    { tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.atom, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.bool, _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.special(_lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.variableName)], color: base06 },
    { tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.invalid, color: invalid },
    { tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_2__.tags.strikethrough, textDecoration: 'line-through' },
]);
// Extension to enable the Monokai theme (both the editor theme and the highlight style).
const dark_blue_monokai = [
    monokaiTheme,
    (0,_codemirror_language__WEBPACK_IMPORTED_MODULE_1__.syntaxHighlighting)(monokaiHighlightStyle),
];


/***/ }),

/***/ "./lib/editor-extension.js":
/*!*********************************!*\
  !*** ./lib/editor-extension.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customTheme: () => (/* binding */ customTheme),
/* harmony export */   pluginEditorExtension: () => (/* binding */ pluginEditorExtension)
/* harmony export */ });
/* harmony import */ var _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/codemirror */ "webpack/sharing/consume/default/@jupyterlab/codemirror");
/* harmony import */ var _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation");
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codemirror/state */ "webpack/sharing/consume/default/@codemirror/state");
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_codemirror_state__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codemirror/view */ "webpack/sharing/consume/default/@codemirror/view");
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_codemirror_view__WEBPACK_IMPORTED_MODULE_3__);




const PLUGIN_ID = '@tomoyan596/jupyterlab-monsters-extension:editor_extension';
const customThemeConfig = _codemirror_state__WEBPACK_IMPORTED_MODULE_2__.Facet.define({
    combine(configs) {
        return (0,_codemirror_state__WEBPACK_IMPORTED_MODULE_2__.combineConfig)(configs, {
            fontFamily: null,
            fontSize: null,
            lineHeight: null,
            letterSpacing: null
        }, {
            fontFamily: (a, b) => a !== null && a !== void 0 ? a : b,
            fontSize: (a, b) => a !== null && a !== void 0 ? a : b,
            lineHeight: (a, b) => a !== null && a !== void 0 ? a : b,
            letterSpacing: (a, b) => a !== null && a !== void 0 ? a : b
        });
    }
});
function setEditorStyle(view) {
    const { fontFamily, fontSize, lineHeight, letterSpacing } = view.state.facet(customThemeConfig);
    let style = '';
    if (fontSize) {
        style += `font-size: ${fontSize}px !important;`;
    }
    if (fontFamily) {
        style += `font-family: ${fontFamily} !important;`;
    }
    if (lineHeight) {
        style += `line-height: ${lineHeight.toString()} !important`;
    }
    if (letterSpacing) {
        style += `line-height: ${letterSpacing} !important`;
    }
    return { style: style };
}
function customTheme(config) {
    return [
        customThemeConfig.of(config),
        _codemirror_view__WEBPACK_IMPORTED_MODULE_3__.EditorView.editorAttributes.of(setEditorStyle),
        _codemirror_view__WEBPACK_IMPORTED_MODULE_3__.EditorView.theme({
            '.cm-scroller': {
                fontFamily: "{config.letterSpacing}"
            }
        })
    ];
}
/**
 * Added CodeMirror theme for jupyter-tomoyan-extension extension.
 *
  * reference:
 *   https://jupyterlab.readthedocs.io/en/stable/api/classes/codemirror.EditorThemeRegistry-1.html
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror-extension/src/services.tsx#L91
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror/src/language.ts#L536
*/
const pluginEditorExtension = {
    id: PLUGIN_ID,
    description: 'A JupyterLab extension.',
    autoStart: true,
    requires: [_jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__.IEditorExtensionRegistry, _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__.ITranslator],
    activate: (app, extensions, translator) => {
        console.log(`JupyterLab extension ${PLUGIN_ID} is activated!`);
        const trans = (translator !== null && translator !== void 0 ? translator : _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__.nullTranslator).load('jupyterlab');
        extensions.addExtension({
            name: 'customStyles1',
            factory: () => _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__.EditorExtensionRegistry.createConfigurableExtension(config => customTheme(config)),
            default: {
                fontFamily: null,
                fontSize: null,
                lineHeight: null,
                letterSpacing: null
            },
            schema: {
                title: trans.__('Custom editor styles'),
                type: 'object',
                properties: {
                    fontFamily: {
                        type: ['string', 'null'],
                        title: trans.__('Font Family')
                    },
                    fontSize: {
                        type: ['number', 'null'],
                        minimum: 1,
                        maximum: 100,
                        title: trans.__('Font Size')
                    },
                    lineHeight: {
                        type: ['number', 'null'],
                        title: trans.__('Line Height')
                    },
                    letterSpacing: {
                        type: ['number', 'null'],
                        title: trans.__('Letter Spacing')
                    }
                },
                additionalProperties: true
            }
        });
        console.log('extensions:');
        console.log(extensions);
    }
};


/***/ }),

/***/ "./lib/editor-language.js":
/*!********************************!*\
  !*** ./lib/editor-language.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pluginEditorLanguage: () => (/* binding */ pluginEditorLanguage)
/* harmony export */ });
/* harmony import */ var _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/codemirror */ "webpack/sharing/consume/default/@jupyterlab/codemirror");
/* harmony import */ var _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation");
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__);


const PLUGIN_ID = '@tomoyan596/jupyterlab-monsters-extension:editor_language';
/*
 * Added CodeMirror language definition to the jupyter-tomoyan-extension extension.
 *
 * reference:
 *   https://jupyterlab.readthedocs.io/en/stable/api/classes/codemirror.EditorLanguageRegistry-1.html
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror-extension/src/services.tsx#L45
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror/src/language.ts#L536
*/
const pluginEditorLanguage = {
    id: PLUGIN_ID,
    description: 'A JupyterLab extension.',
    autoStart: true,
    requires: [_jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__.IEditorLanguageRegistry, _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__.ITranslator],
    activate: (app, languages, translator) => {
        console.log(`JupyterLab extension ${PLUGIN_ID} is activated!`);
        const trans = (translator !== null && translator !== void 0 ? translator : _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__.nullTranslator).load('jupyterlab');
        for (const language of [
            {
                name: 'Astro',
                displayName: trans.__('Astro'),
                alias: ['astro'],
                mime: 'text/astro-jsx',
                extensions: ['astro'],
                async load() {
                    const m = await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_lezer_lr_dist_index_js"), __webpack_require__.e("vendors-node_modules_codemirror_lang-javascript_dist_index_js"), __webpack_require__.e("webpack_sharing_consume_default_lezer_common")]).then(__webpack_require__.bind(__webpack_require__, /*! @codemirror/lang-javascript */ "./node_modules/@codemirror/lang-javascript/dist/index.js"));
                    return m.javascript({ jsx: true, typescript: true });
                }
            },
            {
                name: 'JSONC',
                displayName: trans.__('JSONC'),
                alias: ['json5'],
                mime: ['application/jsonc', 'application/x-jsonc'],
                extensions: ['jsonc', 'map'],
                async load() {
                    const m = await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_lezer_lr_dist_index_js"), __webpack_require__.e("webpack_sharing_consume_default_lezer_common"), __webpack_require__.e("node_modules_codemirror_lang-json_dist_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @codemirror/lang-json */ "./node_modules/@codemirror/lang-json/dist/index.js"));
                    return m.json();
                }
            }
        ]) {
            languages.addLanguage(language);
        }
        console.log('languages:');
        console.log(languages);
    }
};


/***/ }),

/***/ "./lib/editor-theme.js":
/*!*****************************!*\
  !*** ./lib/editor-theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pluginEditorTheme: () => (/* binding */ pluginEditorTheme),
/* harmony export */   rgbaToHex: () => (/* binding */ rgbaToHex)
/* harmony export */ });
/* harmony import */ var _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/codemirror */ "webpack/sharing/consume/default/@jupyterlab/codemirror");
/* harmony import */ var _jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation");
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fsegurai_codemirror_theme_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fsegurai/codemirror-theme-bundle */ "webpack/sharing/consume/default/@fsegurai/codemirror-theme-bundle/@fsegurai/codemirror-theme-bundle");
/* harmony import */ var _fsegurai_codemirror_theme_bundle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fsegurai_codemirror_theme_bundle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dark_blue_monokai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dark-blue-monokai */ "./lib/dark-blue-monokai.js");




const PLUGIN_ID = '@tomoyan596/jupyterlab-monsters-extension:editor_theme';
/**
 * Added CodeMirror theme for jupyter-tomoyan-extension extension.
 *
 * reference:
 *   https://jupyterlab.readthedocs.io/en/stable/api/classes/codemirror.EditorThemeRegistry-1.html
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror-extension/src/services.tsx#L91
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror/src/language.ts#L536
 */
const pluginEditorTheme = {
    id: PLUGIN_ID,
    description: 'A JupyterLab extension.',
    autoStart: true,
    requires: [_jupyterlab_codemirror__WEBPACK_IMPORTED_MODULE_0__.IEditorThemeRegistry, _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__.ITranslator],
    activate: (app, themes, translator) => {
        console.log(`JupyterLab extension ${PLUGIN_ID} is activated!`);
        const trans = (translator !== null && translator !== void 0 ? translator : _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__.nullTranslator).load('jupyterlab');
        themes.addTheme({
            name: 'Tomoyan\'s dark royal blue monokai',
            displayName: trans.__('Tomoyan\'s dark royal blue monokai'),
            theme: _dark_blue_monokai__WEBPACK_IMPORTED_MODULE_3__.dark_blue_monokai
        });
        for (const [name, cm_theme] of Object.entries(_fsegurai_codemirror_theme_bundle__WEBPACK_IMPORTED_MODULE_2__)) {
            themes.addTheme({
                name: name,
                displayName: trans.__(name),
                theme: cm_theme
            });
        }
    }
};
/**
 *
 * reference:
 *   https://medium.com/@techsolutionsx/converting-rgba-to-hex-in-javascript-a-comprehensive-guide-908fbb1d13cf
 *
 */
const rgbaToHex = (colorStr, forceRemoveAlpha = false) => {
    // Check if the input string contains '/'
    const hasSlash = colorStr.includes('/');
    if (hasSlash) {
        // Extract the RGBA values from the input string
        const rgbaValues = colorStr.match(/(\d+)\s+(\d+)\s+(\d+)\s+\/\s+([\d.]+)/);
        if (!rgbaValues) {
            return colorStr; // Return the original string if it doesn't match the expected format
        }
        const [red, green, blue, alpha] = rgbaValues.slice(1, 5).map(parseFloat);
        // Convert the RGB values to hexadecimal format
        const redHex = red.toString(16).padStart(2, '0');
        const greenHex = green.toString(16).padStart(2, '0');
        const blueHex = blue.toString(16).padStart(2, '0');
        // Convert alpha to a hexadecimal format (assuming it's already a decimal value in the range [0, 1])
        const alphaHex = forceRemoveAlpha
            ? ''
            : Math.round(alpha * 255)
                .toString(16)
                .padStart(2, '0');
        // Combine the hexadecimal values to form the final hex color string
        const hexColor = `#${redHex}${greenHex}${blueHex}${alphaHex}`;
        return hexColor;
    }
    else {
        // Use the second code block for the case when '/' is not present
        return ('#' +
            colorStr
                .replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
                .split(',') // splits them at ","
                .filter((string, index) => !forceRemoveAlpha || index !== 3)
                .map(string => parseFloat(string)) // Converts them to numbers
                .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
                .map(number => number.toString(16)) // Converts numbers to hex
                .map(string => (string.length === 1 ? '0' + string : string)) // Adds 0 when length of one number is 1
                .join(''));
    }
};


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyter_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jupyter-theme */ "./lib/jupyter-theme.js");
/* harmony import */ var _editor_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-theme */ "./lib/editor-theme.js");
/* harmony import */ var _editor_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-language */ "./lib/editor-language.js");
/* harmony import */ var _editor_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor-extension */ "./lib/editor-extension.js");




//export * from './extensions'
/**
 * Initialization data for the jupyter_tomoyan_extension extension.
 *
  * reference:
 *   https://jupyterlab.readthedocs.io/en/stable/api/classes/codemirror.EditorThemeRegistry-1.html
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror-extension/src/services.tsx#L91
 *   https://github.com/jupyterlab/jupyterlab/blob/4.3.x/packages/codemirror/src/language.ts#L536
*/
const plugins = [
    _jupyter_theme__WEBPACK_IMPORTED_MODULE_0__.pluginJupyterTheme,
    _editor_theme__WEBPACK_IMPORTED_MODULE_1__.pluginEditorTheme,
    _editor_language__WEBPACK_IMPORTED_MODULE_2__.pluginEditorLanguage,
    _editor_extension__WEBPACK_IMPORTED_MODULE_3__.pluginEditorExtension
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugins);


/***/ }),

/***/ "./lib/jupyter-theme.js":
/*!******************************!*\
  !*** ./lib/jupyter-theme.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pluginJupyterTheme: () => (/* binding */ pluginJupyterTheme)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/translation */ "webpack/sharing/consume/default/@jupyterlab/translation");
/* harmony import */ var _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/settingregistry */ "webpack/sharing/consume/default/@jupyterlab/settingregistry");
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_2__);



const PLUGIN_ID = '@tomoyan596/jupyterlab-monsters-extension:jupyter_theme';
/**
 * Added JupyterJab theme to jupyter-tomoyan-extension extension.
 */
const pluginJupyterTheme = {
    id: PLUGIN_ID,
    description: 'A JupyterLab extension.',
    autoStart: true,
    requires: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.IThemeManager, _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__.ITranslator],
    optional: [_jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_2__.ISettingRegistry],
    activate: (app, manager, translator, settingRegistry) => {
        console.log(`JupyterLab extension ${PLUGIN_ID} is activated!`);
        const style = '@tomoyan596/jupyterlab-monsters-extension/index.css';
        const trans = (translator !== null && translator !== void 0 ? translator : _jupyterlab_translation__WEBPACK_IMPORTED_MODULE_1__.nullTranslator).load('jupyterlab');
        manager.register({
            name: 'Tomoyan\'s Dark Royal Blue',
            displayName: trans.__('Tomoyan\'s Dark Royal Blue'),
            isLight: false,
            themeScrollbars: true,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
        if (settingRegistry) {
            settingRegistry
                .load(pluginJupyterTheme.id)
                .then(settings => {
                console.log('jupyterlab-monster-extension settings loaded:', settings.composite);
            })
                .catch(reason => {
                console.error('Failed to load settings for jupyterlab-monster-extension.', reason);
            });
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=lib_index_js.1435ded46afbcd641523.js.map