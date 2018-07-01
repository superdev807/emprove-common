'use strict';

import * as helpers from '~/utils/pureFunctions';

describe('utils.pureFunctions.capitalize', () => {
  it('should capitalize letters', () => {
    expect(helpers.capitalize('abc')).toBe('Abc');
  });
});

describe('utils.pureFunctions.sanitizeFields', () => {
  it('should remove undefined fields', () => {
    let raw = {
      valid: 'value',
      invalid: undefined
    };
    const sanitized = helpers.sanitizeFields(raw);
    expect(Object.keys(sanitized).length).toBe(1);
    expect(sanitized.valid).toBe('value');
  });
});

describe('utils.pureFunctions.sanitizeWebsiteUrl', () => {
  it('should return valid URLs as it is', () => {
    expect(helpers.sanitizeWebsiteUrl('http://example.com')).toBe('http://example.com');
    expect(helpers.sanitizeWebsiteUrl('https://example.com')).toBe('https://example.com');
  });

  it('should prepend http if not exist', () => {
    expect(helpers.sanitizeWebsiteUrl('example.com')).toBe('http://example.com');
  });
});

describe('utils.pureFunctions.secureWebsiteUrl', () => {
  it('should replace http with https', () => {
    expect(helpers.secureWebsiteUrl('http://example.com')).toBe('https://example.com');
    expect(helpers.secureWebsiteUrl('https://example.com')).toBe('https://example.com');
  });

  it('should return # if url is nil', () => {
    expect(helpers.secureWebsiteUrl(null)).toBe('#');
  });
});

describe('utils.pureFunctions.formatAddress', () => {
  it('should return formated address with specified separators', () => {
    const param = {
      address1: 'Address',
      address2: 'apt #2',
      city: 'Las Vegas',
      zip: '90011',
      state: 'CA'
    };

    expect(helpers.formatAddress(param, ', ')).toBe('Address, apt #2, Las Vegas, CA, 90011');
    expect(helpers.formatAddress(param, '; ')).toBe('Address; apt #2; Las Vegas; CA; 90011');
  });

  it('should not include separators if fields are null or undefined.', () => {
    const param = {
      address1: null,
      address2: undefined,
      city: 'Las Vegas',
      zip: '90011',
      state: 'CA'
    };

    expect(helpers.formatAddress(param, ', ')).toBe('Las Vegas, CA, 90011');
  });
});

describe('utils.pureFunctions.parseQueryString', () => {
  it('should parse query string and return JSON object', () => {
    const queryString = '?param1=value1&param2=123';
    const parsed = helpers.parseQueryString(queryString);
    expect(Object.keys(parsed).length).toBe(2);
    expect(parsed.param1).toBe('value1');
    expect(parsed.param2).toBe('123');
  });

  it('should return {} if query is blank', () => {
    const queryString = '';
    const parsed = helpers.parseQueryString(queryString);
    expect(typeof parsed).toBe('object');
    expect(Object.keys(parsed).length).toBe(0);
  });
});

describe('utils.pureFunctions.jsonToQueryString', () => {
  it('should convert JSON object to query string', () => {
    const obj = { param1: 'value1', param2: 123 };
    expect(helpers.jsonToQueryString(obj)).toBe('?param1=value1&param2=123');
  });

  it('should return empty string for blank object or null', () => {
    expect(helpers.jsonToQueryString('')).toBe('');
    expect(helpers.jsonToQueryString(null)).toBe('');
    expect(helpers.jsonToQueryString(undefined)).toBe('');
  });
});

describe('utils.pureFunctions.propsChanged', () => {
  it('should return true if any of props are changed', () => {
    expect(helpers.propsChanged(['test'], { test: 'props1 ' }, { test: 'props2' })).toBe(true);
  });

  it('should shallow-compare if deepCompare is false', () => {
    expect(helpers.propsChanged(['test'], { test: 'props1 ' }, { test: 'props1' }, false)).toBe(true);
    const obj = { test: 'props1 ' };
    expect(helpers.propsChanged(['test'], obj, obj, false)).toBe(false);
  });

  it('should deep compare if deepCompare is true', () => {
    expect(
      helpers.propsChanged(['test'], { test: 'props1', other: 'dosnt matter1' }, { test: 'props1', other: 'dosnt matter2' }, true)
    ).toBe(false);
  });
});
