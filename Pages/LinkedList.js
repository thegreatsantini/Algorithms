class Node {
    constructor(data) {
      this.value = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    add(item) {
      const newNode = new Node(item);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
    hasCycle() {
      if (!this.head || !this.head.next) return false;
      let slow = this.head;
      let fast = this.head.next.next;
      if (this.head.next === this.head) return true;
      while (fast.next) {
        if (slow.value === fast.value) return true;
        slow = slow.next;
        fast = fast.next.next;
      }
      return false;
    }
    print() {
      let node = this.head;
      let result = '';
      while (node) {
        result += `[${node.value}] -> `;
        node = node.next;
      }
      result += 'null';
      console.log(result)
    }
    findIndex(val) {
      let node = this.head;
      let idx = 0;
      while (node) {
        if (node.value === val) {
          console.log(idx);
          return idx;
        }
        node = node.next;
        idx++;
      }
    }
    remove(toRemove) {
      let current = this.head;
      // If the item is at the head
      if (current.value === toRemove) {
        this.head = current.next;
        return;
      }
      let previous = current;
      while (current) {
        // Check for Item
        if (current.value === toRemove) {
          // If item is in the middle
          previous.next = current.next;
          return;
        }
        previous = current;
        current = current.next;
      }
      // If item is at the Tail
      if (current.value == toRemove) {
        previous.next == null;
      }
    }
  }
  
  const newList = new LinkedList();
  
  newList.add(1);
  newList.add(2);
  newList.add(3);
  newList.add(4);
  newList.add(5);
  
  // newList.remove(5);
  console.log(newList.print());
  // console.log(newList)
  