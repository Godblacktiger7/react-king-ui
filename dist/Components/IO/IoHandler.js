"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IoHandler = exports.ioClearStorage = exports.ioRemove = exports.ioStorage = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _socket = _interopRequireDefault(require("socket.io-client"));

var _excluded = ["endpoint", "id"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * ioStorage:
 *  <endpoint>: {
 *    client: io,
 *    func: {
 *      <eventName>: {
 *        <id>: <eventHandler:func>
 *      }
 *    }
 *  }
 */
var ioStorage = {};
exports.ioStorage = ioStorage;

var ioRemove = function ioRemove(id) {
  for (var _i = 0, _Object$entries = Object.entries(ioStorage); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        endpoint = _Object$entries$_i[0],
        _Object$entries$_i$ = _Object$entries$_i[1],
        client = _Object$entries$_i$.client,
        func = _Object$entries$_i$.func;

    delete func[id];

    if (!Object.keys(func).length) {
      // no handlers for client
      client.disconnect();
      delete ioStorage[endpoint];
    }
  }
};

exports.ioRemove = ioRemove;

var ioClearStorage = function ioClearStorage(endpoint) {
  var handlersOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (ioStorage[endpoint]) {
    if (handlersOnly) {
      ioStorage[endpoint].func = {};
    } else {
      if (!ioStorage[endpoint].client.disconnected) {
        ioStorage[endpoint].client.disconnect();
      }

      delete ioStorage[endpoint];
    }
  }
};

exports.ioClearStorage = ioClearStorage;

var IoHandler = function IoHandler(_ref) {
  var endpoint = _ref.endpoint,
      id = _ref.id,
      handler = _objectWithoutProperties(_ref, _excluded);

  (0, _react.useEffect)(function () {
    var _ioStorage$endpoint$c, _ioStorage$endpoint;

    function ioEventHandler(event, id) {
      var _ioStorage$endpoint$f;

      console.log("".concat(endpoint, ": event=").concat(event, ", id=").concat(id));

      for (var _len = arguments.length, props = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        props[_key - 2] = arguments[_key];
      }

      (_ioStorage$endpoint$f = ioStorage[endpoint].func[event])[id].apply(_ioStorage$endpoint$f, props);
    }

    if ((_ioStorage$endpoint$c = (_ioStorage$endpoint = ioStorage[endpoint]) === null || _ioStorage$endpoint === void 0 ? void 0 : _ioStorage$endpoint.client.disconnected) !== null && _ioStorage$endpoint$c !== void 0 ? _ioStorage$endpoint$c : true) {
      if (ioStorage[endpoint]) delete ioStorage[endpoint];

      ioStorage[endpoint] = function () {
        var io = _socket["default"].connect(endpoint);

        var func = {};

        var _loop = function _loop() {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
              event = _Object$entries2$_i[0],
              callback = _Object$entries2$_i[1];

          io.on(event, function () {
            for (var _len2 = arguments.length, props = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              props[_key2] = arguments[_key2];
            }

            return ioEventHandler.apply(void 0, [event].concat(props));
          });
          func[event] = {};
          func[event][id] = callback;
        };

        for (var _i2 = 0, _Object$entries2 = Object.entries(handler); _i2 < _Object$entries2.length; _i2++) {
          _loop();
        }

        return {
          client: io,
          func: func
        };
      }();
    } else {
      var _loop2 = function _loop2() {
        var event = _Object$keys[_i3];

        if (!ioStorage[endpoint].func[event]) {
          ioStorage[endpoint].client.on(event, function () {
            for (var _len3 = arguments.length, props = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              props[_key3] = arguments[_key3];
            }

            return ioEventHandler.apply(void 0, [event, id].concat(props));
          });
          ioStorage[endpoint].func[event] = {};
        }

        if (!ioStorage[endpoint].func[event][id]) {
          ioStorage[endpoint].func[event][id] = handler[event];
        }
      };

      for (var _i3 = 0, _Object$keys = Object.keys(handler); _i3 < _Object$keys.length; _i3++) {
        _loop2();
      }
    }
  }, [endpoint, handler]);
  return null;
};

exports.IoHandler = IoHandler;
IoHandler.defaultProps = {
  id: 0
};
IoHandler.defaultProps = {
  endpoint: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].string]),
  id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
};
var _default = IoHandler;
exports["default"] = _default;