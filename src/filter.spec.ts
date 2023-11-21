import { filter } from "./filter";

describe('find(callback, array', () => {
  it('should find the given condition depending on the callback function from left side', () => {
    expect(filter(a => a === 1, [1, 2, 3, 4, 5])).toBe(1);
  })

  it('if nothing that meets the conditions is found, the input array must be returned', () => {
    expect(filter(a => a === 1, [2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
  })
})