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
    findKNodes(rootNode, k) {
        if (rootNode === null) {
            return;
        }
        let queue = []
        let levels = [];
        queue.push(rootNode);
        let level = 0
        while (level !== k+1) {
            let currentLevel = [];
            const currentNode = queue[0];

            if (currentNode.leftChild !== null) {
                queue.push(currentNode.leftChild)
                currentLevel.push(currentNode.leftChild.val)
            }
            if (currentNode.rightChild !== null) {
                queue.push(currentNode.rightChild)
                currentLevel.push(currentNode.rightChild.val)
            }
            queue.shift()
            levels.shift()
            levels.push(...currentLevel)
            level++
        }
        return levels
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

const kNodes = BST.findKNodes(BST.root, 2)
console.log(kNodes)