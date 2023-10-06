import { LinkedList } from "./LinkedList"

const linkedList = new LinkedList()

linkedList.push('Felipe')
linkedList.push('Bruno')
linkedList.insert('Gustavo', 1)

linkedList.removeAt(2)
linkedList.remove('Gustavo')

linkedList.push('Vinicius')
linkedList.push('Mateus')
linkedList.push('Victor')
linkedList.insert('Guilherme', 4)

console.log(linkedList.isEmpty())
console.log(linkedList.size())
console.log(linkedList.getHead())
console.log(linkedList.toString())