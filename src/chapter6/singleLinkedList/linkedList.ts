import { defaultEquals } from "../utils";
import { Node } from "./Node";

export class LinkedList<T> {
    protected count: number
    protected head: Node<T> | undefined
    protected equalsFn: (a: T, b: T) => boolean


    constructor(equalsFn: (a: T, b: T) => boolean = defaultEquals) {
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }

    // Add an element to the end of the linked list
    push(element: T): void {
        const node = new Node(element)
        let current: Node<T>

        if (this.head == null) {
            // If the linked list is empty, set the new node as the head.
            this.head = node
        } else {
            // Traverse the linked list to find the last node and append the new node to it.
            current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    // Insert an element at a specific position in the linked list
    insert(element: T, index: number): boolean | undefined {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)

            if (index === 0) {
                // If the index is 0, the new node becomes the new head of the linked list.
                const current = this.head
                node.next = current
                this.head = node
            } else {
                // Find the previous node of the given index and link the new node to it.
                const previous = this.getElementAt(index - 1)
                if (previous) {
                    node.next = previous.next
                    previous.next = node
                }
            }
            this.count++
            return true
        }
    }

    // Remove the first occurrence of an element from the linked list
    remove(element: T): T | undefined {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    // Remove the element at a specific position from the linked list
    removeAt(index: number): T | undefined {
        if (index >= 0 && index < this.count) {
            let current = this.head

            if (index === 0) {
                // If the index is 0, update the head to the next node.
                this.head = current!.next
            } else {
                // Find the previous node of the given index and remove the current node from the linked list.
                const previous = this.getElementAt(index - 1)
                current = previous!.next
                previous!.next = current!.next
            }
            this.count--
            return current?.element
        }
        return undefined
    }

    // Find the index of the first occurrence of an element in the linked list
    indexOf(element: T): number {
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                // Return the index if the element is found in the linked list.
                return i
            }
            current = current.next
        }
        // Return -1 if the element is not found in the linked list.
        return -1
    }

    // Get the element at a specific position in the linked list
    getElementAt(index: number): Node<T> | undefined {
        if (index >= 0 && index <= this.count) {
            let node = this.head
            for (let i = 0; i < index && node != null; i++) {
                node = node.next
            }
            return node
        }
        return undefined
    }

    // Get the head (first element) of the linked list
    getHead(): Node<T> | undefined {
        return this.head
    }
    // Check if the linked list is empty
    isEmpty(): boolean {
        return this.count === 0
    }
    // Get the current size of the linked list
    size(): number {
        return this.count
    }
    clear(): void {
        this.head = undefined
    }
    // Convert the linked list to a string representation
    toString(): string {
        if (this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for (let i = 1; i < this.size() && current != null; i++) {
            // Traverse the linked list and concatenate the elements into a string.
            objString = `${objString} -> ${current.element}`
            current = current.next
        }
        return objString
    }
}