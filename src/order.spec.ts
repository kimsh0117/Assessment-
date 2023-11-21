import { order } from './order'

describe('order(callback, array)', () => {
  it('If the length of the array is less than 2, an error should be thrown.', () => {
    expect(() => order((a, b) => a - b, [])).toThrow(
      'The length of the array must be greater than 1',
    );

    expect(() => order((a, b) => a - b, [1])).toThrow(
      'The length of the array must be greater than 1',
    );

    expect(() => order((a, b) => a - b, [2, 1])).not.toThrow(
      'The length of the array must be at least 2',
    );
  });

  it('should be able to change the order flexibly', () => {
    expect(order((a, b) => a - b, [5, 0, 1, 3, 2])).toEqual([0, 1, 2, 3, 5]);

    expect(order((a, b) => a - b, [7, 9, 10, 11, 12])).toEqual([
      7, 9, 10, 11, 12,
    ]);

    expect(
      order(
        // @ts-ignore
        (a, b) => a - b || isNaN(a) - isNaN(b),
        [Infinity, NaN, Infinity, -Infinity, NaN, 1, 0, NaN, -1, -0],
      ),
    ).toEqual([-Infinity, -1, 0, -0, 1, Infinity, Infinity, NaN, NaN, NaN]);
  });

  it('should return a new array without any side effects', () => {
    const arr = [1, 3, 2];

    expect(order((a, b) => a - b, arr)).not.toBe(arr);
  });
});