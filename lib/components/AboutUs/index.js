'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _AboutUsHero = _interopRequireDefault(require("./components/AboutUsHero"));

var _AboutTheCompany = _interopRequireDefault(require("./components/AboutTheCompany"));

var _BidItPartial = _interopRequireDefault(require("./components/BidItPartial"));

var _CostItPartial = _interopRequireDefault(require("./components/CostItPartial"));

var _DreamItPartial = _interopRequireDefault(require("./components/DreamItPartial"));

var _ForProfessionals = _interopRequireDefault(require("./components/ForProfessionals"));

var _content = _interopRequireDefault(require("./components/PressAndMedia/content"));

var _TheTeam = _interopRequireDefault(require("./components/TheTeam"));

var _content2 = _interopRequireDefault(require("./components/TipsAndIdeas/content"));

var _Container = _interopRequireDefault(require("../Container"));

require("./styles.scss");

require("./partial-styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SectionIndex = {
  DREAM_IT: 3,
  COST_IT: 4,
  BID_IT: 5,
  FOR_PROFESSIONALS: 6
};

var AboutUs =
/*#__PURE__*/
function (_Component) {
  _inherits(AboutUs, _Component);

  function AboutUs(props) {
    var _this;

    _classCallCheck(this, AboutUs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AboutUs).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event) {
      var sectionIndex = -1;
      var innerHeight = window.innerHeight * 0.75;
      var dreamIt = document.getElementById('dreamIt');

      if (dreamIt && dreamIt.getBoundingClientRect().top < innerHeight) {
        sectionIndex = SectionIndex.DREAM_IT;
      }

      var costIt = document.getElementById('costIt');

      if (costIt && costIt.getBoundingClientRect().top < innerHeight) {
        sectionIndex = SectionIndex.COST_IT;
      }

      var bidIt = document.getElementById('bidIt');

      if (bidIt && bidIt.getBoundingClientRect().top < innerHeight) {
        sectionIndex = SectionIndex.BID_IT;
      }

      var forProfessionals = document.getElementById('about-us-for-professionals-section');

      if (forProfessionals && forProfessionals.getBoundingClientRect().top < innerHeight) {
        sectionIndex = SectionIndex.FOR_PROFESSIONALS;
      }

      if (_this.state.sectionIndex !== sectionIndex) {
        _this.setState({
          sectionIndex: sectionIndex
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStart", function () {
      var _this$props = _this.props,
          history = _this$props.history,
          fromContractor = _this$props.fromContractor;

      if (fromContractor) {
        window.location.replace(process.env.CONSUMER_DOMAIN);
      } else {
        history.push('/browse');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleProStart", function () {
      var _this$props2 = _this.props,
          history = _this$props2.history,
          fromContractor = _this$props2.fromContractor;

      if (fromContractor) {
        history.push('/');
      } else {
        history.push('/pro');
      }
    });

    _this.state = {
      sectionIndex: -1
    };
    return _this;
  }

  _createClass(AboutUs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var domain = window.location.protocol + '//' + window.location.host + '/';
      var actionText = 'Start Now';
      return _react["default"].createElement("main", {
        className: (0, _classnames["default"])(this.props.className)
      }, _react["default"].createElement(_AboutUsHero["default"], {
        onPlayClick: this.props.onPlayClick
      }), _react["default"].createElement(_Container["default"], null, _react["default"].createElement(_AboutTheCompany["default"], {
        className: "about-us__about-the-company"
      }), _react["default"].createElement(_DreamItPartial["default"], {
        domain: domain,
        onStep: this.state.sectionIndex >= SectionIndex.DREAM_IT,
        actionText: actionText,
        action: this.handleStart
      }), _react["default"].createElement("div", {
        id: "tab1",
        style: {
          height: '20vh'
        }
      }), _react["default"].createElement(_CostItPartial["default"], {
        domain: domain,
        onStep: this.state.sectionIndex >= SectionIndex.COST_IT,
        actionText: actionText,
        action: this.handleStart
      }), _react["default"].createElement("div", {
        style: {
          height: '13vh'
        }
      }), _react["default"].createElement("div", {
        id: "tab2",
        style: {
          height: '20vh'
        }
      }), _react["default"].createElement(_BidItPartial["default"], {
        domain: domain,
        onStep: this.state.sectionIndex >= SectionIndex.BID_IT,
        actionText: actionText,
        action: this.handleStart
      })), _react["default"].createElement(_ForProfessionals["default"], {
        id: "about-us-for-professionals-section",
        className: "about-us__for-professionals",
        onStep: this.state.sectionIndex >= SectionIndex.FOR_PROFESSIONALS,
        onClick: this.handleProStart
      }), _react["default"].createElement(_Divider["default"], {
        className: "about-us__divider"
      }), _react["default"].createElement(_Container["default"], null, _react["default"].createElement("div", {
        id: "tab3"
      }, _react["default"].createElement(_content2["default"], {
        className: "about-us__tips-and-ideas",
        fromContractor: this.props.fromContractor,
        posts: this.props.tipsAndIdeasPosts,
        postsLoading: this.props.postsLoading
      }))), _react["default"].createElement(_Divider["default"], {
        className: "about-us__divider"
      }), _react["default"].createElement(_Container["default"], null, _react["default"].createElement(_TheTeam["default"], {
        className: "about-us__the-team",
        fromContractor: this.props.fromContractor
      })), _react["default"].createElement(_Divider["default"], {
        className: "about-us__divider"
      }), _react["default"].createElement(_Container["default"], null, _react["default"].createElement("div", {
        id: "tab4"
      }, _react["default"].createElement(_content["default"], {
        className: "about-us__press-and-media",
        fromContractor: this.props.fromContractor,
        posts: this.props.pressAndMediaPosts,
        postsLoading: this.props.postsLoading
      }))));
    }
  }]);

  return AboutUs;
}(_react.Component);

AboutUs.propTypes = {
  className: _propTypes["default"].string,
  fromContractor: _propTypes["default"].bool
};
AboutUs.defaultProps = {
  fromContractor: false
};
var _default = AboutUs;
exports["default"] = _default;