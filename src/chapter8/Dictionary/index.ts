import { Dictionary } from './Dictionary/Dictionary';
const dictionary = new Dictionary()

dictionary.setKey("Felipe", "felipeheilmannm@gmail.com")
dictionary.setKey("Carlos", "carloscaramente@gmail.com")
dictionary.setKey("Daniel", "danielbarbosa@gmail.com")

console.log(dictionary.keyValues())
console.log(dictionary.toString())
console.log(dictionary.hasKey("Felipe"))
console.log(dictionary.get('Felipe'))
console.log(dictionary.keys())
console.log(dictionary.values())

dictionary.forEach((k: any, v: any) =>{
    console.log(`forEach key ${k}, value: ${v}`)
})