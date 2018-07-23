'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WatchHowItWorks = function WatchHowItWorks(props) {
  return _react2.default.createElement(
    'div',
    { className: 'about-us-hero-watch-how-it-works' },
    _react2.default.createElement('img', { className: 'about-us-hero-watch-how-it-works__icon', src: '/images/ic_play_video.png', onClick: props.onPlayClick }),
    _react2.default.createElement(
      'div',
      { className: 'about-us-hero-watch-how-it-works__text' },
      'WATCH ',
      _react2.default.createElement(
        'strong',
        null,
        'HOW IT WORKS'
      )
    )
  );
};

var AboutUsHero = function AboutUsHero(props) {
  return _react2.default.createElement(
    'section',
    { className: 'about-us-hero' },
    _react2.default.createElement(
      'div',
      { className: 'about-us-hero__title' },
      'Home Improvement ',
      _react2.default.createElement(
        'strong',
        null,
        'Renewed'
      ),
      _react2.default.createElement(WatchHowItWorks, { onPlayClick: props.onPlayClick })
    )
  );
};

exports.default = AboutUsHero;