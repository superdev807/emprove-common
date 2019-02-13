'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _ChevronLeft = _interopRequireDefault(require("@material-ui/icons/ChevronLeft"));

var _FirstPage = _interopRequireDefault(require("@material-ui/icons/FirstPage"));

var _LastPage = _interopRequireDefault(require("@material-ui/icons/LastPage"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _entry = require("react-pdf/dist/entry.webpack");

var _selectors = require("../../redux/selectors");

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PdfView =
/*#__PURE__*/
function (_Component) {
  _inherits(PdfView, _Component);

  function PdfView(props) {
    var _this;

    _classCallCheck(this, PdfView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PdfView).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setWidth", function () {
      if (_this.pdfWrapper && _this.pdfWrapper.offsetWidth !== _this.state.width) {
        _this.setState({
          width: _this.pdfWrapper.offsetWidth
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDocumentLoad", function (numPages) {
      _this.setState({
        numPages: numPages.numPages
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleWrapperRef", function (ref) {
      _this.pdfWrapper = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePrevPage", function () {
      _this.setState({
        currentPage: Math.max(_this.state.currentPage - 1, 1)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNextPage", function () {
      _this.setState({
        currentPage: Math.min(_this.state.currentPage + 1, _this.state.numPages)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFirstPage", function () {
      _this.setState({
        currentPage: 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLastPage", function () {
      _this.setState({
        currentPage: _this.state.numPages
      });
    });

    _this.state = {
      numPages: 0,
      width: 0,
      currentPage: 1
    };
    return _this;
  }

  _createClass(PdfView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setWidth();
      window.addEventListener('resize', this.setWidth);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setWidth();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setWidth);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          source = _this$props.source,
          show = _this$props.show,
          showPageButtons = _this$props.showPageButtons,
          handleHide = _this$props.handleHide,
          isMobile = _this$props.isMobile;
      var _this$state = this.state,
          currentPage = _this$state.currentPage,
          numPages = _this$state.numPages,
          width = _this$state.width;
      var hasButtons = showPageButtons && isMobile;
      return _react.default.createElement("div", {
        ref: this.handleWrapperRef,
        className: (0, _classnames.default)(classes.root, this.props.className, _defineProperty({}, classes.mobileRoot, hasButtons))
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)(_defineProperty({}, classes.mobileDocument, hasButtons))
      }, _react.default.createElement(_entry.Document, {
        file: source,
        onLoadSuccess: this.handleDocumentLoad
      }, hasButtons ? _react.default.createElement(_Paper.default, {
        className: classes.paper,
        component: _entry.Page,
        key: "page_".concat(currentPage),
        pageNumber: currentPage,
        width: width
      }) : Array.from(new Array(numPages), function (el, index) {
        return _react.default.createElement(_Paper.default, {
          className: classes.paper,
          component: _entry.Page,
          key: "page_".concat(index + 1),
          pageNumber: index + 1,
          width: width
        });
      }))), hasButtons && _react.default.createElement("div", {
        className: classes.buttonContainer
      }, _react.default.createElement(_IconButton.default, {
        onClick: this.handleFirstPage
      }, _react.default.createElement(_FirstPage.default, null)), _react.default.createElement(_IconButton.default, {
        onClick: this.handlePrevPage
      }, _react.default.createElement(_ChevronLeft.default, null)), _react.default.createElement(_IconButton.default, {
        onClick: this.handleNextPage
      }, _react.default.createElement(_ChevronRight.default, null)), _react.default.createElement(_IconButton.default, {
        onClick: this.handleLastPage
      }, _react.default.createElement(_LastPage.default, null))));
    }
  }]);

  return PdfView;
}(_react.Component);

_defineProperty(PdfView, "propTypes", {
  className: _propTypes.default.string,
  source: _propTypes.default.string,
  showPageButtons: _propTypes.default.bool
});

var selector = (0, _reselect.createStructuredSelector)({
  isMobile: _selectors.isMobileSelector
});

var _default = (0, _redux.compose)((0, _styles.withStyles)(_styles2.default), (0, _reactRedux.connect)(selector))(PdfView);

exports.default = _default;