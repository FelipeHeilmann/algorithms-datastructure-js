/*
A LIFO (Last in First out) datastructure
as we just need to access the element on the top of the array, all the methods are O(1)
*/

export class Stack<T>{
    private items: T[] = []
    constructor(){
        this.items = []
    }

    push(element: T){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    clear(){
        this.items = []
    }
}