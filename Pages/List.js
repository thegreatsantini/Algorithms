class Node {
  constructor(index, data) {
    this.value = data;
    this.index = index || null;
  }
}

class List {
  constructor(value) {
    this.obj = {};
    this.index = 0;
    this.length = 1;
    this.value = value || null;
  }
  push(value) {
    this.obj[this.index] = value;
    this.length++
    this.index++;
  }
  pop() {
    const item = this.obj[this.length - 1];
    delete this.obj[this.length - 1];
    this.length--
    return item;
  }
  get(idx) {
    return this.obj[idx];
  }
  unshift(item) {
    let temp = this.get(0);
    this.obj[0] = item;
    console.log(this.length)
    for ( let i = 1; i <= this.length; i++ ) {
      console.log(this.obj[i])
      this.obj[i] = temp
      temp = this.obj[i++]
    }

  }
  
  getLength() {
    return this.length;
  }
  print() {
    console.log(this.obj);
  }
}

const myList = new List();
myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
myList.unshift(5);
myList.print();
