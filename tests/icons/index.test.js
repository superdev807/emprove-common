'use strict';

import React from 'react';
import { shallow } from 'enzyme';

describe('Icon components', () => {
  const iconComponentNames = [
    'IconBack',
    'IconBackyard',
    'IconBidIt',
    'IconBlog',
    'IconCircleQuestionMark',
    'IconCostIt',
    'IconDeck',
    'IconDen',
    'IconDownloadRfp',
    'IconDreamIt',
    'IconFacebook',
    'IconFacebookLetter',
    'IconFoyer',
    'IconGeneralLiving',
    'IconGuestBathroom',
    'IconGuestBedroom',
    'IconHandSwipe',
    'IconInfo',
    'IconInstagram',
    'IconInstantEstimate',
    'IconKitchen',
    'IconKitchenette',
    'IconLinkedIn',
    'IconListView',
    'IconLivingRoom',
    'IconLoft',
    'IconMasterBathroom',
    'IconMasterBedroom',
    'IconOffice',
    'IconPatio',
    'IconPieChart',
    'IconPowderRoom',
    'IconQuestionMark',
    'IconSitePhotos',
    'IconTwitter'
  ];

  it('should include an SvgIcon for each icon component', () => {
    iconComponentNames.forEach(iconComponentName => {
      const Icon = require(`../../src/icons/${iconComponentName}`).default;
      const component = shallow(<Icon />);

      expect(component.dive().find('SvgIcon').length).toBe(1);
    });
  });

  it('should include spread any props to the SvgIcon component', () => {
    iconComponentNames.forEach(iconComponentName => {
      const props = {
        className: 'some-class-name another-class-name',
        someRandomProp: true
      };

      const Icon = require(`../../src/icons/${iconComponentName}`).default;
      const component = shallow(<Icon {...props} />);

      try {
        expect(
          component
            .dive()
            .find('SvgIcon')
            .prop('className')
        ).toBe(props.className);
        expect(
          component
            .dive()
            .find('SvgIcon')
            .prop('someRandomProp')
        ).toBe(true);
      } catch (error) {
        // Custom error message to indicate which icon component failed the test
        throw new Error(`${error.message}\n  (iconComponentName: ${iconComponentName})`);
      }
    });
  });
});
