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
        let parent;
        while (currentNode) {
            parent = currentNode;
            if (newVal < currentNode.val) {
                currentNode = currentNode.leftChild;
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
    trackHeight(num) {
        return num++
    }
    getheight(root) {
        let heightLeft = 0;
        let heightRight = 0;
        while ( root !== null ) {
            heightLeft++
            root = root.leftChild;
        }
        while ( root !== null ) {
            heightRight++
            root = root.leftChild;
        }
        return Math.max(heightLeft, heightRight)
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

const height = BST.getheight(BST.root)
console.log(height)