import { DoublyLinkedList } from "../doubleLinkedList/DoublyLinkedList"

export class StackLinkedList<T>{
    private items: DoublyLinkedList<T>

    constructor() {
        this.items = new DoublyLinkedList()
    }

    push(element: T) {
        this.items.push(element)
    }
    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items.getElementAt(this.size() - 1)?.element
    }
    isEmpty() {
        return this.items.isEmpty()
    }
    size() {
        return this.items.size()
    }
    clear() {
        return this.items.clear()
    }
    toString() {
        return this.items.toString()
    }
}