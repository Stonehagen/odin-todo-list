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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --highlightColor: rgb(49, 152, 125);\n  --lightAccentColor: rgb(235, 235, 235);\n  --darkAccentColor: rgb(220, 220, 220);\n  --lightBackgroundColor: rgb(246, 246, 246);\n  --darkHighlightColor: rgb(20, 115, 90);\n  --borderColor: rgb(36, 55, 47);\n  --darkTextColor: rgb(80, 80, 80);\n\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: var(--darkTextColor);\n}\n\nbody {\n  margin: 0;\n}\n\nbutton {\n  background-color: none;\n  border-radius: 10px;\n  color: var(--highlightColor);\n  border: 2px solid var(--highlightColor);\n  width: 100px;\n  height: 35px;\n}\n\nbutton:hover {\n  background-color: var(--highlightColor);\n  color: white;\n  cursor: pointer;\n}\n\ninput {\n  color: var(--darkTextColor);\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border-radius: 10px;\n  padding: 0 10px;\n  border: none;\n}\n\ntextarea {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  resize: none;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 10px;\n  border: none;\n}\n\n#content {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 4fr;\n  grid-template-rows: 5px 1fr 60px;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'add-project add-task';\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--highlightColor);\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background-color: var(--lightAccentColor);\n  box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n}\n\n.project-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n}\n\n.project {\n  border-radius: 5px;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 10px;\n}\n\n.project:hover {\n  background-color: var(--darkAccentColor);\n  cursor: pointer;\n}\n\n.active-project {\n  background-color: var(--darkAccentColor);\n}\n\n.add-project {\n  grid-area: add-project;\n  background-color: var(--lightAccentColor);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main {\n  grid-area: main;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 0 30px 0 50px;\n}\n\n.main h2 {\n  margin: 30px 0;\n}\n\n.task-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.task-list li {\n  height: 40px;\n  border-bottom: 2px solid var(--darkAccentColor);\n  padding: 5px 0;\n  display: grid;\n  grid-template-columns: 20px 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 10px;\n  align-items: center;\n}\n\n.task-checkbox {\n  grid-column: 1/2;\n  grid-row: 1/3;\n  border: 1px solid var(--darkAccentColor);\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  text-align: center;\n  font-size: 1.1em;\n  color: var(--lightBackgroundColor);\n}\n\n.task-checkbox:hover {\n  background-color: rgb(228, 241, 236);\n  border: 1px solid var(--darkAccentColor);\n  color: var(--highlightColor);\n  cursor: pointer;\n}\n\n.task-title {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.task-title:hover {\n  cursor: pointer;\n  color: black;\n}\n\n.task-date {\n  color: darkgray;\n  font-size: 0.8em;\n  grid-column: 2/3;\n  grid-row: 2/3;\n  padding: 2px 0;\n}\n\n\n.add-task {\n  grid-area: add-task;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 0px 2px -3px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.background-popup {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(3px);\n}\n\n.add-project-div,\n.add-task-div,\n.show-task-div {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-left: -200px;\n  width: 400px;\n  border-radius: 15px;\n  background-color: var(--darkAccentColor);\n  animation: fadeIn 0.2s;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.4);\n  z-index: 100;\n}\n\n.show-task-div {\n  height: 350px;\n  margin-top: -175px;\n  display: grid;\n  padding: 15px;\n  gap: 15px;\n  grid-template-rows: 50px auto 38px 38px;\n  height: 320px;\n}\n\n.show-task-div h2 {\n  padding: 0;\n  margin: 0;\n}\n\n.add-project-div {\n  height: 120px;\n  margin-top: -60px;\n}\n\n.add-task-div {\n  height: 350px;\n  margin-top: -175px;\n}\n\n.add-project-div form,\n.add-task-div form {\n  display: grid;\n  padding: 15px;\n  gap: 15px;\n}\n\n.add-project-div form {\n  grid-template-rows: 38px 38px;\n  height: 90px;\n}\n\n.add-task-div form {\n  grid-template-rows: 38px auto 38px 38px;\n  height: 320px;\n}\n\n.add-project-div button,\n.add-task-div button,\n#task-close-btn {\n  justify-self: end;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,sCAAsC;EACtC,qCAAqC;EACrC,0CAA0C;EAC1C,sCAAsC;EACtC,8BAA8B;EAC9B,gCAAgC;;EAEhC,gDAAgD;EAChD,2BAA2B;AAC7B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,4BAA4B;EAC5B,uCAAuC;EACvC,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,uCAAuC;EACvC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,gDAAgD;EAChD,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,gDAAgD;EAChD,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gCAAgC;EAChC,gCAAgC;EAChC;;;0BAGwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,yCAAyC;EACzC,qDAAqD;EACrD,aAAa;AACf;;AAEA;EACE,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,sBAAsB;EACtB,yCAAyC;EACzC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,6CAA6C;EAC7C,qDAAqD;EACrD,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,+CAA+C;EAC/C,cAAc;EACd,aAAa;EACb,+BAA+B;EAC/B,2BAA2B;EAC3B,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,wCAAwC;EACxC,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;EACpC,wCAAwC;EACxC,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,cAAc;AAChB;;;AAGA;EACE,mBAAmB;EACnB,6CAA6C;EAC7C,qDAAqD;EACrD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,0BAA0B;AAC5B;;AAEA;;;EAGE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,wCAAwC;EACxC,sBAAsB;EACtB,+CAA+C;EAC/C,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,SAAS;EACT,uCAAuC;EACvC,aAAa;AACf;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,aAAa;EACb,SAAS;AACX;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,uCAAuC;EACvC,aAAa;AACf;;AAEA;;;EAGE,iBAAiB;AACnB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":[":root {\n  --highlightColor: rgb(49, 152, 125);\n  --lightAccentColor: rgb(235, 235, 235);\n  --darkAccentColor: rgb(220, 220, 220);\n  --lightBackgroundColor: rgb(246, 246, 246);\n  --darkHighlightColor: rgb(20, 115, 90);\n  --borderColor: rgb(36, 55, 47);\n  --darkTextColor: rgb(80, 80, 80);\n\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: var(--darkTextColor);\n}\n\nbody {\n  margin: 0;\n}\n\nbutton {\n  background-color: none;\n  border-radius: 10px;\n  color: var(--highlightColor);\n  border: 2px solid var(--highlightColor);\n  width: 100px;\n  height: 35px;\n}\n\nbutton:hover {\n  background-color: var(--highlightColor);\n  color: white;\n  cursor: pointer;\n}\n\ninput {\n  color: var(--darkTextColor);\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border-radius: 10px;\n  padding: 0 10px;\n  border: none;\n}\n\ntextarea {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  resize: none;\n  overflow: auto;\n  border-radius: 10px;\n  padding: 10px;\n  border: none;\n}\n\n#content {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 4fr;\n  grid-template-rows: 5px 1fr 60px;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'add-project add-task';\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--highlightColor);\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background-color: var(--lightAccentColor);\n  box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n}\n\n.project-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n}\n\n.project {\n  border-radius: 5px;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 10px;\n}\n\n.project:hover {\n  background-color: var(--darkAccentColor);\n  cursor: pointer;\n}\n\n.active-project {\n  background-color: var(--darkAccentColor);\n}\n\n.add-project {\n  grid-area: add-project;\n  background-color: var(--lightAccentColor);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main {\n  grid-area: main;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 0 30px 0 50px;\n}\n\n.main h2 {\n  margin: 30px 0;\n}\n\n.task-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.task-list li {\n  height: 40px;\n  border-bottom: 2px solid var(--darkAccentColor);\n  padding: 5px 0;\n  display: grid;\n  grid-template-columns: 20px 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 10px;\n  align-items: center;\n}\n\n.task-checkbox {\n  grid-column: 1/2;\n  grid-row: 1/3;\n  border: 1px solid var(--darkAccentColor);\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  text-align: center;\n  font-size: 1.1em;\n  color: var(--lightBackgroundColor);\n}\n\n.task-checkbox:hover {\n  background-color: rgb(228, 241, 236);\n  border: 1px solid var(--darkAccentColor);\n  color: var(--highlightColor);\n  cursor: pointer;\n}\n\n.task-title {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.task-title:hover {\n  cursor: pointer;\n  color: black;\n}\n\n.task-date {\n  color: darkgray;\n  font-size: 0.8em;\n  grid-column: 2/3;\n  grid-row: 2/3;\n  padding: 2px 0;\n}\n\n\n.add-task {\n  grid-area: add-task;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 0px 2px -3px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.background-popup {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(3px);\n}\n\n.add-project-div,\n.add-task-div,\n.show-task-div {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-left: -200px;\n  width: 400px;\n  border-radius: 15px;\n  background-color: var(--darkAccentColor);\n  animation: fadeIn 0.2s;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.4);\n  z-index: 100;\n}\n\n.show-task-div {\n  height: 350px;\n  margin-top: -175px;\n  display: grid;\n  padding: 15px;\n  gap: 15px;\n  grid-template-rows: 50px auto 38px 38px;\n  height: 320px;\n}\n\n.show-task-div h2 {\n  padding: 0;\n  margin: 0;\n}\n\n.add-project-div {\n  height: 120px;\n  margin-top: -60px;\n}\n\n.add-task-div {\n  height: 350px;\n  margin-top: -175px;\n}\n\n.add-project-div form,\n.add-task-div form {\n  display: grid;\n  padding: 15px;\n  gap: 15px;\n}\n\n.add-project-div form {\n  grid-template-rows: 38px 38px;\n  height: 90px;\n}\n\n.add-task-div form {\n  grid-template-rows: 38px auto 38px 38px;\n  height: 320px;\n}\n\n.add-project-div button,\n.add-task-div button,\n#task-close-btn {\n  justify-self: end;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "closePopupButtonEl": () => (/* binding */ closePopupButtonEl),
/* harmony export */   "projectListItemEl": () => (/* binding */ projectListItemEl),
/* harmony export */   "removeTaskButtonEl": () => (/* binding */ removeTaskButtonEl),
/* harmony export */   "taskTitleEl": () => (/* binding */ taskTitleEl)
/* harmony export */ });
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/modules/pageLoad.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");




const closePopupButtonEl = () => {
  const btn = document.querySelector('#task-close-btn');
  btn.addEventListener('click', () => {
    (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.closePopup)();
  });
};

const taskTitleEl = () => {
  const htmlTaskTitles = document.querySelectorAll('.task-title');
  htmlTaskTitles.forEach((taskTitle) => {
    taskTitle.addEventListener('click', (e) => {
      const taskId = e.target.parentElement.id.split('-')[1];
      const project = _project__WEBPACK_IMPORTED_MODULE_1__.projectlist.getActiceProjectObject();
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.showTask)(document.querySelector('#content'), project.getTask(taskId));
      closePopupButtonEl();
    });
  });
};

const projectListItemEl = () => {
  const htmlProjects = document.querySelectorAll('.project');
  htmlProjects.forEach((project) => {
    project.addEventListener('click', (e) => {
      const projectId = e.target.id.split('-')[1];
      _project__WEBPACK_IMPORTED_MODULE_1__.projectlist.setActiveProject(projectId);
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(projectId);
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayProjectlist)();
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayTaskList)();
      taskTitleEl();
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
      taskTitleEl();
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
      taskTitleEl();
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
/* harmony export */   "showAddTaskForm": () => (/* binding */ showAddTaskForm),
/* harmony export */   "showTask": () => (/* binding */ showTask)
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

const showTask = (htmlContainer, task) => {
  const htmlShowTaskDiv = document.createElement('div');
  htmlShowTaskDiv.classList.add('show-task-div');

  const title = document.createElement('h2');
  title.classList.add('popup-task-title');
  title.innerHTML = task.title;
  htmlShowTaskDiv.appendChild(title);

  const description = document.createElement('p');
  description.classList.add('popup-task-description');
  description.innerHTML = task.description;
  htmlShowTaskDiv.appendChild(description);

  const dueDate = document.createElement('p');
  dueDate.classList.add('popup-task-duedate');
  dueDate.innerHTML = task.dueDate;
  htmlShowTaskDiv.appendChild(dueDate);

  const btnClose = document.createElement('button');
  btnClose.id = 'task-close-btn';
  btnClose.innerHTML = 'Close';
  htmlShowTaskDiv.appendChild(btnClose);

  const backgroundDiv = document.createElement('div');
  backgroundDiv.classList.add('background-popup');
  backgroundDiv.appendChild(htmlShowTaskDiv);

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

  getTask(id) {
    return this.#tasks.find((task) => task.id === +id);
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
(0,_modules_eventListener__WEBPACK_IMPORTED_MODULE_3__.removeTaskButtonEl)();
(0,_modules_eventListener__WEBPACK_IMPORTED_MODULE_3__.taskTitleEl)(contentContainer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU1PO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEdlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7O1VDMURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFLTztBQUNtQjtBQUtkOztBQUVqQzs7QUFFQSwrREFBWTtBQUNaLDREQUFVO0FBQ1YscUVBQWtCO0FBQ2xCLGtFQUFlO0FBQ2Ysd0VBQWdCO0FBQ2hCLDBFQUFrQjtBQUNsQixtRUFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWhpZ2hsaWdodENvbG9yOiByZ2IoNDksIDE1MiwgMTI1KTtcXG4gIC0tbGlnaHRBY2NlbnRDb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgLS1kYXJrQWNjZW50Q29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gIC0tbGlnaHRCYWNrZ3JvdW5kQ29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcXG4gIC0tZGFya0hpZ2hsaWdodENvbG9yOiByZ2IoMjAsIDExNSwgOTApO1xcbiAgLS1ib3JkZXJDb2xvcjogcmdiKDM2LCA1NSwgNDcpO1xcbiAgLS1kYXJrVGV4dENvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxuXFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tZGFya1RleHRDb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBjb2xvcjogdmFyKC0tZGFya1RleHRDb2xvcik7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cHggMWZyIDYwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnaGVhZGVyIGhlYWRlcidcXG4gICAgJ3NpZGViYXIgbWFpbidcXG4gICAgJ2FkZC1wcm9qZWN0IGFkZC10YXNrJztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodENvbG9yKTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRBY2NlbnRDb2xvcik7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggNXB4IDJweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0FjY2VudENvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGl2ZS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICBncmlkLWFyZWE6IGFkZC1wcm9qZWN0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRBY2NlbnRDb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEJhY2tncm91bmRDb2xvcik7XFxuICBib3gtc2hhZG93OiBpbnNldCA1cHggNXB4IDJweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHBhZGRpbmc6IDAgMzBweCAwIDUwcHg7XFxufVxcblxcbi5tYWluIGgyIHtcXG4gIG1hcmdpbjogMzBweCAwO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFzay1saXN0IGxpIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jaGVja2JveCB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0QmFja2dyb3VuZENvbG9yKTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3g6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjQxLCAyMzYpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFya0FjY2VudENvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4udGFzay10aXRsZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi50YXNrLWRhdGUge1xcbiAgY29sb3I6IGRhcmtncmF5O1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgcGFkZGluZzogMnB4IDA7XFxufVxcblxcblxcbi5hZGQtdGFzayB7XFxuICBncmlkLWFyZWE6IGFkZC10YXNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRCYWNrZ3JvdW5kQ29sb3IpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDBweCAycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2LFxcbi5hZGQtdGFzay1kaXYsXFxuLnNob3ctdGFzay1kaXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTIwMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjJzO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5zaG93LXRhc2stZGl2IHtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBtYXJnaW4tdG9wOiAtMTc1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogMTVweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCBhdXRvIDM4cHggMzhweDtcXG4gIGhlaWdodDogMzIwcHg7XFxufVxcblxcbi5zaG93LXRhc2stZGl2IGgyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5hZGQtcHJvamVjdC1kaXYge1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIG1hcmdpbi10b3A6IC02MHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stZGl2IHtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBtYXJnaW4tdG9wOiAtMTc1cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1kaXYgZm9ybSxcXG4uYWRkLXRhc2stZGl2IGZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1kaXYgZm9ybSB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDM4cHggMzhweDtcXG4gIGhlaWdodDogOTBweDtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiBmb3JtIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzhweCBhdXRvIDM4cHggMzhweDtcXG4gIGhlaWdodDogMzIwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1kaXYgYnV0dG9uLFxcbi5hZGQtdGFzay1kaXYgYnV0dG9uLFxcbiN0YXNrLWNsb3NlLWJ0biB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLHFDQUFxQztFQUNyQywwQ0FBMEM7RUFDMUMsc0NBQXNDO0VBQ3RDLDhCQUE4QjtFQUM5QixnQ0FBZ0M7O0VBRWhDLGdEQUFn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QUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1oaWdobGlnaHRDb2xvcjogcmdiKDQ5LCAxNTIsIDEyNSk7XFxuICAtLWxpZ2h0QWNjZW50Q29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIC0tZGFya0FjY2VudENvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAtLWxpZ2h0QmFja2dyb3VuZENvbG9yOiByZ2IoMjQ2LCAyNDYsIDI0Nik7XFxuICAtLWRhcmtIaWdobGlnaHRDb2xvcjogcmdiKDIwLCAxMTUsIDkwKTtcXG4gIC0tYm9yZGVyQ29sb3I6IHJnYigzNiwgNTUsIDQ3KTtcXG4gIC0tZGFya1RleHRDb2xvcjogcmdiKDgwLCA4MCwgODApO1xcblxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLWRhcmtUZXh0Q29sb3IpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLWhpZ2hsaWdodENvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhpZ2hsaWdodENvbG9yKTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodENvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgY29sb3I6IHZhcigtLWRhcmtUZXh0Q29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXB4IDFmciA2MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlciBoZWFkZXInXFxuICAgICdzaWRlYmFyIG1haW4nXFxuICAgICdhZGQtcHJvamVjdCBhZGQtdGFzayc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0QWNjZW50Q29sb3IpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDVweCAycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgZ3JpZC1hcmVhOiBhZGQtcHJvamVjdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0QWNjZW50Q29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRCYWNrZ3JvdW5kQ29sb3IpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBwYWRkaW5nOiAwIDMwcHggMCA1MHB4O1xcbn1cXG5cXG4ubWFpbiBoMiB7XFxuICBtYXJnaW46IDMwcHggMDtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2stbGlzdCBsaSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGFya0FjY2VudENvbG9yKTtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodEJhY2tncm91bmRDb2xvcik7XFxufVxcblxcbi50YXNrLWNoZWNrYm94OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDI0MSwgMjM2KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxuICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLnRhc2stdGl0bGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gIGNvbG9yOiBkYXJrZ3JheTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIHBhZGRpbmc6IDJweCAwO1xcbn1cXG5cXG5cXG4uYWRkLXRhc2sge1xcbiAgZ3JpZC1hcmVhOiBhZGQtdGFzaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0QmFja2dyb3VuZENvbG9yKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDVweCAwcHggMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJhY2tncm91bmQtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWRpdixcXG4uYWRkLXRhc2stZGl2LFxcbi5zaG93LXRhc2stZGl2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycztcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uc2hvdy10YXNrLWRpdiB7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbWFyZ2luLXRvcDogLTE3NXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBnYXA6IDE1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0byAzOHB4IDM4cHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG5cXG4uc2hvdy10YXNrLWRpdiBoMiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IHtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBtYXJnaW4tdG9wOiAtNjBweDtcXG59XFxuXFxuLmFkZC10YXNrLWRpdiB7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbWFyZ2luLXRvcDogLTE3NXB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IGZvcm0sXFxuLmFkZC10YXNrLWRpdiBmb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IGZvcm0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzOHB4IDM4cHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5hZGQtdGFzay1kaXYgZm9ybSB7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDM4cHggYXV0byAzOHB4IDM4cHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IGJ1dHRvbixcXG4uYWRkLXRhc2stZGl2IGJ1dHRvbixcXG4jdGFzay1jbG9zZS1idG4ge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBzaG93QWRkUHJvamVjdEZvcm0sXG4gIHNob3dBZGRUYXNrRm9ybSxcbiAgZGlzcGxheVByb2plY3RsaXN0LFxuICBkaXNwbGF5VGFza0xpc3QsXG4gIGNsb3NlUG9wdXAsXG4gIHNldEFjdGl2ZVByb2plY3QsXG4gIHNob3dUYXNrLFxufSBmcm9tICcuL3BhZ2VMb2FkJztcbmltcG9ydCB7IHByb2plY3RsaXN0LCBuZXdQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IG5ld1Rhc2sgfSBmcm9tICcuL3Rhc2snO1xuXG5leHBvcnQgY29uc3QgY2xvc2VQb3B1cEJ1dHRvbkVsID0gKCkgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jbG9zZS1idG4nKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsb3NlUG9wdXAoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdGFza1RpdGxlRWwgPSAoKSA9PiB7XG4gIGNvbnN0IGh0bWxUYXNrVGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stdGl0bGUnKTtcbiAgaHRtbFRhc2tUaXRsZXMuZm9yRWFjaCgodGFza1RpdGxlKSA9PiB7XG4gICAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQuc3BsaXQoJy0nKVsxXTtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0bGlzdC5nZXRBY3RpY2VQcm9qZWN0T2JqZWN0KCk7XG4gICAgICBzaG93VGFzayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLCBwcm9qZWN0LmdldFRhc2sodGFza0lkKSk7XG4gICAgICBjbG9zZVBvcHVwQnV0dG9uRWwoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdExpc3RJdGVtRWwgPSAoKSA9PiB7XG4gIGNvbnN0IGh0bWxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gIGh0bWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5pZC5zcGxpdCgnLScpWzFdO1xuICAgICAgcHJvamVjdGxpc3Quc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgZGlzcGxheVByb2plY3RsaXN0KCk7XG4gICAgICBkaXNwbGF5VGFza0xpc3QoKTtcbiAgICAgIHRhc2tUaXRsZUVsKCk7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW1FbCgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrQnV0dG9uRWwgPSAoKSA9PiB7XG4gIGNvbnN0IGh0bWxDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stY2hlY2tib3gnKTtcbiAgaHRtbENoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkLnNwbGl0KCctJylbMV07XG4gICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdGxpc3QuZ2V0QWN0aWNlUHJvamVjdE9iamVjdCgpO1xuICAgICAgcHJvamVjdC5yZW1vdmVUYXNrKCt0YXNrSWQpO1xuICAgICAgZGlzcGxheVRhc2tMaXN0KCk7XG4gICAgICBkaXNwbGF5UHJvamVjdGxpc3QoKTtcbiAgICAgIHJlbW92ZVRhc2tCdXR0b25FbCgpO1xuICAgICAgdGFza1RpdGxlRWwoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEJ1dHRvbkVsID0gKGh0bWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1uZXctcHJvamVjdC1idG4nKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGh0bWxDb250YWluZXIucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LXRpdGxlJyk7XG4gICAgICBuZXdQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpO1xuICAgICAgZGlzcGxheVByb2plY3RsaXN0KCk7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW1FbCgpO1xuICAgICAgY2xvc2VQb3B1cCgpO1xuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH0sXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVGFza0J1dHRvbkVsID0gKGh0bWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1uZXctdGFzay1idG4nKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGh0bWxDb250YWluZXIucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLXRpdGxlJyk7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gaHRtbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnI2FkZC10YXNrLWRlc2NyaXB0aW9uJyxcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRlSW5wdXQgPSBodG1sQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1kYXRlJyk7XG4gICAgICBwcm9qZWN0bGlzdFxuICAgICAgICAuZ2V0QWN0aWNlUHJvamVjdE9iamVjdCgpXG4gICAgICAgIC5hZGRUYXNrKFxuICAgICAgICAgIG5ld1Rhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlKSxcbiAgICAgICAgKTtcbiAgICAgIGRpc3BsYXlUYXNrTGlzdCgpO1xuICAgICAgZGlzcGxheVByb2plY3RsaXN0KCk7XG4gICAgICBwcm9qZWN0TGlzdEl0ZW1FbCgpO1xuICAgICAgcmVtb3ZlVGFza0J1dHRvbkVsKCk7XG4gICAgICB0YXNrVGl0bGVFbCgpO1xuICAgICAgY2xvc2VQb3B1cCgpO1xuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH0sXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEZvcm1CdXR0b25FbCA9IChodG1sQ29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1idG4nKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2hvd0FkZFByb2plY3RGb3JtKGh0bWxDb250YWluZXIpO1xuICAgIGFkZFByb2plY3RCdXR0b25FbChodG1sQ29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVGFza0Zvcm1CdXR0b25FbCA9IChodG1sQ29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idG4nKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2hvd0FkZFRhc2tGb3JtKGh0bWxDb250YWluZXIpO1xuICAgIGFkZFRhc2tCdXR0b25FbChodG1sQ29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkRXZlbnRMaXN0ZXJucyA9IChodG1sQ29udGFpbmVyKSA9PiB7XG4gIGFkZFByb2plY3RGb3JtQnV0dG9uRWwoaHRtbENvbnRhaW5lcik7XG4gIGFkZFRhc2tGb3JtQnV0dG9uRWwoaHRtbENvbnRhaW5lcik7XG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdGxpc3QgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gKGh0bWxDb250YWluZXIsIGh0bWxjbGFzcywgaW5uZXJodG1sKSA9PiB7XG4gIGNvbnN0IGh0bWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaHRtbEJ0bi5pZCA9IGh0bWxjbGFzcztcbiAgaHRtbEJ0bi5pbm5lckhUTUwgPSBpbm5lcmh0bWw7XG4gIGh0bWxDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbEJ0bik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZFRlbXBsYXRlID0gKGh0bWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgdGVtcGxhdGVDb250YWluZXIgPSBodG1sQ29udGFpbmVyO1xuICB0ZW1wbGF0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgaHRtbENsYXNzZXMgPSBbJ2hlYWRlcicsICdzaWRlYmFyJywgJ2FkZC1wcm9qZWN0JywgJ21haW4nLCAnYWRkLXRhc2snXTtcblxuICBodG1sQ2xhc3Nlcy5mb3JFYWNoKChodG1sQ2xhc3MpID0+IHtcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChodG1sQ2xhc3MpO1xuICAgIHRlbXBsYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gIH0pO1xuXG4gIGFkZFRhc2tCdXR0b24oXG4gICAgaHRtbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKSxcbiAgICAnYWRkLXByb2plY3QtYnRuJyxcbiAgICAnPHN0cm9uZz4rPC9zdHJvbmc+IEFkZCBwcm9qZWN0JyxcbiAgKTtcbiAgYWRkVGFza0J1dHRvbihcbiAgICBodG1sQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpLFxuICAgICdhZGQtdGFzay1idG4nLFxuICAgICc8c3Ryb25nPis8L3N0cm9uZz4gQWRkIHRhc2snLFxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9qZWN0bGlzdCA9ICgpID0+IHtcbiAgY29uc3QgaHRtbFNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICBodG1sU2lkZWJhci5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCBodG1sUHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBodG1sUHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0Jyk7XG5cbiAgcHJvamVjdGxpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgaHRtbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGh0bWxQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBpZiAocHJvamVjdC5pZCA9PT0gcHJvamVjdGxpc3QuZ2V0QWN0aXZlUHJvamVjdCgpKSB7XG4gICAgICBodG1sUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgIH1cbiAgICBodG1sUHJvamVjdC5pZCA9IGBwcm9qZWN0LSR7cHJvamVjdC5pZH1gO1xuICAgIGh0bWxQcm9qZWN0LmlubmVySFRNTCA9IGAke3Byb2plY3QudGl0bGV9ICgke3Byb2plY3QudGFza3MubGVuZ3RofSlgO1xuICAgIGh0bWxQcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChodG1sUHJvamVjdCk7XG4gIH0pO1xuXG4gIGh0bWxTaWRlYmFyLmFwcGVuZENoaWxkKGh0bWxQcm9qZWN0TGlzdCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VGFza0h0bWwgPSAodGFzaykgPT4ge1xuICBjb25zdCBodG1sVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGh0bWxUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgaHRtbFRhc2suaWQgPSBgdGFzay0ke3Rhc2suaWR9YDtcblxuICBjb25zdCBodG1sQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaHRtbENoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2hlY2tib3gnKTtcbiAgaHRtbENoZWNrYm94LmlubmVySFRNTCA9ICfinJMnO1xuXG4gIGh0bWxUYXNrLmFwcGVuZENoaWxkKGh0bWxDaGVja2JveCk7XG5cbiAgY29uc3QgaHRtbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGh0bWxUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gIGh0bWxUaXRsZS5pbm5lckhUTUwgPSB0YXNrLnRpdGxlO1xuICBodG1sVGFzay5hcHBlbmRDaGlsZChodG1sVGl0bGUpO1xuXG4gIGNvbnN0IGh0bWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGh0bWxEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICBodG1sRGF0ZS5pbm5lckhUTUwgPSB0YXNrLmR1ZURhdGU7XG4gIGh0bWxUYXNrLmFwcGVuZENoaWxkKGh0bWxEYXRlKTtcblxuICByZXR1cm4gaHRtbFRhc2s7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVRhc2tMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdGxpc3QuZ2V0QWN0aWNlUHJvamVjdE9iamVjdCgpO1xuICBjb25zdCBodG1sTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIGh0bWxNYWluLmlubmVySFRNTCA9ICcnO1xuXG4gIGNvbnN0IEh0bWxoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgSHRtbGhlYWRpbmcuaW5uZXJIVE1MID0gcHJvamVjdC50aXRsZTtcblxuICBodG1sTWFpbi5hcHBlbmRDaGlsZChIdG1saGVhZGluZyk7XG5cbiAgY29uc3QgaHRtbFRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgaHRtbFRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuXG4gIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGh0bWxUYXNrTGlzdC5hcHBlbmRDaGlsZChnZXRUYXNrSHRtbCh0YXNrKSk7XG4gIH0pO1xuXG4gIGh0bWxNYWluLmFwcGVuZENoaWxkKGh0bWxUYXNrTGlzdCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd0FkZFByb2plY3RGb3JtID0gKGh0bWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGl0bGVJbnB1dC5pZCA9ICdhZGQtcHJvamVjdC10aXRsZSc7XG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnUHJvamVjdCB0aXRsZS4uLic7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blN1Ym1pdC5pZCA9ICdhZGQtbmV3LXByb2plY3QtYnRuJztcbiAgYnRuU3VibWl0LmlubmVySFRNTCA9ICdBZGQgcHJvamVjdCc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuU3VibWl0KTtcblxuICBjb25zdCBodG1sQWRkUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodG1sQWRkUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1kaXYnKTtcbiAgaHRtbEFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgYmFja2dyb3VuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBiYWNrZ3JvdW5kRGl2LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtcG9wdXAnKTtcbiAgYmFja2dyb3VuZERpdi5hcHBlbmRDaGlsZChodG1sQWRkUHJvamVjdERpdik7XG5cbiAgaHRtbENvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kRGl2KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93QWRkVGFza0Zvcm0gPSAoaHRtbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZUlucHV0LmlkID0gJ2FkZC10YXNrLXRpdGxlJztcbiAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdUYXNrIHRpdGxlLi4uJztcbiAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIERlc2NyaXB0aW9uSW5wdXQuaWQgPSAnYWRkLXRhc2stZGVzY3JpcHRpb24nO1xuICBEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXB0aW9uLi4uJztcbiAgRGVzY3JpcHRpb25JbnB1dC5tYXhMZW5ndGggPSAxMDAwO1xuICBmb3JtLmFwcGVuZENoaWxkKERlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRhdGVJbnB1dC50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJztcbiAgZGF0ZUlucHV0LmlkID0gJ2FkZC10YXNrLWRhdGUnO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blN1Ym1pdC5pZCA9ICdhZGQtbmV3LXRhc2stYnRuJztcbiAgYnRuU3VibWl0LmlubmVySFRNTCA9ICdBZGQgdGFzayc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuU3VibWl0KTtcblxuICBjb25zdCBodG1sQWRkUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodG1sQWRkUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1kaXYnKTtcbiAgaHRtbEFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgYmFja2dyb3VuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBiYWNrZ3JvdW5kRGl2LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtcG9wdXAnKTtcbiAgYmFja2dyb3VuZERpdi5hcHBlbmRDaGlsZChodG1sQWRkUHJvamVjdERpdik7XG5cbiAgaHRtbENvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kRGl2KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93VGFzayA9IChodG1sQ29udGFpbmVyLCB0YXNrKSA9PiB7XG4gIGNvbnN0IGh0bWxTaG93VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodG1sU2hvd1Rhc2tEaXYuY2xhc3NMaXN0LmFkZCgnc2hvdy10YXNrLWRpdicpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncG9wdXAtdGFzay10aXRsZScpO1xuICB0aXRsZS5pbm5lckhUTUwgPSB0YXNrLnRpdGxlO1xuICBodG1sU2hvd1Rhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdwb3B1cC10YXNrLWRlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRhc2suZGVzY3JpcHRpb247XG4gIGh0bWxTaG93VGFza0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdwb3B1cC10YXNrLWR1ZWRhdGUnKTtcbiAgZHVlRGF0ZS5pbm5lckhUTUwgPSB0YXNrLmR1ZURhdGU7XG4gIGh0bWxTaG93VGFza0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5DbG9zZS5pZCA9ICd0YXNrLWNsb3NlLWJ0bic7XG4gIGJ0bkNsb3NlLmlubmVySFRNTCA9ICdDbG9zZSc7XG4gIGh0bWxTaG93VGFza0Rpdi5hcHBlbmRDaGlsZChidG5DbG9zZSk7XG5cbiAgY29uc3QgYmFja2dyb3VuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBiYWNrZ3JvdW5kRGl2LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtcG9wdXAnKTtcbiAgYmFja2dyb3VuZERpdi5hcHBlbmRDaGlsZChodG1sU2hvd1Rhc2tEaXYpO1xuXG4gIGh0bWxDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZERpdik7XG59O1xuXG5leHBvcnQgY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtcG9wdXAnKS5yZW1vdmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gIGNvbnN0IGlkVGV4dCA9IGBwcm9qZWN0LSR7aWR9YDtcbiAgY29uc3QgaHRtbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgaHRtbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IGlkVGV4dCkge1xuICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgIH1cbiAgfSk7XG4gIGRpc3BsYXlUYXNrTGlzdCgpO1xufTtcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0bGlzdCA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gMDtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIHByb2plY3RzLmZvckVhY2goKHApID0+IHtcbiAgICAgIGlmIChwLmdldElkKCkgPT09IHByb2plY3QuZ2V0SWQoKSkge1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgYWN0aXZlUHJvamVjdCA9ICtpZDtcbiAgfTtcblxuICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKCkgPT4gYWN0aXZlUHJvamVjdDtcblxuICBjb25zdCBnZXRBY3RpY2VQcm9qZWN0T2JqZWN0ID0gKCkgPT5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrXG4gICAgcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gYWN0aXZlUHJvamVjdCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgc2V0QWN0aXZlUHJvamVjdCxcbiAgICBnZXRBY3RpdmVQcm9qZWN0LFxuICAgIGdldEFjdGljZVByb2plY3RPYmplY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyAjY291bnQgPSAwO1xuXG4gICNpZDtcblxuICAjdGl0bGU7XG5cbiAgI3Rhc2tzID0gW107XG5cbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy4jaWQgPSBQcm9qZWN0LiNjb3VudDtcbiAgICBQcm9qZWN0LiNpbmNyZW1lbnRDb3VudCgpO1xuICB9XG5cbiAgc3RhdGljICNpbmNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICBQcm9qZWN0LiNjb3VudCArPSAxO1xuICB9O1xuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICBpZiAodGl0bGUgPT09ICcnKSB7XG4gICAgICB0aGlzLiN0aXRsZSA9ICdOZXcgUHJvamVjdCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xuICB9XG5cbiAgZ2V0IHRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLiN0YXNrcztcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMuI3Rhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICByZW1vdmVUYXNrKGlkKSB7XG4gICAgdGhpcy4jdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0YXNrLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLiN0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VGFzayhpZCkge1xuICAgIHJldHVybiB0aGlzLiN0YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSAraWQpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBuZXdQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gIHByb2plY3RsaXN0LmFkZFByb2plY3QobmV3IFByb2plY3QodGl0bGUpKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgc3RhdGljICNjb3VudCA9IDA7XG5cbiAgI2lkO1xuXG4gICN0aXRsZTtcblxuICAjZGVzY3JpcHRpb247XG5cbiAgI2R1ZURhdGU7XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuI2lkID0gVGFzay4jY291bnQ7XG4gICAgVGFzay4jaW5jcmVtZW50Q291bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyAjaW5jcmVtZW50Q291bnQgPSAoKSA9PiB7XG4gICAgVGFzay4jY291bnQgKz0gMTtcbiAgfTtcblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lkO1xuICB9XG5cbiAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgdGhpcy4jdGl0bGUgPSAnTmV3IFRhc2snO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2R1ZURhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG5ld1Rhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uID0gJycsIGRhdGUgPSAnJykgPT5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcGxpY2l0LWFycm93LWxpbmVicmVha1xuICBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBsb2FkVGVtcGxhdGUsXG4gIGRpc3BsYXlQcm9qZWN0bGlzdCxcbiAgZGlzcGxheVRhc2tMaXN0LFxufSBmcm9tICcuL21vZHVsZXMvcGFnZUxvYWQnO1xuaW1wb3J0IHsgbmV3UHJvamVjdCB9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0JztcbmltcG9ydCB7XG4gIGFkZEV2ZW50TGlzdGVybnMsXG4gIHJlbW92ZVRhc2tCdXR0b25FbCxcbiAgdGFza1RpdGxlRWwsXG59IGZyb20gJy4vbW9kdWxlcy9ldmVudExpc3RlbmVyJztcblxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmxvYWRUZW1wbGF0ZShjb250ZW50Q29udGFpbmVyKTtcbm5ld1Byb2plY3QoJ1RvZGF5Jyk7XG5kaXNwbGF5UHJvamVjdGxpc3QoKTtcbmRpc3BsYXlUYXNrTGlzdCgpO1xuYWRkRXZlbnRMaXN0ZXJucyhjb250ZW50Q29udGFpbmVyKTtcbnJlbW92ZVRhc2tCdXR0b25FbCgpO1xudGFza1RpdGxlRWwoY29udGVudENvbnRhaW5lcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=