class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

class LinkedList {
  constructor() {
    // head will be at the top of the list
    this.head = new Node(-1);
    this.length = 0;
  }
  //Insertion At Head
  insertAtHead(dt) {
    let tempNode = new Node(dt);
    tempNode.nextElement = this.head.nextElement;
    this.head.nextElement = tempNode;
    this.length = this.length + 1;
    return this; //returning the updated list
  }
  getHead() {
    return this.head;
  }
}

module.exports = LinkedList;
