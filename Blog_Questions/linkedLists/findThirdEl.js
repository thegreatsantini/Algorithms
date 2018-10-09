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

myList.push(0);
myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
myList.push(5);
myList.push(6);
myList.push(7);
myList.push(8);
myList.push(9);
myList.push(10);
myList.push(11);
myList.push(12);
myList.push(13);
myList.push(14);

const findThirdItr = (node) => {
    let slow = node.head;
    let threeAhead = node.head.next.next.next;
    
    while( threeAhead ) {
        slow = slow.next;
        threeAhead = threeAhead.next;
    }
    return slow.value;
}

const findThirdRec = (slow, fast) => {
    if ( !fast ) return slow.value;

    return findThirdRec(slow.next, fast.next)
}

console.log(findThirdRec(myList.head, myList.head.next.next.next))
console.log(findThirdItr(myList));