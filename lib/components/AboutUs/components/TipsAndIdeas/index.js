'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withPosts = require('~/hocs/withPosts');

var _withPosts2 = _interopRequireDefault(_withPosts);

var _PostsSectionLayout = require('../PostsSectionLayout');

var _PostsSectionLayout2 = _interopRequireDefault(_PostsSectionLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TipsAndIdeas = function (_Component) {
  _inherits(TipsAndIdeas, _Component);

  function TipsAndIdeas() {
    _classCallCheck(this, TipsAndIdeas);

    return _possibleConstructorReturn(this, (TipsAndIdeas.__proto__ || Object.getPrototypeOf(TipsAndIdeas)).apply(this, arguments));
  }

  _createClass(TipsAndIdeas, [{
    key: 'render',
    value: function render() {
      var posts = this.props.posts;

      var title = _react2.default.createElement(
        'div',
        null,
        'TIPS\xA0',
        _react2.default.createElement(
          'span',
          null,
          '&'
        ),
        '\xA0',
        _react2.default.createElement(
          'b',
          null,
          'IDEAS'
        )
      );

      return _react2.default.createElement(_PostsSectionLayout2.default, {
        description: 'Get Ideas and Advice for Your Home Improvement Projects',
        title: title,
        posts: posts,
        isLink: true,
        linkRoute: '/blog',
        linkText: 'View all tips and ideas'
      });
    }
  }]);

  return TipsAndIdeas;
}(_react.Component);

exports.default = (0, _withPosts2.default)({
  params: {
    number: 3,
    category: 'featured-on-site',
    fields: 'ID,title,URL,author,featured_image,excerpt,date'
  }
})(TipsAndIdeas);