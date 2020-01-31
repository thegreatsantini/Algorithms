class HashTable {
  constructor() {
    this.length = 0;
    this.list = [];
  }
  set(key, val) {
    this.list.push([key, val]);
  }
  get(x) {
    this.list.forEach(pairs => {
      if (pairs[0] === x) {
        return pairs[1];
      }
    });
  }
}

const myObj = new HashTable();
myObj.set('a', 1);
console.log(myObj.get('a')); // 1
console.log(myObj);
