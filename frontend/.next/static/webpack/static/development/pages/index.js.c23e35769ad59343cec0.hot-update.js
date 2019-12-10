webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/DroneState.js":
/*!**********************************!*\
  !*** ./components/DroneState.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _battery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battery */ "./components/battery.js");
/* harmony import */ var _flightdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flightdata */ "./components/flightdata.js");
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socket */ "./socket.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "F:\\VSONLINE\\Drone\\frontend\\components\\DroneState.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function useDroneState() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      droneState = _useState[0],
      updateDroneState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _socket__WEBPACK_IMPORTED_MODULE_3__["default"].on('dronestate', updateDroneState);
    return function () {
      return _socket__WEBPACK_IMPORTED_MODULE_3__["default"].removeListener('dronestate');
    };
  }, []);
  return droneState;
}

function useSocket() {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('DISCONNECTED'),
      status = _useState2[0],
      updateStatus = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _socket__WEBPACK_IMPORTED_MODULE_3__["default"].on('status', updateStatus);
    return function () {
      return _socket__WEBPACK_IMPORTED_MODULE_3__["default"].removeListener('status');
    };
  }, []);
  return status;
}

function useDroneStreaming() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      droneStreaming = _useState3[0],
      updateDroneState = _useState3[1];

  debugger;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _socket__WEBPACK_IMPORTED_MODULE_3__["default"].on('droneStream', updateDroneState);
    return function () {
      return _socket__WEBPACK_IMPORTED_MODULE_3__["default"].removeListener('dronestate');
    };
  }, []);
  return droneStreaming;
}

var DroneStateStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "DroneState__DroneStateStyles",
  componentId: "knanam-0"
})(["display:grid;grid-template-columns:1fr 4fr;grid-gap:5px;.status{grid-column:1 / -1;text-align:center;}"]);

var DroneState = function DroneState() {
  debugger;
  var status = useSocket();
  var droneState = useDroneState([]);
  var droneStreaming = useDroneStreaming();
  return __jsx(DroneStateStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("p", {
    className: "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Status: ", status), __jsx(_battery__WEBPACK_IMPORTED_MODULE_1__["default"], {
    battery: droneState.bat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(_flightdata__WEBPACK_IMPORTED_MODULE_2__["default"], {
    speed: droneState.v,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DroneState);

/***/ })

})
//# sourceMappingURL=index.js.c23e35769ad59343cec0.hot-update.js.map