const Queue = require('./Queue');
const Person = require('./Person');

const Me = new Person('Me');
const Bob = new Person('Bob')
const Alice = new Person('Alice')
const Claire = new Person('Claire');
const Anu = new Person('Anu');
const Peggy = new Person('Peggy', undefined);
const Thom = new Person('Thom');
const Jonny = new Person('Jonny');
Me.addFriends([Alice, Bob, Claire])
Bob.addFriends([Anu, Peggy])
Alice.addFriends([Peggy])
Claire.addFriends([Thom, Jonny])

const findPotentialGF = (person) => {

    const searchQueue = new Queue()
    searchQueue.enqueue(person.friends);

    while(searchQueue.next) {
        const currentPerson = searchQueue.dequeue();
        if (currentPerson.single) {
            return currentPerson.name + "is single!";
        } else {
            searchQueue.enqueue(currentPerson.friends)
        }
    }
    return "You're skrewed"
}

findPotentialGF(Me);