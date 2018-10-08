/*
How do you count a number of vowels and consonants in a given string?
*/

const countChars = (str) => {
    const consonantsCnt = str.match(/[b-df-hj-np-tv-z]/gi);
    const vowelCnt = str.match(/[aeiou]/gi);
    return [ consonantsCnt.length, vowelCnt.length ]
}

const test = "th; e quiCk brown fox Jumped OvEr the & lazy dog";

console.log(countChars(test))