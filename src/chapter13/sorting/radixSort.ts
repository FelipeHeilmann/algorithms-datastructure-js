import { findMaxValue, findMinValue } from "../searching/minMaxSearch"
import { createNonSortedArray } from "../../utils"

const countingSortForRadix = (
  array: number[],
  radixBase: number,
  significantDigit: number,
  minValue: any
) => {
  let bucketsIndex;
  const buckets: number[] = []
  const aux: number[] = []

  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0
  }

  for (let i = 0; i < array.length; i++) {
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
    buckets[bucketsIndex]++
  }

  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1]
  }

  for (let i = array.length - 1; i >= 0; i--) {
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
    aux[--buckets[bucketsIndex]] = array[i]
  }


  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i]
  }

  return array
};

export function radixSort(array: number[], radixBase = 10) {

  if (array.length < 2) {
    return array
  }

  const minValue = findMinValue(array)
  const maxValue = findMaxValue(array)

  let significantDigit = 1
  while ((maxValue! - minValue!) / significantDigit >= 1) {
    array = countingSortForRadix(array, radixBase, significantDigit, minValue)
    significantDigit *= radixBase
  }

  return array
}

let array = createNonSortedArray(5)
console.log(array.join())
array = radixSort(array)
console.log(array.join())