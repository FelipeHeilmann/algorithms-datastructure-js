import { Compare, ICompareFunction, defaultCompare } from "../chapter10/utils"
import { createNonSortedArray } from "./utils"

/*
Merge sort is one of the most efficient sorting algorithms. It works on the principle of Divide and Conquer based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.
*/


function merge<T>(left: T[], right: T[], compareFn: ICompareFunction<T>) {
    let i = 0
    let j = 0
    const result = []
  
    while (i < left.length && j < right.length) {
      result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++])
    }
  
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
  }


function mergeSort(array: number[], compareFn = defaultCompare): number[]{
    if (array.length > 1) {
        const middle = Math.floor(array.length / 2)
        const left = mergeSort(array.slice(0, middle), compareFn)
        const right = mergeSort(array.slice(middle, array.length), compareFn)
        array = merge(left, right, compareFn)
      }
    
      return array
    
}

let array = createNonSortedArray(5)
console.log(array.join())
array = mergeSort(array)
console.log(array.join())