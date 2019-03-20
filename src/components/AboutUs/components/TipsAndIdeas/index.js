'use strict';

import withPosts from '../../../../hocs/withPosts';
import TipsAndIdeas from './content';

export default withPosts({
  params: {
    number: 3,
    category: 'featured-on-site',
    fields: 'ID,slug,title,URL,author,featured_image,excerpt,date'
  }
})(TipsAndIdeas);
