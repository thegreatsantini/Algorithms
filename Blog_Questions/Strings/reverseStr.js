/*
How can a given string be reversed using recursion? 
*/

const reverseStr = (str) => {
    if ( str.length === 0 ) return '';

    return str[str.length-1] + reverseStr(str.substring(0, str.length-1))
    // return reverseStr(str.substring(1)) + str.charAt(0);
}
const test = 'the quick brown fox jumped over the lazy dog'
console.log(reverseStr(test))