class Queue {
    constructor() {
        this.head = null;
    }
    enqueue(item) {
        const node = {
            value: item,
            next: null 
        }
        if ( !this.head ) {
            this.head = node;
            return;
        } else {
            let current = this.head;
            while ( current.next ) {
                current = current.next;
            }
            current.next = node;
        }
    }
    dequeue() {
        const removed = this.head.value
        this.head = this.head.next;
        return removed;
    }
}


module.exports = Queue;
