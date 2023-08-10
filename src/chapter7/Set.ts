export class Set<T>{
    private items: any
    constructor() {
        this.items = {}
    }

    add(element: T) {
        if (!this.has(element)) {
            this.items[element] = element
            return true
        }
        return false
    }
    delete(element: T) {
        if (this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }
    has(element: T) {
        return this.items.hasOwnProperty(element)
    }
    clear() {
        this.items = {}
    }
    size() {
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
    intersection(otherSet: Set<T>) {
        const intersectionSet = new Set()
        const values = this.values()
        const otherValues = otherSet.values()
        let biggerSet = values
        let smallerSet = otherValues
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues
            smallerSet = values
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value)
            }
        })

        return intersectionSet
    }
    difference(otherSet: Set<T>) {
        const differenceSet = new Set<T>()
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value)
            }
        })

        return differenceSet
    }
    isSubsetOf(otherSet: Set<T>) {
        if (this.size() > otherSet.size()) {
            return false
        }
        let isSubset = true
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubset = false
                return false
            }
            return true
        })
        return isSubset
    }
}