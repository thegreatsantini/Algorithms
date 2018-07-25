/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
*/

const firstUniqueChar = (str) => {
  let strArr = str.split('');

  let uniqueChars = strArr.filter( (val, i) => {
    return str.indexOf(val) === str.lastIndexOf(val)

  });

  return str.indexOf(uniqueChars[0])
};

let s = "leetcode";
// console.log(s.indexOf('v'));
// console.log(s.lastIndexOf('v'));
console.log(firstUniqueChar(s))
