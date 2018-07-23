'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = require('react-router-dom');

var _pureFunctions = require('../../utils/pureFunctions');

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogPost = function BlogPost(_ref) {
  var post = _ref.post;

  var url = '';
  if (post && post.URL) {
    url = post.URL.substr(process.env.BLOG_DOMAIN.length, post.URL.length);
  }

  return _react2.default.createElement(
    'div',
    { className: 'post-item' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { className: 'post-item__link-wrapper', to: '/blog/' + url },
      _react2.default.createElement('img', { className: 'post-item__image', src: post.featured_image }),
      _react2.default.createElement(
        'div',
        { className: 'post-item__title' },
        _react2.default.createElement(
          'b',
          null,
          (0, _pureFunctions.decodeSpecialCharacters)(post.title)
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'post-item__date' },
      (0, _moment2.default)(post.date).format('MMMM DD, YYYY')
    ),
    _react2.default.createElement('div', { className: 'post-item__excerpt', dangerouslySetInnerHTML: { __html: post.excerpt } }),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { className: 'post-item__read-story', to: '/blog/' + url },
      _react2.default.createElement(
        'b',
        null,
        'READ THE FULL STORY'
      )
    )
  );
};

exports.default = BlogPost;