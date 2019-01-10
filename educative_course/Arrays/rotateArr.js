const test = [1, 2, 3, 4, 5]; // [ 3, 4, 5, 1, 2 ]
const n = 3;

const rotate = (arr, n) => {
    let copy = arr.slice()
    while (n) {
        copy.unshift(copy.pop())
        n--
    }
    return copy;
}

console.log(rotate(test, n))