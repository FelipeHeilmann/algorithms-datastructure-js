import { Deque } from "./Deque"

const deque = new Deque()

deque.addFront('Felipe')
deque.addFront('Bruno')
deque.addBack('Gustavo')

console.log(deque.peekFront())
console.log(deque.peekBack())
console.log(deque.size())
console.log(deque.isEmpty())

console.log(deque.toString())

deque.removeBack()
deque.removeFront()

console.log(deque.toString())