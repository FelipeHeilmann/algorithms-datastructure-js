import { compare, defaultCompare, ICompareFunction } from '../chapter6/utils'
import { Node } from './Node'

export class BinarySearchTree<T>{
    protected root: Node<T> | null

    constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
        this.root = null
    }

    insert(key: T): void {
        if (this.root == null) {
            this.root = new Node<T>(key)
        }
        else {
            this.insertNode(this.root, key)
        }
    }
    private insertNode(node: Node<T>, key: T): void {
        if (this.compareFn(key, node.key) === compare.LESS_THAN) {
            if (node.left === null) {
                node.left = new Node<T>(key)
            }
            else {
                this.insertNode(node.left, key)
            }
        }
        else {
            if (node.right === null) {
                node.right = new Node<T>(key)
            }
            else {
                this.insertNode(node.right, key)
            }
        }
    }
    inOrderTraverse(callback: Function): void {
        this.inOrderTraverseNode(this.root, callback)
    }
    private inOrderTraverseNode(node: Node<T> | null, callback: Function): void {
        /*It visits the nodes in a crescent order*/
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }
    preOrderTraverse(callback: Function): void {
        this.preOrderTranverseNode(this.root, callback)
    }
    private preOrderTranverseNode(node: Node<T> | null, callback: Function): void {
        /*It visits the root node first, then the node at left, then right*/
        if (node !== null) {
            callback(node.key)
            this.inOrderTraverseNode(node.left, callback)
            this.inOrderTraverseNode(node.right, callback)

        }
    }
    posOrderTraverse(callback: Function): void {
        this.posOrderTraverseNode(this.root, callback)
    }
    private posOrderTraverseNode(node: Node<T> | null, callback: Function): void {
        /*it visits the node after visiting its dependents*/
        if (node !== null) {
            this.posOrderTraverseNode(node.left, callback)
            this.posOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
    min() {
        return this.minNode(this.root)
    }
    private minNode(node: Node<T> | null): Node<T> | null {
        let current = node
        while (current !== null && current.left !== null) {
            current = current.left
        }

        return current
    }
    max() {
        return this.maxNode(this.root)
    }
    private maxNode(node: Node<T> | null): Node<T> | null {
        let current = node
        while (current !== null && current.right !== null) {
            current = current.right
        }

        return current
    }
    search(key: T): Node<T> | boolean {
        return this.searchNode(this.root, key)
    }
    private searchNode(node: Node<T> | null, key: T): Node<T> | boolean {
        if (node === null) {
            return false
        }

        if (this.compareFn(node.key, key) === compare.LESS_THAN) {
            return this.searchNode(node.left, key)
        }
        else if (this.compareFn(key, node.key) === compare.BIGGER_THAN) {
            return this.searchNode(node.right, key)
        }
        else {
            return true
        }
    }
    remove(key: T) {
        this.root = this.removeNode(this.root, key) || null
    }
    private removeNode(node: Node<T> | null, key: T) {
        if (node === null) {
            return null
        }
        if (this.compareFn(key, node.key) === compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key) || null

            return node
        }
        else if (this.compareFn(key, node.key) === compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key) || null

            return node
        }
        else {
            if (node.left === null && node.right === null) {
                node = null

                return node
            }
            if (node.left === null) {
                node = node.right

                return node
            }
            else if (node.right === null) {
                node = node.left

                return node
            }
            const aux = this.minNode(node.right)
            node.key = aux!.key
            node.right = this.removeNode(node.right, aux!.key) || null
            return node
        }
    }
}