//LIFO
function MyStack ()  {
    this.data = [];
}

MyStack.prototype.add = function (item) {
    this.data.push(item);
}

MyStack.prototype.remove = function () {
    return this.data.pop();
}

MyStack.prototype.print = function () {
    this.data.forEach( val => console.log(val))
}

MyStack.prototype.getLength = function () {
    return this.data.length;
}
const newStack = new MyStack();

newStack.add(1)
newStack.add(2)
newStack.add(3)
newStack.add(4)
newStack.add(5)
newStack.print()
const size = newStack.getLength();
console.log(size)