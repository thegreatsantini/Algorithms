/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
*/

// Only unique chars 
const firstUniqueChar = (str) => {
  let strArr = str.split('');

  let uniqueChars = strArr.filter( (val, i) => {
    return str.indexOf(val) === str.lastIndexOf(val)

  });

  return uniqueChars
};

let s = "leetcode";
// console.log(firstUniqueChar(s))

const toArr = s.split('')
const test = toArr.filter((val, i) => i !== toArr.indexOf(val))
console.log(test)