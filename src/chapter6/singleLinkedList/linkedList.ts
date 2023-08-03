import { defaultEquals } from "../utils"
import { Node } from "./node"

export class LinkedList<T>{
    private count: number
    private head: any
    private equalsFn: (a: any, b: any) => boolean

    constructor(equalsFn: (a: T, b: T) => boolean = defaultEquals) {
        this.count = 0;
        this.head = undefined
        this.equalsFn = equalsFn
    }

    push(element: T){
        const node = new Node(element)
        let current: Node<T>
        if(this.head == null){
            this.head = node
        }
        else{
            current = this.head
            while(current.next != null){
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    insert(element: T, index: number){
        if(index >= 0 && index <= this.count){
            const node = new Node(element)

            if(index === 0){
                const current = this.head
                node.next = current
                this.head = node
            }
            else{
                const previous = this.getElementAt(index - 1);
                if (previous) {
                    node.next = previous.next;
                    previous.next = node;
                }
            }
            this.count++
            return true
        }
        return false
    }
    remove(element: T){
       const index = this.indexOf(element)
       return this.removeAt(index)
    }
    removeAt(index: number){
        if(index >= 0 && index < this.count){
            let current = this.head

            if(index === 0){
                this.head = current!.next
            }
            else{
                const previous = this.getElementAt(index - 1)
                current = previous!.next
                previous!.next = current!.next
            }
            this.count--
            return current?.element
        }
        return undefined
    }
    indexOf(element: T){
        let current = this.head
        for(let i = 0; i < this.count && current != null; i++){
            if(this.equalsFn(element, current.element)){
                return i
            }
            current = current.next
        }
        return -1
    }
    getElementAt(index: number){
        if(index >= 0 && index < this.count){
            let current: Node<T> | null = this.head
            for(let i = 0; i < index && current != null; i++){
                current = current.next
            }
            return current
        }
        return null
    }
    getHead(){
        return this.head
    }
    isEmpty(){
        return this.count === 0
    }
    size(){
        return this.count
    }
    toString(){
        if(this.head == null){
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for(let i = 1; i < this.size() && current != null; i++){
            objString = `${objString} -> ${current.element}`
            current = current.next
        }
        return objString
    }

}