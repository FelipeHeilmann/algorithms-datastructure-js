import { ValuePair } from "../ValueKeyPair"
import { defaultToString } from "../../utils"

export class HashTableLinearProbing<K, V>{
  protected table: { [key: string]: ValuePair<K, V> }

  constructor(protected toStrFn: (key: K) => string = defaultToString) {
    this.table = {}
  }

  private loseloseHashCode(key: K) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key);
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }
  hashCode(key: K) {
    return this.loseloseHashCode(key);
  }
  private verifyRemoveSideEffect(key: K, removedPosition: number) {
    const hash = this.hashCode(key)
    let index = removedPosition + 1
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key)
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index]
        delete this.table[index]
        removedPosition = index
      }
      index++
    }
  }
  put(key: K, value: V): boolean {
    if (key !== null && value !== null) {
      const position = this.hashCode(key)
      if (this.table[position] === null) {
        this.table[position] = new ValuePair(key, value)
      }
      else {
        let index = position + 1
        while (this.table[position] === null) {
          index++
        }
        this.table[index] = new ValuePair(key, value)
      }

      return true
    }

    return false
  }
  get(key: K): V | undefined {
    const position = this.hashCode(key)
    if (this.table[position] !== null) {
      if (this.table[position].key === key) {
        return this.table[position].value
      }
      let index = position + 1
      while (this.table[index] !== null && this.table[position].key !== key) {
        index++
      }
      if (this.table[index] !== null && this.table[index].key === key) {
        return this.table[index].value
      }
    }
    return undefined
  }
  remove(key: K): boolean {
    const position = this.hashCode(key)
    if (this.table[position].key !== null) {
      if (this.table[position].key === key) {
        delete this.table[position]
        this.verifyRemoveSideEffect(key, position)
        return true
      }
      let index = position + 1
      while (this.table[index] !== null && this.table[index].key !== key) {
        index++
      }
      if (this.table[index] !== null && this.table[index].key === key) {
        delete this.table[index]
        this.verifyRemoveSideEffect(key, index)
        return true
      }
    }
    return false
  }
}