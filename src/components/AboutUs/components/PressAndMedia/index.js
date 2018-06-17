'use strict';

import React from 'react';

import PressArticle from './PressArticle';
import './styles.scss';

const articles = [
  {
    id: 1,
    title: 'Vivamus in tortor',
    snippet: 'In quis justo non diam consectetur consectetur nec faucibus eros. Aliquam augue magna, gravida in fringilla id, tempus sed lectus. Etiam pharetra consequat est sit amet cursus.',
  },
  {
    id: 2,
    title: 'Nulla dapibus ex',
    snippet: 'Nam vitae risus in turpis aliquam congue ac vel odio. Quisque vel nisi sodales, dignissim felis nec, efficitur ex. In hac habitasse platea dictumst.',
  },
  {
    id: 3,
    title: 'Fusce maximus mi',
    snippet: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu lectus posuere, lacinia libero nec, mattis massa. Curabitur fringilla tristique vehicula.',
  },
];

const PressAndMedia = (props) => {
  return (
    <section className="press-and-media">
      <div className="press-and-media__title">Press & <strong>Media</strong></div>
      <p className="press-and-media__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis, tellus non aliquam gravida.</p>
      <div className="press-and-media__articles">
        {articles.map(article => (
          <PressArticle className="press-and-media__article" key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default PressAndMedia;
