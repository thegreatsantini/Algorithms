/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

 // NOTE: The built-in repeat()-method should not be used
*/

const repeatStringNumTimes = (str, num) => {
  let finalStr = '';

  for (let i = 0; i < num; i++) {
    finalStr += str;
  }
  return finalStr
}

console.log(repeatStringNumTimes("*", 3))// should return "***".
console.log(repeatStringNumTimes("abc", 3))// should return "abcabcabc".
console.log(repeatStringNumTimes("abc", 4))// should return "abcabcabcabc".
console.log(repeatStringNumTimes("abc", 1))// should return "abc".
console.log(repeatStringNumTimes("*", 8))// should return "********".
console.log(repeatStringNumTimes("abc", -2))// should return "".
