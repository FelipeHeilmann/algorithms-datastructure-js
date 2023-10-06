import { BinarySearchTree } from "./BinarySearchTree"
import { Node } from "./Node"
import { Compare, ICompareFunction, defaultCompare } from "../utils"

enum BalanceFactor {
    UNBALANCED_RIGHT = 1,
    SLIGHTLY_UNBALANCED_RIGHT = 2,
    BALANCED = 3,
    SLIGHTLY_UNBALANCED_LEFT = 4,
    UNBALANCED_LEFT = 5
}

export class AVLTree<T> extends BinarySearchTree<T>{
    constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
        super(compareFn);
    }
    private getNodeHeight(node: Node<T>): number {
        if (node == null) {
            return -1
        }
        return Math.max(this.getNodeHeight(node.left!), this.getNodeHeight(node.right!)) + 1;
    }
    getBalanceFactor(node: Node<T>): number {
        const heighDifference = this.getNodeHeight(node.left!) - this.getNodeHeight(node.right!)

        switch (heighDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            case 2:
                return BalanceFactor.UNBALANCED_LEFT
            default:
                return BalanceFactor.BALANCED
        }
    }
    /**
    * Left left case: rotate right
    *
    *       b                           a
    *      / \                         / \
    *     a   e -> rotationLL(b) ->   c   b
    *    / \                             / \
    *   c   d                           d   e
    *
    */
    rotationLL(node: Node<T>): Node<T> | null {
        const temp = node.left
        node.left = temp!.right
        temp!.right = node

        return temp
    }
    /**
    * Right right case: rotate left
    *
    *     a                              b
    *    / \                            / \
    *   c   b   -> rotationRR(a) ->    a   e
    *      / \                        / \
    *     d   e                      c   d
    *
    * 
    */
    rotationRR(node: Node<T>): Node<T> | null {
        const temp = node.right
        node.right = temp!.left
        temp!.left = node

        return temp
    }
    //Left right case: rotate left then right
    rotationLR(node: Node<T>): Node<T> | null {
        node.left = this.rotationRR(node.left!)

        return this.rotationLL(node)
    }
    // Right left case: rotate right then left
    rotationRL(node: Node<T>): Node<T> | null {
        node.right = this.rotationLL(node.right!)

        return this.rotationLL(node)
    }
    insert(key: T): void {
        this.root = this.insertNode(this.root, key)
    }
    protected insertNode(node: Node<T> | null, key: T): Node<T> | null {
        if (node === null) {
            return new Node(key)
        }
        else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key)
        }
        else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key)
        }
        else {
            return node
        }

        const balanceFactor = this.getBalanceFactor(node)

        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left!.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node)
            }
            else {
                return this.rotationLR(node)
            }
        }

        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node!.right!.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node!)
            }
            else {
                return this.rotationRL(node!)
            }
        }

        return node
    }
    protected removeNode(node: Node<T>, key: T) {
        node = super.removeNode(node, key)!
        if (node == null) {
            return node
        }
        // verify if tree is balanced
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left!.key) === Compare.LESS_THAN) {
                // Left left case
                node = this.rotationLL(node)!
            } else {
                // Left right case
                node = this.rotationLR(node)!
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right!.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node)!
            } else {
                node = this.rotationRL(node)!
            }
        }
        return node
    }

}