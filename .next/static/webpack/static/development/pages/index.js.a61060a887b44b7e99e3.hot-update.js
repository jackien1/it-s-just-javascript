webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_components_Index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/Index */ "./src/components/Index.js");
/* harmony import */ var _src_components_Programming__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/Programming */ "./src/components/Programming.js");
/* harmony import */ var _src_components_JavaScript__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/JavaScript */ "./src/components/JavaScript.js");
/* harmony import */ var _src_components_Why__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/Why */ "./src/components/Why.js");
/* harmony import */ var _src_components_HelloWorld__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/HelloWorld */ "./src/components/HelloWorld.js");
/* harmony import */ var _src_components_Types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/components/Types */ "./src/components/Types.js");











var _jsxFileName = "/Users/jackieni/dev/sage/its-just-javascript/pages/index.js";








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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "renderPresentation", function () {
      switch (_this.state.index) {
        case 0:
          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_src_components_Index__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          });
          break;

        default:
          return null;
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(App, [{
    key: "render",
    value: function render() {
      renderPresentation();
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
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          backgroundColor: "white",
          width: "60vw",
          height: "60vh"
        },
        bodyStyle: {
          display: "flex",
          flex: 1,
          height: "100%",
          flexDirection: "column"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
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
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          color: "black",
          fontSize: "3vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "The 6 Basic Types of Values"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Numbers"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Strings"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Booleans"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Functions"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.1vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Objects"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        style: {
          fontSize: "2.1vw",
          fontWeight: "bold"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Undefined Values"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.a61060a887b44b7e99e3.hot-update.js.map