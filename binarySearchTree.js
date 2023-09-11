// assuming that the given input has no duplicates
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(arr) {
        this.root = null;
        this.root = this.buildTree(arr);
    }

    buildTree(arr) {
        arr.forEach((value) => {
            this.insert(value);
        });
        return this.root;
    }

    // iterative insertion of nodes
    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = new Node(value);
                    break;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = new Node(value);
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    }

    // delete using successor recursively
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            // the 4 cases
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
            node.value = this.minValue(node.right);
            node.right = this.deleteNode(node.right, node.value);
        }
        return node;
    }
    minValue(node) {
        let min = node.value;
        while (node.left !== null) {
            min = node.left.value;
            node = node.left;
        }
        return min;
    }
}
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const arr = [10, 5, 15, 2, 13, 22, 1, 14];
const tree = new Tree(arr);
prettyPrint(tree.root);
tree.delete(10);
prettyPrint(tree.root);
