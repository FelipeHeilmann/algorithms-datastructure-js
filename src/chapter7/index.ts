import { Set } from "./Set";

const set = new Set()

set.add('Felipe')
set.add('Bruno')
set.add('Gustavo')
set.add('Mateus')
console.log(set.values())
console.log(set.size())


set.delete('Bruno')

console.log(set.values())
console.log(set.has('Bruno'))

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
setA.add(4)
const setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)

const union = setA.union(setB)
const inserction = setA.intersection(setB)

console.log(union.values())
console.log(inserction)                                                                                                                                                              