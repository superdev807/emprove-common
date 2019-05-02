'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ProductConcept = _interopRequireDefault(require("./ProductConcept"));

var _IconBidIt = _interopRequireDefault(require("../../../../icons/IconBidIt"));

var _IconCostIt = _interopRequireDefault(require("../../../../icons/IconCostIt"));

var _IconDreamIt = _interopRequireDefault(require("../../../../icons/IconDreamIt"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productConcepts = [{
  id: 1,
  name: _react["default"].createElement("span", null, _react["default"].createElement("strong", null, "Dream"), " It!"),
  description: 'Emprove empowers home owners to dream with purpose and precision.  The platforms learns home owner objectives and design sensibilities then translates them into an actionable project plan.',
  icon: _react["default"].createElement(_IconDreamIt["default"], null)
}, {
  id: 2,
  name: _react["default"].createElement("span", null, _react["default"].createElement("strong", null, "Cost"), " It!"),
  description: 'Emprove’s proprietary data engine generates a comprehensive scope and cost estimate for the project.  Each scope element can be tailored to accommodate various project scales or budget constraints.',
  icon: _react["default"].createElement(_IconCostIt["default"], null)
}, {
  id: 3,
  name: _react["default"].createElement("span", null, _react["default"].createElement("strong", null, "Bid"), " It!"),
  description: 'Emprove delivers a detailed request-for-proposal to its marketplace of qualified contractors and administers a bid process.  A competitive market is achieved for home owners and contractors efficiently engage with the most qualified consumer in the market.',
  icon: _react["default"].createElement(_IconBidIt["default"], null)
}];

var OurProduct = function OurProduct(props) {
  return _react["default"].createElement("section", {
    className: (0, _classnames["default"])('our-product', props.className)
  }, _react["default"].createElement("div", {
    className: "our-product__title"
  }, "Our ", _react["default"].createElement("strong", null, "Product")), _react["default"].createElement("div", {
    className: "our-product__concepts"
  }, productConcepts.map(function (concept) {
    return _react["default"].createElement(_ProductConcept["default"], {
      key: concept.id,
      className: "our-product__concept",
      concept: concept
    });
  })));
};

OurProduct.propTypes = {
  className: _propTypes["default"].string
};
var _default = OurProduct;
exports["default"] = _default;