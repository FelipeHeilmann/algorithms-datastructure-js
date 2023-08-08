import { LinkedList } from "../singleLinkedList/LinkedList"
import { compare, compareDefault, defaultEquals } from "../utils"

export class SortedLinkedList<T> extends LinkedList<T>{
    protected equalsFn: (a: T, b: T) => boolean
    protected compareFn: (a: T, b: T) => number
    constructor(equalsFn = defaultEquals, compare = compareDefault) {
        super(equalsFn)
        this.compareFn = compare
        this.equalsFn = equalsFn
    }
    insert(element: T, index: number = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0)
        }
        const pos = this.getIndexNextSortedElement(element)
        return super.insert(element, pos)
    }
    getIndexNextSortedElement(element: T) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element)
            if (comp === compare.LESS_THAN) {
                return i
            }
            current = current.next
        }
        return i
    }
}

