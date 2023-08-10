export class Set<T>{
    private items: any
    constructor(){
        this.items = {}
    }

    add(element: T){
        if(!this.has(element)){
            this.items[element] = element
            return true
        }
        return false
    }
    delete(element: T){
        if(this.has(element)){
            delete this.items[element]
            return true
        }
        return false
    }
    has(element: T) {
        return this.items.hasOwnProperty(element)
      }
    clear(){
        this.items = {}
    }
    size(){
        return Object.keys(this.items).length
        /*Objetc.keys return an array that contains all the keys of the parameter*/
    }
    values(): T[] {
        return Object.values(this.items)
    }
    union(otherSet: Set<T>) {
        const unionSet = new Set<T>()
    
        this.values().forEach(value => unionSet.add(value))
        otherSet.values().forEach(value => unionSet.add(value))
    
        return unionSet
      }
    intersection(otherSet: Set<T>){
        const intersectionSet = new Set()
        const values = this.values()
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }

        return intersectionSet
    }
}