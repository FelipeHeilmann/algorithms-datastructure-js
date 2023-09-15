import { BinarySearchTree } from "./BinarySearchTree";
import { Node } from "./Node";
import { Colors, RedBlackNode } from "./RedBlackNode";
import { Compare, ICompareFunction, defaultCompare } from "./utils";

export class RedBlackTree<T> extends BinarySearchTree<T>{
    protected root: RedBlackNode<T> | null

    constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
        super(compareFn)
        this.root = null
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
  * @param node Node<T>
  */
    private rotationLL(node: RedBlackNode<T>) {
        const tmp = node.left
        node.left = tmp!.right
        if (tmp!.right && tmp!.right.key) {
            tmp!.right.parent = node
        }
        tmp!.parent = node.parent
        if (!node.parent) {
            this.root = tmp
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp
            } else {
                node.parent.right = tmp
            }
        }
        tmp!.right = node
        node.parent = tmp
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
    private rotationRR(node: RedBlackNode<T>) {
        const tmp = node.right
        node.right = tmp!.left
        if (tmp!.left && tmp!.left.key) {
            tmp!.left.parent = node
        }
        tmp!.parent = node.parent
        if (!node.parent) {
            this.root = tmp
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp
            } else {
                node.parent.right = tmp
            }
        }
        tmp!.left = node
        node.parent = tmp
    }

    insert(key: T) {
        if (this.root === null) {
            this.root = new RedBlackNode(key)
            this.root.color = Colors.BLACK
        }
        else {
            const newNode = this.insertNode(this.root, key)
            this.fixTreeProperties(newNode!)

        }
    }
    protected insertNode(node: RedBlackNode<T>, key: T): RedBlackNode<T> | null {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left === null) {
                node.left = new RedBlackNode(key)
                node.left.parent = node

                return node.left
            } else {
                return this.insertNode(node.left, key)
            }
        }
        else if (node.right === null) {
            node.right = new RedBlackNode(key)
            node.right.parent = node

            return node.right
        }
        else {
            return this.insertNode(node.right, key)
        }
    }
    fixTreeProperties(node: RedBlackNode<T>) {
        while (node && node.parent && node.parent.color === Colors.RED && node.color !== Colors.BLACK) {
            let parent = node.parent
            const grandParent = parent.parent
            if (grandParent && grandParent.left === parent) {

                const uncle = grandParent.right;
                // case 1: uncle of node is also red - only recoloring
                if (uncle && uncle.isRed()) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                }
                else {
                    if (node === parent.right) {
                        this.rotationRR(parent)
                        node = parent
                        parent = node.parent!
                    }
                    this.rotationLL(grandParent)
                    // swap color
                    parent.color = Colors.BLACK
                    grandParent.color = Colors.RED
                    node = parent
                }
            }
            else { // case B: parent is right child of grand parent
                const uncle = grandParent!.left
                // case 1: uncle is read - only recoloring
                if (uncle && uncle.isRed()) {
                    grandParent!.color = Colors.RED
                    parent.color = Colors.BLACK
                    uncle.color = Colors.BLACK
                    node = grandParent!
                } else {
                    // case 2: node is left child - left rotate
                    if (node === parent.left) {
                        this.rotationLL(parent)
                        node = parent
                        parent = node.parent!
                    }
                    // case 3: node is right child - left rotate
                    this.rotationRR(grandParent!)
                    // swap color
                    parent.color = Colors.BLACK
                    grandParent!.color = Colors.RED
                    node = parent
                }
            }
        }
        this.root!.color = Colors.BLACK;
    }

}