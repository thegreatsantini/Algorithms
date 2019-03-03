/*
Implement a function called maxMin(arr) which will re-arrange the elements of a sorted array such that the first position will have the largest number, the second will have the smallest, and the third will have second largest and so on. In other words, all the odd-numbered indices will have the largest numbers in the array in descending order and the even numbered indices will have the smallest numbers in ascending order.
Input

A sorted array
Output

An array with elements stored in max/min form
Sample Input

arr = [1,2,3,4,5]

Sample Output

arr = [5,1,4,2,3]
*/

const test = [1, 2, 3, 4, 5]; // [ 5, 1, 4, 2, 3 ]

const minMax = arr => {
  let copy = arr.slice();
  let final = [];

  arr.forEach((val, i) => {
    if (i % 2 !== 0) {
      final.push(copy.shift());
    } else {
      final.push(copy.pop());
    }
  });
  return final;
};

console.log(minMax(test));
