'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _reactPdf = require('react-pdf');

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PdfView = function (_Component) {
  _inherits(PdfView, _Component);

  function PdfView(props) {
    _classCallCheck(this, PdfView);

    var _this = _possibleConstructorReturn(this, (PdfView.__proto__ || Object.getPrototypeOf(PdfView)).call(this, props));

    _this.setWidth = function () {
      if (_this.pdfWrapper && _this.pdfWrapper.offsetWidth !== _this.state.width) {
        _this.setState({
          width: _this.pdfWrapper.offsetWidth
        });
      }
    };

    _this.handleDocumentLoad = function (numPages) {
      _this.setState({ numPages: numPages.numPages });
    };

    _this.handleWrapperRef = function (ref) {
      _this.pdfWrapper = ref;
    };

    _this.state = {
      numPages: 0,
      width: 0
    };
    return _this;
  }

  _createClass(PdfView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setWidth();
      window.addEventListener('resize', this.setWidth);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setWidth();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setWidth);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          source = _props.source,
          show = _props.show,
          handleHide = _props.handleHide;
      var width = this.state.width;


      var pdfPages = Array.from(new Array(this.state.numPages), function (el, index) {
        return _react2.default.createElement(_Paper2.default, { className: classes.paper, component: _reactPdf.Page, key: 'page_' + (index + 1), pageNumber: index + 1, width: width });
      });

      return _react2.default.createElement(
        'div',
        { ref: this.handleWrapperRef, className: (0, _classnames2.default)(classes.root, this.props.className) },
        _react2.default.createElement(
          _reactPdf.Document,
          { file: source, onLoadSuccess: this.handleDocumentLoad },
          pdfPages
        )
      );
    }
  }]);

  return PdfView;
}(_react.Component);

PdfView.propTypes = {
  className: _propTypes2.default.string,
  source: _propTypes2.default.string
};
exports.default = (0, _styles.withStyles)(_styles3.default)(PdfView);