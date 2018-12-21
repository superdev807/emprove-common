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
      var _props = this.props,
          ids = _props.ids,
          postsToShow = _props.postsToShow,
          postType = _props.postType,
          fromContractor = _props.fromContractor;

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
            _react2.default.createElement(_BlogPost2.default, { ids: { blogTitle: '' + ids.blogTitlePrefix + (index + 1), readFull: '' + ids.readFullPrefix + (index + 1) }, postType: postType, post: post, fromContractor: fromContractor })
          );
        })
      );
    }
  }, {
    key: 'renderLink',
    value: function renderLink() {
      var _props2 = this.props,
          ids = _props2.ids,
          isLink = _props2.isLink,
          fromContractor = _props2.fromContractor,
          linkRoute = _props2.linkRoute,
          linkText = _props2.linkText;


      if (fromContractor) {
        if (isLink) {
          return _react2.default.createElement(
            'a',
            { href: process.env.CONSUMER_DOMAIN + linkRoute, className: 'posts-section__link-view-all' },
            linkText
          );
        }
      } else {
        if (isLink) {
          return _react2.default.createElement(
            _reactRouterDom.Link,
            { id: ids.seeMore, to: linkRoute, className: 'posts-section__link-view-all' },
            linkText
          );
        }
      }
      return linkText;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          title = _props3.title,
          posts = _props3.posts,
          description = _props3.description;


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
          { className: 'posts-section__description' },
          description
        ),
        this.renderPosts(posts),
        _react2.default.createElement(
          'div',
          { className: 'posts-section__link-container' },
          this.renderLink()
        )
      );
    }
  }]);

  return PostSectionLayout;
}(_react.Component);

PostSectionLayout.propTypes = {
  className: _propTypes2.default.string,
  ids: _propTypes2.default.object,
  posts: _propTypes2.default.array,
  title: _propTypes2.default.object,
  description: _propTypes2.default.string,
  linkText: _propTypes2.default.any,
  linkRoute: _propTypes2.default.string,
  isLink: _propTypes2.default.bool,
  postsToShow: _propTypes2.default.number,
  postType: _propTypes2.default.oneOf(['blog', 'press-and-media'])
};
PostSectionLayout.propTypes = {
  ids: {}
};
exports.default = PostSectionLayout;