import { Node } from "../singleLinkedList/Node"

export class DoublyNode<T> extends Node<T> {
    public element: T
    public next?: DoublyNode<T>
    public prev?: DoublyNode<T>
    constructor(
        element: T
    ) {
        super(element)
        this.element = element
    }
}