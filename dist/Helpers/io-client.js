"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ioClient = void 0;

var _socket = _interopRequireDefault(require("socket.io-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  _events: {// NOTE <eventName>: [{ endpoint, func: handler }, ...]
  },
  _ioEventHandler: function () {
    var _ioEventHandler2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(eventName, endpoint) {
      var _len,
          props,
          _key,
          _iterator,
          _step,
          handler,
          _args = arguments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              for (_len = _args.length, props = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                props[_key - 2] = _args[_key];
              }

              _iterator = _createForOfIteratorHelper(this._events[eventName]);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  handler = _step.value;

                  if (endpoint === handler.endpoint || !handler.endpoint) {
                    handler.func.apply(handler, props);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _ioEventHandler(_x, _x2) {
      return _ioEventHandler2.apply(this, arguments);
    }

    return _ioEventHandler;
  }(),
  // <<- clear

  /**
   * Close and remove all io connections
   */
  clear: function () {
    var _clear = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _i, _Object$keys, endpoint;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this._events = {};

              for (_i = 0, _Object$keys = Object.keys(this.io); _i < _Object$keys.length; _i++) {
                endpoint = _Object$keys[_i];
                this.io[endpoint].disconnect();
                this.io[endpoint].close();
                delete this.io[endpoint];
              }

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
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
    var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(endpoint, callback) {
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
                console.log("Create endpoint to \"".concat(endpoint, "\""));
                this.io[endpoint] = (0, _socket["default"])(endpoint);
              } else if (this.io[endpoint].disconnected) {
                console.log("Reconnect to \"".concat(endpoint, "\""));
                this.io[endpoint].connect(endpoint);
              }

              if (!(typeof callback === 'function')) {
                _context3.next = 9;
                break;
              }

              return _context3.abrupt("return", callback(null, this.io[endpoint]));

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function connect(_x3, _x4) {
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
    var _disconnect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(endpoint, callback) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (endpoint) {
                _context4.next = 6;
                break;
              }

              if (!(typeof callback === 'function')) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", callback(new Error('Endpoint Missing'), null));

            case 5:
              throw new Error('Endpoint Missing!');

            case 6:
              if (!this.io[endpoint]) {
                _context4.next = 10;
                break;
              }

              this.io[endpoint].disconnect();

              if (!(typeof callback === 'function')) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("return", callback(null, this.io[endpoint]));

            case 10:
              if (!(typeof callback === 'function')) {
                _context4.next = 12;
                break;
              }

              return _context4.abrupt("return", callback(new Error("Endpoint not in [this.io]. (".concat(endpoint, ")")), null));

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function disconnect(_x5, _x6) {
      return _disconnect.apply(this, arguments);
    }

    return disconnect;
  }(),
  // ->>
  // <<- TODO: event [endpoint: string, eventName: string, eventHandler(...props), callback(eventId)]

  /**
   * event callback returns eventId
   *
   * @callback eventCallback
   * @param {Object} error
   * @param {number} eventId
   */

  /**
   * add event handler for endpoint (return a handler id for clean up)
   *
   * @param {string} endpoint - socket io server endpoint
   * @param {string} eventName - event to handle
   * @param {func} eventHandler - event handler function
   * @param {eventCallback} callback - returns id on success or error
   */
  event: function () {
    var _event = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(endpoint, eventName, eventHandler, callback) {
      var eventId;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (endpoint) {
                _context5.next = 6;
                break;
              }

              if (!(typeof callback === 'function')) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", callback(new Error('Endpoint Missing'), null));

            case 5:
              throw new Error('Endpoint Missing!');

            case 6:
              eventId = this._events[eventName].length; // add

              this._events[eventName].push({
                eventId: eventId,
                endpoint: endpoint,
                func: eventHandler
              });

              if (!(typeof callback === 'function')) {
                _context5.next = 12;
                break;
              }

              return _context5.abrupt("return", callback(null, eventId));

            case 12:
              return _context5.abrupt("return", eventId);

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function event(_x7, _x8, _x9, _x10) {
      return _event.apply(this, arguments);
    }

    return event;
  }(),
  // ->>
  eventRemove: function () {
    var _eventRemove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(endpoint, eventName, eventId) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function eventRemove(_x11, _x12, _x13) {
      return _eventRemove.apply(this, arguments);
    }

    return eventRemove;
  }()
};
exports.ioClient = ioClient;
var _default = ioClient;
exports["default"] = _default;