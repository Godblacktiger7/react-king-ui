"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.notify = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../Text"));

var _excluded = ["className", "cardID", "card", "timeout"],
    _excluded2 = ["title", "message", "level", "id"],
    _excluded3 = ["style", "id"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// notify container ref <id>: ref to notify container
var ncRef = {};
var levelClassNames = {
  info: 'king-ui-notify king-ui-card-info',
  warn: 'king-ui-notify king-ui-card-warn',
  error: 'king-ui-notify king-ui-card-error'
}; // <<- Card

var Card = function Card(_ref) {
  var className = _ref.className,
      cardID = _ref.cardID,
      card = _ref.card,
      timeout = _ref.timeout,
      props = _objectWithoutProperties(_ref, _excluded);

  (0, _react.useEffect)(function () {
    setTimeout(function () {
      // TODO add timeout handler for remove card from div
      console.log("@TODO timeout handler for \"".concat(cardID, "\" [timeout: ").concat(timeout, "]"));
    }, timeout);
  }, [timeout, cardID]);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    className: className
  }, props), card.title && /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    style: {
      margin: '.5em'
    },
    fontSize: "1.3em",
    shadow: true,
    underline: true
  }, card.title), card.message && /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    style: {
      margin: '.5em'
    },
    fontSize: ".9em"
  }, card.message));
};

Card.propTypes = {
  className: _propTypes["default"].string,
  card: _propTypes["default"].object,
  cardID: _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].number.isRequired]),
  timeout: _propTypes["default"].number
}; // ->>
// <<- export: func: notify

var notify = function notify() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? null : _ref2$title,
      message = _ref2.message,
      _ref2$level = _ref2.level,
      level = _ref2$level === void 0 ? 'info' : _ref2$level,
      _ref2$id = _ref2.id,
      id = _ref2$id === void 0 ? 'king-ui-notify' : _ref2$id,
      props = _objectWithoutProperties(_ref2, _excluded2);

  var className = levelClassNames[level];
  if (!className) throw new Error("Unknown level \"".concat(level, "\""));
  var cardID = ncRef[id].cards.current.length;
  var card = {
    id: cardID,
    title: title,
    message: message
  };
  ncRef[id].addCard( /*#__PURE__*/_react["default"].createElement(Card, _extends({
    key: cardID,
    cardID: cardID,
    className: className,
    card: card,
    timeout: 6000,
    onClick: function onClick() {
      return ncRef[id].removeCard(cardID);
    }
  }, props)));
}; // ->>
// <<- default: NotifyContainer


exports.notify = notify;

var NotifyContainer = function NotifyContainer(_ref3) {
  var style = _ref3.style,
      id = _ref3.id,
      props = _objectWithoutProperties(_ref3, _excluded3);

  var render = (0, _react.useState)(false)[1];
  var cards = (0, _react.useRef)([]);
  var containerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    ncRef[id] = {
      container: containerRef,
      addCard: function addCard(card) {
        cards.current.unshift(card);
        render(function (prev) {
          return !prev;
        });
      },
      cards: cards,
      removeCard: function removeCard(cardID) {
        var index = -1;

        var _iterator = _createForOfIteratorHelper(cards.current),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var card = _step.value;
            index++;

            if (card.props.cardID === cardID) {
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        cards.current.splice(index, 1);
        render(function (prev) {
          return !prev;
        });
      }
    };
    return function () {
      delete ncRef[id];
    };
  }, [id]);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    id: id,
    style: _objectSpread({
      display: cards.current.length ? 'flex' : 'none'
    }, style),
    ref: containerRef
  }, props), cards.current);
};

NotifyContainer.defaultProps = {
  id: 'king-ui-notify'
};
NotifyContainer.propTypes = {
  style: _propTypes["default"].object,
  id: _propTypes["default"].string
}; // ->>

var _default = NotifyContainer;
exports["default"] = _default;