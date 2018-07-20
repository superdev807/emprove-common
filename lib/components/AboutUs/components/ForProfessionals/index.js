'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

require('./style.scss');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForProfessionals = function (_Component) {
  _inherits(ForProfessionals, _Component);

  function ForProfessionals() {
    _classCallCheck(this, ForProfessionals);

    return _possibleConstructorReturn(this, (ForProfessionals.__proto__ || Object.getPrototypeOf(ForProfessionals)).call(this));
  }

  _createClass(ForProfessionals, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onStep = _props.onStep,
          className = _props.className,
          classes = _props.classes,
          id = _props.id;

      return _react2.default.createElement(
        'div',
        { id: id, className: (0, _classnames2.default)('forProfessionalsContainer', className) },
        _react2.default.createElement(
          'div',
          {
            id: 'forProfessionals',
            className: 'forProfessionalsContent',
            title: 'A free platform for contractors to efficiently bid for projects that are well-defined and vetted!' },
          _react2.default.createElement(
            'div',
            { id: 'contractorBox', className: (0, _classnames2.default)({ on: onStep }, 'contractorBox') },
            _react2.default.createElement(
              'div',
              { className: 'forProfessionalsContentTitle' },
              'FOR ',
              _react2.default.createElement(
                'b',
                null,
                'PROFESSIONALS'
              )
            ),
            _react2.default.createElement('div', { className: 'orangeLine' }),
            _react2.default.createElement(
              'div',
              { id: 'contractorText', className: 'contractorTextStyle' },
              'A new place to ',
              _react2.default.createElement(
                'b',
                null,
                'grow your business'
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { id: 'contractorButton', className: 'contractorButtonContainer' },
                _react2.default.createElement(
                  _Button2.default,
                  { variant: 'raised', color: 'primary', onClick: this.props.onClick, fullWidth: true, className: classes.contractorButtonStyle },
                  'LEARN MORE'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { maxWidth: '85vw', margin: 'auto' } },
          _react2.default.createElement(
            'div',
            { id: 'forProfessionalsTextsBox', className: onStep ? 'on' : undefined, style: { position: 'relative' } },
            _react2.default.createElement(
              'div',
              { className: 'forProfessionalsHeaderContainer' },
              _react2.default.createElement(
                'p',
                { className: 'forProfessionalsHeader' },
                _react2.default.createElement(
                  'b',
                  null,
                  'BID'
                ),
                ' TO THE ',
                _react2.default.createElement(
                  'b',
                  null,
                  'MOST QUALIFIED'
                ),
                ' CONSUMER IN THE MARKET ',
                _react2.default.createElement(
                  'b',
                  null,
                  'FOR FREE'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'forProfessionalsFirstTitleBoxStyle' },
              _react2.default.createElement(
                'div',
                { className: 'forProfessionalsTitleBox', style: { flex: 1, textAlign: 'right' } },
                _react2.default.createElement(
                  'p',
                  { className: 'forProfessionalsTitle' },
                  'Request for Proposals emailed directly to your inbox '
                )
              ),
              _react2.default.createElement(
                'div',
                { style: { margin: 'auto 2vw' } },
                _react2.default.createElement('img', { src: './images/arrows-right.png' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'forProfessionalsTitleBox', style: { flex: 1, textAlign: 'left' } },
                _react2.default.createElement(
                  'p',
                  { className: 'forProfessionalsTitle' },
                  'No more wasted time and money cold calling!'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'forProfessionalsTitleBoxStyle' },
              _react2.default.createElement(
                'div',
                { className: 'forProfessionalsTitleBox', style: { flex: 1, textAlign: 'right' } },
                _react2.default.createElement(
                  'p',
                  { className: 'forProfessionalsTitle' },
                  'Scope of work is comprehensive and listed by trade'
                )
              ),
              _react2.default.createElement(
                'div',
                { style: { margin: 'auto 2vw' } },
                _react2.default.createElement('img', { src: './images/arrows-right.png' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'forProfessionalsTitleBox', style: { flex: 1, textAlign: 'left' } },
                _react2.default.createElement(
                  'p',
                  { className: 'forProfessionalsTitle' },
                  'The scope to price is clear and straightforward!'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'forProfessionalsTitleBoxStyle' },
              _react2.default.createElement(
                'div',
                { className: 'forProfessionalsTitleBox', style: { flex: 1, textAlign: 'right' } },
                _react2.default.createElement(
                  'p',
                  { className: 'forProfessionalsTitle' },
                  'Consumer cost expectations set to local market rates'
                )
              ),
              _react2.default.createElement(
                'div',
                { style: { margin: 'auto 2vw' } },
                _react2.default.createElement('img', { src: './images/arrows-right.png' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'forProfessionalsTitleBox', style: { flex: 1, textAlign: 'left' } },
                _react2.default.createElement(
                  'p',
                  { className: 'forProfessionalsTitle' },
                  'Sticker-shock is removed from the equation!'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ForProfessionals;
}(_react.Component);

ForProfessionals.propTypes = {
  onStep: _propTypes2.default.bool.isRequired,
  onClick: _propTypes2.default.func.isRequired
};

exports.default = (0, _styles.withStyles)(_styles3.default)(ForProfessionals);