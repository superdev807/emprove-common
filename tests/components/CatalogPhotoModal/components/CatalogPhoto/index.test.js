'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import CatalogPhoto from '~/components/CatalogPhotoModal/components/CatalogPhoto';

describe('CatalogPhoto component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      imageUrl: '/images/something.png',
      alt: 'Something :)'
    };
    component = shallow(<CatalogPhoto {...props} />);
  });

  test('should display an image whose src and alt are defined by props', () => {
    expect(component.prop('src')).toBe(props.imageUrl);
    expect(component.prop('alt')).toBe(props.alt);
  });
});
