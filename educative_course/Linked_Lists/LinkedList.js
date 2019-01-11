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
}

const myList = new LinkedList(1);
myList.insert(2)
console.log(myList);
