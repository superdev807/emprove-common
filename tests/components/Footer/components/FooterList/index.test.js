'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import FooterList from '../../../../../src/components/Footer/components/FooterList';

describe('FooterList component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      items: []
    };
    component = shallow(<FooterList {...props} />);
  });

  test('should render a ul with as many li components as `items` passed as props', () => {
    component.setProps({ items: ['1', '2', '3'] });

    expect(component.find('li').length).toBe(3);
  });

  test('should render each li component with the content passed by each item from `items` props', () => {
    component.setProps({
      items: ['First Item', <span className="some-class">Second Item</span>, <a href="#">Third Item</a>]
    });

    expect(
      component
        .find('li')
        .children()
        .at(0)
        .text()
    ).toBe('First Item');

    expect(
      component
        .find('li')
        .children()
        .at(1)
        .name()
    ).toBe('span');
    expect(
      component
        .find('li')
        .children()
        .at(1)
        .children()
        .text()
    ).toBe('Second Item');

    expect(
      component
        .find('li')
        .children()
        .at(2)
        .name()
    ).toBe('a');
    expect(
      component
        .find('li')
        .children()
        .at(2)
        .children()
        .text()
    ).toBe('Third Item');
  });
});
