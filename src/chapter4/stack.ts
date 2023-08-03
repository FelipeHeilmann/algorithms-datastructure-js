/*
A LIFO (Last in First out) data structure.
As we just need to access the element on the top of the array, all the methods are O(1).
*/

export class Stack<T> {
    private items: T[] = []

    constructor() {
        this.items = []
    }

    // Method to add an element to the top of the stack
    push(element: T) {
        this.items.push(element)
    }

    // Method to remove and return the element from the top of the stack
    pop() {
        return this.items.pop()
    }

    // Method to return the element at the top of the stack without removing it
    peek() {
        return this.items[this.items.length - 1]
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0
    }

    // Method to return the number of elements in the stack
    size() {
        return this.items.length
    }

    // Method to clear the stack by resetting the 'items' array to an empty array
    clear() {
        this.items = []
    }
}
