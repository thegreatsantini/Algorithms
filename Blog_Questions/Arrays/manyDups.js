/*
How do you find duplicate numbers in an array if it contains multiple duplicates?
*/

const manyDups = (arr) => {
    
    return arr.filter((val, i) => {
        if ( arr.indexOf(val) !== arr.lastIndexOf(val) ) {
            return val
        }
    })
}

const test = [8, 95, 1, 22, 2, 4, 8, , 12, 22, 8, 10, 95, 955, 95, 13, 8, 12];

console.log(manyDups(test));