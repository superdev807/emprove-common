'use strict';

import React from 'react';

import PressArticle from './PressArticle';

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
    <section>
      <div>Press & Media</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis, tellus non aliquam gravida.</p>
      {articles.map(article => (
        <PressArticle key={article.id} article={article} />
      ))}
    </section>
  );
};

export default PressAndMedia;
