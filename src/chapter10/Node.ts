export class Node<K>{
    left: Node<K> | null
    right: Node<K> | null

    constructor(public key: K) {
        this.left = null
        this.right = null
    }

    toString() {
        return `${this.key}`
    }
}