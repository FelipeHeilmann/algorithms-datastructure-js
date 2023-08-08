export class Node<T> {
    public element: T
    public next?: Node<T>
    constructor(element: T) {
        this.element = element
    }
}