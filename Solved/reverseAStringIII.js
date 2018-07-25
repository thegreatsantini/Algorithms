/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

const reverseAString = (str) => {
  let stringArray = str.split(/(\s+)/);
  let newStr = '';

  for (let i = 0; i < stringArray.length; i++) {
    if ( stringArray[i] !== ' ' ) {
      newStr += stringArray[i].split('').reverse().join('');
    } else {
      newStr += ' ';

    }
  };

  return newStr
};

// console.log(reverseAString("Let's take LeetCode contest"));
console.log(reverseAString("Let's take LeetCode contest"));

// console.log(reverseAString("The quick brown fox jumped over the lazy dog"));
