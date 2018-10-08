/*
How do you check if two strings are anagrams of each other? 
*/

const isAna = (str1, str2) => {
    const test1 = str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    const test2 = str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    if ( test1.length !== test2.length ) return false;

    for (let char = 0; char < test1.length; char ++) {
        if ( test1[char] !== test2[char] ) {
            return false
        }
    }
    return true;
}

const test = 'jum:peth   cOwed';
const myStr = 'the Cow jumped';

console.log(isAna(myStr, test));