// https://stackoverflow.com/questions/42684113/simple-recursive-iteration-over-a-singly-linked-list-javascript

function LinkedList() {
    this.head = null;
};

LinkedList.prototype.push = function (val) {
    var node = {
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

var myFirstsll = new LinkedList();

myFirstsll.push('much');
myFirstsll.push('science');
myFirstsll.push('wow');

console.log(myFirstsll.head.value);
console.log(myFirstsll.head.next.value);
