import { Queue } from "./Queue";

const queue = new Queue()

queue.enqueue('Felipe')
queue.enqueue('Mateus')
queue.enqueue('Victor')
queue.enqueue('Vinicius')
queue.enqueue('Bruno')

console.log(queue.isEmpty())
console.log(queue.size())

console.log(queue.peek())

console.log(queue.toString())

queue.dequeue()

console.log(queue.toString())


