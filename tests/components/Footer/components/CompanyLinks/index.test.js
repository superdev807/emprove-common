'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import CompanyLinks from '~/components/Footer/components/CompanyLinks';

describe('CompanyLinks component', () => {
  const originalProcess = global.process;
  const CONSUMER_DOMAIN = 'http://somewhere.com';

  beforeAll(() => {
    global.process = {
      ...global.process,
      env: {
        CONSUMER_DOMAIN
      }
    };
  });

  afterAll(() => {
    global.process = originalProcess;
  });

  let component;

  beforeEach(() => {
    component = shallow(<CompanyLinks />);
  });

  test('should display link to about emprove', () => {
    //Different footer in about-emprove for each application
    expect(component.find('FooterList').prop('items')[0].props.href).toBe('/about-emprove');
  });

  test('should display link to blog', () => {
    expect(component.find('FooterList').prop('items')[1].props.href).toBe(CONSUMER_DOMAIN + '/blog');
  });

  test('should display link to contact us', () => {
    expect(component.find('FooterList').prop('items')[2].props.href).toBe('mailto:contact@emproveit.com');
  });

  test('should display link to careers', () => {
    expect(component.find('FooterList').prop('items')[3].props.href).toBe('https://angel.co/emproveit/jobs');
  });

  test('should display link to help center', () => {
    expect(component.find('FooterList').prop('items')[4].props.href).toBe(CONSUMER_DOMAIN + '/info-center');
  });

  test('should display link to privacy', () => {
    expect(component.find('FooterList').prop('items')[5].props.href).toBe(CONSUMER_DOMAIN + '/privacy');
  });

  test('should display link to terms', () => {
    expect(component.find('FooterList').prop('items')[6].props.href).toBe(CONSUMER_DOMAIN + '/terms');
  });
});
