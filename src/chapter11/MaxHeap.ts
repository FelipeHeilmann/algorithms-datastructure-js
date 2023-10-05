import { MinHeap } from "./MinHeap"
import { ICompareFunction, defaultCompare, reverseCompare } from "../utils"

export class MaxHeap<T> extends MinHeap<T> {
    constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
        super(compareFn)
        this.compareFn = reverseCompare(compareFn)
    }
}