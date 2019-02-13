'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutTheCompany = function AboutTheCompany(props) {
  return _react.default.createElement("section", {
    className: (0, _classnames.default)('about-the-company', props.className)
  }, _react.default.createElement("div", {
    className: "about-the-company__title"
  }, "About ", _react.default.createElement("strong", null, "Emprove, Inc.")), _react.default.createElement("p", {
    className: "about-the-company__paragraph"
  }, "We\u2019re a collection of construction and tech industry leaders who are passionate about creative innovation. Our ambition is to fix the deep inefficiencies of the home improvement industry."), _react.default.createElement("p", {
    className: "about-the-company__paragraph"
  }, "Emprove is a technology platform where home owners and contractors engage with one another on a mutually informed and transparent basis, providing clarity and market efficiency."), _react.default.createElement("p", {
    className: "about-the-company__paragraph"
  }, "We empower home owners with interactive scope definition tools and dynamic cost estimates to initiate their projects with confidence. We service contractors by providing a free and efficient platform to submit cost proposals for projects that are well-defined, vetted, and ready to go!"));
};

AboutTheCompany.propTypes = {
  className: _propTypes.default.string
};
var _default = AboutTheCompany;
exports.default = _default;