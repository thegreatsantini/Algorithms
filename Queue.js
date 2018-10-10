//FIFO
function MyQueue ()  {
    this.data = [];
}

MyQueue.prototype.add = function (item) {
    this.data.push(item);
}

MyQueue.prototype.remove = function () {
    return this.data.shift();
}

MyQueue.prototype.display = function () {
    console.log(this.data);
}

MyQueue.prototype.print = function () {
    this.data.forEach( val => console.log(val) )
}
const newQueue = new MyQueue();

newQueue.add(1)
newQueue.add(2)
newQueue.add(3)
newQueue.add(4)
newQueue.add(5)
newQueue.print()