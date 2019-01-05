// Depth First search
// current node will be visted BEFORE its children nodes
// ROOT will ALLWAYS be FIRST to be visited
// traversal goes in ROOT-RIGHT-LEFT order

class Node {
  constructor(value) {
    this.val = value, 
    this.leftChild = null, 
    this.rightChild = null
  }
}

class BinarySearchTree {
  constructor(root) {
    this.root = new Node(root);
  }
  insert(newVal) {
    let currentNode = this.root;
    let parent;
    while (currentNode) {
        parent = currentNode;
        if ( newVal < currentNode.val ) {
            // break left
            currentNode = currentNode.leftChild;
        }
        else {
            // break right 
            currentNode = currentNode.rightChild;
        }
    }
    // add node to tree
    if ( newVal < parent.val ) {
        // add left
        parent.leftChild = new Node(newVal)
    }
    else {
        // add right 
        parent.rightChild = new Node(newVal)
    }
  }
  preOrderPrint(currentNode, arr=[]) {
      if (currentNode !== null) {
          console.log(currentNode.val)
          arr.push(currentNode.val)
          this.preOrderPrint(currentNode.leftChild, arr)
          // it goes right only AFTER it has gone all the way to the left
          this.preOrderPrint(currentNode.rightChild, arr)
      }
      return arr
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

const myTree = BST.preOrderPrint(BST.root)
console.log(myTree)