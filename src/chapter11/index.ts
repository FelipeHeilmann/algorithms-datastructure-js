import { MaxHeap } from './MaxHeap'
import { MinHeap } from './MinHeap'

const minHeap = new MinHeap()


minHeap.insert(1)
minHeap.insert(2)
minHeap.insert(3)
minHeap.insert(4)
minHeap.insert(5)

console.log(`Heap size ${minHeap.size()}`)
console.log(`Heap is empty ${minHeap.isEmpty()}`)
console.log(`Heap min value ${minHeap.findMinimum()}`)
console.log(`Heap min value ${minHeap.extract()}`)


const maxHeap = new MaxHeap()
maxHeap.insert(1)
maxHeap.insert(2)
maxHeap.insert(3)
maxHeap.insert(5)

console.log(`Heap size ${maxHeap.size()}`)
console.log(`Heap is empty ${maxHeap.isEmpty()}`)
console.log(`Heap min value ${maxHeap.findMinimum()}`)
console.log(`Heap min value ${maxHeap.extract()}`)
