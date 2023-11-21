import { findMissingNumber } from './findMissingNumber';

describe('findMissingNumber(num, i, arr)', () => {
  it('if NaN is entered as an argument, should occur error', () => {
    expect(() => findMissingNumber(NaN, 0, [NaN])).toThrow(
      'input number should not have NaN',
    );
  })

  it('if Infinity is entered as an argument, should occur error', () => {
    expect(() => findMissingNumber(Infinity, 0, [Infinity])).toThrow(
      'Number is Infinity!',
    );
  });
});