'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactRouterDom = require('react-router-dom');

var _pureFunctions = require('../../utils/pureFunctions');

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPost = function (_Component) {
  _inherits(BlogPost, _Component);

  function BlogPost() {
    _classCallCheck(this, BlogPost);

    return _possibleConstructorReturn(this, (BlogPost.__proto__ || Object.getPrototypeOf(BlogPost)).apply(this, arguments));
  }

  _createClass(BlogPost, [{
    key: 'getURL',
    value: function getURL() {
      var post = this.props.post;


      var url = '';
      if (post && post.URL) {
        url = post.ID + '/' + post.slug;
      }
      return url;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          post = _props.post,
          postType = _props.postType;


      return _react2.default.createElement(
        'div',
        { className: 'post-item' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'post-item__link-wrapper', to: { pathname: '/' + postType + '/' + this.getURL(), state: { reload: false } } },
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
          { className: 'post-item__link-wrapper', to: { pathname: '/' + postType + '/' + this.getURL(), state: { reload: false } } },
          _react2.default.createElement(
            'b',
            null,
            'READ THE FULL STORY'
          )
        )
      );
    }
  }]);

  return BlogPost;
}(_react.Component);

BlogPost.propTypes = {
  post: _propTypes2.default.any,
  postType: _propTypes2.default.oneOf(['blog', 'press-and-media'])
};
exports.default = BlogPost;