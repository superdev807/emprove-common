'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import { InformationButton } from '../../../src/components/InformationButton';

describe('InformationButton', () => {
  let props;
  let component;

  beforeEach(() => {
    // Fake mapDispatchToProps
    const dispatch = {
      showModal: jest.fn()
    };
    props = {
      ...dispatch,
      information: {}
    };
    component = shallow(<InformationButton {...props} />);
  });

  it('should show the informationModal when clicked', () => {
    component.find('WithStyles(IconButton)').prop('onClick')();

    expect(props.showModal).toHaveBeenCalledTimes(1);
    expect(props.showModal.mock.calls[0][0]).toBe('informationModal');
    expect(props.showModal.mock.calls[0][1]).toBe(props.information);
  });

  it('should display an information icon', () => {
    expect(component.find('pure(InfoOutline)').length).toBe(1);
  })
});
