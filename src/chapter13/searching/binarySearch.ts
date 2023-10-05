import { quickSort } from "../sorting/quickSort"
import { Compare, defaultCompare } from "../../utils"


export function binarySearch<T>(array: T[], value: T, compareFn = defaultCompare): number {
    const sortedArray = quickSort(array)
    let low = 0
    let high = sortedArray.length - 1
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const element = sortedArray[mid]

        if (compareFn(element, value) === Compare.LESS_THAN) {
            low = mid + 1
        }
        else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            high = mid - 1
        }
        else {
            return mid
        }
    }

    return -1
}

console.log(binarySearch([8, 6, 5, 7, 9, 4, 2, 1, 0], 7))