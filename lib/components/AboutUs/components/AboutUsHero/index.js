'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WatchHowItWorks = function WatchHowItWorks(props) {
  return _react.default.createElement("div", {
    className: "about-us-hero-watch-how-it-works"
  }, _react.default.createElement("img", {
    className: "about-us-hero-watch-how-it-works__icon",
    src: "/images/ic_play_video.png",
    onClick: props.onPlayClick
  }), _react.default.createElement("div", {
    className: "about-us-hero-watch-how-it-works__text"
  }, "WATCH ", _react.default.createElement("strong", null, "HOW IT WORKS")));
};

var AboutUsHero = function AboutUsHero(props) {
  return _react.default.createElement("section", {
    className: "about-us-hero"
  }, _react.default.createElement("div", {
    className: "about-us-hero__title"
  }, "Home Improvement ", _react.default.createElement("strong", null, "RENEWED"), _react.default.createElement(WatchHowItWorks, {
    onPlayClick: props.onPlayClick
  })));
};

var _default = AboutUsHero;
exports.default = _default;