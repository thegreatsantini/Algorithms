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
    inOrderPrint(currentNode, arr = []) {
        if (currentNode !== null) {
            this.inOrderPrint(currentNode.leftChild, arr)
            // arr.push(currentNode.val)
            this.inOrderPrint(currentNode.rightChild, arr)
        }
        return arr
    }
    merge(leftTree, rightTree, arr = []) {
        if (leftTree !== null && rightTree !== null) {
            this.merge(leftTree.leftChild, rightTree.leftChild, arr)
            if (leftTree.val < rightTree.val) {
                arr.push(leftTree.val)
                arr.push(rightTree.val)
            } else {
                arr.push(rightTree.val)
                arr.push(leftTree.val)
            }
            this.merge(leftTree.rightChild, rightTree.rightChild, arr)
        }
        return arr
    }
}

const rightBST = new BinarySearchTree(6);
console.log('The root cal for rightBST : ', rightBST.root.val);
rightBST.insert(4)
rightBST.insert(9)
rightBST.insert(5)
rightBST.insert(2)
rightBST.insert(8)
rightBST.insert(12)
rightBST.insert(10)
rightBST.insert(14)
// const right = rightBST.inOrderPrint(rightBST.root)
// console.log(rightBST.root)

const leftBST = new BinarySearchTree(6);
console.log('The root cal for leftBST : ', leftBST.root.val);
leftBST.insert(3)
leftBST.insert(5)
leftBST.insert(9)
leftBST.insert(1)
leftBST.insert(7)
leftBST.insert(12)
leftBST.insert(21)
leftBST.insert(24)
// const left = leftBST.inOrderPrint(leftBST.root)

const merging = leftBST.merge(leftBST.root, rightBST.root)
console.log('merged', merging)