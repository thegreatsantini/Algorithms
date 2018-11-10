class Gragh {
    constructor() {
        this.head = null;
        this.currentDegree = 0;
    }
    addFriend(name, friends, addTo, degree = 1, seller = false) {
        const person = {
            name,
            degree: degree++,
            friends,
            seller
        }
        if (!this.head) {
            this.head = person;
            this.currentDegree++
            return;
        } else {
            let current = this.head;
            while (degree < this.currentDegree ) {
                current
            }

        }
    }
}

const Lucas = new Gragh();

Lucas.addFriend("Lucas", ['Graeme', 'Gil', 'Sierra']);

console.log(Lucas)