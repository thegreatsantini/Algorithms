class Node {
    constructor(val) {
        this.val = val,
            this.leftChild = null,
            this.rightChild = null
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = new Node(root)
    }
    insert(newVal) {
        let currentNode = this.root;
        let parent
        while (currentNode) {
            parent = currentNode;
            if (newVal < currentNode.val) {
                currentNode = currentNode.leftChild
            } else {
                currentNode = currentNode.rightChild
            }
        }
        if (newVal < parent.val) {
            parent.leftChild = new Node(newVal)
        } else {
            parent.rightChild = new Node(newVal)
        }
    }
    inOrderPrint(currentNode, arr = []) {
        if (currentNode !== null) {
            this.inOrderPrint(currentNode.leftChild, arr)
            arr.push(currentNode.val)
            this.inOrderPrint(currentNode.rightChild, arr)
        }
        return arr
    }
    search(target) {
        let currentNode = this.root;
        while (currentNode && (currentNode.val !== target)) {
            if (target < currentNode.val) {
                currentNode = currentNode.leftChild
            } else {
                currentNode = currentNode.rightChild
            }
        }
        console.log('found', currentNode)
        return currentNode
    }
    delete(target) {
        // case 1: checking for the empty tree
        // if rootNode equals Null
        if (currentNode == null) {
            return false;
        }
        // Start traversing the tree
        // until we find the value to be deleted
        // or end up with a null node
        let parent;
        while (currentNode && (currentNode.val !== val)) {
            parent = currentNode;
            if (target < currentNode.val) {
                currentNode = currentNode.leftChild;
            } else {
                currentNode = currentNode.rightChild;
            }
        }
        // Case 2: curentNode IS NULL. Vlaue not found
        if (currentNode === null) {
            return false;
        }
    }
}

const BST = new BinarySearchTree(6);
console.log('The root cal for BST : ', BST.root.val);
BST.insert(4)
BST.insert(9)
BST.insert(5)
BST.insert(2)
BST.insert(8)
BST.insert(12)
BST.insert(10)
BST.insert(14)

BST.search(4)
const print = BST.inOrderPrint(BST.root)