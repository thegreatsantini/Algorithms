/*
How do you check if two strings are a rotation of each other? 
*/

const isRotation = (str1, str2) => {
    // create copy of string to modify original
    let rotator = str1.slice();
    
    for (let char = 0; char < str1.length; char++) {
        rotator = rotator.substring(1) + rotator.charAt(0);
        if ( rotator === str2 ) {
            return true;
        }
    }
    return false;
}

const myString = 'the cow jumped';
const rotator = 'e cow jumpedth';

console.log(isRotation(myString, rotator));