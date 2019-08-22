'use strict';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { shallow } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';

import { InformationModal } from '../../../src/components/InformationModal';

describe('InformationModal', () => {
  let shallow;
  let props;
  let component;

  beforeAll(() => {
    shallow = createShallow();
  });

  beforeEach(() => {
    // Fake mapStateToProps
    const state = {
      show: false
    };
    // Fake mapDispatchToProps
    const dispatch = {
      handleHide: jest.fn()
    };
    props = {
      ...state,
      ...dispatch,
      title: '',
      body: [],
      terms: []
    };
    component = shallow(<InformationModal {...props} />);
  });

  it('should control whether the dialog is shown using the `show` prop', () => {
    component.setProps({ show: true });
    expect(component.prop('open')).toBe(true);

    component.setProps({ show: false });
    expect(component.prop('open')).toBe(false);
  });

  it('should call the `handleHide` prop when the dialog closes', () => {
    component.prop('onClose')();

    expect(props.handleHide).toHaveBeenCalledTimes(1);
  });

  it('should display the title', () => {
    const title = 'Modal Title';
    component.setProps({ title });

    expect(
      component
        .find('WithStyles(ForwardRef(DialogTitle))')
        .children()
        .text()
    ).toBe(title);
  });

  it('should display a list of paragraphs for the body', () => {
    component.setProps({ body: ['p1', 'p2', 'p3'] });

    const paragraphs = component.find('WithStyles(ForwardRef(DialogContent))').children();
    expect(
      paragraphs
        .at(0)
        .find('ReactMarkdown')
        .prop('source')
    ).toBe('p1');
    expect(
      paragraphs
        .at(1)
        .find('ReactMarkdown')
        .prop('source')
    ).toBe('p2');
    expect(
      paragraphs
        .at(2)
        .find('ReactMarkdown')
        .prop('source')
    ).toBe('p3');
  });

  it('should display a definition for each term', () => {
    const terms = [{ id: 1 }, { id: 2 }, { id: 3 }];
    component.setProps({ terms });

    const definitions = component.find('WithStyles(ForwardRef(DialogContent)) InformationDefinition');
    expect(definitions.at(0).prop('term')).toBe(terms[0]);
    expect(definitions.at(1).prop('term')).toBe(terms[1]);
    expect(definitions.at(2).prop('term')).toBe(terms[2]);
  });

  it('should display an InformationImage for each specified images', () => {
    const images = [{ id: 1, filename: 'image1.png' }, { id: 2, filename: 'image2.png' }, { id: 3, filename: 'image3.png' }];
    component.setProps({ images });

    const informationImages = component.find('WithStyles(ForwardRef(DialogContent)) InformationImage');
    images.forEach((image, index) => {
      const actualImage = informationImages.at(index).prop('image');
      expect(actualImage.id).toBe(images[index].id);
      expect(actualImage.filename).toBe(images[index].filename);
    });
  });
});
