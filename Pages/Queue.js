class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }
  enqueue(val) {
    this.size = this.size + 1;
    this.queue.push(val);
  }
  dequeue() {
    if (this.size > 0) {
      this.size = this.size - 1;
    }
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
