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

var CatalogPhotoHeader = function CatalogPhotoHeader(props) {
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('catalog-photo-header', props.className) },
    _react2.default.createElement(
      'div',
      { className: 'catalog-photo-header__title' },
      _react2.default.createElement(
        'span',
        { className: 'catalog-photo-header__style-and-area' },
        props.designStyle,
        ' ',
        props.homeArea
      ),
      ' | ',
      _react2.default.createElement(
        'span',
        { className: 'catalog-photo-header__quality' },
        props.qualityStandard
      )
    )
  );
};

CatalogPhotoHeader.propTypes = {
  className: _propTypes2.default.string
};

exports.default = CatalogPhotoHeader;