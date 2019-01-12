class twoStacks {
  constructor(data) {
    this.stack = [];
  }
  push1(val) {
    const node = {
      val,
      stack: 1
    };
    this.stack.push(node);
  }
  push2(val) {
    const node = {
      val,
      stack: 2
    };
    this.stack.push(node);
  }
  pop1() {
    let thisStack = this.stack;
    let indexToRemove = null;
    for (let i = 0; i < this.stack.length; i++) {
      if (thisStack[i].stack === 1) {
        indexToRemove = i;
      }
    }
    return this.stack.splice(indexToRemove, 1)[0].val;
  }
  pop2() {
    let thisStack = this.stack;
    for (let i = this.stack.length - 1; i > 0; i--) {
      if (thisStack[i].stack === 2) {
        return this.stack.splice(i, 1)[0].val;
      }
    }
}
  iterate() {
    this.stack.forEach(val => console.log(val.val));
  }
}

const test = new twoStacks();
test.push1(1);
test.push2(2);
test.push2(3);
test.push1(4);
console.log(test.pop1());
test.iterate();
