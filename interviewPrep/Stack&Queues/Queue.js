class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(val) {
      this.queue.push(val)
  }
  dequeue() {
      return this.queue.shift();
  }
  print() {
    console.log(this.queue)
  }
}

module.exports = Queue;
