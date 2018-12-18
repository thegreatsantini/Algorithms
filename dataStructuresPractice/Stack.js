// LIFO
class NodeList {
  constructor(item, next = null) {
    (this.val = item), (this.next = next);
  }
}

class Stack {
  constructor() {
    this.head = null;
  }
  enqueue(item) {
    if (this.head === null) this.head = new NodeList(item);
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new NodeList(item);
    }
  }
  dequeue() {
    let current = this.head.next;
    let previous = this.head;
    while (current.next) {
      current = current.next;
      previous = previous.next;
    }
    previous.next = null;
    return current.val;
  }
  iterate() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

const test = new Stack();
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
test.enqueue(4);
test.enqueue(5);
test.enqueue(6);
test.enqueue(7);
test.dequeue();
test.iterate();
test.dequeue();
test.iterate();
