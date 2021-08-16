"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["style", "className", "fontSize", "shadow", "bold", "bolder", "italic", "oblique", "underline", "disabled", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// <<- default: Text
var Text = function Text(_ref) {
  var style = _ref.style,
      className = _ref.className,
      fontSize = _ref.fontSize,
      shadow = _ref.shadow,
      bold = _ref.bold,
      bolder = _ref.bolder,
      italic = _ref.italic,
      oblique = _ref.oblique,
      underline = _ref.underline,
      disabled = _ref.disabled,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("span", _extends({
    style: _objectSpread({
      fontSize: fontSize || 'unset',
      fontStyle: italic ? 'italic' : oblique ? 'oblique' : 'unset',
      fontWeight: bold ? 'bold' : bolder ? 'bolder' : 'unset',
      textDecoration: underline ? 'underline' : 'unset'
    }, style),
    className: "king-ui-text ".concat(shadow ? 'king-ui-text-shadow' : '', " ").concat(disabled ? 'king-ui-text--disabled' : '', " ").concat(className || '')
  }, props), children);
};

Text.propTypes = {
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  fontSize: _propTypes["default"].string,
  shadow: _propTypes["default"].bool,
  bold: _propTypes["default"].bool,
  bolder: _propTypes["default"].bool,
  italic: _propTypes["default"].bool,
  oblique: _propTypes["default"].bool,
  underline: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].object.node), _propTypes["default"].node.isRequired])
}; // ->>

var _default = Text;
exports["default"] = _default;