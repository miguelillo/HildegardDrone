webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/commands.js":
/*!********************************!*\
  !*** ./components/commands.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket */ "./socket.js");
var _jsxFileName = "D:\\VSONLINE\\Drone_Hildegard-master\\HildegardDrone\\frontend\\components\\commands.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var CommandGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "commands__CommandGrid",
  componentId: "xhe81v-0"
})(["display:grid;grid-template-columns:1fr 1.25fr 1fr;grid-template-rows:repeat(3,1fr);border:1px solid black;grid-gap:3px;button{text-shadow:2px 2px 0 rgba(0,0,0,0.05);border:0;background:#fe2c70;border:4px solid transparent;color:white;font-size:1rem;position:relative;&:active{top:2px;}&:focus{outline:0;border-color:#ffc600;}&.takeoff{background:#41c7ff;}&.land{background:#00ff00;}&.emergency{background:orange;text-transform:uppercase;color:black;}&.rotate{background:#00fff9;color:black;}&.height{background:#fff;color:black;}span.symbol{display:block;font-size:2rem;font-weight:400;}}.center{display:grid;grid-gap:3px;grid-template-columns:1fr 1fr;button:last-child{grid-column:span 2;}}h2{grid-column:1 / -1;background:#ffc600;margin:0;font-size:1rem;text-align:center;padding:0.5rem;color:black;}"]);

function sendCommand(command) {
  return function () {
    console.log("Sending the command ".concat(command));
    _socket__WEBPACK_IMPORTED_MODULE_2__["default"].emit('command', command);
  };
}

var amount = 100;

var Commands = function Commands() {
  return __jsx(CommandGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("button", {
    className: "rotate",
    onClick: sendCommand('ccw 90'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "\u27F2"), " 90\xB0"), __jsx("button", {
    onClick: sendCommand("forward ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "\u2191"), " forward ", amount, "cm"), __jsx("button", {
    className: "rotate",
    onClick: sendCommand('cw 15'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "\u27F3"), " 15\xB0"), __jsx("button", {
    onClick: sendCommand("left ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "\u2190"), " left ", amount, "cm"), __jsx("div", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("button", {
    className: "takeoff",
    onClick: sendCommand('takeoff'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Take Off"), __jsx("button", {
    className: "land",
    onClick: sendCommand('land'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Land"), __jsx("button", {
    className: "emergency",
    onClick: sendCommand('emergency'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "!! emergency !!")), __jsx("button", {
    onClick: sendCommand("right ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "\u2192"), "right ", amount, "cm"), __jsx("button", {
    className: "height",
    onClick: sendCommand("up ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "\u2912"), " ", amount, "cm"), __jsx("button", {
    onClick: sendCommand("back ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "\u2193"), " back ", amount, "cm"), __jsx("button", {
    className: "height",
    onClick: sendCommand("down ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "\u2913"), " ", amount, "cm"), __jsx("button", {
    className: "height",
    onClick: sendCommand("down ".concat(amount)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Battery"), " ", amount, "cm"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Fancy Pants"), __jsx("button", {
    onClick: sendCommand('flip l'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Flip Left"), __jsx("button", {
    onClick: sendCommand('flip r'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Flip Right"), __jsx("button", {
    onClick: sendCommand('flip b'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Flip Back"), __jsx("button", {
    onClick: sendCommand('flip f'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Flip Forward"), __jsx("button", {
    onClick: sendCommand('go 25 25 25 25'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Go 25 25 25 25"), __jsx("button", {
    onClick: sendCommand('curve 100 100 100 150 250 350 50'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Curve!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Commands);

/***/ })

})
//# sourceMappingURL=index.js.c2c0953d9d7b39ac1eba.hot-update.js.map