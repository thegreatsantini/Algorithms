/*
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

const checkPal = (str) => {
    let mid = Math.floor( str.length/2 )

    for ( let char = 0; char <= mid; char++ ) {
        if ( str[char] != str[ str.length - 1 -char] )
        return ''
    }
    return str
}

const longestPalindrome = (str) => {
    if ( str.length === 1 ) return str.length;
    let palindromes = []
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {

                palindromes.push(checkPal(str.substring(i, j + 1)))
            }
        }
    }
    const lengths = palindromes.map(val => val.length)
    if ( Math.max(...lengths) === 0 && lengths.length > 0 ) return 1
    return Math.max(...lengths) === 0 ? 'Are you sure that is a palindrome?' : Math.max(...lengths)
}


// console.log(longestPalindrome("a")) //, 1) 
console.log(longestPalindrome("abcdefghba")) //, 2)
// console.log(longestPalindrome("baa")) //, 2)
// console.log(longestPalindrome("zyabyz")) //, not palindrome)
// console.log(longestPalindrome("abcdefghba")) //, 1)
// console.log(longestPalindrome("baablkj12345432133d")) //, 9)