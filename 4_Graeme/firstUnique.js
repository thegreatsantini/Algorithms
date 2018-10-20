/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/


const firstUniqChar = function(s) {
    const unique = s.split('')
    for ( let char =0; char<unique.length; char++ ) {
        if (unique.indexOf(unique[char]) === unique.lastIndexOf(unique[char])) {
            return  char
        }
    }
    return -1
};

console.log(firstUniqChar('leetcode')) // 0
// console.log(firstUniqChar('loveleetcode')) //2
console.log(firstUniqChar('cc')) //2.