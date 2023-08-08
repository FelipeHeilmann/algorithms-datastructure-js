export class DoublyNode<T>{
    element: T
    next: DoublyNode<T> | null
    prev: DoublyNode<T> | null
    constructor(element: T) {
        this.element = element
        this.next = null
        this.prev = null
    }
}