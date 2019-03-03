/*
Implement a function reArrange(arr) function which sorts the elements such that all the negative elements appear on the left and positive elements appear at the right.
Input

An array containing positive and negative elements
Output

A sorted array with negative elements at the left and positive elements at the right
Sample Input

[10,-1,20,4,5,-9,-6]

Sample Output

[-1,-9,-6,10,20,4,5]
*/

const test = [10, -1, 20, 4, 5, -9, -6]; // [ -1, -9, -6, 10, 20, 4, 5 ]

const reArrange = arr => {
  return arr.reduce((acc, next) => {
    if (next >= 0) {
      acc.push(next);
    } else {
      acc.unshift(next);
    }
    return acc;
  }, []);
};

console.log(reArrange(test));
