class Node {
  constructor(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
  }
}

class DLinkedList {
  constructor(data) {
    this.head = new Node(data);
  }
  insert(newVal) {
    if (this.head === null) {
      this.head = new Node(newVal);
      return;
    } else {
      let currentNode = this.head;
      let prev = null;
      while (currentNode.next) {
        prev = currentNode;
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(newVal);
      currentNode.previous = prev;
      return;
    }
  }
  print() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
}

const myList = new DLinkedList(1);
myList.insert(2);
myList.insert(3);
myList.insert(4);
myList.insert(5);
myList.insert(6);
myList.insert(7);
// myList.print();
const test = myList.head.next.previous
console.log(test)