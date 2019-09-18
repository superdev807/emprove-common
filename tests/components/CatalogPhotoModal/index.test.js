'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import CatalogPhotoModal from '../../../src/components/CatalogPhotoModal';

describe('CatalogPhotoModal component', () => {
  const originalProcess = global.process;
  const IMGIX_CATALOG_IMAGES_HOST = 'https://somewhere.com/';
  let component;
  let props;
  const imageFixture = {
    imageKey: '00043_E_cimage.jpg',
    style: 'Modern',
    homeArea: 'Kitchen',
    quality: 'Upgraded'
  };

  beforeAll(() => {
    global.process = {
      ...global.process,
      env: {
        IMGIX_CATALOG_IMAGES_HOST
      }
    };
  });

  afterAll(() => {
    global.process = originalProcess;
  });

  beforeEach(() => {
    props = {
      image: undefined,
      fromContractor: undefined,
      open: true
    };
    component = shallow(<CatalogPhotoModal {...props} />);
  });

  it('should display a modal', () => {
    expect(component.find('ForwardRef(Modal)').length).toBe(1);
  });

  it('should display a modal whose opening is controlled by open prop', () => {
    component.setProps({ open: true });
    expect(component.find('ForwardRef(Modal)').prop('open')).toBe(true);

    component.setProps({ open: false });
    expect(component.find('ForwardRef(Modal)').prop('open')).toBe(false);
  });

  it('should display a modal that calls onClose prop upon closing', () => {
    const onClose = jest.fn();
    component.setProps({ onClose });
    expect(component.find('ForwardRef(Modal)').prop('onClose')).toBe(onClose);
  });

  it('should display a CatalogPhoto', () => {
    component.setProps({ image: imageFixture });

    expect(component.find('CatalogPhoto').length).toBe(1);
    expect(component.find('CatalogPhoto').prop('imageUrl')).toBe(IMGIX_CATALOG_IMAGES_HOST + imageFixture.imageKey);
  });

  it('should display a CatalogPhotoHeader if image is no longer loading', () => {
    component.setProps({ image: imageFixture });
    component.setState({ loading: false });

    expect(component.find('CatalogPhotoHeader').length).toBe(1);
    expect(component.find('CatalogPhotoHeader').prop('designStyle')).toBe(imageFixture.style);
    expect(component.find('CatalogPhotoHeader').prop('homeArea')).toBe(imageFixture.homeArea);
    expect(component.find('CatalogPhotoHeader').prop('qualityStandard')).toBe(imageFixture.quality);
  });

  it('should display a loading indicator while image is loading', () => {
    component.setState({ loading: true });

    expect(component.find('WithStyles(LoadingIndicator)').length).toBe(1);
  });

  it('should display a X button to close the modal', () => {
    props.onClose = jest.fn();
    component.setProps(props);

    expect(component.find('CloseButton').length).toBe(1);
    expect(component.find('CloseButton').prop('onClick')).toBe(props.onClose);
  });

  it('should display a link to `dream it`', () => {
    imageFixture.style = 'Modern';
    imageFixture.homeArea = 'Master Bedroom';
    component.setProps({ image: imageFixture });

    expect(component.find('DreamItLink').length).toBe(1);
    expect(component.find('DreamItLink').prop('browseFilter')).toBe('modern-master-bedroom');
  });

  it('should display a link to `dream it` that takes user to consumer site from contractor site if given fromContractor prop', () => {
    component.setProps({ fromContractor: true });
    expect(component.find('DreamItLink').prop('fromContractor')).toBe(true);

    component.setProps({ fromContractor: false });
    expect(component.find('DreamItLink').prop('fromContractor')).toBe(false);
  });

  it('should display an error message if failed to load image', () => {
    const error = 'Failed to fetch image';
    component.setState({ error });

    expect(
      component
        .find('span[className="catalog-photo-modal__message--error"]')
        .children()
        .text()
    ).toBe(error);
  });
});
