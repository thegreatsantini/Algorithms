const test1 = [9, 2, 3, 6];
const test2 = [4, 2, 1, 5, 0];

const findMin = (arr) => {
    return Math.min(...arr)
}
console.log(findMin(test1))
console.log(findMin(test2))