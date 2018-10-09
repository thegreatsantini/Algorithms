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

const traverseRecursive = (node) => {
    if (!node)
    return;
    // else {
        console.log(node.value)
        return traverseRecursive(node.next)
    // }
}

traverseRecursive(myList.head);