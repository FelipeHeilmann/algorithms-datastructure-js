export class DoublyNode<T>{
    element: T
    next: DoublyNode<T> | null
    prev: DoublyNode<T> | null
    constructor(element: T){
        this.element = element
        this.next = null
        this.prev = null
    }
    getNext(){
        return this.next
    } 
    setNext(next: DoublyNode<T>){
        this.next = next
    }
    getPrev(){
        return this.prev
    }
    setPrev(prev: DoublyNode<T>){
        this.prev = prev || null
    }
}