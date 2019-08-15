'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './style.scss';
import styles from './styles';

var ForProfessionals =
/*#__PURE__*/
function (_Component) {
  _inherits(ForProfessionals, _Component);

  function ForProfessionals() {
    _classCallCheck(this, ForProfessionals);

    return _possibleConstructorReturn(this, _getPrototypeOf(ForProfessionals).call(this));
  }

  _createClass(ForProfessionals, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onStep = _this$props.onStep,
          className = _this$props.className,
          classes = _this$props.classes,
          id = _this$props.id;
      return React.createElement("div", {
        id: id,
        className: cx('forProfessionalsContainer', className)
      }, React.createElement("div", {
        id: "forProfessionals",
        className: "forProfessionalsContent",
        title: "A free platform for contractors to efficiently bid for projects that are well-defined and vetted!"
      }, React.createElement("div", {
        id: "contractorBox",
        className: cx({
          on: onStep
        }, 'contractorBox')
      }, React.createElement("div", {
        className: "forProfessionalsContentTitle"
      }, "FOR ", React.createElement("b", null, "PROFESSIONALS")), React.createElement("div", {
        className: "orangeLine"
      }), React.createElement("div", {
        id: "contractorText",
        className: "contractorTextStyle"
      }, "A new place to ", React.createElement("b", null, "grow your business")), React.createElement("div", null, React.createElement("div", {
        id: "contractorButton",
        className: "contractorButtonContainer"
      }, React.createElement(Button, {
        variant: "contained",
        color: "primary",
        onClick: this.props.onClick,
        fullWidth: true,
        className: classes.contractorButtonStyle
      }, "LEARN MORE"))))), React.createElement("div", {
        style: {
          maxWidth: '85vw',
          margin: 'auto'
        }
      }, React.createElement("div", {
        id: "forProfessionalsTextsBox",
        className: onStep ? 'on' : undefined,
        style: {
          position: 'relative'
        }
      }, React.createElement("div", {
        className: "forProfessionalsHeaderContainer"
      }, React.createElement("p", {
        className: "forProfessionalsHeader"
      }, React.createElement("b", null, "PRICE"), " TO THE ", React.createElement("b", null, "MOST QUALIFIED"), " CONSUMER IN THE MARKET ", React.createElement("b", null, "FOR FREE"))), React.createElement("div", {
        className: "forProfessionalsFirstTitleBoxStyle"
      }, React.createElement("div", {
        className: "forProfessionalsTitleBox",
        style: {
          flex: 1,
          textAlign: 'right'
        }
      }, React.createElement("p", {
        className: "forProfessionalsTitle"
      }, "Project pricing briefs emailed directly to your inbox ")), React.createElement("div", {
        style: {
          margin: 'auto 2vw'
        }
      }, React.createElement("img", {
        src: "./images/arrows-right.png"
      })), React.createElement("div", {
        className: "forProfessionalsTitleBox",
        style: {
          flex: 1,
          textAlign: 'left'
        }
      }, React.createElement("p", {
        className: "forProfessionalsTitle"
      }, "No more wasted time and money cold calling!"))), React.createElement("div", {
        className: "forProfessionalsTitleBoxStyle"
      }, React.createElement("div", {
        className: "forProfessionalsTitleBox",
        style: {
          flex: 1,
          textAlign: 'right'
        }
      }, React.createElement("p", {
        className: "forProfessionalsTitle"
      }, "Scope of work is comprehensive and listed by trade")), React.createElement("div", {
        style: {
          margin: 'auto 2vw'
        }
      }, React.createElement("img", {
        src: "./images/arrows-right.png"
      })), React.createElement("div", {
        className: "forProfessionalsTitleBox",
        style: {
          flex: 1,
          textAlign: 'left'
        }
      }, React.createElement("p", {
        className: "forProfessionalsTitle"
      }, "The scope to price is clear and straightforward!"))), React.createElement("div", {
        className: "forProfessionalsTitleBoxStyle"
      }, React.createElement("div", {
        className: "forProfessionalsTitleBox",
        style: {
          flex: 1,
          textAlign: 'right'
        }
      }, React.createElement("p", {
        className: "forProfessionalsTitle"
      }, "Consumer cost expectations set to local market rates")), React.createElement("div", {
        style: {
          margin: 'auto 2vw'
        }
      }, React.createElement("img", {
        src: "./images/arrows-right.png"
      })), React.createElement("div", {
        className: "forProfessionalsTitleBox",
        style: {
          flex: 1,
          textAlign: 'left'
        }
      }, React.createElement("p", {
        className: "forProfessionalsTitle"
      }, "Sticker-shock is removed from the equation!"))))));
    }
  }]);

  return ForProfessionals;
}(Component);

ForProfessionals.propTypes = {
  onStep: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
export default withStyles(styles)(ForProfessionals);