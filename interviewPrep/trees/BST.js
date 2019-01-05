class Node {
  constructor(value) {
    this.val = value; //value of the Node
    this.leftChild = null; //leftChild (will also be of the Node class)
    this.rightChild = null; //rightChild (will also be of the Node class)
  }
}

class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue); //the rootNode
  }
  insert(newValue) {
    let currentNode = this.root;
    let parent;
    while (currentNode) {
      parent = currentNode;
      if (newValue < currentNode.val) {
        // iterate over the left subtree
        currentNode = currentNode.leftChild;
      } else {
        // iterate over the right subtree
        currentNode = currentNode.rightChild;
      }
    }
    // we now have the parent of the null node
    // now insert new value to the left or the right
    if (newValue < parent.val) {
      //insert into the leftChild
      parent.leftChild = new Node(newValue);
    } else {
      // insert new value to the rightChild
      parent.rightChild = new Node(newValue);
    }
  }
  insertRecursive(currentNode, newValue) {
    if (currentNode === null) {
      currentNode = new Node(newValue);
    } else if (newValue < currentNode.val) {
      currentNode.leftChild = this.insertRecursive(
        currentNode.leftChild,
        newValue
      );
    } else {
      currentNode.rightChild = this.insertRecursive(
        currentNode.rightChild,
        newValue
      );
    }
    return currentNode;
  }
  insertBSTRecursive(newValue) {
    this.insertRecursive(this.root, newValue);
  }
}

var BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val);
BST.insertBSTRecursive(2);
BST.insertBSTRecursive(4);
BST.insertBSTRecursive(9);
BST.insertBSTRecursive(5);
BST.insertBSTRecursive(8);
BST.insertBSTRecursive(12);
BST.insertBSTRecursive(10);
BST.insertBSTRecursive(14);
