class Queue {
    constructor() {
        this.data = [];
    }
    enqueue(item) {
        this.data.push(item);
    }
    dequeue() {
        return this.data.shift();
    }
    display() {
        console.log(this.data);
    }
    print() {
        this.data.forEach(val => console.log(val));
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }
}

class Tree {
    constructor(data) {
        const node = new Node(data);
        this._root = node;
    }
    traverseDF(callback) {
        // this is a recurse and immediately-invoking function
        // console.log('this._root')
        (function recurse(currentNode) {
            // step 2
            for (var i = 0, length = currentNode.children.length; i < length; i++) {
                // step 3
                recurse(currentNode.children[i]);
            }

            // step 4
            callback(currentNode);

            // step 1
        })(this._root);
    }
    traverseBF(callback) {
        var queue = new Queue();

        let currentNode = this._root

        while (currentNode) {
            for (var i = 0, length = currentNode.children.length; i < length; i++) {
                queue.enqueue(currentNode.children[i]);
            }
            console.log('length:', currentNode.children.length)
            callback(currentNode);
            currentNode = queue.dequeue();
        }
    };
}

// {data: 'CEO', parent: null, children: []}
// console.log(tree)

var tree = new Tree('one');

tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];


tree.traverseBF(function (node) {
    console.log(node.data)
});

/*
 
creates this tree
 one
 ├── two
 │   ├── five
 │   └── six
 ├── three
 └── four
     └── seven
 
*/