'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _withPosts = _interopRequireDefault(require("../../../../hocs/withPosts"));

var _content = _interopRequireDefault(require("./content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _withPosts.default)({
  params: {
    number: 3,
    category: 'featured-on-site',
    fields: 'ID,slug,title,URL,author,featured_image,excerpt,date'
  }
})(_content.default);

exports.default = _default;