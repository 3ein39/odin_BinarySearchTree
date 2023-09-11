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
        this.buildTree(arr);
    }
}