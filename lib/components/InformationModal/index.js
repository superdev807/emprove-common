'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InformationModal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxModal = require('redux-modal');

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogTitle = require('@material-ui/core/DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InformationDefinition = function InformationDefinition(props) {
  var definition = '';
  if (props.term.definition) {
    definition = ': ' + props.term.definition;
  }

  return _react2.default.createElement(
    _Typography2.default,
    { className: (0, _classnames2.default)('information-definition', { 'information-definition--undefined': definition === '' }) },
    _react2.default.createElement(
      'strong',
      null,
      '\u2022 ',
      props.term.name
    ),
    definition
  );
};

var InformationImage = function InformationImage(props) {
  var imageDescription = '';
  if (props.image.description) {
    imageDescription = _react2.default.createElement(
      _Typography2.default,
      { className: 'information-image__description' },
      props.image.description
    );
  }

  return _react2.default.createElement(
    'div',
    { className: 'information-image' },
    imageDescription,
    _react2.default.createElement(
      'div',
      { className: 'information-image__image-container' },
      _react2.default.createElement('img', {
        className: 'information-image__image',
        src: props.image.url,
        alt: 'Information Image',
        width: props.image.displayWidth,
        height: props.image.displayHeight
      })
    )
  );
};

var InformationModal = function InformationModal(props) {
  var images = props.images.map(function (image) {
    var displayHeight = image.height && image.height < 400 ? image.height : 400;
    var displayWidth = image.width / image.height * displayHeight;
    var imageWithUrl = _extends({}, image, {
      url: process.env.IMGIX_PUBLIC_IMAGES_HOST + image.filename + '?h=' + displayHeight,
      displayWidth: displayWidth,
      displayHeight: displayHeight
    });

    return _react2.default.createElement(InformationImage, { key: image.id, image: imageWithUrl });
  });

  return _react2.default.createElement(
    _Dialog2.default,
    { classes: { paper: 'information-modal' }, open: props.show, onClose: props.handleHide },
    _react2.default.createElement(
      _IconButton2.default,
      { className: 'information-modal-close-button', onClick: props.handleHide },
      _react2.default.createElement(_Close2.default, null)
    ),
    _react2.default.createElement(
      _DialogTitle2.default,
      null,
      props.title
    ),
    _react2.default.createElement(
      _DialogContent2.default,
      { className: 'information-modal__content' },
      props.body.map(function (paragraph, index) {
        return _react2.default.createElement(
          _Typography2.default,
          { key: index, className: 'information-modal-body-paragraph' },
          paragraph
        );
      }),
      props.terms.map(function (term) {
        return _react2.default.createElement(InformationDefinition, { key: term.id, term: term });
      }),
      images
    )
  );
};

InformationModal.propTypes = {
  title: _propTypes2.default.string.isRequired,
  body: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  terms: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  images: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

InformationModal.defaultProps = {
  images: []
};

exports.default = (0, _reduxModal.connectModal)({ name: 'informationModal' })(InformationModal);
exports.InformationModal = InformationModal; // for testing