"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["className", "isToggled", "onChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// <<- default: ToggleSwitch
var ToggleSwitch = function ToggleSwitch(_ref) {
  var className = _ref.className,
      isToggled = _ref.isToggled,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("label", _extends({
    className: "king-ui-toggle-switch ".concat(className || '')
  }, props), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    checked: isToggled,
    onChange: onChange
  }), /*#__PURE__*/_react["default"].createElement("span", null));
};

ToggleSwitch.propTypes = {
  className: _propTypes["default"].string,
  isToggled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func
}; // ->>

var _default = ToggleSwitch;
exports["default"] = _default;