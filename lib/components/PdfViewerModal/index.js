'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxModal = require("redux-modal");

var _modal = _interopRequireDefault(require("./modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _reduxModal.connectModal)({
  name: 'pdfViewerModal',
  destroyOnHide: false
})(_modal["default"]);

exports["default"] = _default;