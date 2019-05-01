'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PostsSectionLayout = _interopRequireDefault(require("../PostsSectionLayout"));

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

var INITIAL_POSTS_TO_SHOW = 3;

var PressAndMedia =
/*#__PURE__*/
function (_Component) {
  _inherits(PressAndMedia, _Component);

  function PressAndMedia(props) {
    var _this;

    _classCallCheck(this, PressAndMedia);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PressAndMedia).call(this, props));
    _this.state = {
      postsToShow: 3
    };
    return _this;
  }

  _createClass(PressAndMedia, [{
    key: "getPosts",
    value: function getPosts() {
      var posts = this.props.posts;
      var postsToShow = this.state.postsToShow;

      if (postsToShow) {
        return posts.slice(0, postsToShow);
      }

      return posts;
    }
  }, {
    key: "render",
    value: function render() {
      var postsToShow = this.state.postsToShow;
      var _this$props = this.props,
          posts = _this$props.posts,
          fromContractor = _this$props.fromContractor;

      var title = _react["default"].createElement("div", null, "PRESS\xA0", _react["default"].createElement("span", null, "&"), "\xA0", _react["default"].createElement("b", null, "MEDIA"));

      return _react["default"].createElement(_PostsSectionLayout["default"], {
        className: this.props.className,
        linkRoute: "/press-and-media",
        fromContractor: fromContractor,
        description: "",
        linkText: "view all press and media",
        title: title,
        isLink: true,
        posts: this.getPosts(),
        postType: "press-and-media",
        postsToShow: postsToShow
      });
    }
  }]);

  return PressAndMedia;
}(_react.Component);

_defineProperty(PressAndMedia, "propTypes", {
  className: _propTypes["default"].string,
  posts: _propTypes["default"].array
});

var _default = PressAndMedia;
exports["default"] = _default;