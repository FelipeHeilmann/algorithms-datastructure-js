import { HashTable } from "./HashTable"

const hashTable = new HashTable()

hashTable.put('Ygritte', 'ygritte@gmail.com')
hashTable.put('Jonathan', 'jonathan@gmail.com')
hashTable.put('Jamie', 'jamie@gmail.com')
hashTable.put('Jack', 'jack@gmail.com')
hashTable.put('Jake', 'jake@gmail.com')
hashTable.put('Nathan', 'nathan@gmail.com')
hashTable.put('Athlesian', 'athlesian@gmail.com')
hashTable.put('Sue', 'sue@gmail.com')
hashTable.put('Aethewulf', 'aethewulf@gmail.com')
hashTable.put('Sargeras', 'sargeras@gmail.com')

console.log(hashTable.hashCode('Ygritte') + '-Ygritte')
console.log(hashTable.hashCode('Jonathan') + '-Jonathan')
console.log(hashTable.hashCode('Jamie') + '-Jamie')
console.log(hashTable.hashCode('Jack') + '-Jack')
console.log(hashTable.hashCode('Jake') + '-Jake')
console.log(hashTable.hashCode('Nathan') + '-Nathan')
console.log(hashTable.hashCode('Athlesian') + '-Athlesian')
console.log(hashTable.hashCode('Sue') + '-Sue')
console.log(hashTable.hashCode('Aethewulf') + '-Aethewulf')
console.log(hashTable.hashCode('Sargeras') + '-Sargeras')

