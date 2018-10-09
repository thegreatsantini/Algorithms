/*
How do you reverse a linked list?
*/

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

const reverseUsingArray = (head) => {
    const myArr = [];
    let node = head;

    while ( node ) {
        myArr.push(node.value);
        node = node.next;
    }
    return myArr.reverse();
}

const reverListRecursive = (head, arr) => {
    if ( !head ) return arr.reverse();

    arr.push(head.value);
    return reverListRecursive(head.next, arr);
}

console.log(reverListRecursive(myList.head, []))
console.log(reverseUsingArray(myList.head))