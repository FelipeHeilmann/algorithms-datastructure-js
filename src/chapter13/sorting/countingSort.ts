import { createNonSortedArray } from "../utils"

function countingSort(array: any[]): any[]{
    if(array.length < 2){
        return array
    }
    const maxValue = findMaxValue(array)
    const counts = new Array(maxValue + 1)
    array.forEach(item => {
        if(!counts[item]){
            counts[item] = 0 
        }

        counts[item]++
    })
    let sortedIndex = 0
    counts.forEach((count, i) =>{
        while(count > 0){
            array[sortedIndex++] = i
            count--
        }
    })

    return array
}

function findMaxValue(array: any[]):  number{
    let max = array[0]
    for(let i = 0; i < array.length; i++){
        max = array[i]
    }

    return max
}

let array = createNonSortedArray(5)
console.log(array.join())
array = countingSort(array)
console.log(array.join())