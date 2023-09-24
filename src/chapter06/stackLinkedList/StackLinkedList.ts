import { DoublyLinkedList } from "../doubleLinkedList/DoublyLinkedList"

export class StackLinkedList<T>{
    private items: DoublyLinkedList<T>

    constructor() {
        this.items = new DoublyLinkedList()
    }

    push(element: T): void {
        this.items.push(element)
    }
    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items.getElementAt(this.size() - 1)?.element
    }
    isEmpty(): boolean {
        return this.items.isEmpty()
    }
    size(): number {
        return this.items.size()
    }
    clear(): void {
        return this.items.clear()
    }
    toString(): string {
        return this.items.toString()
    }
}