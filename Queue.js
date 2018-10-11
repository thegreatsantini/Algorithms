//FIFO
class Queue {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove() {
        return this.data.shift();
    }
    display() {
        console.log(this.data);
    }
    print() {
        this.data.forEach(val => console.log(val));
    }
}




const myQueue = new Queue();

myQueue.add(1)
myQueue.add(2)
myQueue.add(3)
myQueue.add(4)
myQueue.add(5)
myQueue.print()