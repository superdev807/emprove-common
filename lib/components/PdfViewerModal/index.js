'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogTitle = require('@material-ui/core/DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _IconFileDownload = require('../../icons/IconFileDownload');

var _IconFileDownload2 = _interopRequireDefault(_IconFileDownload);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _LoadingIndicator = require('../LoadingIndicator');

var _LoadingIndicator2 = _interopRequireDefault(_LoadingIndicator);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxModal = require('redux-modal');

var _reselect = require('reselect');

var _styles = require('@material-ui/core/styles');

var _PdfView = require('../PdfView');

var _PdfView2 = _interopRequireDefault(_PdfView);

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

var _request = require('../../redux/api/request');

var _constants = require('../../config/constants');

var _pdf = require('../../redux/modules/pdf');

var _selectors = require('../../redux/selectors');

var _globalStatus = require('../../redux/modules/globalStatus');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PdfViewerModal = function (_Component) {
  _inherits(PdfViewerModal, _Component);

  function PdfViewerModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PdfViewerModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PdfViewerModal.__proto__ || Object.getPrototypeOf(PdfViewerModal)).call.apply(_ref, [this].concat(args))), _this), _this.handleSendRfpPDF = function () {
      var _this$props = _this.props,
          fileName = _this$props.fileName,
          rfpId = _this$props.rfpId,
          sendRfpPdf = _this$props.sendRfpPdf,
          setSnackbar = _this$props.setSnackbar,
          timezone = _this$props.timezone;


      if (rfpId) {
        sendRfpPdf({
          id: rfpId,
          data: {
            fileName: fileName,
            timezone: timezone
          },
          success: function success() {
            setSnackbar({ message: 'Successfully sent!', variant: 'success' });
          }
        });
      }
    }, _this.handleSendBidPDF = function () {
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
            setSnackbar({ message: 'Successfully sent!', variant: 'success' });
          }
        });
      }
    }, _this.handleClose = function () {
      var _this$props3 = _this.props,
          handleHide = _this$props3.handleHide,
          onClose = _this$props3.onClose;

      onClose && onClose();
      handleHide();
    }, _this.handleDownloadPDF = function () {
      var link = document.createElement('a');
      var source = _this.props.source;

      if (source.indexOf('data:application/pdf;base64,') === -1) {
        link.href = source;
      } else {
        var raw = atob(source.slice(28));
        var rawLength = raw.length;
        var array = new Uint8Array(rawLength);

        for (var i = 0; i < rawLength; i++) {
          array[i] = raw.charCodeAt(i);
        }
        link.href = URL.createObjectURL(new Blob([array], { type: 'application/pdf' }));
      }
      link.download = _this.props.fileName;
      link.dispatchEvent(new MouseEvent('click'));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PdfViewerModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          isMobile = _props.isMobile,
          pdfKind = _props.pdfKind,
          sendStatus = _props.sendStatus,
          source = _props.source,
          show = _props.show,
          type = _props.type;


      return _react2.default.createElement(
        _Dialog2.default,
        { open: show, fullScreen: isMobile, maxWidth: false, onClose: this.handleClose, className: classes.noMarginTop },
        _react2.default.createElement(
          _DialogTitle2.default,
          { className: classes.topIconBox },
          !isMobile ? _react2.default.createElement(
            _IconButton2.default,
            { onClick: this.handleDownloadPDF },
            _react2.default.createElement(_IconFileDownload2.default, { className: classes.topIcon })
          ) : pdfKind === _constants.VIEW_PDF_KIND.FULL_RFP ? _react2.default.createElement(
            _Button2.default,
            {
              id: 'buttons_downloaded_rfp',
              className: classes.downloadButton,
              color: 'primary',
              variant: 'contained',
              onClick: type === 'rfp' ? this.handleSendRfpPDF : this.handleSendBidPDF },
            'DOWNLOAD'
          ) : null,
          _react2.default.createElement(
            _IconButton2.default,
            { id: pdfKind === _constants.VIEW_PDF_KIND.FULL_RFP ? 'buttons_closed_page_rfp​' : undefined, onClick: this.handleClose },
            _react2.default.createElement(_Close2.default, { className: classes.topIcon })
          )
        ),
        _react2.default.createElement(
          _DialogContent2.default,
          { className: classes.dialogContent },
          _react2.default.createElement(_PdfView2.default, { source: source })
        ),
        sendStatus === _request.API_PENDING && _react2.default.createElement(_LoadingIndicator2.default, { fixed: true })
      );
    }
  }]);

  return PdfViewerModal;
}(_react.Component);

PdfViewerModal.propTypes = {
  fileName: _propTypes2.default.string,
  handleHide: _propTypes2.default.func,
  isMobile: _propTypes2.default.bool,
  sendStatus: _propTypes2.default.string,
  show: _propTypes2.default.bool,
  source: _propTypes2.default.string,
  timezone: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['bid', 'rfp'])
};


var selector = (0, _reselect.createStructuredSelector)({
  isMobile: _selectors.isMobileSelector,
  sendStatus: _selectors.sendPdfStatusSelector
});

var actions = {
  sendBidPdf: _pdf.sendBidPdf,
  sendRfpPdf: _pdf.sendRfpPdf,
  setSnackbar: _globalStatus.setSnackbar
};

exports.default = (0, _redux.compose)((0, _styles.withStyles)(_styles3.default), (0, _reduxModal.connectModal)({
  name: 'pdfViewerModal',
  destroyOnHide: false
}), (0, _reactRedux.connect)(selector, actions))(PdfViewerModal);