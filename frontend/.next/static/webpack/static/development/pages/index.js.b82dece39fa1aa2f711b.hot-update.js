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
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera */ "./components/camera.js");
/* harmony import */ var _flightdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flightdata */ "./components/flightdata.js");
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../socket */ "./socket.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "F:\\VSONLINE\\Drone\\frontend\\components\\DroneState.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function useDroneState() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      droneState = _useState[0],
      updateDroneState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _socket__WEBPACK_IMPORTED_MODULE_4__["default"].on('dronestate', updateDroneState);
    return function () {
      return _socket__WEBPACK_IMPORTED_MODULE_4__["default"].removeListener('dronestate');
    };
  }, []);
  return droneState;
}

function useSocket() {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('DISCONNECTED'),
      status = _useState2[0],
      updateStatus = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _socket__WEBPACK_IMPORTED_MODULE_4__["default"].on('status', updateStatus);
    return function () {
      return _socket__WEBPACK_IMPORTED_MODULE_4__["default"].removeListener('status');
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
    _socket__WEBPACK_IMPORTED_MODULE_4__["default"].on('droneStream', updateDroneState);
    return function () {
      return _socket__WEBPACK_IMPORTED_MODULE_4__["default"].removeListener('dronestate');
    };
  }, []);
  return droneStreaming;
}

var DroneStateStyles = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
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
      lineNumber: 54
    },
    __self: this
  }, __jsx("p", {
    className: "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Status: ", status), __jsx(_battery__WEBPACK_IMPORTED_MODULE_1__["default"], {
    battery: droneState.bat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_flightdata__WEBPACK_IMPORTED_MODULE_3__["default"], {
    speed: droneState.yaw,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DroneState);

/***/ }),

/***/ "./components/camera.js":
/*!******************************!*\
  !*** ./components/camera.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "F:\\VSONLINE\\Drone\\frontend\\components\\camera.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var CameraStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "camera__CameraStyles",
  componentId: "sc-1l0san4-0"
})(["width:100%;"]);

var Camera = function Camera(props) {
  return __jsx(CameraStyles, {
    level: props.battery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("span", {
    className: "cameraImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.battery, "%"));
};

/***/ })

})
//# sourceMappingURL=index.js.b82dece39fa1aa2f711b.hot-update.js.map