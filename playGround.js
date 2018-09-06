

// const getMiddle = (str)=> {
//     if ( str.length % 2 === 0 ) {
//         return str.substring( (str.length/2) -1, (str.length/2) +1 )
//     }
//     return str[Math.floor(str.length/2)]
// }


// console.log(getMiddle("test")) //, "es");
// console.log(getMiddle("testing")) //, "t");
// console.log(getMiddle("middle")) //, "dd");
// console.log(getMiddle("A")) //, "A");

var isPalindrome = function (s) {
    let str = s.replace(/[^\w]|_/g, "").toLowerCase()
    let left = 0;
    let right = str.length - 1;
    while (left != Math.floor(s.length/2) ) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome("race a car"))