'use strict';

import React from 'react';
import Fade from '@material-ui/core/Fade';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconCheck from '@material-ui/icons/Check';
import IconClose from '@material-ui/icons/Close';
import Input from '@material-ui/core/Input';
import { mount } from 'enzyme';

import { PasswordField, ValidationText } from '~/components/PasswordField';

describe('PasswordField', () => {
  let props;
  let component;
  let wrapper;

  //This is necessary because we started getting the following warning:
  //UnhandledPromiseRejectionWarning: TypeError: document.createRange is not a function
  global.document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document
    }
  });

  beforeEach(() => {
    props = {
      classes: {},
      input: { value: '' },
      meta: {},
      label: ''
    };
    wrapper = mount(<PasswordField {...props} />);
  });

  it('should render dropdown popper on focus', () => {
    wrapper.setState({ meterOpen: true });
    expect(wrapper.find(Fade).prop('in')).toBe(true);
  });

  it('should render dropdown popper on blur', () => {
    wrapper.setState({ meterOpen: false });
    expect(wrapper.find(Fade).prop('in')).toBe(false);
  });

  it('should render value correctly', () => {
    const value = 'P@ssw0rd';
    wrapper.setProps({ input: { value } });
    expect(wrapper.find(Input).prop('value')).toBe(value);
  });

  it('should render error message correctly', () => {
    const errorMessage = 'Password is too weak';
    wrapper.setProps({ meta: { touched: true, error: errorMessage } });
    const helperTexts = wrapper.find(FormHelperText);
    expect(helperTexts.last().prop('children')).toBe(errorMessage);
  });

  it('should render error icon if password length is less than 8', () => {
    wrapper.setProps({ input: { value: 'test' } });
    const validationText = wrapper.find(ValidationText).at(0);
    expect(validationText.find(IconClose).length).toBe(1);
    expect(validationText.find(IconCheck).length).toBe(0);
  });

  it('should render checkmark icon if password length is not less than 8', () => {
    wrapper.setProps({ input: { value: 'password' } });
    const validationText = wrapper.find(ValidationText).at(0);
    expect(validationText.find(IconClose).length).toBe(0);
    expect(validationText.find(IconCheck).length).toBe(1);
  });

  it('should render error icon if password does not contain alphabets', () => {
    wrapper.setProps({ input: { value: '123' } });
    const validationText = wrapper.find(ValidationText).at(1);
    expect(validationText.find(IconClose).length).toBe(1);
    expect(validationText.find(IconCheck).length).toBe(0);
  });

  it('should render checkmark icon if password contains at least one alphabet', () => {
    wrapper.setProps({ input: { value: 'test' } });
    const validationText = wrapper.find(ValidationText).at(1);
    expect(validationText.find(IconClose).length).toBe(0);
    expect(validationText.find(IconCheck).length).toBe(1);
  });

  it('should render error icon if password does not contain number', () => {
    wrapper.setProps({ input: { value: 'test' } });
    const validationText = wrapper.find(ValidationText).at(2);
    expect(validationText.find(IconClose).length).toBe(1);
    expect(validationText.find(IconCheck).length).toBe(0);
  });

  it('should render checkmark icon if password contains at least one number', () => {
    wrapper.setProps({ input: { value: 'test1' } });
    const validationText = wrapper.find(ValidationText).at(2);
    expect(validationText.find(IconClose).length).toBe(0);
    expect(validationText.find(IconCheck).length).toBe(1);
  });

  it('should render error icon if password does not contain any special characters', () => {
    wrapper.setProps({ input: { value: 'test' } });
    const validationText = wrapper.find(ValidationText).at(3);
    expect(validationText.find(IconClose).length).toBe(1);
    expect(validationText.find(IconCheck).length).toBe(0);
  });

  it('should render checkmark icon if password contains at least one special character', () => {
    wrapper.setProps({ input: { value: 'test#' } });
    const validationText = wrapper.find(ValidationText).at(3);
    expect(validationText.find(IconClose).length).toBe(0);
    expect(validationText.find(IconCheck).length).toBe(1);
  });
});
