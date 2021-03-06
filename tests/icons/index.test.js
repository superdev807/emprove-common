'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import * as allIcons from '~/icons';

describe('Icon components', () => {
  const iconComponentNames = Object.keys(allIcons);

  it('should include an SvgIcon for each icon component', () => {
    iconComponentNames.forEach(iconComponentName => {
      const Icon = require(`../../src/icons/${iconComponentName}`).default;
      const component = shallow(<Icon />);

      expect(component.dive().find('ForwardRef(SvgIcon)').length).toBe(1);
    });
  });

  it('should include spread any props to the SvgIcon component', () => {
    iconComponentNames.forEach(iconComponentName => {
      const props = {
        className: 'some-class-name another-class-name',
        someRandomProp: true
      };

      const Icon = require(`../../src/icons/${iconComponentName}`).default;
      const component = shallow(<Icon {...props} />);

      try {
        expect(
          component
            .dive()
            .find('ForwardRef(SvgIcon)')
            .prop('className')
        ).toBe(props.className);
        expect(
          component
            .dive()
            .find('ForwardRef(SvgIcon)')
            .prop('someRandomProp')
        ).toBe(true);
      } catch (error) {
        // Custom error message to indicate which icon component failed the test
        throw new Error(`${error.message}\n  (iconComponentName: ${iconComponentName})`);
      }
    });
  });
});
