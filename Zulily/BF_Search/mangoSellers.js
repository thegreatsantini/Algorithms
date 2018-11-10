var Queue = require('./Queue');
var Person = require('./Person');

const Me = new Person('Me');
const Bob = new Person('Bob')
const Alice = new Person('Alice')
const Claire = new Person('Claire');
const Anu = new Person('Anu');
const Peggy = new Person('Peggy', undefined, true);
const Thom = new Person('Thom');
const Jonny = new Person('Jonny');
Me.addFriends([Alice, Bob, Claire])
// Bob.addFriends([Anu, Peggy])
// Alice.addFriends([Peggy])
// Claire.addFriends([Thom, Jonny])

const searchQueue = new Queue()

searchQueue.enqueue(Me.friends);
// console.log(searchQueue)
// while ( searchQueue ) {
    const currentPerson = searchQueue.dequeue();
    console.log(Me)
//     if ( currentPerson.single ) {
//         console.log(currentPerson, 'is single');
//         return true;
//     } else {
//         searchQueue.enqueue(currentPerson)
//     }
// }
