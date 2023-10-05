import { Compare, defaultCompare } from "../../chapter10/utils"
import { createNonSortedArray } from "../utils"

/*
Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
*/


function insertionSort(array: number[], compareFn = defaultCompare): number[]{
    let temp
    for(let i = 1; i < array.length; i++){
        let j = i
        temp = array[i]
        while(j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN){
            array[j] = array[j - 1]
            j--
        }
        array[j] = temp    
    }

    return array
}

let array = createNonSortedArray(5)
console.log(array.join())
array = insertionSort(array)
console.log(array.join())