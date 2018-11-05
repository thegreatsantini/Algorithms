class LinkedList {
    constructor() {
        this.head = null
    }
    add(item) {
        const node = {
            value: item,
            next: null
        }
        if (!this.head) {
            this.head = node;
            return;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    update(i, val) {
        let current = this.head;
        let index = 0;

        while (index != i) {
            current = current.next;
            index++
        }
        current.value = val;
    }
    remove(val) {
        let current = this.head
        // if val is at the head
        if (!current.next) {
            current.value = null;
        } else {
            let previous;
            while (current.next) {
                // if val is in the middle
                if (current.value === val) {
                    previous.next = current.next;
                    // console.log(current)
                    return;
                }
                previous = current
                current = current.next;
            }
            // if val is at the tail
            if (current.value === val) {
                previous.next = null;
            }
        }
        return 'Item not found'
    }
    iterate() {
        let arr = [];
        let current = this.head;
        while (current.next) {
            arr.push(current.value)
            current = current.next;
        }
        arr.push(current.value)
        console.log(arr)
    }
}

const myList = new LinkedList();

myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4);
myList.add(5);

myList.remove(5);
myList.iterate();
// console.log(myList)
