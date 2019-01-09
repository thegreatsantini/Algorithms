class Stack {
  constructor() {
    this.stack = [];
  }
  push(newVal) {
    this.stack.push(newVal);
  }
  pop() {
      return this.stack.pop()
  }
}
