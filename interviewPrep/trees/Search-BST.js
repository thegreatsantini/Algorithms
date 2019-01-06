class Node {
    constructor(val) {
        (this.val = val), (this.leftChild = null), (this.rightChild = null);
    }
}

class BinarySearchTree {
    constructor(root) {
        this.root = new Node(root)
    }
    insert(newVal) {
        let currentNode = this.root;
        let parent;
        while (currentNode) {
            parent = currentNode
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
    inOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.inOrderPrint(currentNode.leftChild)
            console.log(currentNode.val)
            this.inOrderPrint(currentNode.rightChild)
        }
    }
    search(target) {
        // start with the root
        let currentNode = this.root
        while (currentNode && (currentNode.val !== target)) {
            // loop until we reach the end
            // loop unitl we find target
            if (target < currentNode.val) {
                currentNode = currentNode.leftChild
            } else {
                currentNode = currentNode.rightChild
            }
        }
        return currentNode
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
BST.inOrderPrint(BST.root)
console.log(BST.search(8))
console.log(BST.search(11))