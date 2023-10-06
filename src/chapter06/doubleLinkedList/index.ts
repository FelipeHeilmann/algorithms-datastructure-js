import { LinkedList } from "../singleLinkedList/LinkedList"
import { DoublyLinkedList } from "./DoublyLinkedList"

const doubleLinkedList = new DoublyLinkedList()

doubleLinkedList.push('Felipe')
doubleLinkedList.push('Bruno')
doubleLinkedList.insert('Gustavo', 1)

doubleLinkedList.removeAt(2)
doubleLinkedList.remove('Gustavo')

doubleLinkedList.push('Vinicius')
doubleLinkedList.push('Mateus')
doubleLinkedList.push('Victor')
doubleLinkedList.insert('Guilherme', 4)

console.log(doubleLinkedList.isEmpty())
console.log(doubleLinkedList.size())
console.log(doubleLinkedList.getHead())
console.log(doubleLinkedList.getTail())
console.log(doubleLinkedList.toString())
