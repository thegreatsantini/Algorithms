class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }
  push(newVal) {
    this.stack.unshift(newVal);
    this.size = this.size + 1;
  }
  pop() {
    if(this.size > 0) {
      this.size = this.size - 1;
    }
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
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack)