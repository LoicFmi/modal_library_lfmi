"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import './style/style.css';

function Modal(_ref) {
  var show = _ref.show,
    defaultStyle = _ref.defaultStyle,
    closeModal = _ref.closeModal,
    iconClose = _ref.iconClose,
    title = _ref.title,
    hideTitle = _ref.hideTitle,
    icon = _ref.icon,
    hideIcon = _ref.hideIcon,
    text = _ref.text,
    hideText = _ref.hideText;
  var showHide = show ? 'modal display-block' : 'modal display-none';
  var modalStyle = defaultStyle ? 'modal-style modal-default' : 'modal-style';
  var titleStyle = defaultStyle ? 'title-style title-default' : ' title-style';
  var iconStyle = defaultStyle ? 'icon-style icon-default' : ' icon-style';
  var textStyle = defaultStyle ? 'text-style text-default' : ' text-style';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: showHide
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: modalStyle
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "close-modal",
    onClick: closeModal
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: iconClose,
    alt: "close icon"
  })), hideTitle ? null : /*#__PURE__*/_react["default"].createElement("h2", {
    className: titleStyle
  }, title), hideIcon ? null : /*#__PURE__*/_react["default"].createElement("img", {
    className: iconStyle,
    src: icon,
    alt: ""
  }), hideText ? null : /*#__PURE__*/_react["default"].createElement("p", {
    className: textStyle
  }, text)));
}
module["export"] = {
  Modal: Modal
};