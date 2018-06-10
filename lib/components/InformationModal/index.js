'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
  return _react2.default.createElement(
    _Typography2.default,
    { className: 'information-modal-definition' },
    _react2.default.createElement(
      'strong',
      null,
      '\u2022 ',
      props.term.name
    ),
    ': ',
    props.term.definition
  );
};

var InformationModal = function InformationModal(props) {
  return _react2.default.createElement(
    _Dialog2.default,
    { open: props.show, onClose: props.handleHide },
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
      null,
      props.body.map(function (paragraph, index) {
        return _react2.default.createElement(
          _Typography2.default,
          { key: index, className: 'information-modal-body-paragraph' },
          paragraph
        );
      }),
      props.terms.map(function (term) {
        return _react2.default.createElement(InformationDefinition, { key: term.id, term: term });
      })
    )
  );
};

InformationModal.propTypes = {
  title: _propTypes2.default.string.isRequired,
  body: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  terms: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = (0, _reduxModal.connectModal)({ name: 'informationModal' })(InformationModal);