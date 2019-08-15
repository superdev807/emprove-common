'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _CheckBoxOutlineBlank = _interopRequireDefault(require("@material-ui/icons/CheckBoxOutlineBlank"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _get = _interopRequireDefault(require("lodash/get"));

var _includes = _interopRequireDefault(require("lodash/includes"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropdownMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu(props) {
    var _this;

    _classCallCheck(this, DropdownMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).call(this, props));
    _this.state = {
      showMenu: true,
      showDesignStyleMenu: true,
      showUserLevel3Menu: true
    };
    return _this;
  }

  _createClass(DropdownMenu, [{
    key: "renderDropdownMenu",
    value: function renderDropdownMenu() {
      var _this$props = this.props,
          classes = _this$props.classes,
          disableClickAway = _this$props.disableClickAway,
          menuItems = _this$props.menuItems,
          onSelectMenuItem = _this$props.onSelectMenuItem,
          selectedItems = _this$props.selectedItems,
          shouldSelectObject = _this$props.shouldSelectObject,
          onClearAll = _this$props.onClearAll,
          onClose = _this$props.onClose;

      var menuContent = _react["default"].createElement(_FormGroup["default"], null, _react["default"].createElement("div", {
        className: (0, _classnames["default"])('drop-down-menu__items-container', (0, _get["default"])(classes, 'itemsContainer'))
      }, menuItems.map(function (item) {
        var selected = shouldSelectObject ? (selectedItems || []).some(function (ul3) {
          return ul3.id === item.id;
        }) : (0, _includes["default"])(selectedItems || [], item.id);
        return _react["default"].createElement(_FormControlLabel["default"], {
          className: (0, _classnames["default"])('drop-down-menu__item', (0, _get["default"])(classes, 'item')),
          classes: {
            label: (0, _classnames["default"])('drop-down-menu__item-label', {
              'drop-down-menu__item-label--selected': selected
            })
          },
          key: item.id,
          control: _react["default"].createElement(_Checkbox["default"], {
            className: "drop-down-menu__checkbox",
            checked: selected,
            onChange: shouldSelectObject ? onSelectMenuItem(item) : onSelectMenuItem(item.id),
            icon: _react["default"].createElement(_CheckBoxOutlineBlank["default"], {
              fontSize: "small"
            }),
            checkedIcon: _react["default"].createElement(_CheckBox["default"], {
              color: "primary",
              fontSize: "small"
            }),
            value: "".concat(item.id) //Checkbox wants value to be type string

          }),
          label: item.label
        });
      })), onClearAll && _react["default"].createElement("div", {
        className: "drop-down-menu__footer"
      }, _react["default"].createElement("div", {
        className: "drop-down-menu__divider"
      }), _react["default"].createElement(_Button["default"], {
        className: "drop-down-menu__clear-btn",
        onClick: function onClick() {
          return onClearAll();
        }
      }, "Clear All")));

      return disableClickAway ? menuContent : _react["default"].createElement(_ClickAwayListener["default"], {
        onClickAway: onClose
      }, menuContent);
    }
  }, {
    key: "render",
    value: function render() {
      var onClose = this.props.onClose;
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])('drop-down-menu', {
          'drop-down-menu--mobile': this.props.forMobile
        })
      }, _react["default"].createElement("div", {
        className: (0, _classnames["default"])('drop-down-menu__menu', {
          'drop-down-menu__menu--mobile': this.props.forMobile
        })
      }, onClose && _react["default"].createElement(_IconButton["default"], {
        className: (0, _classnames["default"])('drop-down-menu__menu-close'),
        onClick: onClose
      }, _react["default"].createElement(_Close["default"], {
        className: "drop-down-menu__menu-close-btn"
      })), _react["default"].createElement(_Collapse["default"], {
        "in": this.state.showMenu,
        timeout: "auto"
      }, this.renderDropdownMenu())));
    }
  }]);

  return DropdownMenu;
}(_react.Component);

_defineProperty(DropdownMenu, "propTypes", {
  classes: _propTypes["default"].object,
  disableClickAway: _propTypes["default"].bool,
  menuItems: _propTypes["default"].array,
  onSelectMenuItem: _propTypes["default"].func.isRequired,
  shouldSelectObject: _propTypes["default"].bool,
  onClearAll: _propTypes["default"].func
});

_defineProperty(DropdownMenu, "defaultProps", {
  classes: {},
  disableClickAway: false,
  menuItems: [],
  shouldSelectObject: false
});

var _default = DropdownMenu;
exports["default"] = _default;