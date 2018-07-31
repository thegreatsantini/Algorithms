/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
*/

// ( i + k ) % length - 1

// const rotateArray = (arr, k) => {
//   let newArr = [];
//   let count = 0;
//
//   for ( let i = 0; i < arr.length; i ++) {
//     newArr.push(0)
//   }
//
//   for ( let j = 0; j < arr.length; j++ ) {
//     let newIndex = (j + k) % (arr.length - 1)
//     newArr[newIndex] = arr[j]
//   }
//   return newArr;
// };

const rotateArray = (arr, k) => {
  for ( let i = 0; i < k; i++ ) {
    arr.unshift(arr.pop())
  }
  return arr
};

console.log(rotateArray([1,2,3,4,5,6,7], 3))
