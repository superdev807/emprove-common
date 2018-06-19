'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./product-concept-styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductConcept = function ProductConcept(props) {
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('product-concept', props.className) },
    _react2.default.createElement(
      'div',
      { className: 'product-concept__icon' },
      props.concept.icon
    ),
    _react2.default.createElement(
      'div',
      { className: 'product-concept__name' },
      props.concept.name
    ),
    _react2.default.createElement(
      'p',
      { className: 'product-concept__description' },
      props.concept.description
    )
  );
};

ProductConcept.propTypes = {
  concept: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string
};

exports.default = ProductConcept;