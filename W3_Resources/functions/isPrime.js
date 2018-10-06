/*
check if a number is prime
*/

const isPrime = (num) => {
    if ( num < 1 ) return false;
    if ( num === 1 ) return false;
    const square = Math.sqrt(num);

    for ( let i = 2; i <= square; i++ ) {
        if ( num % i === 0 ) {
            return false
        }
    }
    return true
}

console.log(isPrime(13))