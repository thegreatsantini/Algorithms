/*
How do you check if a given linked list contains a cycle? How do you find the starting node of the cycle? (solution)
*/

function SLLNode(elem) {
    this.value=elem;
    this.next=null;
}

// with cycle 
var my_node1=new SLLNode(3);
var my_node2=new SLLNode(5);
var my_node3=new SLLNode(19);

//assigning head
var head=my_node1;

//connecting linked list
my_node1.next=my_node2;
my_node2.next=my_node3;
my_node3.next=my_node1; //cycle


// without cycle
var node1=new SLLNode(3);
var node2=new SLLNode(5);
var node3=new SLLNode(19);

//assigning head
var head1=node1;
node1.next=node2;
node2.next=node3;

const hasCycle = (head) => {
    let slow = head;
    let fast = head.next;
    
    while ( slow != null) {
        if ( fast.value === slow.value ) {
            return true
        }
        slow = slow.next
        fast = fast.next.next
    }
    
}

console.log("Has cycle?: "+hasCycle(my_node1)); //outputs true as expected
// console.log("Has cycle?: "+hasCycle(node1)); //outputs false as expected