'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import UserLevel2Icon from '../../../src/components/UserLevel2Icon';

describe('UserLevel2Icon component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      ul2Id: 2025
    };
    component = shallow(<UserLevel2Icon {...props} />);
  });

  test('should take care to render a placeholder unknown icon if the given user level 2 id doesnt match any in the list of available icons', () => {
    component.setProps({
      ul2Id: 99999999
    });

    expect(component.html()).toBe('<div>N/A</div>');
  });
});
