/*
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is actually the expected result, not the input! (these languages are locked so that's not possible to correct it).
*/

const countLetters = (str) => {
    return str.toLowerCase().split('').reduce((acc, next) => {
        acc[next] ? acc[next] ++ : acc[next] = 1;
        return acc
    }, {})
} 

const duplicateEncode = (str) => {
    const letterCount = countLetters(str);
    let finalStr = '';
    const strArr = str.split('')
    for ( let key of strArr ) {
        if ( letterCount[key] === 1 ) {
            finalStr += '('
            console.log(letterCount[key], key, finalStr)
        } else {
            finalStr += ')'
            console.log(letterCount[key], key, finalStr)
        }
    }
return finalStr
}

// console.log(duplicateEncode("din")) //=> "((("
// console.log(duplicateEncode("recede")) //=> "()()()"
console.log(duplicateEncode("Success")) //=> ")())())"
// console.log(duplicateEncode("(( @")) //=> "))(("