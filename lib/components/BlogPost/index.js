'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _pureFunctions = require("../../utils/pureFunctions");

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BlogPost =
/*#__PURE__*/
function (_Component) {
  _inherits(BlogPost, _Component);

  function BlogPost() {
    _classCallCheck(this, BlogPost);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlogPost).apply(this, arguments));
  }

  _createClass(BlogPost, [{
    key: "getURL",
    value: function getURL() {
      var _this$props = this.props,
          post = _this$props.post,
          postType = _this$props.postType;

      if (post && post.URL) {
        if (this.props.fromContractor) {
          return "".concat(process.env.CONSUMER_DOMAIN, "/").concat(postType, "/").concat(post.ID, "/").concat(post.slug);
        }

        return "/".concat(postType, "/").concat(post.ID, "/").concat(post.slug);
      }
    }
  }, {
    key: "getFeaturedImage",
    value: function getFeaturedImage() {
      var imageSize = this.props.imageSize;
      return this.props.post.featured_image + (imageSize ? imageSize : '');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          ids = _this$props2.ids,
          post = _this$props2.post;
      return _react["default"].createElement("div", {
        className: "post-item"
      }, _react["default"].createElement("a", {
        id: ids.blogTitle,
        className: "post-item__link-wrapper",
        href: this.getURL()
      }, _react["default"].createElement("img", {
        className: "post-item__image",
        src: this.getFeaturedImage()
      }), _react["default"].createElement("div", {
        className: "post-item__title"
      }, _react["default"].createElement("b", null, (0, _pureFunctions.decodeSpecialCharacters)(post.title)))), _react["default"].createElement("div", {
        className: "post-item__date"
      }, (0, _moment["default"])(post.date).format('MMMM DD, YYYY')), _react["default"].createElement("div", {
        className: "post-item__excerpt",
        dangerouslySetInnerHTML: {
          __html: post.excerpt
        }
      }), _react["default"].createElement("a", {
        id: ids.readFull,
        className: "post-item__read-story",
        href: this.getURL()
      }, _react["default"].createElement("b", null, "READ THE FULL STORY")));
    }
  }]);

  return BlogPost;
}(_react.Component);

_defineProperty(BlogPost, "propTypes", {
  ids: _propTypes["default"].object,
  post: _propTypes["default"].any,
  postType: _propTypes["default"].oneOf(['blog', 'press-and-media']),
  fromContractor: _propTypes["default"].bool,
  imageSize: _propTypes["default"].string
});

_defineProperty(BlogPost, "defaultProps", {
  ids: {},
  postType: 'blog'
});

var _default = BlogPost;
exports["default"] = _default;