'use strict';

import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import React from 'react';
import { FormattedHTMLMessage } from 'react-intl'; // This component currently uses react-intl, but in the future the internal
// implementation can be changed to use our own in-house translation infrastructure.

var TranslatedMessage =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TranslatedMessage, _React$PureComponent);

  function TranslatedMessage() {
    _classCallCheck(this, TranslatedMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(TranslatedMessage).apply(this, arguments));
  }

  _createClass(TranslatedMessage, [{
    key: "render",
    value: function render() {
      var _this = this;

      var Tag = this.props.tagName || 'span';
      return React.createElement(FormattedHTMLMessage, this.props, function (message) {
        return React.createElement(Tag, {
          dangerouslySetInnerHTML: {
            __html: message
          },
          "data-intl-id": process.env.NODE_ENV !== 'production' ? _this.props.id : undefined
        });
      });
    }
  }]);

  return TranslatedMessage;
}(React.PureComponent);

export { TranslatedMessage as default };