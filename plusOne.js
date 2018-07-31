/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.
*/

// const plusOne = function(digits) {
//     let toNums = parseInt(digits.join(''));
//     let addOne = toNums + 1
//     let answer = [];
//     console.log(addOne[0])
//
//     for (let i = 0; i < addOne; i ++) {
//       // answer.push(parseInt(addOne[i]))
//       // console.log(typeof parseInt(addOne[i]))
//     }
//     return answer;
// };

const plusOne = function(digits) {
  digits[digits.length-1] += 1;
  return digits
};

console.log(plusOne([4,3,2,1]))
