/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
*/

const makeObject = (str) => {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if ( !obj[str[i]] ) {
      obj[str[i]] = 1
    } else {
      obj[str[i]]++
    }
  }
  return obj
};

const isAnagram = (str1, str2) => {
  if ( str1.length !== str2.length ) return false;
  const letterCount1 = makeObject(str1);
  const letterCount2 = makeObject(str2);

  for (let letter in letterCount1) {
    if (letterCount1[letter] !== letterCount2[letter] ) {
      return false;
    }
  };
  return true;
};

// console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('a', 'ab')); // false
