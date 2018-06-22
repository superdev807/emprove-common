'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import DreamItLink from '../../../../../src/components/CatalogPhotoModal/components/DreamItLink';

describe('DreamItLink component', () => {
  let component;
  let props;
  const originalProcess = global.process;
  const CONSUMER_DOMAIN = 'https://consumer.some/where/'

  beforeAll(() => {
    global.process = {
      env: {
        CONSUMER_DOMAIN
      }
    };
  });

  afterAll(() => {
    global.process = originalProcess;
  });

  beforeEach(() => {
    props = {
      browseFilter: undefined,
      disabled: undefined
    };
    component = shallow(<DreamItLink {...props} />);
  });

  test('should display a dream-it icon', () => {
    expect(component.find('IconDreamIt').length).toBe(1);
  });

  test('should display a link with text `Go to Dream It`', () => {
    component.setProps({ browseFilter: 'modern-master-bedroom' })

    const link = component.find('Link');
    expect(link.prop('to')).toBe('/browse/modern-master-bedroom');
    expect(link.children().text()).toBe('Go to Dream It');
  });

  test('should display a full link to the consumer site if given fromContractor prop', () => {
    component.setProps({ browseFilter: 'modern-master-bedroom', fromContractor: true });

    const link = component.find('a');
    expect(link.prop('href')).toBe(CONSUMER_DOMAIN + '/browse/modern-master-bedroom');
    expect(link.prop('target')).toBe('_blank');
    expect(link.prop('rel')).toBe('noopener noreferrer');
    expect(link.children().text()).toBe('Go to Dream It');
  });
});
