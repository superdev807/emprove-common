'use strict';

import moment from 'moment';

import * as validators from '~/utils/validators';

describe('utils.validators.validateEmail', () => {
  it('should validate email', () => {
    expect(validators.validateEmail('test@email.com')).toBe(true);
    expect(validators.validateEmail('test@email')).toBe(false);
    expect(validators.validateEmail('test')).toBe(false);
  });
});

describe('utils.validators.validateNumber', () => {
  it('should validate number', () => {
    expect(validators.validateNumber('123')).toBe('123');
    expect(validators.validateNumber('te', 123)).toBe(123);
    expect(validators.validateNumber('123.45')).toBe('123.45');
  });
});

describe('utils.validators.validateYear', () => {
  it('should validate year', () => {
    expect(validators.validateYear('1990')).toBe(true);
    expect(validators.validateYear(moment().year())).toBe(true);
    expect(validators.validateYear(moment().year() + 1)).toBe(false);
  });
});

describe('utils.validators.passwordValidator', () => {
  it('should validate letters existence', () => {
    expect(validators.passwordValidator.hasLetters('password123')).toBe(true);
    expect(validators.passwordValidator.hasLetters('123')).toBe(false);
  });

  it('should validate number existence', () => {
    expect(validators.passwordValidator.hasNumbers('password123')).toBe(true);
    expect(validators.passwordValidator.hasNumbers('password')).toBe(false);
  });

  it('should validate special chars existence', () => {
    expect(validators.passwordValidator.hasSpecialChars('password@test')).toBe(true);
    expect(validators.passwordValidator.hasSpecialChars('password')).toBe(false);
  });

  it('should validate if minimum chars exist', () => {
    expect(validators.passwordValidator.hasMinLengthChars('password123')).toBe(true);
    expect(validators.passwordValidator.hasMinLengthChars('password')).toBe(true);
    expect(validators.passwordValidator.hasMinLengthChars('pass')).toBe(false);
  });

  it('should validate if password is strong', () => {
    expect(validators.passwordValidator.isStrong('pass')).toBe(false);
    expect(validators.passwordValidator.isStrong('password')).toBe(false);
    expect(validators.passwordValidator.isStrong('pass1234')).toBe(false);
    expect(validators.passwordValidator.isStrong('pass@1234')).toBe(true);
  });
});
