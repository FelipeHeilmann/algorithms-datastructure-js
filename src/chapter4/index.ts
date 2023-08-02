import { Stack } from "./stack";
import { StackObj } from "./stack-obj";

const stack = new Stack()

stack.push(5)
stack.push(8)
stack.push(11)

console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.peek())

stack.pop()


const stack2 = new StackObj()
stack2.push(1)
stack2.push(2)
stack2.push(5)

console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.peek())

stack.pop()

console.log(stack2.toString())

