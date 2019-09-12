class HashTable {
  constructor() {
    this.length = 0;
    this.list = [];
  }
 set(key, val) {
    this.list.push([key, val])
  }
  get(x){
    let result

  this.list.forEach(pairs => {
    if (pairs[0] === x) {
      result = pairs[1]
    }
  })

  return result
  }
}

const myObj = new HashTable();
myObj.set('a', 1)
console.log(myObj.get('a')) // 1
console.log(myObj);
