class MyHashTable {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  set(key, value) {
    this.keys.push(key);
    this.values.push(value);
  }
  get(lookupKey) {
    for (const i = 0; i < this.keys.length; i++) {
      const key = this.keys[i];
      if (key === lookupKey) {
        return this.values[i];
      }
    }
  }
}

const test = new MyHashTable();
