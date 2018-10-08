/*
How do you find the largest and smallest number in an unsorted integer array?
*/

const largestAndSmallest = (arr) => {
    return [ Math.min(...arr), Math.max(...arr) ]
}

const test = [ 5, 2, 77, 33, 17, -2, 68, 45, 5, 2, 5500, 67];

console.log(largestAndSmallest(test));