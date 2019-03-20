'use strict';

import withPosts from '../../../../hocs/withPosts';
import PressAndMedia from './content';

export default withPosts({
  params: {
    category: 'press-and-media',
    fields: 'ID,slug,title,URL,author,featured_image,excerpt,date'
  }
})(PressAndMedia);
