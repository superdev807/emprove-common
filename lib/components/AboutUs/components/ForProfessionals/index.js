'use strict';

import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
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