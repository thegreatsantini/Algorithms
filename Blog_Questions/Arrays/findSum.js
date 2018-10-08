/*
How do you find all pairs of an integer array whose sum is equal to a given number?
*/

const findSum = (arr, k) => {

    return arr.reduce((accum, next) => {
        const compliment = Math.abs(next - k);
    
        if (arr.includes(compliment)) {
            if ( !accum[Math.min(next, compliment)] ) {
                accum[Math.min(next, compliment)] = Math.max(next, compliment)
            }
        }
        return accum
    }, {})
}

const test = [1, 4, 45, 6, 10, 8, 8]
const k = 16

console.log(findSum(test, k))