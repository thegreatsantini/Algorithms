//LIFO
export class MyStack {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    remove() {
        return this.data.pop();
    }
    peek() {
        return this.data[0];
    }
    print() {
        this.data.forEach(val => console.log(val));
    }
    getLength() {
        return this.data.length;
    }
}




const newStack = new MyStack();

newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.push(4)
newStack.push(5)
newStack.print()
const size = newStack.getLength();
console.log(size)