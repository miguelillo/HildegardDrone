webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/battery.js":
/*!*******************************!*\
  !*** ./components/battery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "D:\\VSONLINE\\Drone_Hildegard-master\\HildegardDrone\\frontend\\components\\battery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var BatteryStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "battery__BatteryStyles",
  componentId: "sc-141ps45-0"
})(["width:100%;--color:", ";border:2px solid black;border-radius:5px;overflow:hidden;display:flex;flex-direction:column-reverse;background:#c5c5c5;.batteryLevel{transition:all 0.5s;height:", "%;text-align:center;color:white;display:block;background:var(--color);}"], function (props) {
  return props.level > 20 ? '#1af21a' : '#bb0707';
}, function (props) {
  return props.level;
});

var Battery = function Battery(props) {
  return __jsx(BatteryStyles, {
    level: props.battery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("span", {
    className: "batteryLevel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.battery, "%"));
};

Battery.defaultProps = {
  // battery: 'LOADING',
  battery: 60
};
/* harmony default export */ __webpack_exports__["default"] = (Battery);

/***/ })

})
//# sourceMappingURL=index.js.7edbeea86c756699c1a5.hot-update.js.map