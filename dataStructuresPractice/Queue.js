class NodeList {
  constructor(item, next = null) {
    (this.val = item), (this.next = next);
  }
}

// FIFO
class Queue {
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
    const remove = this.head.val;
    this.head = this.head.next;
    return remove;
  }
  iterate() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
    return arr;
  }
  getLength() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    console.log(count);
    return count;
  }
}

const test = new Queue();
test.enqueue(1);
test.getLength();
test.enqueue(2);
test.getLength();

test.enqueue(2);
test.enqueue(2);
test.enqueue(2);
test.enqueue(2);
test.enqueue(2);
test.enqueue(3);
test.getLength();

test.iterate();
test.enqueue(25);
test.enqueue(5);
test.enqueue(3);
test.getLength();

test.dequeue();
test.dequeue();
test.dequeue();
test.dequeue();
test.dequeue();
test.getLength();

test.iterate();
