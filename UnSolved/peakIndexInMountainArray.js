/*
Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Input: [0,1,0]
Output: 1

Input: [0,2,1,0]
Output: 1
*/

const peakIndexInMountainArray = (arr) => {
  let largestItem = arr[0];
  let index = 0;
  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] > largestItem ) {
      largestItem = arr[i];
      index = i;
    }
  };
  return index;
};

console.log(peakIndexInMountainArray([0,2,1,0]))
