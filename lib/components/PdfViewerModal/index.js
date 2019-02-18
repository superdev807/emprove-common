'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _IconFileDownload = _interopRequireDefault(require("../../icons/IconFileDownload"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _LoadingIndicator = _interopRequireDefault(require("../LoadingIndicator"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reduxModal = require("redux-modal");

var _reselect = require("reselect");

var _styles = require("@material-ui/core/styles");

var _PdfView = _interopRequireDefault(require("../PdfView"));

var _styles2 = _interopRequireDefault(require("./styles"));

var _request = require("../../redux/api/request");

var _constants = require("../../config/constants");

var _pdf = require("../../redux/modules/pdf");

var _selectors = require("../../redux/selectors");

var _globalStatus = require("../../redux/modules/globalStatus");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PdfViewerModal =
/*#__PURE__*/
function (_Component) {
  _inherits(PdfViewerModal, _Component);

  function PdfViewerModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PdfViewerModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PdfViewerModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleSendRfpPDF",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this$props, blocker, fileName, rfpId, sendRfpPdf, setSnackbar, timezone;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, blocker = _this$props.blocker, fileName = _this$props.fileName, rfpId = _this$props.rfpId, sendRfpPdf = _this$props.sendRfpPdf, setSnackbar = _this$props.setSnackbar, timezone = _this$props.timezone;
              _context.t0 = rfpId;

              if (!_context.t0) {
                _context.next = 9;
                break;
              }

              _context.t1 = !blocker;

              if (_context.t1) {
                _context.next = 8;
                break;
              }

              _context.next = 7;
              return blocker();

            case 7:
              _context.t1 = _context.sent;

            case 8:
              _context.t0 = _context.t1;

            case 9:
              if (!_context.t0) {
                _context.next = 11;
                break;
              }

              sendRfpPdf({
                id: rfpId,
                data: {
                  fileName: fileName,
                  timezone: timezone
                },
                success: function success() {
                  setSnackbar({
                    message: 'Successfully Sent to Your Email!',
                    variant: 'success'
                  });
                }
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleSendBidPDF", function () {
      var _this$props2 = _this.props,
          fileName = _this$props2.fileName,
          bidId = _this$props2.bidId,
          sendBidPdf = _this$props2.sendBidPdf,
          setSnackbar = _this$props2.setSnackbar,
          timezone = _this$props2.timezone;

      if (bidId) {
        sendBidPdf({
          id: bidId,
          data: {
            fileName: fileName,
            timezone: timezone
          },
          success: function success() {
            setSnackbar({
              message: 'Successfully Sent to Your Email!',
              variant: 'success'
            });
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      var _this$props3 = _this.props,
          handleHide = _this$props3.handleHide,
          onClose = _this$props3.onClose;
      onClose && onClose();
      handleHide();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDownloadPDF",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var _this$props4, blocker, source, link, raw, rawLength, array, i;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props4 = _this.props, blocker = _this$props4.blocker, source = _this$props4.source;
              link = document.createElement('a');
              _context2.t0 = !blocker;

              if (_context2.t0) {
                _context2.next = 7;
                break;
              }

              _context2.next = 6;
              return blocker();

            case 6:
              _context2.t0 = _context2.sent;

            case 7:
              if (!_context2.t0) {
                _context2.next = 11;
                break;
              }

              if (source.indexOf('data:application/pdf;base64,') === -1) {
                link.href = source;
              } else {
                raw = atob(source.slice(28));
                rawLength = raw.length;
                array = new Uint8Array(rawLength);

                for (i = 0; i < rawLength; i++) {
                  array[i] = raw.charCodeAt(i);
                }

                link.href = URL.createObjectURL(new Blob([array], {
                  type: 'application/pdf'
                }));
              }

              link.download = _this.props.fileName;
              link.dispatchEvent(new MouseEvent('click'));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    return _this;
  }

  _createClass(PdfViewerModal, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          classes = _this$props5.classes,
          disableDownload = _this$props5.disableDownload,
          isMobile = _this$props5.isMobile,
          pdfKind = _this$props5.pdfKind,
          sendStatus = _this$props5.sendStatus,
          source = _this$props5.source,
          show = _this$props5.show,
          type = _this$props5.type;
      return _react.default.createElement(_Dialog.default, {
        open: show,
        fullScreen: isMobile,
        maxWidth: false,
        disableEnforceFocus: true,
        onClose: this.handleClose,
        className: classes.noMarginTop
      }, _react.default.createElement(_DialogTitle.default, {
        className: classes.topIconBox
      }, !disableDownload && (!isMobile ? _react.default.createElement(_IconButton.default, {
        onClick: this.handleDownloadPDF
      }, _react.default.createElement(_IconFileDownload.default, {
        className: classes.topIcon
      })) : pdfKind === _constants.VIEW_PDF_KIND.FULL_RFP ? _react.default.createElement(_Button.default, {
        id: "buttons_downloaded_rfp",
        className: classes.downloadButton,
        color: "primary",
        variant: "contained",
        onClick: type === 'rfp' ? this.handleSendRfpPDF : this.handleSendBidPDF
      }, "DOWNLOAD") : null), _react.default.createElement(_IconButton.default, {
        id: pdfKind === _constants.VIEW_PDF_KIND.FULL_RFP ? 'buttons_closed_page_rfp' : undefined,
        onClick: this.handleClose
      }, _react.default.createElement(_Close.default, {
        className: classes.topIcon
      }))), _react.default.createElement(_DialogContent.default, {
        className: classes.dialogContent
      }, _react.default.createElement(_PdfView.default, {
        source: source
      })), sendStatus === _request.API_PENDING && _react.default.createElement(_LoadingIndicator.default, {
        fixed: true
      }));
    }
  }]);

  return PdfViewerModal;
}(_react.Component);

_defineProperty(PdfViewerModal, "propTypes", {
  blocker: _propTypes.default.func,
  disableDownload: _propTypes.default.bool,
  fileName: _propTypes.default.string,
  handleHide: _propTypes.default.func,
  isMobile: _propTypes.default.bool,
  sendStatus: _propTypes.default.string,
  show: _propTypes.default.bool,
  source: _propTypes.default.string,
  timezone: _propTypes.default.string,
  type: _propTypes.default.oneOf(['bid', 'rfp'])
});

var selector = (0, _reselect.createStructuredSelector)({
  isMobile: _selectors.isMobileSelector,
  sendStatus: _selectors.sendPdfStatusSelector
});
var actions = {
  sendBidPdf: _pdf.sendBidPdf,
  sendRfpPdf: _pdf.sendRfpPdf,
  setSnackbar: _globalStatus.setSnackbar
};

var _default = (0, _redux.compose)((0, _styles.withStyles)(_styles2.default), (0, _reduxModal.connectModal)({
  name: 'pdfViewerModal',
  destroyOnHide: false
}), (0, _reactRedux.connect)(selector, actions))(PdfViewerModal);

exports.default = _default;