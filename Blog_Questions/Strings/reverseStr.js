/*
How can a given string be reversed using recursion? 
*/

const reverseStr = (str) => {
    if ( str.length === 0 ) return '';

    return reverseStr(str.substring(1)) + str.charAt(0);
}
const test = 'the quick brown fox jumped over the lazy dog'
console.log(reverseStr(test))