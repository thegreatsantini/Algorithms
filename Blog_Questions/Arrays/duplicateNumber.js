/*
How do you find the duplicate number on a given integer array? 
*/

const duplicate = (arr) => {
    return arr.filter( (val, i) => {
        if ( arr.indexOf(val) !== i ) {
            return val
        }
    })[0]
}

const test = [1,8,2,3,4,5,6,7,8,10,9]

console.log(duplicate(test))