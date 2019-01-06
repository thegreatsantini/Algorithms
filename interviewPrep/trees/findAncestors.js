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
    takeStep(node, target) {
        if ( node && ( node.val !==  target) ) {
            if ( target < node.val ) {
                return node.leftChild
            } else {
                return node.rightChild
            }
        }
        return null
    }
    getAncestors(rootNode, target, ancestors = []) {
        if (rootNode.val !== target) {
            ancestors.push(rootNode.val)
            const next = this.takeStep(rootNode, target);
            this.getAncestors(next, target, ancestors)
        } 
        return ancestors
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

const ancestors = BST.getAncestors(BST.root, 10)
console.log(ancestors)