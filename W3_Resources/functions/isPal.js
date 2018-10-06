/* 
Check if string is a palindrome
*/

const isPal = (str) => {
    // remove nonalphnumeric chars
    const checkPal = str.replace(/\W/g, '').toLowerCase()

    const midPoint = Math.floor(str.length/2);
    let left = 0;
    let right = checkPal.length - 1;
    
    while ( left <= midPoint ) {
        if ( checkPal[left] !== checkPal[right] ) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

console.log(isPal("Al lets Della call Ed “Stella.”"))
console.log(isPal("race'car"))