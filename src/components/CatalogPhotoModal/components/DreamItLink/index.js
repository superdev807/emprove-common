'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import IconDreamIt from '../../../../icons/IconDreamIt';

import './styles.scss';

const DreamItLink = (props) => {
  return (
    <div className="dream-it-link">
      <IconDreamIt className="dream-it-link__icon" />
      <Link className="dream-it-link__text" to={`/browse/${props.browseFilter}`}>
        Go to Dream It
      </Link>
    </div>
  );
};

DreamItLink.defaultProps = {
  browseFilter: 'any-home'
};

export default DreamItLink;
