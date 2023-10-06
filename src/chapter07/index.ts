import { Set } from "./Set"

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

const setC = new Set()
setC.add(1)
setC.add(2)

const setD = new Set()
setD.add(1)
setD.add(2)

const setE = new Set()
setE.add(2)
setE.add(3)

const union = setA.union(setB)
const inserction = setA.intersection(setB)
const difference = setA.difference(setB)

console.log(union.values())
console.log(difference.values())
console.log(inserction.values())
console.log(setC.isSubsetOf(setD))
console.log(setE.isSubsetOf(setC))                                                                                                                                                              