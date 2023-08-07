// Implementing a stack using a JavaScript object
export class StackObj<T> {
    // Private members of the class
    private count: number // Keeps track of the number of elements in the stack
    private items: { [key: number]: T } // Object to store the elements of the stack

    // Constructor to initialize the stack
    constructor() {
        this.count = 0 // Initialize the count to zero, as the stack is empty initially
        this.items = {} // Initialize an empty object to store the stack elements
    }

    // Method to add an element to the top of the stack
    push(element: T) {
        this.items[this.count] = element // Add the element to the 'items' object with the 'count' as the key
        this.count++ // Increment the count to reflect the addition of a new element
    }

    // Method to remove and return the element from the top of the stack
    pop() {
        if (this.isEmpty()) // Check if the stack is empty
            return undefined // If empty, return 'undefined'

        this.count--; // Decrement the count to point to the last element in the stack
        const item = this.items[this.count] // Get the last element from the 'items' object
        delete this.items[this.count] // Delete the last element from the 'items' object

        return item; // Return the removed element
    }

    // Method to return the element at the top of the stack without removing it
    peek() {
        if (this.isEmpty()) // Check if the stack is empty
            return undefined // If empty, return 'undefined'
        
        // Return the last element in the 'items' object without removing it
        return this.items[this.count - 1]
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.count === 0 // Returns 'true' if the count is zero (empty), otherwise 'false'
    }

    // Method to return the number of elements in the stack
    size() {
        return this.count // Returns the value of 'count', representing the number of elements
    }

    // Method to clear the stack by resetting the 'items' object and 'count' to zero
    clear() {
        this.items = {} // Reset the 'items' object to an empty object
        this.count = 0 // Reset the 'count' to zero, making the stack empty
    }

    // Method to convert the stack elements to a comma-separated string
    toString() {
        if (this.isEmpty()) // Check if the stack is empty
            return '' // If empty, return an empty string
        
        let objString: string = `${this.items[0]}` // Start with the first element in 'items'
        for (let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}` // Append each element with a comma separator
        }
        return objString // Return the comma-separated string representation of the stack
    }
}
