'use strict';

import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

// This component currently uses react-intl, but in the future the internal
// implementation can be changed to use our own in-house translation infrastructure.
export default class TranslatedMessage extends React.PureComponent {
  render() {
    const Tag = this.props.tagName || 'span';

    return (
      <FormattedHTMLMessage {...this.props}>
        {message => {
          return (
            <Tag
              dangerouslySetInnerHTML={{ __html: message }}
              data-intl-id={process.env.NODE_ENV !== 'production' ? this.props.id : undefined}
            />
          );
        }}
      </FormattedHTMLMessage>
    );
  }
}
