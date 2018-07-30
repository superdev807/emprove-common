'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _KeyboardArrowDown = require('@material-ui/icons/KeyboardArrowDown');

var _KeyboardArrowDown2 = _interopRequireDefault(_KeyboardArrowDown);

var _KeyboardArrowUp = require('@material-ui/icons/KeyboardArrowUp');

var _KeyboardArrowUp2 = _interopRequireDefault(_KeyboardArrowUp);

var _PostsSectionLayout = require('../PostsSectionLayout');

var _PostsSectionLayout2 = _interopRequireDefault(_PostsSectionLayout);

var _withPosts = require('../../../../hocs/withPosts');

var _withPosts2 = _interopRequireDefault(_withPosts);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INITIAL_POSTS_TO_SHOW = 3;

var PressAndMedia = function (_Component) {
  _inherits(PressAndMedia, _Component);

  function PressAndMedia(props) {
    _classCallCheck(this, PressAndMedia);

    var _this = _possibleConstructorReturn(this, (PressAndMedia.__proto__ || Object.getPrototypeOf(PressAndMedia)).call(this, props));

    _this.handleScrollDownClick = function (event) {
      _this.setState({ scrollOpened: !_this.state.scrollOpened }, function () {
        if (_this.state.scrollOpened) {
          _this.setState({ postsToShow: null });
        } else {
          _this.setState({ postsToShow: INITIAL_POSTS_TO_SHOW });
        }
      });
    };

    _this.state = {
      postsToShow: 3,
      scrollOpened: false
    };
    return _this;
  }

  _createClass(PressAndMedia, [{
    key: 'getPosts',
    value: function getPosts() {
      var posts = this.props.posts;
      var postsToShow = this.state.postsToShow;


      if (postsToShow) {
        return posts.slice(0, postsToShow);
      }
      return posts;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          postsToShow = _state.postsToShow,
          scrollOpened = _state.scrollOpened;
      var posts = this.props.posts;

      var linkText = _react2.default.createElement(
        'div',
        { className: 'press-media__link-box' },
        _react2.default.createElement(
          'span',
          { className: 'press-media__down-text', onClick: this.handleScrollDownClick },
          'view all press & media',
          ' '
        ),
        _react2.default.createElement(
          _IconButton2.default,
          { className: 'press-media__down-icon-button', onClick: this.handleScrollDownClick },
          scrollOpened ? _react2.default.createElement(_KeyboardArrowUp2.default, null) : _react2.default.createElement(_KeyboardArrowDown2.default, null)
        )
      );
      var title = _react2.default.createElement(
        'div',
        null,
        'PRESS\xA0',
        _react2.default.createElement(
          'span',
          null,
          '&'
        ),
        '\xA0',
        _react2.default.createElement(
          'b',
          null,
          'MEDIA'
        )
      );

      return _react2.default.createElement(_PostsSectionLayout2.default, {
        className: this.props.className,
        linkRoute: '/blog',
        description: '',
        linkText: linkText,
        title: title,
        posts: this.getPosts(),
        postsToShow: postsToShow
      });
    }
  }]);

  return PressAndMedia;
}(_react.Component);

PressAndMedia.propTypes = {
  className: _propTypes2.default.string,
  posts: _propTypes2.default.array
};
exports.default = (0, _withPosts2.default)({
  params: {
    category: 'press-and-media',
    fields: 'ID,slug,title,URL,author,featured_image,excerpt,date'
  }
})(PressAndMedia);