import { clsx } from './clsx';

describe('clsx', () => {
  test('It should return a string.', () => {
    expect(clsx('string')).toBe('string');
  });

  test('It should concat arguments.', () => {
    expect(clsx('one', 'two')).toBe('one two');
  });

  test('It should remove falsey values', () => {
    expect(clsx('one', undefined, 'two')).toBe('one two');
    expect(clsx('one', null, 'two', null)).toBe('one two');
    expect(clsx('one', false, 'two')).toBe('one two');
  });
});
