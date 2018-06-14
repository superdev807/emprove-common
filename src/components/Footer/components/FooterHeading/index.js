import React from 'react';

import './styles.scss';

const FooterHeading = (props) => {
  return (
    <section className="footer-heading">
      <div className="footer-heading__text">
        Renovating your home just got easier. With the <strong><span className="footer-heading__text--highlighted">click</span> <span className="footer-heading__text--emphasized">of your mouse</span></strong>
      </div>
      <div className="footer-heading__text">
        you can <span className="footer-heading__text--highlighted"><strong>dream</strong></span>, <span className="footer-heading__text--highlighted"><strong>cost</strong></span>, and <strong><span className="footer-heading__text--highlighted"><strong>bid</strong></span> <span className="footer-heading__text--emphasized">your home renovation</span></strong>
      </div>
    </section>
  );
};

export default FooterHeading;
