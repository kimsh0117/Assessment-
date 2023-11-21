import { order } from "./order";
import { curry } from "./curry";
import { pipe } from "./pipe";
import { filter } from "./filter";
import { add } from "./add";
import { map } from './map';
import { findMissingNumber } from "./findMissingNumber";

export function solution(arr: number[]) {
  const _order = curry(order)
  const _filter = curry(filter)
  const _add = curry(add)
  const _map = curry(map)

  const result = pipe(
    arr,
    // @ts-ignore
    _order((a, b) => a - b || isNaN(a) - isNaN(b)),
    _map((num) => Math.floor(num)),
    _filter(findMissingNumber),
    _add(1)
  )

  return Array.isArray(result) ? arr : result;
}