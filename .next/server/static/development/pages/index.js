module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/antd/lib/card/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/card/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/icon/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/typography/style/css.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/typography/style/css.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_components_Index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/Index */ "./src/components/Index.js");
/* harmony import */ var _src_components_Programming__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/Programming */ "./src/components/Programming.js");
/* harmony import */ var _src_components_JavaScript__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/JavaScript */ "./src/components/JavaScript.js");
/* harmony import */ var _src_components_Why__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/components/Why */ "./src/components/Why.js");
/* harmony import */ var _src_components_HelloWorld__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/components/HelloWorld */ "./src/components/HelloWorld.js");
/* harmony import */ var _src_components_Types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../src/components/Types */ "./src/components/Types.js");
/* harmony import */ var _src_components_Number__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../src/components/Number */ "./src/components/Number.js");
/* harmony import */ var _src_components_String__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../src/components/String */ "./src/components/String.js");
/* harmony import */ var _src_components_Boolean__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../src/components/Boolean */ "./src/components/Boolean.js");
/* harmony import */ var _src_components_Undefined__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../src/components/Undefined */ "./src/components/Undefined.js");
/* harmony import */ var _src_components_Variables__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../src/components/Variables */ "./src/components/Variables.js");
/* harmony import */ var _src_components_BasicFunctions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../src/components/BasicFunctions */ "./src/components/BasicFunctions.js");
/* harmony import */ var _src_components_If__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../src/components/If */ "./src/components/If.js");
/* harmony import */ var _src_components_Loops__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../src/components/Loops */ "./src/components/Loops.js");
/* harmony import */ var _src_components_For__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../src/components/For */ "./src/components/For.js");
/* harmony import */ var _src_components_Switch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../src/components/Switch */ "./src/components/Switch.js");
/* harmony import */ var _src_components_Exercises__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../src/components/Exercises */ "./src/components/Exercises.js");
/* harmony import */ var _src_components_AdvancedFunctions__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../src/components/AdvancedFunctions */ "./src/components/AdvancedFunctions.js");
/* harmony import */ var _src_components_Project__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../src/components/Project */ "./src/components/Project.js");
/* harmony import */ var _src_components_HTMLIntro__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../src/components/HTMLIntro */ "./src/components/HTMLIntro.js");
/* harmony import */ var _src_components_BasicTags__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../src/components/BasicTags */ "./src/components/BasicTags.js");
/* harmony import */ var _src_components_TextTags__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../src/components/TextTags */ "./src/components/TextTags.js");
/* harmony import */ var _src_components_ImageTags__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../src/components/ImageTags */ "./src/components/ImageTags.js");
/* harmony import */ var _src_components_CSS__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../src/components/CSS */ "./src/components/CSS.js");
/* harmony import */ var _src_components_ConnectingCSS__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../src/components/ConnectingCSS */ "./src/components/ConnectingCSS.js");
/* harmony import */ var _src_components_AddingCSS__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../src/components/AddingCSS */ "./src/components/AddingCSS.js");
/* harmony import */ var _src_components_Publish__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../src/components/Publish */ "./src/components/Publish.js");
/* harmony import */ var _src_components_Review__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../src/components/Review */ "./src/components/Review.js");
/* harmony import */ var _src_components_ReviewExercises__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../src/components/ReviewExercises */ "./src/components/ReviewExercises.js");
/* harmony import */ var _src_components_Arrays__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../src/components/Arrays */ "./src/components/Arrays.js");
/* harmony import */ var _src_components_Objects__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../src/components/Objects */ "./src/components/Objects.js");
/* harmony import */ var _src_components_HTMLJS__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../src/components/HTMLJS */ "./src/components/HTMLJS.js");
/* harmony import */ var _src_components_NewTags__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../src/components/NewTags */ "./src/components/NewTags.js");
/* harmony import */ var _src_components_MemeGenerator__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../src/components/MemeGenerator */ "./src/components/MemeGenerator.js");













var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/pages/index.js";



































var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_12___default.a.Text;

var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      index: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "addIndex", function () {
      _this.setState({
        index: _this.state.index + 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "removeIndex", function () {
      _this.setState({
        index: _this.state.index - 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "renderPresentation", function () {
      switch (_this.state.index) {
        case 0:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Index__WEBPACK_IMPORTED_MODULE_14__["default"], {
            add: _this.addIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          });
          break;

        case 1:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Programming__WEBPACK_IMPORTED_MODULE_15__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          });
          break;

        case 2:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_JavaScript__WEBPACK_IMPORTED_MODULE_16__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          });
          break;

        case 3:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Why__WEBPACK_IMPORTED_MODULE_17__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          });
          break;

        case 4:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_HelloWorld__WEBPACK_IMPORTED_MODULE_18__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          });
          break;

        case 5:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Types__WEBPACK_IMPORTED_MODULE_19__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          });
          break;

        case 6:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Number__WEBPACK_IMPORTED_MODULE_20__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          });
          break;

        case 7:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_String__WEBPACK_IMPORTED_MODULE_21__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          });
          break;

        case 8:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Boolean__WEBPACK_IMPORTED_MODULE_22__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          });
          break;

        case 9:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Undefined__WEBPACK_IMPORTED_MODULE_23__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          });
          break;

        case 10:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Variables__WEBPACK_IMPORTED_MODULE_24__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          });
          break;

        case 11:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_BasicFunctions__WEBPACK_IMPORTED_MODULE_25__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          });
          break;

        case 12:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_If__WEBPACK_IMPORTED_MODULE_26__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          });
          break;

        case 13:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Loops__WEBPACK_IMPORTED_MODULE_27__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          });
          break;

        case 14:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_For__WEBPACK_IMPORTED_MODULE_28__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          });
          break;

        case 15:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Switch__WEBPACK_IMPORTED_MODULE_29__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          });
          break;

        case 16:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Exercises__WEBPACK_IMPORTED_MODULE_30__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          });
          break;

        case 17:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_AdvancedFunctions__WEBPACK_IMPORTED_MODULE_31__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            },
            __self: this
          });
          break;

        case 18:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Project__WEBPACK_IMPORTED_MODULE_32__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            },
            __self: this
          });
          break;

        case 19:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_HTMLIntro__WEBPACK_IMPORTED_MODULE_33__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          });
          break;

        case 20:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_BasicTags__WEBPACK_IMPORTED_MODULE_34__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          });
          break;

        case 21:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_TextTags__WEBPACK_IMPORTED_MODULE_35__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          });
          break;

        case 22:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_ImageTags__WEBPACK_IMPORTED_MODULE_36__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          });
          break;

        case 23:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_CSS__WEBPACK_IMPORTED_MODULE_37__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          });
          break;

        case 24:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_ConnectingCSS__WEBPACK_IMPORTED_MODULE_38__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          });
          break;

        case 25:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_AddingCSS__WEBPACK_IMPORTED_MODULE_39__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          });
          break;

        case 26:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Publish__WEBPACK_IMPORTED_MODULE_40__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          });
          break;

        case 27:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Review__WEBPACK_IMPORTED_MODULE_41__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          });
          break;

        case 28:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_ReviewExercises__WEBPACK_IMPORTED_MODULE_42__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            },
            __self: this
          });
          break;

        case 29:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Arrays__WEBPACK_IMPORTED_MODULE_43__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          });
          break;

        case 30:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_Objects__WEBPACK_IMPORTED_MODULE_44__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            },
            __self: this
          });
          break;

        case 31:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_HTMLJS__WEBPACK_IMPORTED_MODULE_45__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          });
          break;

        case 32:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_NewTags__WEBPACK_IMPORTED_MODULE_46__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            },
            __self: this
          });
          break;

        case 33:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_src_components_MemeGenerator__WEBPACK_IMPORTED_MODULE_47__["default"], {
            add: _this.addIndex,
            remove: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
            },
            __self: this
          });
          break;

        default:
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
            style: {
              height: "100vh",
              width: "100wv",
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
            style: {
              backgroundColor: "white",
              width: "80vw",
              height: "80vh"
            },
            bodyStyle: {
              display: "flex",
              flex: 1,
              height: "100%",
              flexDirection: "column"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 207
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
            style: {
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 220
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h1", {
            style: {
              color: "black",
              fontSize: "4vw"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 229
            },
            __self: this
          }, "Any Questions?")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
            style: {
              display: "flex",
              flex: 1,
              width: "100%",
              justifyContent: "space-between",
              alignItems: "flex-end"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 234
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
            type: "left",
            style: {
              fontSize: "1.2vw"
            },
            onClick: _this.removeIndex,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 243
            },
            __self: this
          }))));
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(App, [{
    key: "render",
    value: function render() {
      return this.renderPresentation();
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/AddingCSS.js":
/*!*************************************!*\
  !*** ./src/components/AddingCSS.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/AddingCSS.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var AddingCSS =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(AddingCSS, _Component);

  function AddingCSS() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AddingCSS);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(AddingCSS).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AddingCSS, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Adding Styles"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.4vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "selector, attributes, and values"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "img {"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "width: 200px;"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "}"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.4vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Centering text, adding different fonts, and changing colors"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "body {"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "text-align: center;"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "font-family: \"Arial\";"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "background: azure;"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "color: purple;"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "}"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }))));
    }
  }]);

  return AddingCSS;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddingCSS);

/***/ }),

/***/ "./src/components/AdvancedFunctions.js":
/*!*********************************************!*\
  !*** ./src/components/AdvancedFunctions.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/AdvancedFunctions.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var AdvancedFunctions =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(AdvancedFunctions, _Component);

  function AdvancedFunctions() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AdvancedFunctions);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(AdvancedFunctions).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AdvancedFunctions, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Functions (Advanced Edition)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Helps define new vocabulary."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Example of a function definition."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "var eat = function(x) {"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "console.log(\"Yum!\");"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "};"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "eat();"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, ">> \"Yum!\""), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Parameters are like regular variables but its value comes from the caller of the function. They are local to the function (lexical scoping)."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "var addOne = function(a) {"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "console.log(a);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "};"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "addOne(5);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "console.log(a);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, ">> 5"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, ">> undefined"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Another way to write a function (function declaration). They differ by hoisting."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "function cube(x) {"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "return x * x * x;"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "}"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }))));
    }
  }]);

  return AdvancedFunctions;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AdvancedFunctions);

/***/ }),

/***/ "./src/components/Arrays.js":
/*!**********************************!*\
  !*** ./src/components/Arrays.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Arrays.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Arrays =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Arrays, _Component);

  function Arrays() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Arrays);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Arrays).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Arrays, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Arrays"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Data type for storing sequences of values (same type)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "var list = [\"jackie\", \"joey\", \"god\"];"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Access values using a bracket (arrays start at 0)."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "console.log(list[2]);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, ">> 2"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, ".length gives you the length of an array."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "console.log(list.length);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, ">> 3"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Modify arrays with .push .pop or just assignment")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Make an array of everyone in the class. Then use a for loop to print them out.")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }))));
    }
  }]);

  return Arrays;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Arrays);

/***/ }),

/***/ "./src/components/BasicFunctions.js":
/*!******************************************!*\
  !*** ./src/components/BasicFunctions.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/BasicFunctions.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var BasicFunctions =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(BasicFunctions, _Component);

  function BasicFunctions() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, BasicFunctions);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(BasicFunctions).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(BasicFunctions, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Functions (basic edition)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "A piece of program wrapped in a value"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "You can call a function by adding parentheses after a function expression"), "Try this", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "alert(\"Good morning!\");"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "The log portion of console.log is a function"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Some functions return values (Math.min, Math.max)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "console.log(Math.max(0, 10));"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, ">> 10"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "You can use the prompt function for browser input"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "var name = prompt(\"What is your name, \"\");"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "console.log(name);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginTop: "2vh",
          display: "flex",
          flexDirection: "column",
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Ask the user for a number (wrap prompt with Number), multiply it by 10, and return it."))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }))));
    }
  }]);

  return BasicFunctions;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BasicFunctions);

/***/ }),

/***/ "./src/components/BasicTags.js":
/*!*************************************!*\
  !*** ./src/components/BasicTags.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/BasicTags.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var BasicTags =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(BasicTags, _Component);

  function BasicTags() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, BasicTags);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(BasicTags).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(BasicTags, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "How does it work?"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.4vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Stores information between tags"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "<html> </html>"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "<head> </head>"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "<body> </body>"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }))));
    }
  }]);

  return BasicTags;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BasicTags);

/***/ }),

/***/ "./src/components/Boolean.js":
/*!***********************************!*\
  !*** ./src/components/Boolean.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Boolean.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Boolean =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Boolean, _Component);

  function Boolean() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Boolean);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Boolean).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Boolean, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "4vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Boolean"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Either true or false (1 or 0)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Comparisons (>, <, <=, >=, ==, !=)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "console.log(2 > 1);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, ">> true"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Logical Operators (&&, ||, !)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "console.log(true && false);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, ">> false"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginTop: "2vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "What is the output of this statement?"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "console.log(1 + 1 == 2 && 10 * 10 > 50)")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }))));
    }
  }]);

  return Boolean;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Boolean);

/***/ }),

/***/ "./src/components/CSS.js":
/*!*******************************!*\
  !*** ./src/components/CSS.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/CSS.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var CSS =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(CSS, _Component);

  function CSS() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, CSS);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(CSS).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(CSS, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "What is CSS?")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }))));
    }
  }]);

  return CSS;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CSS);

/***/ }),

/***/ "./src/components/ConnectingCSS.js":
/*!*****************************************!*\
  !*** ./src/components/ConnectingCSS.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/ConnectingCSS.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var ConnectingCSS =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ConnectingCSS, _Component);

  function ConnectingCSS() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ConnectingCSS);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ConnectingCSS).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ConnectingCSS, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Connecting CSS"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.4vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "<link /> tag"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, '<link rel="stylesheet" href="style.css" />'), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.4vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Add the tag to <head> </head>"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }))));
    }
  }]);

  return ConnectingCSS;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ConnectingCSS);

/***/ }),

/***/ "./src/components/Exercises.js":
/*!*************************************!*\
  !*** ./src/components/Exercises.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Exercises.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Exercises =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Exercises, _Component);

  function Exercises() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Exercises);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Exercises).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Exercises, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Exercises"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ol", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Create a program which asks for two numbers, multiples them together, and print them out."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Prompt users for their names. If they enter nothing, continue asking them."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Create a guessing game that runs until you reach the number. It will print out \"too small\" or \"too large\" for numbers that are greater than or less than the correct value."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Print this out"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "#"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "##"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "###"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "####"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Hint: you can get the length of a string using .length"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Attempt the FizzBuzz challenge. Make a for loop from 1 to 100. Console.log \"Fizz\" for numbers divisible by 3, \"Buzz\" for numbers divisible by 5, and \"FizzBuzz\" for numbers divisible by both 3 and 5. Print the number normally otherwise."))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }))));
    }
  }]);

  return Exercises;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Exercises);

/***/ }),

/***/ "./src/components/For.js":
/*!*******************************!*\
  !*** ./src/components/For.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/For.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Loops =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Loops, _Component);

  function Loops() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Loops);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Loops).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Loops, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "for Loops"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.4vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "More comprehensive version of the while loop with counter"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "for (var joeyBobaLevels = 1; joeyBobaLevels <= 10; joeyBobaLevels++) "), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "console.log(joeyBobaLevels)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, ">> 1"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, ">> ...10"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }))));
    }
  }]);

  return Loops;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Loops);

/***/ }),

/***/ "./src/components/HTMLIntro.js":
/*!*************************************!*\
  !*** ./src/components/HTMLIntro.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/HTMLIntro.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var HTMLIntro =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(HTMLIntro, _Component);

  function HTMLIntro() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, HTMLIntro);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(HTMLIntro).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(HTMLIntro, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "What is HTML?")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }))));
    }
  }]);

  return HTMLIntro;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HTMLIntro);

/***/ }),

/***/ "./src/components/HTMLJS.js":
/*!**********************************!*\
  !*** ./src/components/HTMLJS.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/HTMLJS.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var HTMLJS =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(HTMLJS, _Component);

  function HTMLJS() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, HTMLJS);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(HTMLJS).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(HTMLJS, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "HTML with JavaScript"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Use getElementById to change text"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "document.getElementById(\"demo\").innerHTML = \"Something\""), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "onclick helps change text when something is clicked"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "onclick=\"changeText(this)\""), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "function changeText(id) {"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "id.innerHTML = \"Ooops!\";"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "}"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }))));
    }
  }]);

  return HTMLJS;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HTMLJS);

/***/ }),

/***/ "./src/components/HelloWorld.js":
/*!**************************************!*\
  !*** ./src/components/HelloWorld.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/HelloWorld.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var HelloWorld =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(HelloWorld, _Component);

  function HelloWorld() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, HelloWorld);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(HelloWorld).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(HelloWorld, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "4vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Hello World"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Head over to \xA0", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        style: {
          color: "blue"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "https://repl.it/languages/html")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "console.log(\"Hello Sage Hill\");")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }))));
    }
  }]);

  return HelloWorld;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HelloWorld);

/***/ }),

/***/ "./src/components/If.js":
/*!******************************!*\
  !*** ./src/components/If.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/If.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var If =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(If, _Component);

  function If() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, If);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(If).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(If, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Conditional Execution"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "if - else statement"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "var isJoeyAwake = false;"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "if (isJoeyAwake) console.log('Joey is given a lot of money.');"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "else console.log('Joey loses all his money.');"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, ">> Joey loses all his money."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "If/else pair chains"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "var joeyPowerLevel = 9000;"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "if (joeyPowerLevel < 10) console.log('Joey is weak.');"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "else if (joeyPowerLevel < 100) console.log('Joey is still weak.');"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "else console.log(\"The apocalypse is coming.\");"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, ">> The apocalypse is coming."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginTop: "2vh",
          display: "flex",
          flexDirection: "column",
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Prompt the user for a number, then determine its size as either \"small\", \"medium\", or \"large\" using if/else pair chains."))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }))));
    }
  }]);

  return If;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (If);

/***/ }),

/***/ "./src/components/ImageTags.js":
/*!*************************************!*\
  !*** ./src/components/ImageTags.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/ImageTags.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var ImageTags =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ImageTags, _Component);

  function ImageTags() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ImageTags);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ImageTags).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ImageTags, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Image Tags"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.4vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Grab source of image for attribute."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, '<img src="https://i.imgur.com/dFKsiNE.png">'), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.4vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Void element"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }))));
    }
  }]);

  return ImageTags;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ImageTags);

/***/ }),

/***/ "./src/components/Index.js":
/*!*********************************!*\
  !*** ./src/components/Index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);









var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Index.js";


var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Welcome to"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "4vw",
          fontStyle: "italic"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "It's Just JavaScript"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "2vw",
          textAlign: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "With Jackie Ni (and Joey Cha)")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/components/JavaScript.js":
/*!**************************************!*\
  !*** ./src/components/JavaScript.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);









var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/JavaScript.js";


var JavaScript =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(JavaScript, _Component);

  function JavaScript() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, JavaScript);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(JavaScript).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(JavaScript, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "What is"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "4vw",
          fontStyle: "italic"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "JavaScript?")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }))));
    }
  }]);

  return JavaScript;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (JavaScript);

/***/ }),

/***/ "./src/components/Loops.js":
/*!*********************************!*\
  !*** ./src/components/Loops.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Loops.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Loops =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Loops, _Component);

  function Loops() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Loops);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Loops).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Loops, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "While and do Loops"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "The body of a while loop continues until the boolean is false"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "var joeyBobaLevels = 1;"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "while (joeyBobaLevels <= 10) {"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "console.log(joeyBobaLevels); joeyBobaLevels++;"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "}"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, ">> 1"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, ">> ...10"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "a do loop first executes its body and then checks the boolean value"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "do {"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "var joeySecret = prompt(\"What is his secret?\");"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "} while (joeySecret != \"he watches My Little Ponu\")"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "console.log(\"You guessed successfully!\");"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }))));
    }
  }]);

  return Loops;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Loops);

/***/ }),

/***/ "./src/components/MemeGenerator.js":
/*!*****************************************!*\
  !*** ./src/components/MemeGenerator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/MemeGenerator.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var HTMLJS =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(HTMLJS, _Component);

  function HTMLJS() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, HTMLJS);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(HTMLJS).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(HTMLJS, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Meme Generator"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "We are using axios a package to request links (REST)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Imgflip returns a list of meme links. Grab a random one."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Use getElementById to replace image"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }))));
    }
  }]);

  return HTMLJS;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HTMLJS);

/***/ }),

/***/ "./src/components/NewTags.js":
/*!***********************************!*\
  !*** ./src/components/NewTags.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/NewTags.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var NewTags =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(NewTags, _Component);

  function NewTags() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NewTags);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(NewTags).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NewTags, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "New Tags"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "<button /> tag"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, '<button onclick="myFunction()">Try it</button>'), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "<input /> tag"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, '<input type="text" id="myText" value="Some text...">')), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Try to make a guessing game now.")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }))));
    }
  }]);

  return NewTags;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NewTags);

/***/ }),

/***/ "./src/components/Number.js":
/*!**********************************!*\
  !*** ./src/components/Number.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Number.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Number =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Number, _Component);

  function Number() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Number);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Number).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Number, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "4vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "3.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Integers"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "3.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Decimals"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "3.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Operations (+, -, *, /, %, PEMDAS)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginTop: "2vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "console.log(10 + 15 * 4);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, ">> 70"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "console.log((10 + 15) * 4);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, ">> 100"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Try each of these operations on your own.")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }))));
    }
  }]);

  return Number;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Number);

/***/ }),

/***/ "./src/components/Objects.js":
/*!***********************************!*\
  !*** ./src/components/Objects.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Objects.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Objects =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Objects, _Component);

  function Objects() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Objects);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Objects).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Objects, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Objects"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Collections of properties. Created using brace notation."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "var car = {"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "isWorking: true,", 'parts: ["engine", "steering wheel"],'), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "}"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Use . operator to grab values in objects"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "console.log(car.isWorking);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, ">> true"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Modify objects with assignment")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Make an object of yourself! (name, birthday, etc...)")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }))));
    }
  }]);

  return Objects;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Objects);

/***/ }),

/***/ "./src/components/Programming.js":
/*!***************************************!*\
  !*** ./src/components/Programming.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);









var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Programming.js";


var Programming =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Programming, _Component);

  function Programming() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Programming);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Programming).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Programming, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "4vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "What is programming?")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))));
    }
  }]);

  return Programming;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Programming);

/***/ }),

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Project.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Project =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Project, _Component);

  function Project() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Project);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Project).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Project, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Exercises"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          fontSize: "2.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "CHATBOT"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Requirements"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Use all primitive types."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Use 5 commands (total)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Add a command that displays a random sage fact."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Customize it however you want."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Typing \"quit\" exists the program."))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }))));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/components/Publish.js":
/*!***********************************!*\
  !*** ./src/components/Publish.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Publish.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Publish =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Publish, _Component);

  function Publish() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Publish);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Publish).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Publish, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "How to publish the website?")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }))));
    }
  }]);

  return Publish;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Publish);

/***/ }),

/***/ "./src/components/Review.js":
/*!**********************************!*\
  !*** ./src/components/Review.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Review.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Review =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Review, _Component);

  function Review() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Review);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Review).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Review, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Review \uD83D\uDDA5"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          fontSize: "2.1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "What we have covered:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Numbers"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Strings"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Booleans"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Undefined"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Variables"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Functions"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "If Statements"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "While and For Loops"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Switch"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "HTML"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "CSS"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }))));
    }
  }]);

  return Review;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Review);

/***/ }),

/***/ "./src/components/ReviewExercises.js":
/*!*******************************************!*\
  !*** ./src/components/ReviewExercises.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/ReviewExercises.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var ReviewExercises =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ReviewExercises, _Component);

  function ReviewExercises() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ReviewExercises);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ReviewExercises).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ReviewExercises, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Review Exercises \uD83D\uDEB4\u200D\u2642\uFE0F"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ol", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Ask a user for a number and store it in a variable. Print out the product of that number and a random number from 1 to 10."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Print this out."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\xA0\xA0\xA0\xA0\xA0#"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\xA0\xA0\xA0\xA0##"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "\xA0\xA0\xA0###"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "\xA0\xA0####"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\xA0#####"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "######"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Prompt the user for something. If they answer no, write something. If they answer yes, write something else. (confirm function?)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Create a function that returns the multiple of two numbers you provide it."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Make a chain of if statements to discern between small, medium, and large."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Prompt the user for two numbers. Using a for loop, print out ranges from those ranges."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Add a <h1> tag about an endangered species and a <img> tag of that species. "), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "1.2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Change the color of your h1 tag and the size of the image"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }))));
    }
  }]);

  return ReviewExercises;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ReviewExercises);

/***/ }),

/***/ "./src/components/String.js":
/*!**********************************!*\
  !*** ./src/components/String.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/String.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var String =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(String, _Component);

  function String() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, String);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(String).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(String, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "String"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Single Quotes"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "'Joey likes to run.'"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Double Quotes"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\"Joey likes to run.\""), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Escape Sequences (\\n, \\t, \\\", \\\\)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "console.log(\"Joey likesn\\nto run.\");"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, ">> Joey likes"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, ">> to run"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Concatenation"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "\"Joey\" + \"likes\" + \"to\" + \"run.\""), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginTop: "2vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Write \"I am learning JavaScript\" with the quotes and concatenation.")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }))));
    }
  }]);

  return String;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (String);

/***/ }),

/***/ "./src/components/Switch.js":
/*!**********************************!*\
  !*** ./src/components/Switch.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Switch.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Switch =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Switch, _Component);

  function Switch() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Switch);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Switch).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Switch, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Switch"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.4vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Alternative for a chain of if statements"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, 'switch (prompt("Choose your starter pokemon.")) {'), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "case \"pikachu\":"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "console.log(\"you chose wisely.\");"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "break;"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "case \"bulbasaur\":"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "console.log(\"you have not chose wisely.\");"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "break;"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "default:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "console.log(\"Bruh. That is not an option.\");"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }))));
    }
  }]);

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./src/components/TextTags.js":
/*!************************************!*\
  !*** ./src/components/TextTags.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/TextTags.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var TextTags =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(TextTags, _Component);

  function TextTags() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, TextTags);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(TextTags).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(TextTags, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Text Tags"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.4vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "h1 (heading)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "<h1> </h1>"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.4vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "p (paragraph)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "<p> </p>"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        code: true,
        style: {
          fontSize: "2.4vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Write your name in a header and a description in the paragraph tag."))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }))));
    }
  }]);

  return TextTags;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextTags);

/***/ }),

/***/ "./src/components/Types.js":
/*!*********************************!*\
  !*** ./src/components/Types.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);









var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Types.js";


var Types =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Types, _Component);

  function Types() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Types);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Types).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Types, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "4vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "The 6 Basic Types of Values"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        style: {
          fontSize: "3.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Numbers"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        style: {
          fontSize: "3.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Strings"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        style: {
          fontSize: "3.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Booleans"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        style: {
          fontSize: "3.1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Functions"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        style: {
          fontSize: "3.1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Objects"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        style: {
          fontSize: "3.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Undefined Values"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }))));
    }
  }]);

  return Types;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Types);

/***/ }),

/***/ "./src/components/Undefined.js":
/*!*************************************!*\
  !*** ./src/components/Undefined.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Undefined.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Undefined =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Undefined, _Component);

  function Undefined() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Undefined);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Undefined).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Undefined, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "4vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Undefined"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.5vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Undefined and null are basically interchangeable"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.5vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Indicates the absence of a meaningful value"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginTop: "2vh",
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "console.log(null == undefined);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, ">> true")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }))));
    }
  }]);

  return Undefined;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Undefined);

/***/ }),

/***/ "./src/components/Variables.js":
/*!*************************************!*\
  !*** ./src/components/Variables.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/typography/style/css */ "./node_modules/antd/lib/typography/style/css.js");
/* harmony import */ var antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/typography */ "antd/lib/typography");
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Variables.js";

var Text = antd_lib_typography__WEBPACK_IMPORTED_MODULE_10___default.a.Text;

var Variables =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Variables, _Component);

  function Variables() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Variables);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Variables).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Variables, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Variables"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Keeps track of internal state"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Use var with = for definition"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "var joey = \"I like to run.\";"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Variables can be used as expressions"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "var joey = \"I like to run.\";"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "console.log(joey);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, ">> \"I like to run.\""), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "You can reassign variables"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "var joey = \"I like to run.\";"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "joey = 100;"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "console.log(joey);"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Text, {
        code: true,
        style: {
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, ">> 100"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          marginTop: "2vh",
          display: "flex",
          flexDirection: "column",
          fontSize: "1.2vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Create two number variables, multiply them, and console.log them out"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }))));
    }
  }]);

  return Variables;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Variables);

/***/ }),

/***/ "./src/components/Why.js":
/*!*******************************!*\
  !*** ./src/components/Why.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);









var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/src/components/Why.js";


var JavaScript =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(JavaScript, _Component);

  function JavaScript() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, JavaScript);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(JavaScript).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(JavaScript, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          height: "100vh",
          width: "100wv",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "80vw",
          height: "80vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3.1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Why is"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "4vw",
          fontStyle: "italic"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "JavaScript?")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "left",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.remove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "right",
        style: {
          fontSize: "1.2vw"
        },
        onClick: this.props.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }))));
    }
  }]);

  return JavaScript;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (JavaScript);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jackieni/dev/sage/its-just-javascript/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/typography":
/*!**************************************!*\
  !*** external "antd/lib/typography" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/typography");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map