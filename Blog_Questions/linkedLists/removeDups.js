/*
reovme duplicates from a singly linked list
*/

function LinkedList() {
    this.head = null;
};

LinkedList.prototype.getSize = function () {
    let node = this.head;
    let size = 0;
    while (node) {
        node = node.next;
        size++
    }
    return size
}

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
myList.push('good');
myList.push('job');
myList.push('you');
myList.push('you');
myList.push('did');
myList.push('did');
myList.push('it');
console.log('Original length', myList.getSize())

const removeDupsIter = (head) => {
    const onlyUniques = new LinkedList()
    const itemCnt = {};
    let node = head;
    while (node) {
        if (!itemCnt[node.value]) {
            itemCnt[node.value] = 1;
        } else {
            itemCnt[node.value]++;
        }
        node = node.next;
    }
    for (let item in itemCnt) {
        onlyUniques.push(item)
    }
    return onlyUniques.getSize()
}

const removeDupsRecur = (node, newList, count) => {
    const onlyUniques = newList;
    const itemCnt = count;
    if (!node) {
        for (let item in itemCnt) {
            onlyUniques.push(item)
        }
        return onlyUniques.getSize()
    }
    else {
        if ( !itemCnt[node.value] ) {
            itemCnt[node.value] = 1;
        }
        else {
            itemCnt[node.value]++;
        }
        
        return removeDupsRecur(node.next, onlyUniques, itemCnt)
    }
}

console.log(removeDupsRecur(myList.head, new LinkedList(), {}))
// console.log(removeDupsIter(myList.head))