import { defaultCompare } from "../chapter06/utils"
import { Compare } from "../chapter10/utils"
import { createNonSortedArray, swap } from "./utils"

function bubbleSort(array: number[], compareFn = defaultCompare): number[]{
    for(let i =0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN){
                swap(array, j, j + 1)
            }
        }
    }

    return array
}


let array = createNonSortedArray(5)
console.log(array.join())
array = bubbleSort(array)
console.log(array.join())