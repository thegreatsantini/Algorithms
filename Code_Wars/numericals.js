/*
You are given an input string.

For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

But will your code be performant enough?

input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
*/

const numericals = (str) => {
    let count = {};
    let finalStr = '';

    for (let char of str) {
        if ( !count[char] ) {
            count[char] = 1
            finalStr += count[char];
        } else {
            count[char] ++;
            finalStr += count[char]
        }
    }
    return finalStr
}



console.log(numericals("Hello, World!")) //, "1112111121311");
// console.log(numericals("Hello, World! It's me, JomoPipi!")) //, "11121111213112111131224132411122");
// console.log(numericals("hello hello")) //, "11121122342");
// console.log(numericals("Hello")) //, "11121");
// console.log(numericals("aaaaaaaaaaaa")) //,"123456789101112");