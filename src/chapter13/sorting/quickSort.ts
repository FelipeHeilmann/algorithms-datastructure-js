import { Compare, ICompareFunction, defaultCompare, swap, createNonSortedArray } from "../../utils"

/*
Quicksort is a highly efficient sorting technique that divides a large data array into smaller ones. A vast array is divided into two arrays, one containing values smaller than the provided value, say pivot, on which the partition is based. The other contains values greater than the pivot value
*/

function partition<T>(
    array: T[],
    left: number,
    right: number,
    compareFn: ICompareFunction<any>
): number {
    const pivot = array[Math.floor((right + left) / 2)]
    let i = left
    let j = right

    while (i <= j) {
        while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
            i++
        }

        while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
            j--
        }

        if (i <= j) {
            swap(array, i, j)
            i++
            j--
        }
    }

    return i
}

function quick<T>(
    array: T[],
    left: number,
    right: number,
    compareFn: ICompareFunction<any>
): T[] {
    let index
    if (array.length > 1) {
        index = partition(array, left, right, compareFn)

        if (left < index - 1) {
            quick(array, left, index - 1, compareFn)
        }

        if (index < right) {
            quick(array, index, right, compareFn)
        }
    }

    return array
}

export function quickSort<T>(array: T[], compareFn = defaultCompare): T[] {
    return quick(array, 0, array.length - 1, compareFn)
}

let array = createNonSortedArray(5)
console.log(array.join())
array = quickSort(array)
console.log(array.join())