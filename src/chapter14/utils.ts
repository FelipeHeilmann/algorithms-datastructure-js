export function swap(array: number[], a: number, b: number): void{
    [array[a], array[b]] = [array[b], array[a]]
}

export function createNonSortedArray(size: number): number[]{
    const array = []
    for(let i = size; i >= 0; i--){
        array.push(i)
    }

    return array
}