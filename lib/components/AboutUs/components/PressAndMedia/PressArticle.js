'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./press-article-styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PressArticle = function PressArticle(props) {
  return _react2.default.createElement(
    'article',
    { className: (0, _classnames2.default)('press-article', props.className) },
    _react2.default.createElement(
      'div',
      { className: 'press-article__title' },
      props.article.title
    ),
    _react2.default.createElement(
      'div',
      { className: 'press-article__snippet' },
      props.article.snippet
    ),
    _react2.default.createElement(
      'a',
      { className: 'press-article__full-story-link', href: '#' },
      'Read the full story'
    )
  );
};

PressArticle.propTypes = {
  article: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string.isRequired
};

exports.default = PressArticle;