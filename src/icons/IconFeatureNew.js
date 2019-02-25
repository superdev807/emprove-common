'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconFeatureNew = props => {
  const primary = props.primary || '#888';
  const secondary = props.secondary || 'none';
  return (
    <SvgIcon x={0} y={0} viewBox="0 0 24 24" xmlSpace="preserve" {...props}>
      <path fill={secondary} d="M0 0h24v24H0z" />
      <path
        fill={primary}
        d="M12 1.375C6.142 1.375 1.375 6.142 1.375 12S6.142 22.625 12 22.625 22.625 17.859 22.625 12 17.858 1.375 12 1.375zm0 20.5c-5.445 0-9.875-4.43-9.875-9.875S6.555 2.125 12 2.125s9.875 4.43 9.875 9.875-4.43 9.875-9.875 9.875z"
      />
      <path
        fill={primary}
        d="M17.469 10.394l-3.686-.314-1.438-3.393c-.119-.277-.574-.277-.691 0l-1.438 3.4-3.686.314c-.149.014-.277.114-.324.258s-.003.301.111.399l2.793 2.42-.839 3.603a.375.375 0 0 0 .559.406L12 15.578l3.169 1.91a.376.376 0 0 0 .559-.407l-.84-3.61 2.794-2.42a.374.374 0 0 0-.213-.657z"
      />
    </SvgIcon>
  );
};

export default IconFeatureNew;
