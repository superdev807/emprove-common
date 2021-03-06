'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CSSTransition = _interopRequireDefault(require("react-transition-group/CSSTransition"));

var _TransitionGroup = _interopRequireDefault(require("react-transition-group/TransitionGroup"));

var _reactRouterDom = require("react-router-dom");

var _BlogPost = _interopRequireDefault(require("../../../BlogPost"));

var _LoadingIndicator = _interopRequireDefault(require("../../../LoadingIndicator"));

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

var PostsSectionLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(PostsSectionLayout, _Component);

  function PostsSectionLayout() {
    _classCallCheck(this, PostsSectionLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(PostsSectionLayout).apply(this, arguments));
  }

  _createClass(PostsSectionLayout, [{
    key: "renderPosts",
    value: function renderPosts(posts) {
      var _this = this;

      var ids = this.props.ids;

      if (this.props.postsLoading) {
        return _react["default"].createElement(_LoadingIndicator["default"], {
          size: 48
        });
      } else {
        return _react["default"].createElement(_TransitionGroup["default"], {
          component: "div",
          className: "posts-section__transition-div"
        }, posts.map(function (post, index) {
          return _react["default"].createElement(_CSSTransition["default"], {
            key: index,
            timeout: {
              enter: 500,
              exit: 300
            }
          }, _react["default"].createElement("div", {
            key: index,
            className: "posts-section__item"
          }, _react["default"].createElement(_BlogPost["default"], {
            ids: {
              blogTitle: "".concat(ids.blogTitlePrefix).concat(index + 1),
              readFull: "".concat(ids.readFullPrefix).concat(index + 1)
            },
            postType: _this.props.postType,
            post: post,
            fromContractor: _this.props.fromContractor,
            imageSize: _this.props.imageSize
          })));
        }));
      }
    }
  }, {
    key: "renderLink",
    value: function renderLink() {
      var _this$props = this.props,
          isLink = _this$props.isLink,
          linkRoute = _this$props.linkRoute,
          linkText = _this$props.linkText;

      if (this.props.fromContractor) {
        if (isLink) {
          return _react["default"].createElement("a", {
            href: process.env.CONSUMER_DOMAIN + linkRoute,
            className: "posts-section__link-view-all"
          }, linkText);
        }
      } else {
        if (isLink) {
          return _react["default"].createElement(_reactRouterDom.Link, {
            id: this.props.ids.seeMore,
            to: linkRoute,
            className: "posts-section__link-view-all"
          }, linkText);
        }
      }

      return linkText;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])('posts-section', this.props.className),
        ref: function ref(container) {
          return _this2.container = container;
        }
      }, _react["default"].createElement("div", {
        className: "posts-section__title"
      }, this.props.title), _react["default"].createElement("div", {
        className: "posts-section__description"
      }, this.props.description), this.renderPosts(this.props.posts), _react["default"].createElement("div", {
        className: "posts-section__link-container"
      }, this.renderLink()));
    }
  }]);

  return PostsSectionLayout;
}(_react.Component);

_defineProperty(PostsSectionLayout, "propTypes", {
  className: _propTypes["default"].string,
  ids: _propTypes["default"].object,
  posts: _propTypes["default"].array,
  title: _propTypes["default"].object,
  description: _propTypes["default"].string,
  linkText: _propTypes["default"].any,
  linkRoute: _propTypes["default"].string,
  isLink: _propTypes["default"].bool,
  postsToShow: _propTypes["default"].number,
  postType: _propTypes["default"].oneOf(['blog', 'press-and-media']),
  imageSize: _propTypes["default"].string
});

_defineProperty(PostsSectionLayout, "defaultProps", {
  ids: {}
});

var _default = PostsSectionLayout;
exports["default"] = _default;