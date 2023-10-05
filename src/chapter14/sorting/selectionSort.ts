import { defaultCompare } from "../../chapter06/utils"
import { Compare } from "../../chapter10/utils"
import { createNonSortedArray, swap } from "../utils"

/*
A selection-based sorting algorithm is described as an in-place comparison-based algorithm that divides the list into two parts, the sorted part on the left and the unsorted part on the right. Initially, the sorted section is empty, and the unsorted section contains the entire list.
*/

function selectionSort(array: number[], compareFn = defaultCompare): number[]{
    let indexMin
    for(let i = 0; i < array.length - 1; i++){
        indexMin = i
        for(let j = i; j < array.length; j++){
            if(compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN){
                indexMin = j
            }
        }
        if(i !== indexMin){
            swap(array, i, indexMin)
        }
    }

    return array
}

let array = createNonSortedArray(5)
console.log(array.join())
array = selectionSort(array)
console.log(array.join())