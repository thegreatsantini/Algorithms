/*
Given a number n, return the number of positive odd numbers below n, EASY!

Expect large inputs
*/

const oddCount = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i !== 0) {
            console.log(num)
        } 
    return num !== 1;
}

// oddCount(7) //=> 3, i.e [1, 3, 5]
console.log(oddCount(15)) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]