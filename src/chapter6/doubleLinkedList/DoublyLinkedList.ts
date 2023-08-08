import { defaultEquals } from "../utils";
import { DoublyNode } from "./DoublyNode";

export class DoublyLinkedList<T>{
    head: DoublyNode<T> | null
    tail: DoublyNode<T> | null
    private equalsFn: (a: any, b: any) => boolean
    count: number
    constructor(equalsFn: (a: T, b: T) => boolean = defaultEquals) {
        this.equalsFn = equalsFn
        this.count = 0
        this.tail = null
        this.head = null
    }

    push(element: T) {
        const node = new DoublyNode(element);
        let current: DoublyNode<T>

        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail
            this.tail!.next = node
            this.tail = node
        }
        this.count++
    }
    insert(element: T, index: number) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element)
            let current = this.head
            if (index === 0) {
                if (this.head = null) {
                    this.head = node
                    this.tail = node
                }
                else {
                    node.next = this.head
                    current!.prev = node
                    this.head = node
                }
            }
            else if (index === this.count) {
                current = this.tail
                node.prev = this.tail
                current!.next = node
                this.tail = node
            }
            else {
                const previus = this.getElementAt(index - 1)
                const current = previus!.next
                node.next = current
                node.prev = previus
                current!.prev = node
                previus!.next = node
            }
            this.count++
            return true
        }
        return false
    }
    remove(element: T) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    removeAt(index: number) {
        if (index >= 0 && index <= this.count) {
            let current = this.head || null
            if (index === 0) {
                this.head = current!.next
                if (this.count === 0) {
                    this.tail = null
                }
                else {
                    this.head!.prev = null
                }
            }
            else if (index === this.count - 1) {
                current = this.tail
                this.tail = current!.prev
                this.tail!.next = null
            }
            else {
                current = this.getElementAt(index)
                console.log(current)
                const previous = current!.prev
                previous!.next = current!.next
                current!.next!.prev = previous
            }
            this.count--
            return current?.element
        }
        return false
    }
    getElementAt(index: number) {
        if (index >= 0 && index < this.count) {
            let current: DoublyNode<T> | null = this.head
            for (let i = 0; i < index && current != null; i++) {
                // Traverse the linked list to find the node at the given index.
                current = current.next
            }
            return current
        }
        return null
    }
    indexOf(element: T) {
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                // Return the index if the element is found in the linked list.
                return i
            }
            current = current.next;
        }
        // Return -1 if the element is not found in the linked list.
        return -1
    }
    getHead() {
        return this.head
    }
    getTail() {
        return this.tail
    }
    // Check if the linked list is empty
    isEmpty() {
        return this.count === 0
    }
    // Get the current size of the linked list
    size() {
        return this.count
    }
    // Convert the linked list to a string representation
    toString() {
        if (this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for (let i = 1; i < this.size() && current != null; i++) {
            // Traverse the linked list and concatenate the elements into a string.
            objString = `${objString} <-> ${current.element}`
            current = current.next
        }
        return objString
    }
}