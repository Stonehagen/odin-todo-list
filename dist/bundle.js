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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --highlightColor: rgb(49, 152, 125);\n  --lightAccentColor: rgb(235, 235, 235);\n  --darkAccentColor: rgb(220, 220, 220);\n  --lightBackgroundColor: rgb(246, 246, 246);\n  --darkHighlightColor: rgb(20, 115, 90);\n  --borderColor: rgb(36, 55, 47);\n  --darkTextColor: rgb(80, 80, 80);\n\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: var(--darkTextColor);\n}\n\nbody {\n  margin: 0;\n}\n\nbutton {\n  background-color: none;\n  border-radius: 10px;\n  color: var(--highlightColor);\n  border: 2px solid var(--highlightColor);\n}\n\nbutton:hover {\n  background-color: var(--highlightColor);\n  color: white;\n  cursor: pointer;\n}\n\ninput {\n  color: var(--darkTextColor);\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border-radius: 10px;\n  padding: 0 10px;\n  border: none;\n}\n\ntextarea {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  resize: none;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 10px;\n  border: none;\n}\n\n#content {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 4fr;\n  grid-template-rows: 5px 1fr 60px;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'add-project add-task';\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--highlightColor);\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background-color: var(--lightAccentColor);\n  box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n}\n\n.project-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n}\n\n.project {\n  border-radius: 5px;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 10px;\n}\n\n.project:hover {\n  background-color: var(--darkAccentColor);\n  cursor: pointer;\n}\n\n.active-project {\n  background-color: var(--darkAccentColor);\n}\n\n.add-project {\n  grid-area: add-project;\n  background-color: var(--lightAccentColor);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-project button {\n  width: 100px;\n  height: 35px;\n}\n\n.main {\n  grid-area: main;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 0 30px 0 50px;\n}\n\n.main h2 {\n  margin: 30px 0;\n}\n\n.task-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.task-list li {\n  height: 40px;\n  border-bottom: 2px solid var(--darkAccentColor);\n  padding: 5px 0;\n  display: grid;\n  grid-template-columns: 20px 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 10px;\n  align-items: center;\n}\n\n.task-checkbox {\n  grid-column: 1/2;\n  grid-row: 1/3;\n  border: 1px solid var(--darkAccentColor);\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  text-align: center;\n  font-size: 1.1em;\n  color: var(--lightBackgroundColor);\n}\n\n.task-checkbox:hover {\n  background-color: rgb(228, 241, 236);\n  border: 1px solid var(--darkAccentColor);\n  color: var(--highlightColor);\n  cursor: pointer;\n}\n\n.task-title {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.task-title:hover {\n  cursor: pointer;\n  color: black;\n}\n\n.task-date {\n  color: darkgray;\n  font-size: 0.8em;\n  grid-column: 2/3;\n  grid-row: 2/3;\n  padding: 2px 0;\n}\n\n\n.add-task {\n  grid-area: add-task;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 0px 2px -3px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-task button {\n  width: 100px;\n  height: 35px;\n}\n\n.background-popup {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(3px);\n}\n\n.add-project-div,\n.add-task-div {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-left: -200px;\n  width: 400px;\n  border-radius: 15px;\n  background-color: var(--darkAccentColor);\n  animation: fadeIn 0.2s;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.4);\n  z-index: 100;\n}\n\n.add-project-div {\n  height: 120px;\n  margin-top: -60px;\n}\n\n.add-task-div {\n  height: 350px;\n  margin-top: -175px;\n}\n\n.add-project-div form,\n.add-task-div form {\n  display: grid;\n  padding: 15px;\n  gap: 15px;\n}\n\n.add-project-div form {\n  grid-template-rows: 38px 38px;\n  height: 90px;\n}\n\n.add-task-div form {\n  grid-template-rows: 38px auto 38px 38px;\n  height: 320px;\n}\n\n.add-project-div button,\n.add-task-div button {\n  width: 100px;\n  justify-self: end;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,sCAAsC;EACtC,qCAAqC;EACrC,0CAA0C;EAC1C,sCAAsC;EACtC,8BAA8B;EAC9B,gCAAgC;;EAEhC,gDAAgD;EAChD,2BAA2B;AAC7B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,4BAA4B;EAC5B,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;EACvC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,gDAAgD;EAChD,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,gDAAgD;EAChD,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gCAAgC;EAChC,gCAAgC;EAChC;;;0BAGwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,yCAAyC;EACzC,qDAAqD;EACrD,aAAa;AACf;;AAEA;EACE,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,sBAAsB;EACtB,yCAAyC;EACzC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,6CAA6C;EAC7C,qDAAqD;EACrD,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,+CAA+C;EAC/C,cAAc;EACd,aAAa;EACb,+BAA+B;EAC/B,2BAA2B;EAC3B,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,wCAAwC;EACxC,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;EACpC,wCAAwC;EACxC,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,cAAc;AAChB;;;AAGA;EACE,mBAAmB;EACnB,6CAA6C;EAC7C,qDAAqD;EACrD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,0BAA0B;AAC5B;;AAEA;;EAEE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,wCAAwC;EACxC,sBAAsB;EACtB,+CAA+C;EAC/C,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,aAAa;EACb,SAAS;AACX;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,uCAAuC;EACvC,aAAa;AACf;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":[":root {\n  --highlightColor: rgb(49, 152, 125);\n  --lightAccentColor: rgb(235, 235, 235);\n  --darkAccentColor: rgb(220, 220, 220);\n  --lightBackgroundColor: rgb(246, 246, 246);\n  --darkHighlightColor: rgb(20, 115, 90);\n  --borderColor: rgb(36, 55, 47);\n  --darkTextColor: rgb(80, 80, 80);\n\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: var(--darkTextColor);\n}\n\nbody {\n  margin: 0;\n}\n\nbutton {\n  background-color: none;\n  border-radius: 10px;\n  color: var(--highlightColor);\n  border: 2px solid var(--highlightColor);\n}\n\nbutton:hover {\n  background-color: var(--highlightColor);\n  color: white;\n  cursor: pointer;\n}\n\ninput {\n  color: var(--darkTextColor);\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border-radius: 10px;\n  padding: 0 10px;\n  border: none;\n}\n\ntextarea {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  resize: none;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 10px;\n  border: none;\n}\n\n#content {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 4fr;\n  grid-template-rows: 5px 1fr 60px;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'add-project add-task';\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--highlightColor);\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background-color: var(--lightAccentColor);\n  box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n}\n\n.project-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n}\n\n.project {\n  border-radius: 5px;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 10px;\n}\n\n.project:hover {\n  background-color: var(--darkAccentColor);\n  cursor: pointer;\n}\n\n.active-project {\n  background-color: var(--darkAccentColor);\n}\n\n.add-project {\n  grid-area: add-project;\n  background-color: var(--lightAccentColor);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-project button {\n  width: 100px;\n  height: 35px;\n}\n\n.main {\n  grid-area: main;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 0 30px 0 50px;\n}\n\n.main h2 {\n  margin: 30px 0;\n}\n\n.task-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.task-list li {\n  height: 40px;\n  border-bottom: 2px solid var(--darkAccentColor);\n  padding: 5px 0;\n  display: grid;\n  grid-template-columns: 20px 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 10px;\n  align-items: center;\n}\n\n.task-checkbox {\n  grid-column: 1/2;\n  grid-row: 1/3;\n  border: 1px solid var(--darkAccentColor);\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  text-align: center;\n  font-size: 1.1em;\n  color: var(--lightBackgroundColor);\n}\n\n.task-checkbox:hover {\n  background-color: rgb(228, 241, 236);\n  border: 1px solid var(--darkAccentColor);\n  color: var(--highlightColor);\n  cursor: pointer;\n}\n\n.task-title {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.task-title:hover {\n  cursor: pointer;\n  color: black;\n}\n\n.task-date {\n  color: darkgray;\n  font-size: 0.8em;\n  grid-column: 2/3;\n  grid-row: 2/3;\n  padding: 2px 0;\n}\n\n\n.add-task {\n  grid-area: add-task;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 0px 2px -3px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-task button {\n  width: 100px;\n  height: 35px;\n}\n\n.background-popup {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(3px);\n}\n\n.add-project-div,\n.add-task-div {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-left: -200px;\n  width: 400px;\n  border-radius: 15px;\n  background-color: var(--darkAccentColor);\n  animation: fadeIn 0.2s;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.4);\n  z-index: 100;\n}\n\n.add-project-div {\n  height: 120px;\n  margin-top: -60px;\n}\n\n.add-task-div {\n  height: 350px;\n  margin-top: -175px;\n}\n\n.add-project-div form,\n.add-task-div form {\n  display: grid;\n  padding: 15px;\n  gap: 15px;\n}\n\n.add-project-div form {\n  grid-template-rows: 38px 38px;\n  height: 90px;\n}\n\n.add-task-div form {\n  grid-template-rows: 38px auto 38px 38px;\n  height: 320px;\n}\n\n.add-project-div button,\n.add-task-div button {\n  width: 100px;\n  justify-self: end;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "projectListItemEl": () => (/* binding */ projectListItemEl),
/* harmony export */   "removeTaskButtonEl": () => (/* binding */ removeTaskButtonEl)
/* harmony export */ });
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/modules/pageLoad.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");




const projectListItemEl = () => {
  const htmlProjects = document.querySelectorAll('.project');
  htmlProjects.forEach((project) => {
    project.addEventListener('click', (e) => {
      const projectId = e.target.id.split('-')[1];
      _project__WEBPACK_IMPORTED_MODULE_1__.projectlist.setActiveProject(projectId);
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(projectId);
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayProjectlist)();
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayTaskList)();
      projectListItemEl();
    });
  });
};

const removeTaskButtonEl = () => {
  const htmlCheckboxes = document.querySelectorAll('.task-checkbox');
  htmlCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
      const taskId = e.target.parentElement.id.split('-')[1];
      const project = _project__WEBPACK_IMPORTED_MODULE_1__.projectlist.getActiceProjectObject();
      project.removeTask(+taskId);
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayTaskList)();
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayProjectlist)();
      removeTaskButtonEl();
    });
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
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayProjectlist)();
      projectListItemEl();
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
      const descriptionInput = htmlContainer.querySelector(
        '#add-task-description',
      );
      const dateInput = htmlContainer.querySelector('#add-task-date');
      _project__WEBPACK_IMPORTED_MODULE_1__.projectlist.getActiceProjectObject()
        .addTask(
          (0,_task__WEBPACK_IMPORTED_MODULE_2__.newTask)(titleInput.value, descriptionInput.value, dateInput.value),
        );
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayTaskList)();
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayProjectlist)();
      projectListItemEl();
      removeTaskButtonEl();
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

const displayProjectlist = () => {
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
  htmlDate.innerHTML = task.dueDate;
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
  titleInput.required = true;
  form.appendChild(titleInput);

  const DescriptionInput = document.createElement('textarea');
  DescriptionInput.id = 'add-task-description';
  DescriptionInput.placeholder = 'Description...';
  DescriptionInput.maxLength = 1000;
  form.appendChild(DescriptionInput);

  const dateInput = document.createElement('input');
  dateInput.type = 'datetime-local';
  dateInput.id = 'add-task-date';
  form.appendChild(dateInput);

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

  removeTask(id) {
    this.#tasks.forEach((task, index) => {
      if (task.id === id) {
        this.#tasks.splice(index, 1);
      }
    });
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
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
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
    if (title === '') {
      this.#title = 'New Task';
      return;
    }
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
(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__.displayProjectlist)();
(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__.displayTaskList)();
(0,_modules_eventListener__WEBPACK_IMPORTED_MODULE_3__.addEventListerns)(contentContainer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUg7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTs7QUFFaEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUCxrQkFBa0Isd0VBQWtDO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQLDRCQUE0QixHQUFHO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNLTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUZlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7O1VDMURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFLTztBQUNtQjtBQUNZOztBQUUzRDs7QUFFQSwrREFBWTtBQUNaLDREQUFVO0FBQ1YscUVBQWtCO0FBQ2xCLGtFQUFlO0FBQ2Ysd0VBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9ldmVudExpc3RlbmVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0taGlnaGxpZ2h0Q29sb3I6IHJnYig0OSwgMTUyLCAxMjUpO1xcbiAgLS1saWdodEFjY2VudENvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICAtLWRhcmtBY2NlbnRDb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgLS1saWdodEJhY2tncm91bmRDb2xvcjogcmdiKDI0NiwgMjQ2LCAyNDYpO1xcbiAgLS1kYXJrSGlnaGxpZ2h0Q29sb3I6IHJnYigyMCwgMTE1LCA5MCk7XFxuICAtLWJvcmRlckNvbG9yOiByZ2IoMzYsIDU1LCA0Nyk7XFxuICAtLWRhcmtUZXh0Q29sb3I6IHJnYig4MCwgODAsIDgwKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrVGV4dENvbG9yKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrVGV4dENvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVweCAxZnIgNjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXIgaGVhZGVyJ1xcbiAgICAnc2lkZWJhciBtYWluJ1xcbiAgICAnYWRkLXByb2plY3QgYWRkLXRhc2snO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEFjY2VudENvbG9yKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCA1cHggMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0FjY2VudENvbG9yKTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGdyaWQtYXJlYTogYWRkLXByb2plY3Q7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEFjY2VudENvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdCBidXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEJhY2tncm91bmRDb2xvcik7XFxuICBib3gtc2hhZG93OiBpbnNldCA1cHggNXB4IDJweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHBhZGRpbmc6IDAgMzBweCAwIDUwcHg7XFxufVxcblxcbi5tYWluIGgyIHtcXG4gIG1hcmdpbjogMzBweCAwO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFzay1saXN0IGxpIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jaGVja2JveCB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0QmFja2dyb3VuZENvbG9yKTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjQxLCAyMzYpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFya0FjY2VudENvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4udGFzay10aXRsZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbiAgY29sb3I6IGRhcmtncmF5O1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgcGFkZGluZzogMnB4IDA7XFxufVxcblxcblxcbi5hZGQtdGFzayB7XFxuICBncmlkLWFyZWE6IGFkZC10YXNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRCYWNrZ3JvdW5kQ29sb3IpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDBweCAycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2sgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuLmJhY2tncm91bmQtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWRpdixcXG4uYWRkLXRhc2stZGl2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycztcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IHtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBtYXJnaW4tdG9wOiAtNjBweDtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiB7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbWFyZ2luLXRvcDogLTE3NXB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IGZvcm0sXFxuLmFkZC10YXNrLWRpdiBmb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IGZvcm0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzOHB4IDM4cHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5hZGQtdGFzay1kaXYgZm9ybSB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDM4cHggYXV0byAzOHB4IDM4cHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IGJ1dHRvbixcXG4uYWRkLXRhc2stZGl2IGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLHFDQUFxQztFQUNyQywwQ0FBMEM7RUFDMUMsc0NBQXNDO0VBQ3RDLDhCQUE4QjtFQUM5QixnQ0FBZ0M7O0VBRWhDLGdEQUFnRDtFQUNoRCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0RBQWdEO0VBQ2hELG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEM7OzswQkFHd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxxREFBcUQ7RUFDckQsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2Q0FBNkM7RUFDN0MscURBQXFEO0VBQ3JELHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwrQ0FBK0M7RUFDL0MsY0FBYztFQUNkLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx3Q0FBd0M7RUFDeEMsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOzs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQiw2Q0FBNkM7RUFDN0MscURBQXFEO0VBQ3JELGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBDQUEwQztFQUMxQywwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QiwrQ0FBK0M7RUFDL0MsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0taGlnaGxpZ2h0Q29sb3I6IHJnYig0OSwgMTUyLCAxMjUpO1xcbiAgLS1saWdodEFjY2VudENvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICAtLWRhcmtBY2NlbnRDb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgLS1saWdodEJhY2tncm91bmRDb2xvcjogcmdiKDI0NiwgMjQ2LCAyNDYpO1xcbiAgLS1kYXJrSGlnaGxpZ2h0Q29sb3I6IHJnYigyMCwgMTE1LCA5MCk7XFxuICAtLWJvcmRlckNvbG9yOiByZ2IoMzYsIDU1LCA0Nyk7XFxuICAtLWRhcmtUZXh0Q29sb3I6IHJnYig4MCwgODAsIDgwKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrVGV4dENvbG9yKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrVGV4dENvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVweCAxZnIgNjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXIgaGVhZGVyJ1xcbiAgICAnc2lkZWJhciBtYWluJ1xcbiAgICAnYWRkLXByb2plY3QgYWRkLXRhc2snO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEFjY2VudENvbG9yKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCA1cHggMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0FjY2VudENvbG9yKTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGdyaWQtYXJlYTogYWRkLXByb2plY3Q7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEFjY2VudENvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdCBidXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEJhY2tncm91bmRDb2xvcik7XFxuICBib3gtc2hhZG93OiBpbnNldCA1cHggNXB4IDJweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHBhZGRpbmc6IDAgMzBweCAwIDUwcHg7XFxufVxcblxcbi5tYWluIGgyIHtcXG4gIG1hcmdpbjogMzBweCAwO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFzay1saXN0IGxpIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jaGVja2JveCB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0QmFja2dyb3VuZENvbG9yKTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjQxLCAyMzYpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFya0FjY2VudENvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4udGFzay10aXRsZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbiAgY29sb3I6IGRhcmtncmF5O1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgcGFkZGluZzogMnB4IDA7XFxufVxcblxcblxcbi5hZGQtdGFzayB7XFxuICBncmlkLWFyZWE6IGFkZC10YXNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRCYWNrZ3JvdW5kQ29sb3IpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDBweCAycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2sgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuLmJhY2tncm91bmQtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWRpdixcXG4uYWRkLXRhc2stZGl2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycztcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IHtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBtYXJnaW4tdG9wOiAtNjBweDtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiB7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbWFyZ2luLXRvcDogLTE3NXB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IGZvcm0sXFxuLmFkZC10YXNrLWRpdiBmb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IGZvcm0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzOHB4IDM4cHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5hZGQtdGFzay1kaXYgZm9ybSB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDM4cHggYXV0byAzOHB4IDM4cHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IGJ1dHRvbixcXG4uYWRkLXRhc2stZGl2IGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIHNob3dBZGRQcm9qZWN0Rm9ybSxcbiAgc2hvd0FkZFRhc2tGb3JtLFxuICBkaXNwbGF5UHJvamVjdGxpc3QsXG4gIGRpc3BsYXlUYXNrTGlzdCxcbiAgY2xvc2VQb3B1cCxcbiAgc2V0QWN0aXZlUHJvamVjdCxcbn0gZnJvbSAnLi9wYWdlTG9hZCc7XG5pbXBvcnQgeyBwcm9qZWN0bGlzdCwgbmV3UHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBuZXdUYXNrIH0gZnJvbSAnLi90YXNrJztcblxuZXhwb3J0IGNvbnN0IHByb2plY3RMaXN0SXRlbUVsID0gKCkgPT4ge1xuICBjb25zdCBodG1sUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICBodG1sUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXTtcbiAgICAgIHByb2plY3RsaXN0LnNldEFjdGl2ZVByb2plY3QocHJvamVjdElkKTtcbiAgICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdElkKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0bGlzdCgpO1xuICAgICAgZGlzcGxheVRhc2tMaXN0KCk7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW1FbCgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrQnV0dG9uRWwgPSAoKSA9PiB7XG4gIGNvbnN0IGh0bWxDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stY2hlY2tib3gnKTtcbiAgaHRtbENoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkLnNwbGl0KCctJylbMV07XG4gICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdGxpc3QuZ2V0QWN0aWNlUHJvamVjdE9iamVjdCgpO1xuICAgICAgcHJvamVjdC5yZW1vdmVUYXNrKCt0YXNrSWQpO1xuICAgICAgZGlzcGxheVRhc2tMaXN0KCk7XG4gICAgICBkaXNwbGF5UHJvamVjdGxpc3QoKTtcbiAgICAgIHJlbW92ZVRhc2tCdXR0b25FbCgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0QnV0dG9uRWwgPSAoaHRtbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldy1wcm9qZWN0LWJ0bicpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0aXRsZUlucHV0ID0gaHRtbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtdGl0bGUnKTtcbiAgICAgIG5ld1Byb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICBkaXNwbGF5UHJvamVjdGxpc3QoKTtcbiAgICAgIHByb2plY3RMaXN0SXRlbUVsKCk7XG4gICAgICBjbG9zZVBvcHVwKCk7XG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfSxcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrQnV0dG9uRWwgPSAoaHRtbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldy10YXNrLWJ0bicpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0aXRsZUlucHV0ID0gaHRtbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stdGl0bGUnKTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBodG1sQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcjYWRkLXRhc2stZGVzY3JpcHRpb24nLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGh0bWxDb250YWluZXIucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWRhdGUnKTtcbiAgICAgIHByb2plY3RsaXN0XG4gICAgICAgIC5nZXRBY3RpY2VQcm9qZWN0T2JqZWN0KClcbiAgICAgICAgLmFkZFRhc2soXG4gICAgICAgICAgbmV3VGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUpLFxuICAgICAgICApO1xuICAgICAgZGlzcGxheVRhc2tMaXN0KCk7XG4gICAgICBkaXNwbGF5UHJvamVjdGxpc3QoKTtcbiAgICAgIHByb2plY3RMaXN0SXRlbUVsKCk7XG4gICAgICByZW1vdmVUYXNrQnV0dG9uRWwoKTtcbiAgICAgIGNsb3NlUG9wdXAoKTtcbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9LFxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RGb3JtQnV0dG9uRWwgPSAoaHRtbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtYnRuJyk7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNob3dBZGRQcm9qZWN0Rm9ybShodG1sQ29udGFpbmVyKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uRWwoaHRtbENvbnRhaW5lcik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tGb3JtQnV0dG9uRWwgPSAoaHRtbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJyk7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNob3dBZGRUYXNrRm9ybShodG1sQ29udGFpbmVyKTtcbiAgICBhZGRUYXNrQnV0dG9uRWwoaHRtbENvbnRhaW5lcik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEV2ZW50TGlzdGVybnMgPSAoaHRtbENvbnRhaW5lcikgPT4ge1xuICBhZGRQcm9qZWN0Rm9ybUJ1dHRvbkVsKGh0bWxDb250YWluZXIpO1xuICBhZGRUYXNrRm9ybUJ1dHRvbkVsKGh0bWxDb250YWluZXIpO1xufTtcbiIsImltcG9ydCB7IHByb2plY3RsaXN0IH0gZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgYWRkVGFza0J1dHRvbiA9IChodG1sQ29udGFpbmVyLCBodG1sY2xhc3MsIGlubmVyaHRtbCkgPT4ge1xuICBjb25zdCBodG1sQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGh0bWxCdG4uaWQgPSBodG1sY2xhc3M7XG4gIGh0bWxCdG4uaW5uZXJIVE1MID0gaW5uZXJodG1sO1xuICBodG1sQ29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxCdG4pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRUZW1wbGF0ZSA9IChodG1sQ29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlQ29udGFpbmVyID0gaHRtbENvbnRhaW5lcjtcbiAgdGVtcGxhdGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGh0bWxDbGFzc2VzID0gWydoZWFkZXInLCAnc2lkZWJhcicsICdhZGQtcHJvamVjdCcsICdtYWluJywgJ2FkZC10YXNrJ107XG5cbiAgaHRtbENsYXNzZXMuZm9yRWFjaCgoaHRtbENsYXNzKSA9PiB7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoaHRtbENsYXNzKTtcbiAgICB0ZW1wbGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICB9KTtcblxuICBhZGRUYXNrQnV0dG9uKFxuICAgIGh0bWxDb250YWluZXIucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0JyksXG4gICAgJ2FkZC1wcm9qZWN0LWJ0bicsXG4gICAgJzxzdHJvbmc+Kzwvc3Ryb25nPiBBZGQgcHJvamVjdCcsXG4gICk7XG4gIGFkZFRhc2tCdXR0b24oXG4gICAgaHRtbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKSxcbiAgICAnYWRkLXRhc2stYnRuJyxcbiAgICAnPHN0cm9uZz4rPC9zdHJvbmc+IEFkZCB0YXNrJyxcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5UHJvamVjdGxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGh0bWxTaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgaHRtbFNpZGViYXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3QgaHRtbFByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgaHRtbFByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdCcpO1xuXG4gIHByb2plY3RsaXN0LmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGh0bWxQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBodG1sUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IHByb2plY3RsaXN0LmdldEFjdGl2ZVByb2plY3QoKSkge1xuICAgICAgaHRtbFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKTtcbiAgICB9XG4gICAgaHRtbFByb2plY3QuaWQgPSBgcHJvamVjdC0ke3Byb2plY3QuaWR9YDtcbiAgICBodG1sUHJvamVjdC5pbm5lckhUTUwgPSBgJHtwcm9qZWN0LnRpdGxlfSAoJHtwcm9qZWN0LnRhc2tzLmxlbmd0aH0pYDtcbiAgICBodG1sUHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoaHRtbFByb2plY3QpO1xuICB9KTtcblxuICBodG1sU2lkZWJhci5hcHBlbmRDaGlsZChodG1sUHJvamVjdExpc3QpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRhc2tIdG1sID0gKHRhc2spID0+IHtcbiAgY29uc3QgaHRtbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBodG1sVGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gIGh0bWxUYXNrLmlkID0gYHRhc2stJHt0YXNrLmlkfWA7XG5cbiAgY29uc3QgaHRtbENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGh0bWxDaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNoZWNrYm94Jyk7XG4gIGh0bWxDaGVja2JveC5pbm5lckhUTUwgPSAn4pyTJztcblxuICBodG1sVGFzay5hcHBlbmRDaGlsZChodG1sQ2hlY2tib3gpO1xuXG4gIGNvbnN0IGh0bWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodG1sVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICBodG1sVGl0bGUuaW5uZXJIVE1MID0gdGFzay50aXRsZTtcbiAgaHRtbFRhc2suYXBwZW5kQ2hpbGQoaHRtbFRpdGxlKTtcblxuICBjb25zdCBodG1sRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodG1sRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcbiAgaHRtbERhdGUuaW5uZXJIVE1MID0gdGFzay5kdWVEYXRlO1xuICBodG1sVGFzay5hcHBlbmRDaGlsZChodG1sRGF0ZSk7XG5cbiAgcmV0dXJuIGh0bWxUYXNrO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlUYXNrTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RsaXN0LmdldEFjdGljZVByb2plY3RPYmplY3QoKTtcbiAgY29uc3QgaHRtbE1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBodG1sTWFpbi5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCBIdG1saGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIEh0bWxoZWFkaW5nLmlubmVySFRNTCA9IHByb2plY3QudGl0bGU7XG5cbiAgaHRtbE1haW4uYXBwZW5kQ2hpbGQoSHRtbGhlYWRpbmcpO1xuXG4gIGNvbnN0IGh0bWxUYXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGh0bWxUYXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcblxuICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBodG1sVGFza0xpc3QuYXBwZW5kQ2hpbGQoZ2V0VGFza0h0bWwodGFzaykpO1xuICB9KTtcblxuICBodG1sTWFpbi5hcHBlbmRDaGlsZChodG1sVGFza0xpc3QpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dBZGRQcm9qZWN0Rm9ybSA9IChodG1sQ29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlSW5wdXQuaWQgPSAnYWRkLXByb2plY3QtdGl0bGUnO1xuICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1Byb2plY3QgdGl0bGUuLi4nO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5TdWJtaXQuaWQgPSAnYWRkLW5ldy1wcm9qZWN0LWJ0bic7XG4gIGJ0blN1Ym1pdC5pbm5lckhUTUwgPSAnQWRkIHByb2plY3QnO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ0blN1Ym1pdCk7XG5cbiAgY29uc3QgaHRtbEFkZFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHRtbEFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtZGl2Jyk7XG4gIGh0bWxBZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IGJhY2tncm91bmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmFja2dyb3VuZERpdi5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLXBvcHVwJyk7XG4gIGJhY2tncm91bmREaXYuYXBwZW5kQ2hpbGQoaHRtbEFkZFByb2plY3REaXYpO1xuXG4gIGh0bWxDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZERpdik7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd0FkZFRhc2tGb3JtID0gKGh0bWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGl0bGVJbnB1dC5pZCA9ICdhZGQtdGFzay10aXRsZSc7XG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFzayB0aXRsZS4uLic7XG4gIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IERlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBEZXNjcmlwdGlvbklucHV0LmlkID0gJ2FkZC10YXNrLWRlc2NyaXB0aW9uJztcbiAgRGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbi4uLic7XG4gIERlc2NyaXB0aW9uSW5wdXQubWF4TGVuZ3RoID0gMTAwMDtcbiAgZm9ybS5hcHBlbmRDaGlsZChEZXNjcmlwdGlvbklucHV0KTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkYXRlSW5wdXQudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG4gIGRhdGVJbnB1dC5pZCA9ICdhZGQtdGFzay1kYXRlJztcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gIGNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5TdWJtaXQuaWQgPSAnYWRkLW5ldy10YXNrLWJ0bic7XG4gIGJ0blN1Ym1pdC5pbm5lckhUTUwgPSAnQWRkIHRhc2snO1xuICBmb3JtLmFwcGVuZENoaWxkKGJ0blN1Ym1pdCk7XG5cbiAgY29uc3QgaHRtbEFkZFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHRtbEFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZGl2Jyk7XG4gIGh0bWxBZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IGJhY2tncm91bmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmFja2dyb3VuZERpdi5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLXBvcHVwJyk7XG4gIGJhY2tncm91bmREaXYuYXBwZW5kQ2hpbGQoaHRtbEFkZFByb2plY3REaXYpO1xuXG4gIGh0bWxDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZERpdik7XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtcG9wdXAnKS5yZW1vdmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gIGNvbnN0IGlkVGV4dCA9IGBwcm9qZWN0LSR7aWR9YDtcbiAgY29uc3QgaHRtbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgaHRtbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IGlkVGV4dCkge1xuICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgIH1cbiAgfSk7XG4gIGRpc3BsYXlUYXNrTGlzdCgpO1xufTtcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0bGlzdCA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gMDtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIHByb2plY3RzLmZvckVhY2goKHApID0+IHtcbiAgICAgIGlmIChwLmdldElkKCkgPT09IHByb2plY3QuZ2V0SWQoKSkge1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgYWN0aXZlUHJvamVjdCA9ICtpZDtcbiAgfTtcblxuICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4gYWN0aXZlUHJvamVjdDtcblxuICBjb25zdCBnZXRBY3RpY2VQcm9qZWN0T2JqZWN0ID0gKCkgPT5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrXG4gICAgcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gYWN0aXZlUHJvamVjdCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgc2V0QWN0aXZlUHJvamVjdCxcbiAgICBnZXRBY3RpdmVQcm9qZWN0LFxuICAgIGdldEFjdGljZVByb2plY3RPYmplY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyAjY291bnQgPSAwO1xuXG4gICNpZDtcblxuICAjdGl0bGU7XG5cbiAgI3Rhc2tzID0gW107XG5cbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy4jaWQgPSBQcm9qZWN0LiNjb3VudDtcbiAgICBQcm9qZWN0LiNpbmNyZW1lbnRDb3VudCgpO1xuICB9XG5cbiAgc3RhdGljICNpbmNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBQcm9qZWN0LiNjb3VudCArPSAxO1xuICB9O1xuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICBpZiAodGl0bGUgPT09ICcnKSB7XG4gICAgICB0aGlzLiN0aXRsZSA9ICdOZXcgUHJvamVjdCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xuICB9XG5cbiAgZ2V0IHRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLiN0YXNrcztcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMuI3Rhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICByZW1vdmVUYXNrKGlkKSB7XG4gICAgdGhpcy4jdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0YXNrLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLiN0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBuZXdQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gIHByb2plY3RsaXN0LmFkZFByb2plY3QobmV3IFByb2plY3QodGl0bGUpKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgc3RhdGljICNjb3VudCA9IDA7XG5cbiAgI2lkO1xuXG4gICN0aXRsZTtcblxuICAjZGVzY3JpcHRpb247XG5cbiAgI2R1ZURhdGU7XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuI2lkID0gVGFzay4jY291bnQ7XG4gICAgVGFzay4jaW5jcmVtZW50Q291bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyAjaW5jcmVtZW50Q291bnQgPSAoKSA9PiB7XG4gICAgVGFzay4jY291bnQgKz0gMTtcbiAgfTtcblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lkO1xuICB9XG5cbiAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgdGhpcy4jdGl0bGUgPSAnTmV3IFRhc2snO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2R1ZURhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG5ld1Rhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uID0gJycsIGRhdGUgPSAnJykgPT5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcGxpY2l0LWFycm93LWxpbmVicmVha1xuICBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBsb2FkVGVtcGxhdGUsXG4gIGRpc3BsYXlQcm9qZWN0bGlzdCxcbiAgZGlzcGxheVRhc2tMaXN0LFxufSBmcm9tICcuL21vZHVsZXMvcGFnZUxvYWQnO1xuaW1wb3J0IHsgbmV3UHJvamVjdCB9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0JztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVybnMgfSBmcm9tICcuL21vZHVsZXMvZXZlbnRMaXN0ZW5lcic7XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5sb2FkVGVtcGxhdGUoY29udGVudENvbnRhaW5lcik7XG5uZXdQcm9qZWN0KCdUb2RheScpO1xuZGlzcGxheVByb2plY3RsaXN0KCk7XG5kaXNwbGF5VGFza0xpc3QoKTtcbmFkZEV2ZW50TGlzdGVybnMoY29udGVudENvbnRhaW5lcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=