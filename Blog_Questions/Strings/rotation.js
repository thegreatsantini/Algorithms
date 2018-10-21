/*
How do you check if two strings are a rotation of each other? 
*/

const isRotation = (str1) => {
    // create copy of string to modify original
    // let rotator = str1.slice();

    for (let char = 0; char < str1.length/2; char++) {
        str1 = str1.substring(1) + str1.charAt(0);
        console.log(str1)
        // if ( str1 === str2 ) {
        //     return true;
        // }
    }
    // return str1;
}

const myString = 'the cow jumped';
const rotator = 'e cow jumpedth';

console.log(isRotation(myString));