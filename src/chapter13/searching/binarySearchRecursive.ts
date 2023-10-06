import { Compare, defaultCompare } from "../../utils"
import { quickSort } from "../sorting/quickSort"

export function binarySearchRecursive<T>(
    array: T[],
    value: T,
    low: number,
    high: number,
    compareFn = defaultCompare
): number {
    if (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const element = array[mid]
        if (compareFn(element, value) === Compare.LESS_THAN) {
            return binarySearchRecursive(array, value, mid + 1, high, compareFn)
        }
        else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            return binarySearchRecursive(array, value, low, mid - 1, compareFn)
        }
        else {
            return mid
        }
    }

    return -1
}

export function binarySearch<T>(array: T[], value: T, compareFn = defaultCompare) {
    const sortedArray = quickSort(array)
    const low = 0;
    const high = sortedArray.length - 1

    return binarySearchRecursive(array, value, low, high, compareFn)
}

const array = [9, 8, 5, 3, 1, 4, 2]
console.log(binarySearch(array, 4))