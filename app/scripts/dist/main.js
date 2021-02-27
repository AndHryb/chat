(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  console.log('Hello ES6!');
};

var ChatMessage = /*#__PURE__*/function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === void 0 ? 'batman' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === void 0 ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: "serialize",
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

var _default = ChatApp;
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _app["default"]();

},{"./app":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0lDQU0sTyxHQUNKLG1CQUFjO0FBQUE7O0FBQ1osRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFlBQVo7QUFDRCxDOztJQUVHLFc7QUFDSiw2QkFJRztBQUFBLFFBSFEsQ0FHUixRQUhELE9BR0M7QUFBQSx5QkFGRCxJQUVDO0FBQUEsUUFGSyxDQUVMLDBCQUZTLFFBRVQ7QUFBQSw4QkFERCxTQUNDO0FBQUEsUUFEVSxDQUNWLCtCQURlLElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUNkOztBQUFBOztBQUNELFNBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0Q7Ozs7V0FFRCxxQkFBWTtBQUNWLGFBQU87QUFDTCxRQUFBLElBQUksRUFBRSxLQUFLLElBRE47QUFFTCxRQUFBLE9BQU8sRUFBRSxLQUFLLE9BRlQ7QUFHTCxRQUFBLFNBQVMsRUFBRSxLQUFLO0FBSFgsT0FBUDtBQUtEOzs7Ozs7ZUFJWSxPOzs7Ozs7QUMxQmY7Ozs7QUFDQSxJQUFJLGVBQUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjbGFzcyBDaGF0QXBwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBFUzYhJyk7XHJcbiAgfVxyXG59XHJcbmNsYXNzIENoYXRNZXNzYWdlIHtcclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBtZXNzYWdlOiBtLFxyXG4gICAgdXNlcjogdSA9ICdiYXRtYW4nLFxyXG4gICAgdGltZXN0YW1wOiB0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gIH0pIHtcclxuICAgIHRoaXMubWVzc2FnZSA9IG07XHJcbiAgICB0aGlzLnVzZXIgPSB1O1xyXG4gICAgdGhpcy50aW1lc3RhbXAgPSB0O1xyXG4gIH1cclxuXHJcbiAgc2VyaWFsaXplKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogdGhpcy51c2VyLFxyXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXHJcbiAgICAgIHRpbWVzdGFtcDogdGhpcy50aW1lc3RhbXBcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEFwcDsiLCJpbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XHJcbm5ldyBDaGF0QXBwKCk7Il19
