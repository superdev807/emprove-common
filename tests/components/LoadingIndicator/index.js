'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import LoadingIndicator from '../../../src/components/LoadingIndicator';

describe('LoadingIndicator component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LoadingIndicator />);
  });

  test('should render a circular progress', () => {
    expect(component.find('CircularProgress').length).toBe(1);
  });
});
