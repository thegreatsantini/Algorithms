/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/
// 65-122
const getCount = (str) => {
    let count = 0;
    for (let char of str) {
        if ( char.match(/[aeiou]/)) {
            count++
        }
    }
    return count
}

console.log(getCount("abracadabra"))//, 5)