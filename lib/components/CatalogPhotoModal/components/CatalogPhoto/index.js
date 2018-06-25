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

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CatalogPhoto = function CatalogPhoto(props) {
  return _react2.default.createElement('img', {
    className: (0, _classnames2.default)('catalog-photo', props.className),
    src: props.imageUrl,
    alt: props.alt
  });
};

CatalogPhoto.propTypes = {
  alt: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  imageUrl: _propTypes2.default.string.isRequired
};

exports.default = CatalogPhoto;