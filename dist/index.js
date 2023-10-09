"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireDefault(require("react"));
var _reactDom = require("react-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Modal(_ref) {
  var closeModal = _ref.closeModal,
    iconClose = _ref.iconClose,
    title = _ref.title,
    hideTitle = _ref.hideTitle,
    text = _ref.text,
    hideText = _ref.hideText;
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "close-modal",
    onClick: closeModal
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: iconClose,
    alt: "close icon"
  })), hideTitle ? null : /*#__PURE__*/_react["default"].createElement("h2", {
    className: "modal-title"
  }, title), hideText ? null : /*#__PURE__*/_react["default"].createElement("p", {
    className: "modal-text"
  }, text)));
}
module["export"] = {
  Modal: Modal
};