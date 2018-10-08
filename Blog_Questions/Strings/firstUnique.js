/*
How do you print the first non-repeated character from a string? 
*/

const firstUnique = (str) => {
    const toArr = str.split('');
    return toArr.filter( (val, i) => {
        if ( toArr.indexOf(val) === toArr.lastIndexOf(val) ) {
            return val
        }
    })[0]
}

const test = "the quick brown fox jumped over the lazy dog";

console.log(firstUnique(test));