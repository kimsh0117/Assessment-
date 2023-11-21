import { add } from "./add";

describe('add(a, b)', () => {
  it('The given arguments a and b must be added.', () => {
    expect(add(1, 2)).toBe(3)
  });
})