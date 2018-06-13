'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import { StaticRouter } from 'react-router';
import { Link } from 'react-router-dom';

import TermsOfService from '../../../src/components/TermsOfService';

describe('TermsOfService', () => {
  let shallow;
  let component;

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    component = shallow(<TermsOfService />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <StaticRouter context={{}}>
        <TermsOfService />
      </StaticRouter>,
      div
    );
  });
});
