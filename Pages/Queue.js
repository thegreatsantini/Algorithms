class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(val) {
    this.queue.push(val);
  }
  dequeue() {
    return this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
  print() {
    console.log(this.queue);
  }
}

const queue = new Queue();
