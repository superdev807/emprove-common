'use strict';

import fp from 'lodash/fp';

export const postsSelector = fp.get('post.posts');
export const postSelector = fp.get('post.post');
