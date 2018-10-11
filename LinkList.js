class LinkedList {
    constructor() {
        this.head = null;
    }
    add(item) {
        const node = {
            value: item,
            next: null
        };
        if (!this.head) {
            this.head = node;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    hasCycle() {
        if (!this.head || !this.head.next)
            return false;
        let slow = this.head;
        let fast = this.head.next.next;
        if (this.head.next === this.head)
            return true;
        while (fast.next) {
            if (slow.value === fast.value)
                return true;
            slow = slow.next;
            fast = fast.next.next;
        }
        return false;
    }
    print() {
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
    reverse() {
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
    remove(val) {
        let current = this.head;
        if (current.value === val) {
            this.head = current.next;
            return;
        }
        let previous = current;
        while (current) {
            if (current.value === val) {
                previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next;
        }
        if (current.value == val) {
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

newList.remove(5)
newList.print()
// console.log(newList)