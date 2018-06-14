import React from 'react';

import IconFacebookLetter from '../../../../icons/IconFacebookLetter';
import IconTwitter from '../../../../icons/IconTwitter';
import IconLinkedIn from '../../../../icons/IconLinkedIn';
import IconInstagram from '../../../../icons/IconInstagram';
import './styles.scss';

const SocialMediaLinks = (props) => {
  return (
    <div className="social-media-links">
      <a href="https://www.facebook.com/emproveit/" target="_blank" rel="noopener noreferrer">
        <IconFacebookLetter className="social-media-links__icon" />
      </a>
      <a href="https://twitter.com/emprove_it" target="_blank" rel="noopener noreferrer">
        <IconTwitter className="social-media-links__icon" />
      </a>
      <a href="https://www.instagram.com/emprove_it/" target="_blank" rel="noopener noreferrer">
        <IconInstagram className="social-media-links__icon" />
      </a>
      <a href="https://www.linkedin.com/company/emprove-inc/" target="_blank" rel="noopener noreferrer">
        <IconLinkedIn className="social-media-links__icon" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
