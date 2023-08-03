export class Deque<T> {
    private items: { [key: number]: T }
    private count: number
    private lowestCount: number

    constructor() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    // Add an element to the front of the deque
    addFront(element: T) {
        if (this.isEmpty()) {
            // If the deque is empty, add the element to the back (alternative implementation).
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            // If the deque is not empty, but there is space at the back (lowestCount > 0),
            // move the elements to the correct position and insert the new element at the front.
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            // If the deque is not empty and there is no space at the back,
            // move all elements one position forward and insert the new element at the front.
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = element
        }
    }

    // Add an element to the back of the deque
    addBack(element: T) {
        this.items[this.count] = element
        this.count++
    }

    // Remove and return the front element from the deque
    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    // Remove and return the back element from the deque
    removeBack() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.count - 1]
        delete this.items[this.count - 1]
        this.count--
        return result
    }

    // Get the front element of the deque without removing it
    peekFront() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }

    // Get the back element of the deque without removing it
    peekBack() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }

    // Check if the deque is empty
    isEmpty() {
        return this.count - this.lowestCount === 0
    }

    // Get the current size of the deque
    size() {
        return this.count - this.lowestCount
    }

    // Clear the deque, removing all elements
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    // String representation of the deque
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let string = `${this.items[this.lowestCount]}`
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            string = `${string},${this.items[index]}`
        }
        return string;
    }
}
