'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PressArticle = require('./PressArticle');

var _PressArticle2 = _interopRequireDefault(_PressArticle);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articles = [{
  id: 1,
  title: 'Vivamus in tortor',
  snippet: 'In quis justo non diam consectetur consectetur nec faucibus eros. Aliquam augue magna, gravida in fringilla id, tempus sed lectus. Etiam pharetra consequat est sit amet cursus.'
}, {
  id: 2,
  title: 'Nulla dapibus ex',
  snippet: 'Nam vitae risus in turpis aliquam congue ac vel odio. Quisque vel nisi sodales, dignissim felis nec, efficitur ex. In hac habitasse platea dictumst.'
}, {
  id: 3,
  title: 'Fusce maximus mi',
  snippet: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu lectus posuere, lacinia libero nec, mattis massa. Curabitur fringilla tristique vehicula.'
}];

var PressAndMedia = function PressAndMedia(props) {
  return _react2.default.createElement(
    'section',
    { className: 'press-and-media' },
    _react2.default.createElement(
      'div',
      { className: 'press-and-media__title' },
      'Press & ',
      _react2.default.createElement(
        'strong',
        null,
        'Media'
      )
    ),
    _react2.default.createElement(
      'p',
      { className: 'press-and-media__paragraph' },
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis, tellus non aliquam gravida.'
    ),
    _react2.default.createElement(
      'div',
      { className: 'press-and-media__articles' },
      articles.map(function (article) {
        return _react2.default.createElement(_PressArticle2.default, { className: 'press-and-media__article', key: article.id, article: article });
      })
    )
  );
};

exports.default = PressAndMedia;