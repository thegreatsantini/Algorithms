/*
How do you check if a given string is a palindrome?
*/

const isPal = (str) => {
    const cleanedStr = str.replace(/\W/g, '').toLowerCase();
    const midPoint = Math.floor(cleanedStr.length - 1);
    let left = 0;
    let right = cleanedStr.length - 1;

    while ( left <= midPoint ) {
        if ( cleanedStr[left] !== cleanedStr[right] ) {
            return false;
        }
        left ++;
        right--;
    }
    return true
}

const test = 'A man, a plan, a canal: Panama.';
// const test ='kayak'

console.log(isPal(test));