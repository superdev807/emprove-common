'use strict';

import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { mount, shallow } from 'enzyme';

import ProjectScopeField from '~/components/ProjectScopeField';

describe('ProjectScopeField', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      classes: {},
      input: { value: false },
      meta: {}
    };
    wrapper = shallow(<ProjectScopeField {...props} />);
  });

  it('should render four options', () => {
    expect(wrapper.find('.project-scope-field__option').length).toBe(4);
  });

  it('should render free form option if showFreeFormOption prop is set to true', () => {
    wrapper.setProps({ showFreeFormOption: false });
    expect(wrapper.find('.projet-scope-field__free-form').exists()).toBe(false);
    wrapper.setProps({ showFreeFormOption: true });
    expect(wrapper.find('.projet-scope-field__free-form').exists()).toBe(true);
  });

  it('should render three chart options', () => {
    expect(wrapper.find('.project-scope-field__chart').length).toBe(3);
  });

  it('should display label for chart options', () => {
    expect(
      wrapper
        .find('.project-scope-field__charts')
        .childAt(0)
        .find('.project-scope-field__text--help')
        .children()
        .text()
    ).toBe('Refinish'); // make sure this is te label for the first chartOptions
  });
});
