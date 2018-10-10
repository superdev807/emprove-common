'use strict';

import React from 'react';
import Button from '@material-ui/core/Button';
import { CardNumberElement, CardExpiryElement, CardCVCElement, Elements, StripeProvider } from 'react-stripe-elements';
import { mount } from 'enzyme';

import CardForm from '~/components/CardForm';

describe('CardForm component', () => {
  let elementMock = {
    mount: jest.fn(),
    destroy: jest.fn(),
    on: jest.fn(),
    update: jest.fn()
  };
  let elementsMock = {
    create: jest.fn().mockReturnValue(elementMock)
  };
  let stripeMock = {
    elements: jest.fn().mockReturnValue(elementsMock),
    createToken: jest.fn(),
    createSource: jest.fn()
  };
  const defaultProps = {
    theme: {},
    email: 'test@example.com',
    disabled: false,
    onSubmit: jest.fn(),
    stripe: stripeMock
  };

  beforeEach(() => {
    window.Stripe = jest.fn().mockReturnValue(stripeMock);
  });

  const getWrappedComponent = props => {
    return mount(
      <StripeProvider apiKey="pk_test_xxx">
        <Elements>
          <CardForm {...defaultProps} {...props} />
        </Elements>
      </StripeProvider>
    );
  };

  it('should render as <form />', () => {
    const wrapper = getWrappedComponent();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should include card number, exp date and CCV fields', () => {
    const wrapper = getWrappedComponent({ disabled: true });
    expect(wrapper.find(CardNumberElement).length).toBe(1);
    expect(wrapper.find(CardExpiryElement).length).toBe(1);
    expect(wrapper.find(CardCVCElement).length).toBe(1);
  });

  it('should disable submit button when disabled prop is set', () => {
    const wrapper = getWrappedComponent({ disabled: true });
    expect(wrapper.find(Button).prop('disabled')).toBe(true);
  });
});
