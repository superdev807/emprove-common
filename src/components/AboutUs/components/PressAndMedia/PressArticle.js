'use strict';

import React from 'react';

const PressArticle = (props) => {
  return (
    <article>
      <div>{props.article.title}</div>
      <div>{props.article.snippet}</div>
      <a href="#">Read the full story</a>
    </article>
  );
};

export default PressArticle;
