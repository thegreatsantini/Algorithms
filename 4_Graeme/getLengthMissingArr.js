/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays. 
*/

const getLengthOfMissingArray = (arrayOfArrays) => {
    if (arrayOfArrays.length === 0) return 0
    const lengths = arrayOfArrays.map(val => val.length);
    let sorted = lengths.sort((a, b) => a > b);

    console.log(sorted)
    for (let i = sorted[0]; i < sorted.length; i++) {

        if (sorted[i] != i + 1) {

            return i + 1
        }
    }

}

// console.log(getLengthOfMissingArray([
//     [1, 2],
//     [4, 5, 1, 1],
//     [1],
//     [5, 6, 7, 8, 9]
// ])); //3
// console.log(getLengthOfMissingArray([
//     [5, 2, 9],
//     [4, 5, 1, 1],
//     [1],
//     [5, 6, 7, 8, 9]
// ])); //2
// console.log(getLengthOfMissingArray([
//     [null],
//     [null, null, null]
// ])); //2
// console.log(getLengthOfMissingArray([
//     ['a', 'a', 'a'],
//     ['a', 'a'],
//     ['a', 'a', 'a', 'a'],
//     ['a'],
//     ['a', 'a', 'a', 'a', 'a', 'a']
// ])); // 5

console.log(getLengthOfMissingArray([[3, 1, 3, 0, 2],
    [4, 2, 1],
    [3, 2, 2, 2, 4, 0],
    [2, 1, 3, 2, 2, 1, 1, 0],
    [3, 1, 3, 3, 0, 4, 4],
    [1, 3, 4, 3, 4, 2, 4, 0, 4]]));