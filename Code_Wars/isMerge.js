/*
At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 are in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears
*/

const countLetters = (arr) => {
    return arr.reduce((acc, next) => {
        acc[next] ? acc[next]++ : acc[next] = 1;
        return acc;
    }, {})
}

const isMerge = (s, part1, part2) => {
    const letterCount = countLetters(part1.split('').concat(part2.split('')));
    const sCount = countLetters(s.split(''));

    for (let key in sCount) {
        if ( sCount[key] !== letterCount[key] ) {
            return false
        }
    }
    return true;
}

console.log((isMerge('codewars', 'code', 'wars'))); // true
console.log((isMerge('codewars', 'cdw', 'oears'))); // true
console.log((isMerge('codewars', 'cod', 'wars'))); // false
