/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

// NOTE: there are "better" ways of solving this
const fearNotLetter = (str) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let index = 0;

  for (let i = alphabet.indexOf(str[0]); i < alphabet.indexOf(str[str.length - 1]); i++) {
    if ( str[index] !== alphabet[i] ) {
      return alphabet[i]
    }
    index++
  }
  return undefined;
}

console.log(fearNotLetter("abce")) // should return "d".
console.log(fearNotLetter("abcdefghjklmno")) // should return "i".
console.log(fearNotLetter("stvwx")) // should return "u".
console.log(fearNotLetter("bcdf")) // should return "e".
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) // should return undefined.
