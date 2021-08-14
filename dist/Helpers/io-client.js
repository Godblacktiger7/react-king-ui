"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ioClient = void 0;

var _socket = _interopRequireDefault(require("socket.io-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * std callback
 *
 * @callback callback
 * @param {Object} error
 * @param {Object} data
 */
// TODO remove logs after testing
var ioClient = {
  io: {// NOTE <id>: ioClient instance [id: endpoint]
  },
  _events: {// NOTE <id>: { eventName: [{eventId: ..., func: [(...props) => {}, ...]}] }
  },
  // <<- clear

  /**
   * Close and remove all io connections
   */
  clear: function () {
    var _clear = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _i, _Object$keys, endpoint;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              for (_i = 0, _Object$keys = Object.keys(this.io); _i < _Object$keys.length; _i++) {
                endpoint = _Object$keys[_i];
                this.io[endpoint].disconnect();
                this.io[endpoint].close();
                delete this.io[endpoint];
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function clear() {
      return _clear.apply(this, arguments);
    }

    return clear;
  }(),
  // ->>
  // <<- connect [endpoint: string, callback(error, data)]

  /**
   * Connect to endpoint if not already exists.
   * Connected instances will be stored in this.io
   *
   * @param {string} endpoint - socket io server endpoint
   * @param {callback} callback
   */
  connect: function () {
    var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(endpoint, callback) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (endpoint) {
                _context2.next = 6;
                break;
              }

              if (!(typeof callback === 'function')) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", callback(new Error('Endpoint Missing'), null));

            case 5:
              throw new Error('Endpoint Missing!');

            case 6:
              if (!this.io[endpoint]) {
                console.log("Create endpoint to \"".concat(endpoint, "\""));
                this.io[endpoint] = (0, _socket["default"])(endpoint);
              }

              if (!(typeof callback === 'function')) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", callback(null, this.io[endpoint]));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function connect(_x, _x2) {
      return _connect.apply(this, arguments);
    }

    return connect;
  }(),
  // ->>
  // <<- disconnect [endpoint: string, callback(error, data)]

  /**
   * Disconnect from io endpoint,
   *
   * @param {string} endpoint - socket io server endpoint
   * @param {callback} callback
   */
  disconnect: function () {
    var _disconnect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(endpoint, callback) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (endpoint) {
                _context3.next = 6;
                break;
              }

              if (!(typeof callback === 'function')) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", callback(new Error('Endpoint Missing'), null));

            case 5:
              throw new Error('Endpoint Missing!');

            case 6:
              if (!this.io[endpoint]) {
                _context3.next = 10;
                break;
              }

              this.io[endpoint].disconnect();

              if (!(typeof callback === 'function')) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt("return", callback(null, this.io[endpoint]));

            case 10:
              if (!(typeof callback === 'function')) {
                _context3.next = 12;
                break;
              }

              return _context3.abrupt("return", callback(new Error("Endpoint not in [this.io]. (".concat(endpoint, ")")), null));

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function disconnect(_x3, _x4) {
      return _disconnect.apply(this, arguments);
    }

    return disconnect;
  }(),
  // ->>
  event: function () {
    var _event = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(endpoint, eventId) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function event(_x5, _x6) {
      return _event.apply(this, arguments);
    }

    return event;
  }(),
  eventRemove: function () {
    var _eventRemove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(endpoint, eventId) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function eventRemove(_x7, _x8) {
      return _eventRemove.apply(this, arguments);
    }

    return eventRemove;
  }()
};
exports.ioClient = ioClient;
var _default = ioClient;
exports["default"] = _default;