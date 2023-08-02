export class Deque<T>{
    private items: { [key: number]: T }
    private count: number
    private lowestCount: number

    constructor(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    addFront(element: T){
        if(this.isEmpty()){
            this.addBack(element)
        }
        else if(this.lowestCount > 0){
            this.lowestCount--
            this.items[this.lowestCount] =  element
        }
        else{
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = element
        }
    }
    addBack(element: T){
        this.items[this.count] = element
        this.count++
    }
    removeFront(){
        if(this.isEmpty())
            return undefined
        
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++

        return result
    }
    removeBack(){
        if(this.isEmpty())
        return undefined
    
        const result = this.items[this.count - 1]
        delete this.items[this.count - 1]
        this.count--

        return result
    }
    peekFront(){
        if(this.isEmpty())
            return undefined
        return this.items[this.lowestCount]
    }
    peekBack(){
        if(this.isEmpty())
            return undefined
        return this.items[this.count - 1] 
    }
    isEmpty(){
        return this.count - this.lowestCount === 0
    }
    size(){
        return this.count - this.lowestCount
    }
    clear(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let string = `${this.items[this.lowestCount]}`
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            string = `${string},${this.items[index]}`
        }
        return string
    }
}