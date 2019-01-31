'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import { getModalParams } from '../../../src/components/HashChangeMonitor';

describe('HashChangeMonitor', () => {
  it('should parse hash urls to get modal ID correctly', () => {
    const hash = '#modal:feeScheduleModal';
    const { modalId, modalParams } = getModalParams(hash);
    expect(modalId).toBe('feeScheduleModal');
    expect(modalParams).toEqual({});
  });

  it('should parse hash urls to get modal ID and params correctly', () => {
    const hash = '#modal:feeScheduleModal?hideMenu=yes';
    const { modalId, modalParams } = getModalParams(hash);
    expect(modalId).toBe('feeScheduleModal');
    expect(modalParams).toEqual({ hideMenu: 'yes' });
  });
});
