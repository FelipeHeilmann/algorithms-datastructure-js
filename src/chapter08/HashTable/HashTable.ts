import { ValuePair } from "../ValueKeyPair"
import { defaultToString } from "../../utils"

export class HashTable<K, V>{
    private toStrFn: (key: K) => string
    protected table: { [key: string]: ValuePair<K, V> }
    constructor(toStrFun = defaultToString) {
        this.toStrFn = toStrFun
        this.table = {}
    }

    private loseloseHashCode(key: K): number {
        if (typeof key === "number") {
            return key
        }
        const tableKey = this.toStrFn(key)
        let hash = 0
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i)
        }

        return hash % 37
    }
    /*
    djb2HashCode(key: K){
        const tableKey = this.toStrnFn(key)
        let hash = 5381
        for(let i = 0; i < tableKey.length; i++){
            hash (hash * 33) + tableKey.charCodeAt(i)
        }

        return hash % 1013
    }
    
    */
    hashCode(key: K): number {
        return this.loseloseHashCode(key)
    }
    put(key: K, value: V): boolean {
        if (key !== null && value !== null) {
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key, value)

            return true
        }
        return false
    }
    get(key: K): V | undefined {
        const valuePair = this.table[this.hashCode(key)]

        return valuePair == null ? undefined : valuePair.value
    }
    remove(key: K): boolean {
        const hash = this.hashCode(key)
        const valuePair = this.table[hash]
        if (valuePair !== null) {
            delete this.table[hash]

            return true
        }
        return false
    }
    getTable(): { [key: string]: ValuePair<K, V> } {
        return this.table
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    size(): number {
        return Object.keys(this.table).length;
    }

    clear(): void {
        this.table = {};
    }
    toString(): string {
        if (this.isEmpty()) {
            return ''
        }
        const keys = Object.keys(this.table)
        let objString = `${keys[0]} => ${this.table[keys[0]].toString()}`
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString}, ${keys[i]} => ${this.table[keys[i]].toString()}`
        }

        return objString
    }

}