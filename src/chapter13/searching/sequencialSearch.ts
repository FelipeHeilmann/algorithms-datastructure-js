import { defaultEquals } from "../../utils";

function sequencialSearch<T>(
  array: T[],
  value: T,
  equalsFn = defaultEquals
): number {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i
    }
  }

  return - 1
}

console.log(sequencialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0))