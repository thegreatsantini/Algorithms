function LinkedList() {
    this.head = null;
};

LinkedList.prototype.push = function (val) {
    const node = {
        value: val,
        next: null
    }
    if (!this.head) {
        this.head = node;
    }
    else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
};

const myList = new LinkedList();

myList.push('good');
myList.push('job');
myList.push('you');
myList.push('did');
myList.push('it');

const findMiddleItertive = (head) => {

    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.value
}

const findMiddleRecursive = (slow, fast) => {
    if (slow === null || fast.next === null) {
        return slow.value
    }
    return findMiddleRecursive(slow.next, fast.next.next)
}

console.log(findMiddleRecursive(myList.head, myList.head))