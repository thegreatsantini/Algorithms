/*
verify a prime number 
*/

const checkPrime = (num) => {
    const sqrt = Math.sqrt(num)
    if (num === 1) return false 

    for (let i = 2; i <= sqrt; i++) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

console.log(checkPrime(12))