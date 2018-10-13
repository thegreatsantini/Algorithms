class Stack {
    constructor() {
        this.data = [];
        this.min;
    }
    push(item) {
        if ( !this.min || item < this.min ) {
            this.min = item;
        }
        this.data.push(item);
    }
    remove() {
        return this.data.pop();
    }
    peek() {
        if (!this.data[0] ) return 'There is no element';
        return this.data[0];
    }
    print() {
        this.data.forEach(val => console.log(val));
    }
    getLength() {
        return this.data.length;
    }
    getMin() {
        return this.min
    }
    isEmpty() {
        return this.data === null;
    }
}

const MyStack = new Stack();

console.log(MyStack.peek())
console.log(MyStack.isEmpty())

MyStack.push(8)
MyStack.push(5)
MyStack.push(1)
MyStack.push(7)

MyStack.push(17)
MyStack.push(7)
MyStack.push(9)
MyStack.push(7)
MyStack.push(-7)
console.log(MyStack.isEmpty())
// MyStack.print()
console.log(MyStack.getMin())