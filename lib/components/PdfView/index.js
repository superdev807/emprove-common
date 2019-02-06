'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ChevronRight = require('@material-ui/icons/ChevronRight');

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _ChevronLeft = require('@material-ui/icons/ChevronLeft');

var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);

var _FirstPage = require('@material-ui/icons/FirstPage');

var _FirstPage2 = _interopRequireDefault(_FirstPage);

var _LastPage = require('@material-ui/icons/LastPage');

var _LastPage2 = _interopRequireDefault(_LastPage);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _reactPdf = require('react-pdf');

var _selectors = require('../../redux/selectors');

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    _this.handlePrevPage = function () {
      _this.setState({ currentPage: Math.max(_this.state.currentPage - 1, 1) });
    };

    _this.handleNextPage = function () {
      _this.setState({ currentPage: Math.min(_this.state.currentPage + 1, _this.state.numPages) });
    };

    _this.handleFirstPage = function () {
      _this.setState({ currentPage: 1 });
    };

    _this.handleLastPage = function () {
      _this.setState({ currentPage: _this.state.numPages });
    };

    _this.state = {
      numPages: 0,
      width: 0,
      currentPage: 1
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
          showPageButtons = _props.showPageButtons,
          handleHide = _props.handleHide,
          isMobile = _props.isMobile;
      var _state = this.state,
          currentPage = _state.currentPage,
          numPages = _state.numPages,
          width = _state.width;

      var hasButtons = showPageButtons && isMobile;

      return _react2.default.createElement(
        'div',
        { ref: this.handleWrapperRef, className: (0, _classnames2.default)(classes.root, this.props.className, _defineProperty({}, classes.mobileRoot, hasButtons)) },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(_defineProperty({}, classes.mobileDocument, hasButtons)) },
          _react2.default.createElement(
            _reactPdf.Document,
            { file: source, onLoadSuccess: this.handleDocumentLoad },
            hasButtons ? _react2.default.createElement(_Paper2.default, { className: classes.paper, component: _reactPdf.Page, key: 'page_' + currentPage, pageNumber: currentPage, width: width }) : Array.from(new Array(numPages), function (el, index) {
              return _react2.default.createElement(_Paper2.default, { className: classes.paper, component: _reactPdf.Page, key: 'page_' + (index + 1), pageNumber: index + 1, width: width });
            })
          )
        ),
        hasButtons && _react2.default.createElement(
          'div',
          { className: classes.buttonContainer },
          _react2.default.createElement(
            _IconButton2.default,
            { onClick: this.handleFirstPage },
            _react2.default.createElement(_FirstPage2.default, null)
          ),
          _react2.default.createElement(
            _IconButton2.default,
            { onClick: this.handlePrevPage },
            _react2.default.createElement(_ChevronLeft2.default, null)
          ),
          _react2.default.createElement(
            _IconButton2.default,
            { onClick: this.handleNextPage },
            _react2.default.createElement(_ChevronRight2.default, null)
          ),
          _react2.default.createElement(
            _IconButton2.default,
            { onClick: this.handleLastPage },
            _react2.default.createElement(_LastPage2.default, null)
          )
        )
      );
    }
  }]);

  return PdfView;
}(_react.Component);

PdfView.propTypes = {
  className: _propTypes2.default.string,
  source: _propTypes2.default.string,
  showPageButtons: _propTypes2.default.bool
};


var selector = (0, _reselect.createStructuredSelector)({
  isMobile: _selectors.isMobileSelector
});

exports.default = (0, _redux.compose)((0, _styles.withStyles)(_styles3.default), (0, _reactRedux.connect)(selector))(PdfView);