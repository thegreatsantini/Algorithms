class Person {
    constructor(name, friends=[], single = false) {
        this.name = name;
        this.friends = friends;
        this.single = single;
    }
    addFriends(toAdd) {
        this.friends = this.friends.concat(toAdd)
        return;
    }
    viewFriends() {
        console.log(this.friends);
        return this.friends
    }
}

module.exports = Person;