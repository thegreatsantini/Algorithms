// Depth first search
// current node will be visited AFTER its children
// ROOT will always be the LAST one visied
// Traversed LEFT-RIGHT-ROOT

class Node {
  constructor(val) {
    (this.val = val), (this.leftChild = null), (this.rightChild = null);
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
      if (newVal < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }
    if (newVal < parent.val) {
      parent.leftChild = new Node(newVal);
    } else {
      parent.rightChild = new Node(newVal);
    }
  }
  postOrderPrint(currentNode) {
      if (currentNode !== null) {
          // recurse to the left subtree
          this.postOrderPrint(currentNode.leftChild)
          // recurse to the right 
          this.postOrderPrint(currentNode.rightChild)
          console.log(currentNode.val)
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

BST.postOrderPrint(BST.root)