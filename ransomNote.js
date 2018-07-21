/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
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

const canConstruct = (ransomNote, magazine) => {

    const lettersNeeded = makeObject(ransomNote);
    const lettersAvail = makeObject(magazine);

    for (let letter in lettersNeeded) {
      console.log(lettersAvail[letter])
      if (lettersNeeded[letter] > lettersAvail[letter] || lettersAvail[letter] === undefined ) {
        return false;
      }
    };
    return true;
};

let note = "bg"
let mag = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"

console.log(canConstruct('aa', 'aab'));
// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aa", "aab"));
