class Node {
  constructor(val) {
    (this.data = val), (this.next = null);
  }
}

class LinkedList {
  constructor(head) {
    this.head = new Node(head);
  }
  insert(newVal) {
    if (this.head === null) {
      this.head = new Node(newVal);
      return;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(newVal);
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
  delete(target) {
    if (this.head.data === target) {
      const toReturn = this.head.data;
      this.head = this.head.next;
      return true;
    } else {
      let currentNode = this.head;
      let previous;
      while (currentNode.next && currentNode.data !== target) {
        previous = currentNode;
        currentNode = currentNode.next;
      }
      if (currentNode.next !== null) {
        previous.next = currentNode.next;
        return true;
      } else if (currentNode.data === target ){
        previous.next = null;
        return true;
      }
      return false;
    }
  }
}

const myList = new LinkedList(1);
myList.insert(2);
myList.insert(3);
myList.insert(4);
myList.insert(5);
myList.insert(6);
myList.insert(7);
myList.delete(7);
myList.delete(12);
myList.print();
