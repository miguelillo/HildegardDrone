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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DroneState.js":
/*!**********************************!*\
  !*** ./components/DroneState.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _battery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battery */ "./components/battery.js");
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket */ "./socket.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\VSONLINE\\Drone_Hildegard-master\\HildegardDrone\\frontend\\components\\DroneState.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function useDroneState() {
  const {
    0: droneState,
    1: updateDroneState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _socket__WEBPACK_IMPORTED_MODULE_2__["default"].on('dronestate', updateDroneState);
    return () => _socket__WEBPACK_IMPORTED_MODULE_2__["default"].removeListener('dronestate');
  }, []);
  return droneState;
}

function useSocket() {
  const {
    0: status,
    1: updateStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('DISCONNECTED');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _socket__WEBPACK_IMPORTED_MODULE_2__["default"].on('status', updateStatus);
    return () => _socket__WEBPACK_IMPORTED_MODULE_2__["default"].removeListener('status');
  }, []);
  return status;
}

const DroneStateStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "DroneState__DroneStateStyles",
  componentId: "knanam-0"
})(["display:grid;grid-template-columns:1fr 4fr;grid-gap:5px;.status{grid-column:1 / -1;text-align:center;}"]);

const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState([]);
  return __jsx(DroneStateStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("p", {
    className: "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Status: ", status), __jsx(_battery__WEBPACK_IMPORTED_MODULE_1__["default"], {
    battery: droneState.bat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DroneState);

/***/ }),

/***/ "./components/battery.js":
/*!*******************************!*\
  !*** ./components/battery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\VSONLINE\\Drone_Hildegard-master\\HildegardDrone\\frontend\\components\\battery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BatteryStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "battery__BatteryStyles",
  componentId: "sc-141ps45-0"
})(["width:100%;--color:", ";border:2px solid black;border-radius:5px;overflow:hidden;display:flex;flex-direction:column-reverse;background:#c5c5c5;.batteryLevel{transition:all 0.5s;height:", "%;text-align:center;color:white;display:block;background:var(--color);}"], props => props.level > 20 ? '#1af21a' : '#bb0707', props => props.level);

const Battery = props => __jsx(BatteryStyles, {
  level: props.battery,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("span", {
  className: "batteryLevel",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, props.battery, "%"));

Battery.defaultProps = {
  // battery: 'LOADING',
  battery: 60
};
/* harmony default export */ __webpack_exports__["default"] = (Battery);

/***/ }),

/***/ "./components/commands.js":
/*!********************************!*\
  !*** ./components/commands.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket */ "./socket.js");
var _jsxFileName = "D:\\VSONLINE\\Drone_Hildegard-master\\HildegardDrone\\frontend\\components\\commands.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CommandGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "commands__CommandGrid",
  componentId: "xhe81v-0"
})(["display:grid;grid-template-columns:1fr 1.25fr 1fr;grid-template-rows:repeat(3,1fr);border:1px solid black;grid-gap:3px;button{text-shadow:2px 2px 0 rgba(0,0,0,0.05);border:0;background:#fe2c70;border:4px solid transparent;color:white;font-size:1rem;position:relative;&:active{top:2px;}&:focus{outline:0;border-color:#ffc600;}&.takeoff{background:#41c7ff;}&.land{background:#00ff00;}&.emergency{background:orange;text-transform:uppercase;color:black;}&.rotate{background:#00fff9;color:black;}&.height{background:#fff;color:black;}span.symbol{display:block;font-size:2rem;font-weight:400;}}.center{display:grid;grid-gap:3px;grid-template-columns:1fr 1fr;button:last-child{grid-column:span 2;}}h2{grid-column:1 / -1;background:#ffc600;margin:0;font-size:1rem;text-align:center;padding:0.5rem;color:black;}"]);

function sendCommand(command) {
  return function () {
    console.log(`Sending the command ${command}`);
    _socket__WEBPACK_IMPORTED_MODULE_2__["default"].emit('command', command);
  };
}

const amount = 100;

const Commands = () => __jsx(CommandGrid, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx("button", {
  className: "rotate",
  onClick: sendCommand('ccw 90'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx("span", {
  className: "symbol",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, "\u27F2"), " 90\xB0"), __jsx("button", {
  onClick: sendCommand(`forward ${amount}`),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx("span", {
  className: "symbol",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, "\u2191"), " forward ", amount, "cm"), __jsx("button", {
  className: "rotate",
  onClick: sendCommand('cw 15'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("span", {
  className: "symbol",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, "\u27F3"), " 15\xB0"), __jsx("button", {
  onClick: sendCommand(`left ${amount}`),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, __jsx("span", {
  className: "symbol",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, "\u2190"), " left ", amount, "cm"), __jsx("div", {
  className: "center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, __jsx("button", {
  className: "takeoff",
  onClick: sendCommand('takeoff'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, "Take Off"), __jsx("button", {
  className: "land",
  onClick: sendCommand('land'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, "Land"), __jsx("button", {
  className: "emergency",
  onClick: sendCommand('emergency'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, "!! emergency !!")), __jsx("button", {
  onClick: sendCommand(`right ${amount}`),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, __jsx("span", {
  className: "symbol",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, "\u2192"), "right ", amount, "cm"), __jsx("button", {
  className: "height",
  onClick: sendCommand(`up ${amount}`),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, __jsx("span", {
  className: "symbol",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, "\u2912"), " ", amount, "cm"), __jsx("button", {
  onClick: sendCommand(`back ${amount}`),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}, __jsx("span", {
  className: "symbol",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, "\u2193"), " back ", amount, "cm"), __jsx("button", {
  className: "height",
  onClick: sendCommand(`down ${amount}`),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, __jsx("span", {
  className: "symbol",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}, "\u2913"), " ", amount, "cm"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}, "Fancy Pants"), __jsx("button", {
  onClick: sendCommand('flip l'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, "Flip Left"), __jsx("button", {
  onClick: sendCommand('flip r'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, "Flip Right"), __jsx("button", {
  onClick: sendCommand('flip b'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, "Flip Back"), __jsx("button", {
  onClick: sendCommand('flip f'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, "Flip Forward"), __jsx("button", {
  onClick: sendCommand('go 25 25 25 25'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, "Go 25 25 25 25"), __jsx("button", {
  onClick: sendCommand('curve 100 100 100 150 250 350 50'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, "Curve!"));

/* harmony default export */ __webpack_exports__["default"] = (Commands);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DroneState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DroneState */ "./components/DroneState.js");
/* harmony import */ var _components_commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/commands */ "./components/commands.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\VSONLINE\\Drone_Hildegard-master\\HildegardDrone\\frontend\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PageStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__PageStyles",
  componentId: "sc-1fr1wxi-0"
})(["max-width:500px;margin:0 auto;"]);

const IndexPage = () => __jsx(PageStyles, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "JavaScript Drone"), __jsx(_components_commands__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx(_components_DroneState__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./socket.js":
/*!*******************!*\
  !*** ./socket.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);

const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('http://localhost:6767');
/* harmony default export */ __webpack_exports__["default"] = (socket);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\VSONLINE\Drone_Hildegard-master\HildegardDrone\frontend\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map