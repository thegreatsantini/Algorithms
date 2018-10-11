class LinkedList {
    constructor() {
        this.head = null;
    }
    add(item) {
        let node = {
            value: item,
            next: null
        }
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    remove(item) {
        let current = this.head;
        // If the item is the head 
        if (current.value === item) {
            this.head = current.next;
        }

        let previous = current.next

        while (current.next) {
            // If the item is the middle
            if (current.value === item) {
                previous.next = current.next;
            }
            previous = current
            current = current.next;
        }
    }
    reverse() {
        let node = this.head;
        let nodes = [];

        while ( node ) {
            nodes.push(node);
            node = node.next;
        }
        
        let reversedLL = new LinkedList();
        reversedLL.head = nodes.pop()
       
        let current = reversedLL.head;
        let nodeToAdd = nodes.pop();
        while ( nodeToAdd ) {
            nodeToAdd.next = null;
            current.next = nodeToAdd

            current = current.next;
            nodeToAdd = nodes.pop()
        }
        return reversedLL;
    }
    findNthFromEnd(target) {
        

    }
    print() {
        let node = this.head;

        while ( node ) {
            console.log(node)
            node = node.next
        }
    }
}

const myList = new LinkedList();

myList.add(0);
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4);
myList.add(5);
myList.add(6);
myList.add(7);
myList.add(8);
myList.add(9);
const switched = myList.reverse()

switched.print()