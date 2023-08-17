import { LinkedList } from "../singleLinkedList/LinkedList";
import { defaultEquals } from "../utils";
import { DoublyNode } from "./DoublyNode";

export class DoublyLinkedList<T> extends LinkedList<T> {
    protected head: DoublyNode<T> | undefined;
    protected tail: DoublyNode<T> | undefined;
    protected equalsFn: (a: any, b: any) => boolean
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
        this.equalsFn = equalsFn
    }

    push(element: T): void {
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
    insert(element: T, index: number): boolean {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element)
            let current = this.head

            if (index === 0) {
                if (this.head == null) {
                    this.head = node
                    this.tail = node
                } else {
                    node.next = this.head
                    this.head.prev = node
                    this.head = node;
                }
            } else if (index === this.count) {
                current = this.tail
                current!.next = node
                node.prev = current
                this.tail = node
            } else {
                const previous = this.getElementAt(index - 1)
                current = previous!.next;
                node.next = current;
                previous!.next = node

                current!.prev = node
                node.prev = previous!
            }
            this.count++
            return true
        }
        return false;
    }
    removeAt(index: number): T | undefined {
        if (index >= 0 && index < this.count) {
            let current = this.head

            if (index === 0) {
                this.head = this.head!.next;
                // if there is only one item, then we update tail as well
                if (this.count === 1) {
                    this.tail = undefined
                } else {
                    this.head!.prev = undefined // {3}
                }
            } else if (index === this.count - 1) {
                // last item
                current = this.tail
                this.tail = current!.prev
                this.tail!.next = undefined
            } else {
                current = this.getElementAt(index);
                const previous = current!.prev
                // link previous with current's next - skip it to remove
                previous!.next = current!.next
                current!.next!.prev = previous
            }
            this.count--
            return current!.element
        }
        return undefined
    }

    indexOf(element: T): number {
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
    getHead(): DoublyNode<T> | undefined {
        return this.head
    }
    getTail(): DoublyNode<T> | undefined {
        return this.tail
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
        super.clear()
        this.tail = undefined
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
            objString = `${objString} <-> ${current.element}`
            current = current.next
        }
        return objString
    }
}