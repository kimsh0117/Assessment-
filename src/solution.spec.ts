import { solution } from "./solution";

describe('solution()', () => {
  it('should give the correct answer', () => {
    expect(solution([5, 0, 1, 3, 2])).toBe(4);

    expect(solution([7, 9, 10, 11, 12])).toBe(8);

    expect(solution([-2, -1, 2, 1])).toBe(0);

  });

  it('should finds a first missing number', () => {
    expect(solution([0, 2, 4, 6, 8, 10])).toBe(1);
  });

  it('When an array consisting of sequences of the same number is input, the array is returned as is.', () => {
    expect(solution([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
  });

  it('When an answer is not found, the input array is returned.', () => {
    expect(solution([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);

    expect(solution([3, 2, 1, 4])).toEqual([3, 2, 1, 4]);
  });

  it('When an array containing decimal points is input, the decimal point must be discarded to find the answer.', () => {
    expect(solution([3, 2, 1, 4, 2.2, 6])).toBe(5);
  });
})