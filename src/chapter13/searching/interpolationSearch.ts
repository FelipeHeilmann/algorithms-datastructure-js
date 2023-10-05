import { Compare, biggerEquals, defaultCompare, defaultDiff, defaultEquals, lesserEquals } from "../../utils";

export function interpolatioSearch<T>(
    array: T[], value: T,
    compareFn = defaultCompare,
    equalsFn = defaultEquals,
    diffFn = defaultDiff
): number {
    let low = 0
    let high = array.length - 1
    let position = -1
    let delta = -1
    while (
        low <= high &&
        biggerEquals(value, array[low], compareFn) &&
        lesserEquals(value, array[high], compareFn)
    ) {

        delta = diffFn(value, array[low]) / diffFn(array[high], array[low])
        position = low + Math.floor((high - low) * delta)
        if (equalsFn(array[position], value)) {
            return position
        }
        if (compareFn(array[position], value) === Compare.LESS_THAN) {
            low = position + 1
        } else {
            high = position - 1
        }
    }

    return -1
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(interpolatioSearch(array, 5))