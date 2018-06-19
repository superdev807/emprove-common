'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './press-article-styles.scss';

const PressArticle = (props) => {
  return (
    <article className={cx('press-article', props.className)}>
      <div className="press-article__title">{props.article.title}</div>
      <div className="press-article__snippet">{props.article.snippet}</div>
      <a className="press-article__full-story-link" href="#">Read the full story</a>
    </article>
  );
};

PressArticle.propTypes = {
  article: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default PressArticle;
