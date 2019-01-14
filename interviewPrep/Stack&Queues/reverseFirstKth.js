const Queue = require("./Queue");

const myQueue = new Queue();
myQueue.reverseToK = function(k) {
  const removed = this.queue.splice(0, k);
  const mid = Math.floor((removed.length - 1) / 2);
  for (let i = 0; i < mid; i++) {
      const temp = removed[i];
       removed[i] = removed[removed.length - 1 - i]
       removed[removed.length - 1 - i] = temp
  }
  return removed.concat(this.queue)
};
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(7);
myQueue.enqueue(8);
myQueue.enqueue(9);
myQueue.enqueue(10);
myQueue.print();
const test = myQueue.reverseToK(5);
console.log(test)