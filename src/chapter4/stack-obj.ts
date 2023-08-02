/*Implementing a stack using javascript object*/

export class StackObj<T> {
    private count: number
    private items: { [key: number]: T }

    constructor() {
        this.count = 0
        this.items = {}
    }

    push(element: T) {
        this.items[this.count] = element
        this.count++
    }
    pop(){
        if(this.isEmpty())
            return undefined
        
        this.count--
        const item = this.items[this.count]
        delete this.items[this.count]

        return item

    }
    peek(){
        if(this.isEmpty())
            return undefined
        return this.items[this.count - 1]    
    }
    isEmpty(){
        return this.count === 0
    }
    size(){
        return this.count
    }
    clear(){
        this.items = {}
        this.count = 0
    }
    toString(){
        if(this.isEmpty())
            return ''
        let objString: string = `${this.items[0]}`
        for(let i = 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString    
    }
}