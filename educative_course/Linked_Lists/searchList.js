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
  search(target) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

const myList = new LinkedList(1);
myList.insert(2);
myList.insert(3);
myList.insert(4);
myList.insert(5);
myList.insert(6);
myList.insert(7);
console.log(myList.search(3));
