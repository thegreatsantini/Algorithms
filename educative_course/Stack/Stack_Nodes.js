class Node {
  constructor(val) {
    (this.val = val), (this.next = null);
  }
}

class Stack {
  constructor(head) {
    this.head = new Node(head);
  }
  enqueue(newVal) {
    if (this.head === null) {
      this.head = new Node(newVal);
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(newVal);
      return;
    }
  }
  dequeue() {
    let currentNode = this.head;
    let previous;
    while (currentNode) {
      previous = currentNode;
      currentNode = currentNode.next;
    }
    const returnVal = previous.val;
    previous.next = null;
    return returnVal;
  }
  print() {
    let currentNode = this.head;
    while (currentNode.next) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
    return;
  }
}

const myStack = new Stack(1);
myStack.enqueue(2);
myStack.enqueue(3);
myStack.enqueue(4);
myStack.enqueue(5);
myStack.enqueue(6);
myStack.enqueue(7);
myStack.dequeue();
myStack.print();
