'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import ReactDOM from 'react-dom';

import PrivacyPolicy from '../../../src/components/PrivacyPolicy';

describe('PrivacyPolicy', () => {
  let shallow;
  let props;
  let component;

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    component = shallow(<PrivacyPolicy />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PrivacyPolicy />, div);
  });
});
