'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProductConcept = require('./ProductConcept');

var _ProductConcept2 = _interopRequireDefault(_ProductConcept);

var _IconBidIt = require('../../../../icons/IconBidIt');

var _IconBidIt2 = _interopRequireDefault(_IconBidIt);

var _IconCostIt = require('../../../../icons/IconCostIt');

var _IconCostIt2 = _interopRequireDefault(_IconCostIt);

var _IconDreamIt = require('../../../../icons/IconDreamIt');

var _IconDreamIt2 = _interopRequireDefault(_IconDreamIt);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productConcepts = [{
  id: 1,
  name: _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'strong',
      null,
      'Dream'
    ),
    ' It!'
  ),
  description: 'Emprove empowers home owners to dream with purpose and precision.  The platforms learns home owner objectives and design sensibilities then translates them into an actionable project plan.',
  icon: _react2.default.createElement(_IconDreamIt2.default, null)
}, {
  id: 2,
  name: _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'strong',
      null,
      'Cost'
    ),
    ' It'
  ),
  description: 'Emprove’s proprietary data engine generates a comprehensive scope and cost estimate for the project.  Each scope element can be tailored to accommodate various project scales or budget constraints.',
  icon: _react2.default.createElement(_IconCostIt2.default, null)
}, {
  id: 3,
  name: _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'strong',
      null,
      'Bid'
    ),
    ' It!'
  ),
  description: 'Emprove delivers a detailed request-for-proposal to its marketplace of qualified contractors and administers a bid process.  A competitive market is achieved for home owners and contractors efficiently engage with the most qualified consumer in the market.',
  icon: _react2.default.createElement(_IconBidIt2.default, null)
}];

var OurProduct = function OurProduct(props) {
  return _react2.default.createElement(
    'section',
    { className: 'our-product' },
    _react2.default.createElement(
      'div',
      { className: 'our-product__title' },
      'Our ',
      _react2.default.createElement(
        'strong',
        null,
        'Product'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'our-product__concepts' },
      productConcepts.map(function (concept) {
        return _react2.default.createElement(_ProductConcept2.default, { key: concept.id, className: 'our-product__concept', concept: concept });
      })
    )
  );
};

exports.default = OurProduct;