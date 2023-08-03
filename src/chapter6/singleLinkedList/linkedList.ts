import { defaultEquals } from "../utils";
import { Node } from "./node";

export class LinkedList<T> {
    private count: number;
    private head: Node<T> | null;
    private equalsFn: (a: any, b: any) => boolean;

    constructor(equalsFn: (a: T, b: T) => boolean = defaultEquals) {
        this.count = 0
        this.head = null
        this.equalsFn = equalsFn
    }

    // Add an element to the end of the linked list
    push(element: T) {
        const node = new Node(element);
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
    insert(element: T, index: number) {
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
        return false
    }

    // Remove the first occurrence of an element from the linked list
    remove(element: T) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    // Remove the element at a specific position from the linked list
    removeAt(index: number) {
        if (index >= 0 && index < this.count) {
            let current = this.head

            if (index === 0) {
                // If the index is 0, update the head to the next node.
                this.head = current!.next
            } else {
                // Find the previous node of the given index and remove the current node from the linked list.
                const previous = this.getElementAt(index - 1);
                current = previous!.next
                previous!.next = current!.next
            }
            this.count--
            return current?.element
        }
        return undefined
    }

    // Find the index of the first occurrence of an element in the linked list
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

    // Get the element at a specific position in the linked list
    getElementAt(index: number) {
        if (index >= 0 && index < this.count) {
            let current: Node<T> | null = this.head
            for (let i = 0; i < index && current != null; i++) {
                // Traverse the linked list to find the node at the given index.
                current = current.next
            }
            return current
        }
        return null
    }

    // Get the head (first element) of the linked list
    getHead() {
        return this.head
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
            objString = `${objString} -> ${current.element}`
            current = current.next
        }
        return objString
    }
}
