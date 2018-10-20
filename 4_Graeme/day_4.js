
/*
Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/


const lowestMissing = (arr) => {
    let largestNumber = 0;
    // let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            break;
        }
        if (arr.indexOf(arr[i + 1]) === -1) {
            console.log(arr.indexOf(arr[i]), arr[i], i)
            largestNumber = arr[i];
        }
    }
    return largestNumber
}

console.log(lowestMissing([3, 4, -1, 1]))