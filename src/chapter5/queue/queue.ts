export class Queue<T> {
    private items: { [key: number]: T }
    private count: number
    // used for manage the last item on the queue
    private lowestCount: number

    constructor() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    // Add an element to the end of the queue
    enqueue(element: T): void {
        this.items[this.count] = element
        this.count++
    }

    // Remove and return the front element from the queue
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    // Get the front element of the queue without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.count - this.lowestCount === 0
    }

    // Get the current size of the queue
    size(): number {
        return this.count - this.lowestCount
    }

    // Clear the queue, removing all elements
    clear(): void {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    // String representation of the queue
    toString(): string {
        if (this.isEmpty()) {
            return ''
        }
        let objString: string = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}
