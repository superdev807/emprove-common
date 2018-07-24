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

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _reactRouterDom = require('react-router-dom');

var _BlogPost = require('../../../BlogPost');

var _BlogPost2 = _interopRequireDefault(_BlogPost);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostSectionLayout = function (_Component) {
  _inherits(PostSectionLayout, _Component);

  function PostSectionLayout() {
    _classCallCheck(this, PostSectionLayout);

    return _possibleConstructorReturn(this, (PostSectionLayout.__proto__ || Object.getPrototypeOf(PostSectionLayout)).apply(this, arguments));
  }

  _createClass(PostSectionLayout, [{
    key: 'renderPosts',
    value: function renderPosts(posts) {
      var postsToShow = this.props.postsToShow;

      return _react2.default.createElement(
        _CSSTransitionGroup2.default,
        {
          component: 'div',
          className: 'posts-section__transition-div',
          transitionName: 'fade',
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 300 },
        posts.map(function (post, index) {
          return _react2.default.createElement(
            'div',
            { key: index, className: 'posts-section__item' },
            _react2.default.createElement(_BlogPost2.default, { post: post })
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          posts = _props.posts,
          linkRoute = _props.linkRoute,
          description = _props.description,
          isLink = _props.isLink,
          linkText = _props.linkText;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('posts-section', this.props.className), ref: function ref(container) {
            return _this2.container = container;
          } },
        _react2.default.createElement(
          'div',
          { className: 'posts-section__title' },
          title
        ),
        _react2.default.createElement(
          'div',
          null,
          description
        ),
        this.renderPosts(posts),
        _react2.default.createElement(
          'div',
          { className: 'posts-section__link-container' },
          isLink ? _react2.default.createElement(
            _reactRouterDom.Link,
            { to: linkRoute, className: 'posts-section__link-view-all' },
            linkText
          ) : linkText
        )
      );
    }
  }]);

  return PostSectionLayout;
}(_react.Component);

PostSectionLayout.propTypes = {
  className: _propTypes2.default.string,
  posts: _propTypes2.default.array,
  title: _propTypes2.default.object,
  description: _propTypes2.default.string,
  linkText: _propTypes2.default.any,
  linkRoute: _propTypes2.default.string,
  isLink: _propTypes2.default.bool,
  postsToShow: _propTypes2.default.number
};
exports.default = PostSectionLayout;