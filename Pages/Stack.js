class Stack {
  constructor() {
    this.stack = [];
  }
  push(newVal) {
    this.stack.push(newVal);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    const last = this.stack.length - 1;
    return this.stack[last];
  }
  print() {
    let result = '';
    this.stack.forEach(item => {
      result += `| ${item} |\n`;
    });
    console.log(result);
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new Stack();
