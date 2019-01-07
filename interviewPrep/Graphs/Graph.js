const LinkedList = require('./LinkedList')
class Graph {
    constructor(vertices) {
        // total number of vertices in the graph
        this.vertices = vertices;
        // defining a list which can hold linkedlists equal to the number of vertices in the graph
        this.list = [];
        // creating a new LinkedList for each vertex.index of the list
        for (let it = 0; it < vertices; it++) {
            let temp = new LinkedList();
            console.log(temp)
            this.list.push(temp);
        }
    }
    addEdge(source, destination) {
        // directed graph 
        this.list[source].insertAtHead(destination);
        // if we were creating an undirected graph 
        // this.list[destination].insertAtHead(source);
    }
    printGraph() {
        console.log('>>Adjacency List of Directed Graph');
        for (let i = 0; i < this.list.length; i++) {
            process.stdout.write("|" + String(i) + "| => ");
            let temp = this.list[i].getHead().nextElement;
            while (temp != null) {
                process.stdout.write("[" + String(temp.data) + "] -> ");
                temp = temp.nextElement;
            }
            console.log('null ')
        }
    }
}

let g = new Graph(6);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(3, 4);
g.addEdge(4, 5);
g.printGraph();