export class Node<T>{
    element: T
    next: Node<T> | null

    constructor(element: T) {
        this.element = element
        this.next = null
    }

}