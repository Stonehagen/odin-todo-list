/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --highlightColor: rgb(49, 152, 125);\n  --lightAccentColor: rgb(235, 235, 235);\n  --darkAccentColor: rgb(220, 220, 220);\n  --lightBackgroundColor: rgb(246, 246, 246);\n  --darkHighlightColor: rgb(20, 115, 90);\n  --borderColor: rgb(36, 55, 47);\n  --darkTextColor: rgb(80, 80, 80);\n\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: var(--darkTextColor);\n}\n\nbody {\n  margin: 0;\n}\n\nbutton {\n  background-color: none;\n  border-radius: 10px;\n  color: var(--highlightColor);\n  border: 2px solid var(--highlightColor);\n}\n\nbutton:hover {\n  background-color: var(--highlightColor);\n  color: white;\n  cursor: pointer;\n}\n\ninput {\n  border-radius: 10px;\n  padding: 0 10px;\n  border: none;\n}\n\n#content {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 4fr;\n  grid-template-rows: 50px 1fr 60px;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'add-project add-task';\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--highlightColor);\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background-color: var(--lightAccentColor);\n  box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n}\n\n.project-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n}\n\n.project {\n  border-radius: 5px;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 10px;\n}\n\n.project:hover {\n  background-color: var(--darkAccentColor);\n  cursor: pointer;\n}\n\n.active-project {\n  background-color: var(--darkAccentColor);\n}\n\n.add-project {\n  grid-area: add-project;\n  background-color: var(--lightAccentColor);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-project button {\n  width: 100px;\n  height: 35px;\n}\n\n.main {\n  grid-area: main;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 0 30px 0 50px;\n}\n\n.main h2 {\n  margin: 30px 0;\n}\n\n.task-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.task-list li {\n  border-bottom: 2px solid var(--lightAccentColor);\n  padding: 5px 0;\n  display: grid;\n  grid-template-columns: 20px 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 10px;\n}\n\n.task-checkbox {\n  grid-column: 1/2;\n  grid-row: 1/3;\n  border: 1px solid var(--lightAccentColor);\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  text-align: center;\n  font-size: 1.1em;\n  color: var(--lightBackgroundColor);\n}\n\n.task-checkbox:hover {\n  background-color: rgb(218, 238, 218);\n  border: 1px solid var(--darkAccentColor);\n  color: var(--highlightColor);\n  cursor: pointer;\n}\n\n.task-title {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.task-date {\n  font-size: 0.8em;\n  grid-column: 2/3;\n  grid-row: 2/3;\n  padding: 2px 0;\n}\n\n\n.add-task {\n  grid-area: add-task;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 0px 2px -3px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-task button {\n  width: 100px;\n  height: 35px;\n}\n\n.background-popup {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(3px);\n}\n\n.add-project-div,\n.add-task-div {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -60px;\n  margin-left: -200px;\n  width: 400px;\n  height: 120px;\n  border-radius: 15px;\n  background-color: var(--darkAccentColor);\n  animation: fadeIn 0.2s;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.4);\n  z-index: 100;\n}\n\n.add-project-div form,\n.add-task-div form {\n  display: grid;\n  padding: 15px;\n  height: 90px;\n  grid-template-rows: 1fr 1fr;\n  gap: 15px;\n}\n\n.add-project-div button,\n.add-task-div button {\n  width: 100px;\n  justify-self: end;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,sCAAsC;EACtC,qCAAqC;EACrC,0CAA0C;EAC1C,sCAAsC;EACtC,8BAA8B;EAC9B,gCAAgC;;EAEhC,gDAAgD;EAChD,2BAA2B;AAC7B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,4BAA4B;EAC5B,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;EACvC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gCAAgC;EAChC,iCAAiC;EACjC;;;0BAGwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,yCAAyC;EACzC,qDAAqD;EACrD,aAAa;AACf;;AAEA;EACE,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,sBAAsB;EACtB,yCAAyC;EACzC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,6CAA6C;EAC7C,qDAAqD;EACrD,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,gDAAgD;EAChD,cAAc;EACd,aAAa;EACb,+BAA+B;EAC/B,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,yCAAyC;EACzC,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;EACpC,wCAAwC;EACxC,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,cAAc;AAChB;;;AAGA;EACE,mBAAmB;EACnB,6CAA6C;EAC7C,qDAAqD;EACrD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,0BAA0B;AAC5B;;AAEA;;EAEE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,wCAAwC;EACxC,sBAAsB;EACtB,+CAA+C;EAC/C,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,2BAA2B;EAC3B,SAAS;AACX;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":[":root {\n  --highlightColor: rgb(49, 152, 125);\n  --lightAccentColor: rgb(235, 235, 235);\n  --darkAccentColor: rgb(220, 220, 220);\n  --lightBackgroundColor: rgb(246, 246, 246);\n  --darkHighlightColor: rgb(20, 115, 90);\n  --borderColor: rgb(36, 55, 47);\n  --darkTextColor: rgb(80, 80, 80);\n\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: var(--darkTextColor);\n}\n\nbody {\n  margin: 0;\n}\n\nbutton {\n  background-color: none;\n  border-radius: 10px;\n  color: var(--highlightColor);\n  border: 2px solid var(--highlightColor);\n}\n\nbutton:hover {\n  background-color: var(--highlightColor);\n  color: white;\n  cursor: pointer;\n}\n\ninput {\n  border-radius: 10px;\n  padding: 0 10px;\n  border: none;\n}\n\n#content {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 4fr;\n  grid-template-rows: 50px 1fr 60px;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'add-project add-task';\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--highlightColor);\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background-color: var(--lightAccentColor);\n  box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n}\n\n.project-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n}\n\n.project {\n  border-radius: 5px;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 10px;\n}\n\n.project:hover {\n  background-color: var(--darkAccentColor);\n  cursor: pointer;\n}\n\n.active-project {\n  background-color: var(--darkAccentColor);\n}\n\n.add-project {\n  grid-area: add-project;\n  background-color: var(--lightAccentColor);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-project button {\n  width: 100px;\n  height: 35px;\n}\n\n.main {\n  grid-area: main;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 0 30px 0 50px;\n}\n\n.main h2 {\n  margin: 30px 0;\n}\n\n.task-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.task-list li {\n  border-bottom: 2px solid var(--lightAccentColor);\n  padding: 5px 0;\n  display: grid;\n  grid-template-columns: 20px 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 10px;\n}\n\n.task-checkbox {\n  grid-column: 1/2;\n  grid-row: 1/3;\n  border: 1px solid var(--lightAccentColor);\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  text-align: center;\n  font-size: 1.1em;\n  color: var(--lightBackgroundColor);\n}\n\n.task-checkbox:hover {\n  background-color: rgb(218, 238, 218);\n  border: 1px solid var(--darkAccentColor);\n  color: var(--highlightColor);\n  cursor: pointer;\n}\n\n.task-title {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.task-date {\n  font-size: 0.8em;\n  grid-column: 2/3;\n  grid-row: 2/3;\n  padding: 2px 0;\n}\n\n\n.add-task {\n  grid-area: add-task;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 0px 2px -3px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-task button {\n  width: 100px;\n  height: 35px;\n}\n\n.background-popup {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(3px);\n}\n\n.add-project-div,\n.add-task-div {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -60px;\n  margin-left: -200px;\n  width: 400px;\n  height: 120px;\n  border-radius: 15px;\n  background-color: var(--darkAccentColor);\n  animation: fadeIn 0.2s;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.4);\n  z-index: 100;\n}\n\n.add-project-div form,\n.add-task-div form {\n  display: grid;\n  padding: 15px;\n  height: 90px;\n  grid-template-rows: 1fr 1fr;\n  gap: 15px;\n}\n\n.add-project-div button,\n.add-task-div button {\n  width: 100px;\n  justify-self: end;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/eventListener.js":
/*!**************************************!*\
  !*** ./src/modules/eventListener.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEventListerns": () => (/* binding */ addEventListerns),
/* harmony export */   "addProjectButtonEl": () => (/* binding */ addProjectButtonEl),
/* harmony export */   "addProjectFormButtonEl": () => (/* binding */ addProjectFormButtonEl),
/* harmony export */   "addTaskButtonEl": () => (/* binding */ addTaskButtonEl),
/* harmony export */   "addTaskFormButtonEl": () => (/* binding */ addTaskFormButtonEl),
/* harmony export */   "projectListItemEl": () => (/* binding */ projectListItemEl)
/* harmony export */ });
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/modules/pageLoad.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");




const projectListItemEl = (projectListItem) => {
  projectListItem.addEventListener('click', (e) => {
    const projectId = e.target.id.split('-')[1];
    _project__WEBPACK_IMPORTED_MODULE_1__.projectlist.setActiveProject(projectId);
    (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(projectId);
  });
};

const addProjectButtonEl = (htmlContainer) => {
  const btn = document.querySelector('#add-new-project-btn');
  btn.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
      const titleInput = htmlContainer.querySelector('#add-project-title');
      (0,_project__WEBPACK_IMPORTED_MODULE_1__.newProject)(titleInput.value);
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayProjectlist)(projectListItemEl);
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.closePopup)();
    },
    { once: true },
  );
};

const addTaskButtonEl = (htmlContainer) => {
  const btn = document.querySelector('#add-new-task-btn');
  btn.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
      const titleInput = htmlContainer.querySelector('#add-task-title');
      _project__WEBPACK_IMPORTED_MODULE_1__.projectlist.getActiceProjectObject()
        .addTask((0,_task__WEBPACK_IMPORTED_MODULE_2__.newTask)(titleInput.value, '', ''));
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayTaskList)();
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayProjectlist)(projectListItemEl);
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.closePopup)();
    },
    { once: true },
  );
};

const addProjectFormButtonEl = (htmlContainer) => {
  const btn = document.querySelector('#add-project-btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.showAddProjectForm)(htmlContainer);
    addProjectButtonEl(htmlContainer);
  });
};

const addTaskFormButtonEl = (htmlContainer) => {
  const btn = document.querySelector('#add-task-btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.showAddTaskForm)(htmlContainer);
    addTaskButtonEl(htmlContainer);
  });
};

const addEventListerns = (htmlContainer) => {
  addProjectFormButtonEl(htmlContainer);
  addTaskFormButtonEl(htmlContainer);
};


/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closePopup": () => (/* binding */ closePopup),
/* harmony export */   "displayProjectlist": () => (/* binding */ displayProjectlist),
/* harmony export */   "displayTaskList": () => (/* binding */ displayTaskList),
/* harmony export */   "getTaskHtml": () => (/* binding */ getTaskHtml),
/* harmony export */   "loadTemplate": () => (/* binding */ loadTemplate),
/* harmony export */   "setActiveProject": () => (/* binding */ setActiveProject),
/* harmony export */   "showAddProjectForm": () => (/* binding */ showAddProjectForm),
/* harmony export */   "showAddTaskForm": () => (/* binding */ showAddTaskForm)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");


const addTaskButton = (htmlContainer, htmlclass, innerhtml) => {
  const htmlBtn = document.createElement('button');
  htmlBtn.id = htmlclass;
  htmlBtn.innerHTML = innerhtml;
  htmlContainer.appendChild(htmlBtn);
};

const loadTemplate = (htmlContainer) => {
  const templateContainer = htmlContainer;
  templateContainer.innerHTML = '';
  const htmlClasses = ['header', 'sidebar', 'add-project', 'main', 'add-task'];

  htmlClasses.forEach((htmlClass) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add(htmlClass);
    templateContainer.appendChild(newDiv);
  });

  addTaskButton(
    htmlContainer.querySelector('.add-project'),
    'add-project-btn',
    '<strong>+</strong> Add project',
  );
  addTaskButton(
    htmlContainer.querySelector('.add-task'),
    'add-task-btn',
    '<strong>+</strong> Add task',
  );
};

const displayProjectlist = (liEl) => {
  const htmlSidebar = document.querySelector('.sidebar');
  htmlSidebar.innerHTML = '';

  const htmlProjectList = document.createElement('ul');
  htmlProjectList.classList.add('project-list');

  _project__WEBPACK_IMPORTED_MODULE_0__.projectlist.getProjects().forEach((project) => {
    const htmlProject = document.createElement('li');
    htmlProject.classList.add('project');
    if (project.id === _project__WEBPACK_IMPORTED_MODULE_0__.projectlist.getActiveProject()) {
      htmlProject.classList.add('active-project');
    }
    htmlProject.id = `project-${project.id}`;
    htmlProject.innerHTML = `${project.title} (${project.tasks.length})`;
    liEl(htmlProject);
    htmlProjectList.appendChild(htmlProject);
  });

  htmlSidebar.appendChild(htmlProjectList);
};

const getTaskHtml = (task) => {
  const htmlTask = document.createElement('li');
  htmlTask.classList.add('task');
  htmlTask.id = `task-${task.id}`;

  const htmlCheckbox = document.createElement('div');
  htmlCheckbox.classList.add('task-checkbox');
  htmlCheckbox.innerHTML = '✓';
  htmlTask.appendChild(htmlCheckbox);

  const htmlTitle = document.createElement('div');
  htmlTitle.classList.add('task-title');
  htmlTitle.innerHTML = task.title;
  htmlTask.appendChild(htmlTitle);

  const htmlDate = document.createElement('div');
  htmlDate.classList.add('task-date');
  htmlDate.innerHTML = '01.02.23 - 10:00'; // task.dueDate
  htmlTask.appendChild(htmlDate);

  return htmlTask;
};

const displayTaskList = () => {
  const project = _project__WEBPACK_IMPORTED_MODULE_0__.projectlist.getActiceProjectObject();
  const htmlMain = document.querySelector('.main');
  htmlMain.innerHTML = '';

  const Htmlheading = document.createElement('h2');
  Htmlheading.innerHTML = project.title;

  htmlMain.appendChild(Htmlheading);

  const htmlTaskList = document.createElement('ul');
  htmlTaskList.classList.add('task-list');

  project.tasks.forEach((task) => {
    htmlTaskList.appendChild(getTaskHtml(task));
  });

  htmlMain.appendChild(htmlTaskList);
};

const showAddProjectForm = (htmlContainer) => {
  const form = document.createElement('form');

  const titleInput = document.createElement('input');
  titleInput.id = 'add-project-title';
  titleInput.placeholder = 'Project title...';
  form.appendChild(titleInput);

  const btnSubmit = document.createElement('button');
  btnSubmit.id = 'add-new-project-btn';
  btnSubmit.innerHTML = 'Add project';
  form.appendChild(btnSubmit);

  const htmlAddProjectDiv = document.createElement('div');
  htmlAddProjectDiv.classList.add('add-project-div');
  htmlAddProjectDiv.appendChild(form);

  const backgroundDiv = document.createElement('div');
  backgroundDiv.classList.add('background-popup');
  backgroundDiv.appendChild(htmlAddProjectDiv);

  htmlContainer.appendChild(backgroundDiv);
};

const showAddTaskForm = (htmlContainer) => {
  const form = document.createElement('form');

  const titleInput = document.createElement('input');
  titleInput.id = 'add-task-title';
  titleInput.placeholder = 'Task title...';
  form.appendChild(titleInput);

  const btnSubmit = document.createElement('button');
  btnSubmit.id = 'add-new-task-btn';
  btnSubmit.innerHTML = 'Add task';
  form.appendChild(btnSubmit);

  const htmlAddProjectDiv = document.createElement('div');
  htmlAddProjectDiv.classList.add('add-task-div');
  htmlAddProjectDiv.appendChild(form);

  const backgroundDiv = document.createElement('div');
  backgroundDiv.classList.add('background-popup');
  backgroundDiv.appendChild(htmlAddProjectDiv);

  htmlContainer.appendChild(backgroundDiv);
};

const closePopup = () => {
  document.querySelector('.background-popup').remove();
};

const setActiveProject = (id) => {
  const idText = `project-${id}`;
  const htmlProjects = document.querySelectorAll('.project');
  htmlProjects.forEach((project) => {
    project.classList.remove('active-project');
    if (project.id === idText) {
      project.classList.add('active-project');
    }
  });
  displayTaskList();
};


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "projectlist": () => (/* binding */ projectlist)
/* harmony export */ });
const projectlist = (() => {
  const projects = [];
  let activeProject = 0;

  const getProjects = () => projects;

  const addProject = (project) => {
    projects.push(project);
  };

  const removeProject = (project, index) => {
    projects.forEach((p) => {
      if (p.getId() === project.getId()) {
        projects.splice(index, index);
      }
    });
  };

  const setActiveProject = (id) => {
    activeProject = +id;
  };

  const getActiveProject = () => activeProject;

  const getActiceProjectObject = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    projects.find((project) => project.id === activeProject);

  return {
    getProjects,
    addProject,
    removeProject,
    setActiveProject,
    getActiveProject,
    getActiceProjectObject,
  };
})();

class Project {
  static #count = 0;

  #id;

  #title;

  #tasks = [];

  constructor(title) {
    this.title = title;
    this.#id = Project.#count;
    Project.#incrementCount();
  }

  static #incrementCount = () => {
    Project.#count += 1;
  };

  get id() {
    return this.#id;
  }

  set title(title) {
    if (title === '') {
      this.#title = 'New Project';
      return;
    }
    this.#title = title;
  }

  get title() {
    return this.#title;
  }

  get tasks() {
    return this.#tasks;
  }

  addTask(task) {
    this.#tasks.push(task);
  }
}

const newProject = (title) => {
  projectlist.addProject(new Project(title));
};


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task),
/* harmony export */   "newTask": () => (/* binding */ newTask)
/* harmony export */ });
class Task {
  static #count = 0;

  #id;

  #title;

  #description;

  #dueDate;

  constructor(title, description, dueDate) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#id = Task.#count;
    Task.#incrementCount();
  }

  static #incrementCount = () => {
    Task.#count += 1;
  };

  get id() {
    return this.#id;
  }

  set title(title) {
    this.#title = title;
  }

  get title() {
    return this.#title;
  }

  set description(description) {
    this.#description = description;
  }

  get description() {
    return this.#description;
  }

  set dueDate(dueDate) {
    this.#dueDate = dueDate;
  }

  get dueDate() {
    return this.#dueDate;
  }
}

const newTask = (title, description = '', date = '') =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new Task(title, description, date);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageLoad */ "./src/modules/pageLoad.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_eventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/eventListener */ "./src/modules/eventListener.js");





const contentContainer = document.querySelector('#content');

(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__.loadTemplate)(contentContainer);
(0,_modules_project__WEBPACK_IMPORTED_MODULE_2__.newProject)('Today');
(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__.displayProjectlist)(_modules_eventListener__WEBPACK_IMPORTED_MODULE_3__.projectListItemEl);
(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__.displayTaskList)();
(0,_modules_eventListener__WEBPACK_IMPORTED_MODULE_3__.addEventListerns)(contentContainer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGZTtBQUNmOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNrRTtBQUN4QztBQUMrQjs7QUFFOUU7O0FBRUEsK0RBQVk7QUFDWiw0REFBVTtBQUNWLHFFQUFrQixDQUFDLHFFQUFpQjtBQUNwQyxrRUFBZTtBQUNmLHdFQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWhpZ2hsaWdodENvbG9yOiByZ2IoNDksIDE1MiwgMTI1KTtcXG4gIC0tbGlnaHRBY2NlbnRDb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgLS1kYXJrQWNjZW50Q29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gIC0tbGlnaHRCYWNrZ3JvdW5kQ29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcXG4gIC0tZGFya0hpZ2hsaWdodENvbG9yOiByZ2IoMjAsIDExNSwgOTApO1xcbiAgLS1ib3JkZXJDb2xvcjogcmdiKDM2LCA1NSwgNDcpO1xcbiAgLS1kYXJrVGV4dENvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxuXFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tZGFya1RleHRDb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmciA2MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlciBoZWFkZXInXFxuICAgICdzaWRlYmFyIG1haW4nXFxuICAgICdhZGQtcHJvamVjdCBhZGQtdGFzayc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0QWNjZW50Q29sb3IpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDVweCAycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgZ3JpZC1hcmVhOiBhZGQtcHJvamVjdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0QWNjZW50Q29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0QmFja2dyb3VuZENvbG9yKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcGFkZGluZzogMCAzMHB4IDAgNTBweDtcXG59XFxuXFxuLm1haW4gaDIge1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50YXNrLWxpc3QgbGkge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpZ2h0QWNjZW50Q29sb3IpO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxufVxcblxcbi50YXNrLWNoZWNrYm94IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRBY2NlbnRDb2xvcik7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0QmFja2dyb3VuZENvbG9yKTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjM4LCAyMTgpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFya0FjY2VudENvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIHBhZGRpbmc6IDJweCAwO1xcbn1cXG5cXG5cXG4uYWRkLXRhc2sge1xcbiAgZ3JpZC1hcmVhOiBhZGQtdGFzaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0QmFja2dyb3VuZENvbG9yKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDVweCAwcHggMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5iYWNrZ3JvdW5kLXBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5hZGQtcHJvamVjdC1kaXYsXFxuLmFkZC10YXNrLWRpdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC02MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0FjY2VudENvbG9yKTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMnM7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWRpdiBmb3JtLFxcbi5hZGQtdGFzay1kaXYgZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGhlaWdodDogOTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWRpdiBidXR0b24sXFxuLmFkZC10YXNrLWRpdiBidXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0QyxxQ0FBcUM7RUFDckMsMENBQTBDO0VBQzFDLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsZ0NBQWdDOztFQUVoQyxnREFBZ0Q7RUFDaEQsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakM7OzswQkFHd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxxREFBcUQ7RUFDckQsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2Q0FBNkM7RUFDN0MscURBQXFEO0VBQ3JELHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxjQUFjO0VBQ2QsYUFBYTtFQUNiLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsd0NBQXdDO0VBQ3hDLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UsbUJBQW1CO0VBQ25CLDZDQUE2QztFQUM3QyxxREFBcUQ7RUFDckQsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsK0NBQStDO0VBQy9DLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsU0FBUztBQUNYOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1oaWdobGlnaHRDb2xvcjogcmdiKDQ5LCAxNTIsIDEyNSk7XFxuICAtLWxpZ2h0QWNjZW50Q29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIC0tZGFya0FjY2VudENvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAtLWxpZ2h0QmFja2dyb3VuZENvbG9yOiByZ2IoMjQ2LCAyNDYsIDI0Nik7XFxuICAtLWRhcmtIaWdobGlnaHRDb2xvcjogcmdiKDIwLCAxMTUsIDkwKTtcXG4gIC0tYm9yZGVyQ29sb3I6IHJnYigzNiwgNTUsIDQ3KTtcXG4gIC0tZGFya1RleHRDb2xvcjogcmdiKDgwLCA4MCwgODApO1xcblxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLWRhcmtUZXh0Q29sb3IpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLWhpZ2hsaWdodENvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhpZ2hsaWdodENvbG9yKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodENvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnIgNjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXIgaGVhZGVyJ1xcbiAgICAnc2lkZWJhciBtYWluJ1xcbiAgICAnYWRkLXByb2plY3QgYWRkLXRhc2snO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEFjY2VudENvbG9yKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCA1cHggMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0FjY2VudENvbG9yKTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGdyaWQtYXJlYTogYWRkLXByb2plY3Q7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEFjY2VudENvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdCBidXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEJhY2tncm91bmRDb2xvcik7XFxuICBib3gtc2hhZG93OiBpbnNldCA1cHggNXB4IDJweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHBhZGRpbmc6IDAgMzBweCAwIDUwcHg7XFxufVxcblxcbi5tYWluIGgyIHtcXG4gIG1hcmdpbjogMzBweCAwO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFzay1saXN0IGxpIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1saWdodEFjY2VudENvbG9yKTtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzay1jaGVja2JveCB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0QWNjZW50Q29sb3IpO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodEJhY2tncm91bmRDb2xvcik7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDIzOCwgMjE4KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxuICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBwYWRkaW5nOiAycHggMDtcXG59XFxuXFxuXFxuLmFkZC10YXNrIHtcXG4gIGdyaWQtYXJlYTogYWRkLXRhc2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEJhY2tncm91bmRDb2xvcik7XFxuICBib3gtc2hhZG93OiBpbnNldCA1cHggMHB4IDJweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdGFzayBidXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4uYmFja2dyb3VuZC1wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2LFxcbi5hZGQtdGFzay1kaXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtNjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjJzO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5hZGQtcHJvamVjdC1kaXYgZm9ybSxcXG4uYWRkLXRhc2stZGl2IGZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1kaXYgYnV0dG9uLFxcbi5hZGQtdGFzay1kaXYgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgc2hvd0FkZFByb2plY3RGb3JtLFxuICBzaG93QWRkVGFza0Zvcm0sXG4gIGRpc3BsYXlQcm9qZWN0bGlzdCxcbiAgZGlzcGxheVRhc2tMaXN0LFxuICBjbG9zZVBvcHVwLFxuICBzZXRBY3RpdmVQcm9qZWN0LFxufSBmcm9tICcuL3BhZ2VMb2FkJztcbmltcG9ydCB7IHByb2plY3RsaXN0LCBuZXdQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IG5ld1Rhc2sgfSBmcm9tICcuL3Rhc2snO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdExpc3RJdGVtRWwgPSAocHJvamVjdExpc3RJdGVtKSA9PiB7XG4gIHByb2plY3RMaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXTtcbiAgICBwcm9qZWN0bGlzdC5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0SWQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0QnV0dG9uRWwgPSAoaHRtbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldy1wcm9qZWN0LWJ0bicpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0aXRsZUlucHV0ID0gaHRtbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtdGl0bGUnKTtcbiAgICAgIG5ld1Byb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICBkaXNwbGF5UHJvamVjdGxpc3QocHJvamVjdExpc3RJdGVtRWwpO1xuICAgICAgY2xvc2VQb3B1cCgpO1xuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH0sXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVGFza0J1dHRvbkVsID0gKGh0bWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1uZXctdGFzay1idG4nKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGh0bWxDb250YWluZXIucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLXRpdGxlJyk7XG4gICAgICBwcm9qZWN0bGlzdFxuICAgICAgICAuZ2V0QWN0aWNlUHJvamVjdE9iamVjdCgpXG4gICAgICAgIC5hZGRUYXNrKG5ld1Rhc2sodGl0bGVJbnB1dC52YWx1ZSwgJycsICcnKSk7XG4gICAgICBkaXNwbGF5VGFza0xpc3QoKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0bGlzdChwcm9qZWN0TGlzdEl0ZW1FbCk7XG4gICAgICBjbG9zZVBvcHVwKCk7XG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfSxcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0Rm9ybUJ1dHRvbkVsID0gKGh0bWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ0bicpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzaG93QWRkUHJvamVjdEZvcm0oaHRtbENvbnRhaW5lcik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbkVsKGh0bWxDb250YWluZXIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrRm9ybUJ1dHRvbkVsID0gKGh0bWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWJ0bicpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzaG93QWRkVGFza0Zvcm0oaHRtbENvbnRhaW5lcik7XG4gICAgYWRkVGFza0J1dHRvbkVsKGh0bWxDb250YWluZXIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFdmVudExpc3Rlcm5zID0gKGh0bWxDb250YWluZXIpID0+IHtcbiAgYWRkUHJvamVjdEZvcm1CdXR0b25FbChodG1sQ29udGFpbmVyKTtcbiAgYWRkVGFza0Zvcm1CdXR0b25FbChodG1sQ29udGFpbmVyKTtcbn07XG4iLCJpbXBvcnQgeyBwcm9qZWN0bGlzdCB9IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IGFkZFRhc2tCdXR0b24gPSAoaHRtbENvbnRhaW5lciwgaHRtbGNsYXNzLCBpbm5lcmh0bWwpID0+IHtcbiAgY29uc3QgaHRtbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBodG1sQnRuLmlkID0gaHRtbGNsYXNzO1xuICBodG1sQnRuLmlubmVySFRNTCA9IGlubmVyaHRtbDtcbiAgaHRtbENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sQnRuKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkVGVtcGxhdGUgPSAoaHRtbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZUNvbnRhaW5lciA9IGh0bWxDb250YWluZXI7XG4gIHRlbXBsYXRlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBodG1sQ2xhc3NlcyA9IFsnaGVhZGVyJywgJ3NpZGViYXInLCAnYWRkLXByb2plY3QnLCAnbWFpbicsICdhZGQtdGFzayddO1xuXG4gIGh0bWxDbGFzc2VzLmZvckVhY2goKGh0bWxDbGFzcykgPT4ge1xuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKGh0bWxDbGFzcyk7XG4gICAgdGVtcGxhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgfSk7XG5cbiAgYWRkVGFza0J1dHRvbihcbiAgICBodG1sQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpLFxuICAgICdhZGQtcHJvamVjdC1idG4nLFxuICAgICc8c3Ryb25nPis8L3N0cm9uZz4gQWRkIHByb2plY3QnLFxuICApO1xuICBhZGRUYXNrQnV0dG9uKFxuICAgIGh0bWxDb250YWluZXIucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyksXG4gICAgJ2FkZC10YXNrLWJ0bicsXG4gICAgJzxzdHJvbmc+Kzwvc3Ryb25nPiBBZGQgdGFzaycsXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVByb2plY3RsaXN0ID0gKGxpRWwpID0+IHtcbiAgY29uc3QgaHRtbFNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICBodG1sU2lkZWJhci5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCBodG1sUHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBodG1sUHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0Jyk7XG5cbiAgcHJvamVjdGxpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgaHRtbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGh0bWxQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBpZiAocHJvamVjdC5pZCA9PT0gcHJvamVjdGxpc3QuZ2V0QWN0aXZlUHJvamVjdCgpKSB7XG4gICAgICBodG1sUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgIH1cbiAgICBodG1sUHJvamVjdC5pZCA9IGBwcm9qZWN0LSR7cHJvamVjdC5pZH1gO1xuICAgIGh0bWxQcm9qZWN0LmlubmVySFRNTCA9IGAke3Byb2plY3QudGl0bGV9ICgke3Byb2plY3QudGFza3MubGVuZ3RofSlgO1xuICAgIGxpRWwoaHRtbFByb2plY3QpO1xuICAgIGh0bWxQcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChodG1sUHJvamVjdCk7XG4gIH0pO1xuXG4gIGh0bWxTaWRlYmFyLmFwcGVuZENoaWxkKGh0bWxQcm9qZWN0TGlzdCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VGFza0h0bWwgPSAodGFzaykgPT4ge1xuICBjb25zdCBodG1sVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGh0bWxUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgaHRtbFRhc2suaWQgPSBgdGFzay0ke3Rhc2suaWR9YDtcblxuICBjb25zdCBodG1sQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHRtbENoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2hlY2tib3gnKTtcbiAgaHRtbENoZWNrYm94LmlubmVySFRNTCA9ICfinJMnO1xuICBodG1sVGFzay5hcHBlbmRDaGlsZChodG1sQ2hlY2tib3gpO1xuXG4gIGNvbnN0IGh0bWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodG1sVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICBodG1sVGl0bGUuaW5uZXJIVE1MID0gdGFzay50aXRsZTtcbiAgaHRtbFRhc2suYXBwZW5kQ2hpbGQoaHRtbFRpdGxlKTtcblxuICBjb25zdCBodG1sRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodG1sRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcbiAgaHRtbERhdGUuaW5uZXJIVE1MID0gJzAxLjAyLjIzIC0gMTA6MDAnOyAvLyB0YXNrLmR1ZURhdGVcbiAgaHRtbFRhc2suYXBwZW5kQ2hpbGQoaHRtbERhdGUpO1xuXG4gIHJldHVybiBodG1sVGFzaztcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5VGFza0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0bGlzdC5nZXRBY3RpY2VQcm9qZWN0T2JqZWN0KCk7XG4gIGNvbnN0IGh0bWxNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgaHRtbE1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3QgSHRtbGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBIdG1saGVhZGluZy5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xuXG4gIGh0bWxNYWluLmFwcGVuZENoaWxkKEh0bWxoZWFkaW5nKTtcblxuICBjb25zdCBodG1sVGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBodG1sVGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG5cbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaHRtbFRhc2tMaXN0LmFwcGVuZENoaWxkKGdldFRhc2tIdG1sKHRhc2spKTtcbiAgfSk7XG5cbiAgaHRtbE1haW4uYXBwZW5kQ2hpbGQoaHRtbFRhc2tMaXN0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93QWRkUHJvamVjdEZvcm0gPSAoaHRtbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUlucHV0LmlkID0gJ2FkZC1wcm9qZWN0LXRpdGxlJztcbiAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IHRpdGxlLi4uJztcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuU3VibWl0LmlkID0gJ2FkZC1uZXctcHJvamVjdC1idG4nO1xuICBidG5TdWJtaXQuaW5uZXJIVE1MID0gJ0FkZCBwcm9qZWN0JztcbiAgZm9ybS5hcHBlbmRDaGlsZChidG5TdWJtaXQpO1xuXG4gIGNvbnN0IGh0bWxBZGRQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGh0bWxBZGRQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWRpdicpO1xuICBodG1sQWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJhY2tncm91bmREaXYuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1wb3B1cCcpO1xuICBiYWNrZ3JvdW5kRGl2LmFwcGVuZENoaWxkKGh0bWxBZGRQcm9qZWN0RGl2KTtcblxuICBodG1sQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmREaXYpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dBZGRUYXNrRm9ybSA9IChodG1sQ29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlSW5wdXQuaWQgPSAnYWRkLXRhc2stdGl0bGUnO1xuICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1Rhc2sgdGl0bGUuLi4nO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5TdWJtaXQuaWQgPSAnYWRkLW5ldy10YXNrLWJ0bic7XG4gIGJ0blN1Ym1pdC5pbm5lckhUTUwgPSAnQWRkIHRhc2snO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ0blN1Ym1pdCk7XG5cbiAgY29uc3QgaHRtbEFkZFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHRtbEFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZGl2Jyk7XG4gIGh0bWxBZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IGJhY2tncm91bmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmFja2dyb3VuZERpdi5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLXBvcHVwJyk7XG4gIGJhY2tncm91bmREaXYuYXBwZW5kQ2hpbGQoaHRtbEFkZFByb2plY3REaXYpO1xuXG4gIGh0bWxDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZERpdik7XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtcG9wdXAnKS5yZW1vdmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gIGNvbnN0IGlkVGV4dCA9IGBwcm9qZWN0LSR7aWR9YDtcbiAgY29uc3QgaHRtbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgaHRtbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IGlkVGV4dCkge1xuICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgIH1cbiAgfSk7XG4gIGRpc3BsYXlUYXNrTGlzdCgpO1xufTtcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0bGlzdCA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gMDtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIHByb2plY3RzLmZvckVhY2goKHApID0+IHtcbiAgICAgIGlmIChwLmdldElkKCkgPT09IHByb2plY3QuZ2V0SWQoKSkge1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgYWN0aXZlUHJvamVjdCA9ICtpZDtcbiAgfTtcblxuICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4gYWN0aXZlUHJvamVjdDtcblxuICBjb25zdCBnZXRBY3RpY2VQcm9qZWN0T2JqZWN0ID0gKCkgPT5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrXG4gICAgcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gYWN0aXZlUHJvamVjdCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgc2V0QWN0aXZlUHJvamVjdCxcbiAgICBnZXRBY3RpdmVQcm9qZWN0LFxuICAgIGdldEFjdGljZVByb2plY3RPYmplY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyAjY291bnQgPSAwO1xuXG4gICNpZDtcblxuICAjdGl0bGU7XG5cbiAgI3Rhc2tzID0gW107XG5cbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy4jaWQgPSBQcm9qZWN0LiNjb3VudDtcbiAgICBQcm9qZWN0LiNpbmNyZW1lbnRDb3VudCgpO1xuICB9XG5cbiAgc3RhdGljICNpbmNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBQcm9qZWN0LiNjb3VudCArPSAxO1xuICB9O1xuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICBpZiAodGl0bGUgPT09ICcnKSB7XG4gICAgICB0aGlzLiN0aXRsZSA9ICdOZXcgUHJvamVjdCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xuICB9XG5cbiAgZ2V0IHRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLiN0YXNrcztcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMuI3Rhc2tzLnB1c2godGFzayk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3QgPSAodGl0bGUpID0+IHtcbiAgcHJvamVjdGxpc3QuYWRkUHJvamVjdChuZXcgUHJvamVjdCh0aXRsZSkpO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBzdGF0aWMgI2NvdW50ID0gMDtcblxuICAjaWQ7XG5cbiAgI3RpdGxlO1xuXG4gICNkZXNjcmlwdGlvbjtcblxuICAjZHVlRGF0ZTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcbiAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy4jaWQgPSBUYXNrLiNjb3VudDtcbiAgICBUYXNrLiNpbmNyZW1lbnRDb3VudCgpO1xuICB9XG5cbiAgc3RhdGljICNpbmNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBUYXNrLiNjb3VudCArPSAxO1xuICB9O1xuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2R1ZURhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG5ld1Rhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uID0gJycsIGRhdGUgPSAnJykgPT5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcGxpY2l0LWFycm93LWxpbmVicmVha1xuICBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBsb2FkVGVtcGxhdGUsIGRpc3BsYXlQcm9qZWN0bGlzdCwgZGlzcGxheVRhc2tMaXN0IH0gZnJvbSAnLi9tb2R1bGVzL3BhZ2VMb2FkJztcbmltcG9ydCB7IG5ld1Byb2plY3QgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdCc7XG5pbXBvcnQgeyBhZGRFdmVudExpc3Rlcm5zLCBwcm9qZWN0TGlzdEl0ZW1FbCB9IGZyb20gJy4vbW9kdWxlcy9ldmVudExpc3RlbmVyJztcblxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmxvYWRUZW1wbGF0ZShjb250ZW50Q29udGFpbmVyKTtcbm5ld1Byb2plY3QoJ1RvZGF5Jyk7XG5kaXNwbGF5UHJvamVjdGxpc3QocHJvamVjdExpc3RJdGVtRWwpO1xuZGlzcGxheVRhc2tMaXN0KCk7XG5hZGRFdmVudExpc3Rlcm5zKGNvbnRlbnRDb250YWluZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9