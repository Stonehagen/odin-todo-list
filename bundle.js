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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --highlightColor: rgb(49, 152, 125);\n  --lightAccentColor: rgb(235, 235, 235);\n  --darkAccentColor: rgb(220, 220, 220);\n  --lightBackgroundColor: rgb(246, 246, 246);\n  --darkHighlightColor: rgb(20, 115, 90);\n  --borderColor: rgb(36, 55, 47);\n  --darkTextColor: rgb(80, 80, 80);\n\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: var(--darkTextColor);\n}\n\n\nbody {\n  margin: 0;\n}\n\nbutton {\n  background-color: none;\n  border-radius: 10px;\n  color: var(--highlightColor);\n  border: 2px solid var(--highlightColor);\n}\n\nbutton:hover {\n  background-color: var(--highlightColor);\n  color: white;\n  cursor: pointer;\n}\n\n#content {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 4fr;\n  grid-template-rows: 50px 1fr 60px;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'add-project add-task';\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--highlightColor);\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background-color: var(--lightAccentColor);\n  box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n}\n\n.project-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n  gap: 5px;\n}\n\n.project {\n  border-radius: 5px;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 10px;\n}\n\n.project:hover {\n  background-color: var(--darkAccentColor);\n  cursor: pointer;\n}\n\n.active-project {\n  background-color: var(--darkAccentColor);\n}\n\n.add-project {\n  grid-area: add-project;\n  background-color: var(--lightAccentColor);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-project button {\n  width: 100px;\n  height: 35px;\n}\n\n.main {\n  grid-area: main;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 5px 2px -3px rgba(0, 0, 0, 0.1);\n}\n\n.add-task {\n  grid-area: add-task;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 0px 2px -3px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-task button {\n  width: 100px;\n  height: 35px;\n}\n\n.background-popup {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(3px);\n}\n\n.add-project-div {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -60px;\n  margin-left: -200px;\n  width: 400px;\n  height: 120px;\n  border-radius: 15px;\n  background-color: var(--darkAccentColor);\n  animation: fadeIn 0.2s;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.4);\n  z-index: 100;\n}\n\n.add-project-div form {\n  display: grid;\n  padding: 15px;\n  height: 90px;\n  grid-template-rows: 1fr 1fr;\n  gap: 15px;\n}\n\n.add-project-div button {\n  width: 100px;\n  justify-self: end;\n}\n\n.add-project-div input {\n  border-radius: 10px;\n  padding: 0 10px;\n  border: none;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,sCAAsC;EACtC,qCAAqC;EACrC,0CAA0C;EAC1C,sCAAsC;EACtC,8BAA8B;EAC9B,gCAAgC;;EAEhC,gDAAgD;EAChD,2BAA2B;AAC7B;;;AAGA;EACE,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,4BAA4B;EAC5B,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;EACvC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gCAAgC;EAChC,iCAAiC;EACjC;;;0BAGwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,yCAAyC;EACzC,qDAAqD;EACrD,aAAa;AACf;;AAEA;EACE,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,sBAAsB;EACtB,yCAAyC;EACzC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,6CAA6C;EAC7C,qDAAqD;AACvD;;AAEA;EACE,mBAAmB;EACnB,6CAA6C;EAC7C,qDAAqD;EACrD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,0CAA0C;EAC1C,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,wCAAwC;EACxC,sBAAsB;EACtB,+CAA+C;EAC/C,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":[":root {\n  --highlightColor: rgb(49, 152, 125);\n  --lightAccentColor: rgb(235, 235, 235);\n  --darkAccentColor: rgb(220, 220, 220);\n  --lightBackgroundColor: rgb(246, 246, 246);\n  --darkHighlightColor: rgb(20, 115, 90);\n  --borderColor: rgb(36, 55, 47);\n  --darkTextColor: rgb(80, 80, 80);\n\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: var(--darkTextColor);\n}\n\n\nbody {\n  margin: 0;\n}\n\nbutton {\n  background-color: none;\n  border-radius: 10px;\n  color: var(--highlightColor);\n  border: 2px solid var(--highlightColor);\n}\n\nbutton:hover {\n  background-color: var(--highlightColor);\n  color: white;\n  cursor: pointer;\n}\n\n#content {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 4fr;\n  grid-template-rows: 50px 1fr 60px;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'add-project add-task';\n}\n\n.header {\n  grid-area: header;\n  background-color: var(--highlightColor);\n}\n\n.sidebar {\n  grid-area: sidebar;\n  background-color: var(--lightAccentColor);\n  box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n}\n\n.project-list {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: grid;\n  gap: 5px;\n}\n\n.project {\n  border-radius: 5px;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 10px;\n}\n\n.project:hover {\n  background-color: var(--darkAccentColor);\n  cursor: pointer;\n}\n\n.active-project {\n  background-color: var(--darkAccentColor);\n}\n\n.add-project {\n  grid-area: add-project;\n  background-color: var(--lightAccentColor);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-project button {\n  width: 100px;\n  height: 35px;\n}\n\n.main {\n  grid-area: main;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 5px 2px -3px rgba(0, 0, 0, 0.1);\n}\n\n.add-task {\n  grid-area: add-task;\n  background-color: var(--lightBackgroundColor);\n  box-shadow: inset 5px 0px 2px -3px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-task button {\n  width: 100px;\n  height: 35px;\n}\n\n.background-popup {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(3px);\n}\n\n.add-project-div {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -60px;\n  margin-left: -200px;\n  width: 400px;\n  height: 120px;\n  border-radius: 15px;\n  background-color: var(--darkAccentColor);\n  animation: fadeIn 0.2s;\n  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.4);\n  z-index: 100;\n}\n\n.add-project-div form {\n  display: grid;\n  padding: 15px;\n  height: 90px;\n  grid-template-rows: 1fr 1fr;\n  gap: 15px;\n}\n\n.add-project-div button {\n  width: 100px;\n  justify-self: end;\n}\n\n.add-project-div input {\n  border-radius: 10px;\n  padding: 0 10px;\n  border: none;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "projectListItemEl": () => (/* binding */ projectListItemEl)
/* harmony export */ });
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/modules/pageLoad.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");



const projectListItemEl = (projectListItem) => {
  projectListItem.addEventListener('click', (e) => {
    const projectId = e.target.id;
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
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.displayProjectlist)('.sidebar', projectListItemEl);
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

const addEventListerns = (htmlContainer) => {
  addProjectFormButtonEl(htmlContainer);
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
/* harmony export */   "loadTemplate": () => (/* binding */ loadTemplate),
/* harmony export */   "setActiveProject": () => (/* binding */ setActiveProject),
/* harmony export */   "showAddProjectForm": () => (/* binding */ showAddProjectForm)
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

const displayProjectlist = (htmlContainerClass, divEl) => {
  const htmlSidebar = document.querySelector(htmlContainerClass);
  htmlSidebar.innerHTML = '';

  const htmlProjectList = document.createElement('ul');
  htmlProjectList.classList.add('project-list');

  _project__WEBPACK_IMPORTED_MODULE_0__.projectlist.getProjects().forEach((project) => {
    const htmlProject = document.createElement('li');
    htmlProject.classList.add('project');
    htmlProject.id = `project-${project.id}`;
    htmlProject.innerHTML = project.title;
    divEl(htmlProject);
    htmlProjectList.appendChild(htmlProject);
  });

  htmlSidebar.appendChild(htmlProjectList);
};

const showAddProjectForm = (htmlContainer) => {
  const form = document.createElement('form');

  const titleInput = document.createElement('input');
  titleInput.id = 'add-project-title';
  titleInput.placeholder = 'Project Title...';
  form.appendChild(titleInput);

  const btnSubmit = document.createElement('button');
  btnSubmit.id = 'add-new-project-btn';
  btnSubmit.innerHTML = 'Add Project';
  form.appendChild(btnSubmit);

  const htmlAddProjectDiv = document.createElement('div');
  htmlAddProjectDiv.classList.add('add-project-div');
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
  const htmlProjects = document.querySelectorAll('.project');
  htmlProjects.forEach((project) => {
    project.classList.remove('active-project');
    if (project.id === id) {
      project.classList.add('active-project');
    }
  });
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

  return {
    getProjects,
    addProject,
    removeProject,
  };
})();

class Project {
  static #count = 0;

  #id;

  #title;

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
}

const newProject = (title) => {
  projectlist.addProject(new Project(title));
};


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
(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__.displayProjectlist)('.sidebar', _modules_eventListener__WEBPACK_IMPORTED_MODULE_3__.projectListItemEl);
(0,_modules_eventListener__WEBPACK_IMPORTED_MODULE_3__.addProjectFormButtonEl)(contentContainer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2V2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWhpZ2hsaWdodENvbG9yOiByZ2IoNDksIDE1MiwgMTI1KTtcXG4gIC0tbGlnaHRBY2NlbnRDb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgLS1kYXJrQWNjZW50Q29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gIC0tbGlnaHRCYWNrZ3JvdW5kQ29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcXG4gIC0tZGFya0hpZ2hsaWdodENvbG9yOiByZ2IoMjAsIDExNSwgOTApO1xcbiAgLS1ib3JkZXJDb2xvcjogcmdiKDM2LCA1NSwgNDcpO1xcbiAgLS1kYXJrVGV4dENvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxuXFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tZGFya1RleHRDb2xvcik7XFxufVxcblxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmciA2MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlciBoZWFkZXInXFxuICAgICdzaWRlYmFyIG1haW4nXFxuICAgICdhZGQtcHJvamVjdCBhZGQtdGFzayc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0QWNjZW50Q29sb3IpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDVweCAycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0FjY2VudENvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGl2ZS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICBncmlkLWFyZWE6IGFkZC1wcm9qZWN0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRBY2NlbnRDb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRCYWNrZ3JvdW5kQ29sb3IpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICBncmlkLWFyZWE6IGFkZC10YXNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRCYWNrZ3JvdW5kQ29sb3IpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDBweCAycHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2sgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuLmJhY2tncm91bmQtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWRpdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC02MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0FjY2VudENvbG9yKTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMnM7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWRpdiBmb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZGl2IGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWRpdiBpbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMscUNBQXFDO0VBQ3JDLDBDQUEwQztFQUMxQyxzQ0FBc0M7RUFDdEMsOEJBQThCO0VBQzlCLGdDQUFnQzs7RUFFaEMsZ0RBQWdEO0VBQ2hELDJCQUEyQjtBQUM3Qjs7O0FBR0E7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakM7OzswQkFHd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxxREFBcUQ7RUFDckQsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkNBQTZDO0VBQzdDLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw2Q0FBNkM7RUFDN0MscURBQXFEO0VBQ3JELGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBDQUEwQztFQUMxQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsK0NBQStDO0VBQy9DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1oaWdobGlnaHRDb2xvcjogcmdiKDQ5LCAxNTIsIDEyNSk7XFxuICAtLWxpZ2h0QWNjZW50Q29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIC0tZGFya0FjY2VudENvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAtLWxpZ2h0QmFja2dyb3VuZENvbG9yOiByZ2IoMjQ2LCAyNDYsIDI0Nik7XFxuICAtLWRhcmtIaWdobGlnaHRDb2xvcjogcmdiKDIwLCAxMTUsIDkwKTtcXG4gIC0tYm9yZGVyQ29sb3I6IHJnYigzNiwgNTUsIDQ3KTtcXG4gIC0tZGFya1RleHRDb2xvcjogcmdiKDgwLCA4MCwgODApO1xcblxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLWRhcmtUZXh0Q29sb3IpO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLWhpZ2hsaWdodENvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhpZ2hsaWdodENvbG9yKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodENvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnIgNjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXIgaGVhZGVyJ1xcbiAgICAnc2lkZWJhciBtYWluJ1xcbiAgICAnYWRkLXByb2plY3QgYWRkLXRhc2snO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEFjY2VudENvbG9yKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCA1cHggMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQWNjZW50Q29sb3IpO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgZ3JpZC1hcmVhOiBhZGQtcHJvamVjdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0QWNjZW50Q29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0QmFja2dyb3VuZENvbG9yKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgZ3JpZC1hcmVhOiBhZGQtdGFzaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0QmFja2dyb3VuZENvbG9yKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDVweCAwcHggMnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5iYWNrZ3JvdW5kLXBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5hZGQtcHJvamVjdC1kaXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtNjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtBY2NlbnRDb2xvcik7XFxuICBhbmltYXRpb246IGZhZGVJbiAwLjJzO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5hZGQtcHJvamVjdC1kaXYgZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGhlaWdodDogOTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWRpdiBidXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5hZGQtcHJvamVjdC1kaXYgaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIHNob3dBZGRQcm9qZWN0Rm9ybSxcbiAgZGlzcGxheVByb2plY3RsaXN0LFxuICBjbG9zZVBvcHVwLFxuICBzZXRBY3RpdmVQcm9qZWN0LFxufSBmcm9tICcuL3BhZ2VMb2FkJztcbmltcG9ydCB7IG5ld1Byb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdExpc3RJdGVtRWwgPSAocHJvamVjdExpc3RJdGVtKSA9PiB7XG4gIHByb2plY3RMaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuaWQ7XG4gICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0SWQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0QnV0dG9uRWwgPSAoaHRtbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldy1wcm9qZWN0LWJ0bicpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0aXRsZUlucHV0ID0gaHRtbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtdGl0bGUnKTtcbiAgICAgIG5ld1Byb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICBkaXNwbGF5UHJvamVjdGxpc3QoJy5zaWRlYmFyJywgcHJvamVjdExpc3RJdGVtRWwpO1xuICAgICAgY2xvc2VQb3B1cCgpO1xuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH0sXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEZvcm1CdXR0b25FbCA9IChodG1sQ29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1idG4nKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2hvd0FkZFByb2plY3RGb3JtKGh0bWxDb250YWluZXIpO1xuICAgIGFkZFByb2plY3RCdXR0b25FbChodG1sQ29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkRXZlbnRMaXN0ZXJucyA9IChodG1sQ29udGFpbmVyKSA9PiB7XG4gIGFkZFByb2plY3RGb3JtQnV0dG9uRWwoaHRtbENvbnRhaW5lcik7XG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdGxpc3QgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gKGh0bWxDb250YWluZXIsIGh0bWxjbGFzcywgaW5uZXJodG1sKSA9PiB7XG4gIGNvbnN0IGh0bWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaHRtbEJ0bi5pZCA9IGh0bWxjbGFzcztcbiAgaHRtbEJ0bi5pbm5lckhUTUwgPSBpbm5lcmh0bWw7XG4gIGh0bWxDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbEJ0bik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZFRlbXBsYXRlID0gKGh0bWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgdGVtcGxhdGVDb250YWluZXIgPSBodG1sQ29udGFpbmVyO1xuICB0ZW1wbGF0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgaHRtbENsYXNzZXMgPSBbJ2hlYWRlcicsICdzaWRlYmFyJywgJ2FkZC1wcm9qZWN0JywgJ21haW4nLCAnYWRkLXRhc2snXTtcblxuICBodG1sQ2xhc3Nlcy5mb3JFYWNoKChodG1sQ2xhc3MpID0+IHtcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChodG1sQ2xhc3MpO1xuICAgIHRlbXBsYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gIH0pO1xuXG4gIGFkZFRhc2tCdXR0b24oXG4gICAgaHRtbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKSxcbiAgICAnYWRkLXByb2plY3QtYnRuJyxcbiAgICAnPHN0cm9uZz4rPC9zdHJvbmc+IEFkZCBwcm9qZWN0JyxcbiAgKTtcbiAgYWRkVGFza0J1dHRvbihcbiAgICBodG1sQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpLFxuICAgICdhZGQtdGFzay1idG4nLFxuICAgICc8c3Ryb25nPis8L3N0cm9uZz4gQWRkIHRhc2snLFxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9qZWN0bGlzdCA9IChodG1sQ29udGFpbmVyQ2xhc3MsIGRpdkVsKSA9PiB7XG4gIGNvbnN0IGh0bWxTaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihodG1sQ29udGFpbmVyQ2xhc3MpO1xuICBodG1sU2lkZWJhci5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCBodG1sUHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBodG1sUHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0Jyk7XG5cbiAgcHJvamVjdGxpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgaHRtbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGh0bWxQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBodG1sUHJvamVjdC5pZCA9IGBwcm9qZWN0LSR7cHJvamVjdC5pZH1gO1xuICAgIGh0bWxQcm9qZWN0LmlubmVySFRNTCA9IHByb2plY3QudGl0bGU7XG4gICAgZGl2RWwoaHRtbFByb2plY3QpO1xuICAgIGh0bWxQcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChodG1sUHJvamVjdCk7XG4gIH0pO1xuXG4gIGh0bWxTaWRlYmFyLmFwcGVuZENoaWxkKGh0bWxQcm9qZWN0TGlzdCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd0FkZFByb2plY3RGb3JtID0gKGh0bWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGl0bGVJbnB1dC5pZCA9ICdhZGQtcHJvamVjdC10aXRsZSc7XG4gIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBUaXRsZS4uLic7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blN1Ym1pdC5pZCA9ICdhZGQtbmV3LXByb2plY3QtYnRuJztcbiAgYnRuU3VibWl0LmlubmVySFRNTCA9ICdBZGQgUHJvamVjdCc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnRuU3VibWl0KTtcblxuICBjb25zdCBodG1sQWRkUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodG1sQWRkUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1kaXYnKTtcbiAgaHRtbEFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgYmFja2dyb3VuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBiYWNrZ3JvdW5kRGl2LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtcG9wdXAnKTtcbiAgYmFja2dyb3VuZERpdi5hcHBlbmRDaGlsZChodG1sQWRkUHJvamVjdERpdik7XG5cbiAgaHRtbENvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kRGl2KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1wb3B1cCcpLnJlbW92ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEFjdGl2ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgY29uc3QgaHRtbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgaHRtbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgaWYgKHByb2plY3QuaWQgPT09IGlkKSB7XG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgfVxuICB9KTtcbn07XG4iLCJleHBvcnQgY29uc3QgcHJvamVjdGxpc3QgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgaWYgKHAuZ2V0SWQoKSA9PT0gcHJvamVjdC5nZXRJZCgpKSB7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgaW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdHMsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgI2NvdW50ID0gMDtcblxuICAjaWQ7XG5cbiAgI3RpdGxlO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuI2lkID0gUHJvamVjdC4jY291bnQ7XG4gICAgUHJvamVjdC4jaW5jcmVtZW50Q291bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyAjaW5jcmVtZW50Q291bnQgPSAoKSA9PiB7XG4gICAgUHJvamVjdC4jY291bnQgKz0gMTtcbiAgfTtcblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lkO1xuICB9XG5cbiAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgdGhpcy4jdGl0bGUgPSAnTmV3IFByb2plY3QnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbmV3UHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICBwcm9qZWN0bGlzdC5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KHRpdGxlKSk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBsb2FkVGVtcGxhdGUsIGRpc3BsYXlQcm9qZWN0bGlzdCB9IGZyb20gJy4vbW9kdWxlcy9wYWdlTG9hZCc7XG5pbXBvcnQgeyBuZXdQcm9qZWN0IH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QnO1xuaW1wb3J0IHsgYWRkUHJvamVjdEZvcm1CdXR0b25FbCwgcHJvamVjdExpc3RJdGVtRWwgfSBmcm9tICcuL21vZHVsZXMvZXZlbnRMaXN0ZW5lcic7XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5sb2FkVGVtcGxhdGUoY29udGVudENvbnRhaW5lcik7XG5uZXdQcm9qZWN0KCdUb2RheScpO1xuZGlzcGxheVByb2plY3RsaXN0KCcuc2lkZWJhcicsIHByb2plY3RMaXN0SXRlbUVsKTtcbmFkZFByb2plY3RGb3JtQnV0dG9uRWwoY29udGVudENvbnRhaW5lcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=