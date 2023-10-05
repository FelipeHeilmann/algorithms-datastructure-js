import { defaultCompare } from "../../chapter06/utils"
import { Compare } from "../../chapter10/utils"
import { createNonSortedArray, swap } from "../utils"

/*
Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order. Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.
*/


function bubbleSort(array: number[], compareFn = defaultCompare): number[]{
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN){
                swap(array, j, j + 1)
            }
        }
    }

    return array
}

function modifiedBubbleSort(array: number[], compareFn = defaultCompare): number[]{
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1 - i; j++){
            if(compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN){
                swap(array, j, j + 1)
            }
        }
    }

    return array
}

/*
The difference between these two algorithms is that bubble sort compares each element, even if it has already been sorted. 
*/


let array = createNonSortedArray(5)
console.log(array.join())
array = bubbleSort(array)
console.log(array.join())

array = modifiedBubbleSort(array)
console.log(array.join())