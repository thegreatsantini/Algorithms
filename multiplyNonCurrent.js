/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/


const multiplyNonCurrent = (arr) => {
    return arr.map((val, i) => {
        const left = arr.slice(0, i);
        const right = arr.slice(i+1, arr.length);
        return left.concat(right).reduce((accum, next) => accum * next)
    })
}
// console.log(multiplyNonCurrent([1, 2, 3, 4, 5]))
console.log(multiplyNonCurrent([1, 2, 3]))