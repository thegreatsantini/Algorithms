/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Input: 121
Output: true

Input: -121
Output: false

Input: 10
Output: false
*/

const isPalindrome = (num) => {
  let toString = num.toString();
  let midpoint = Math.floor(toString.length - 1);


  for ( let i = 0; i <= midpoint; i++ ) {

    if ( toString[i] !== toString[toString.length - 1- i] ) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(10))
console.log(isPalindrome(-121))
console.log(isPalindrome(101))
