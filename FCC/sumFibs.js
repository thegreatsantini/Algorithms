/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

const sumFibs = (num) => {
  let sumOdds = 0;
  let x = 0;
  let y = 1;
  let z = 0

  for (let i = 0; i < num; i++) {
    z = x + y;
    console.log(z);;
    if ( z % 2 === 1 ) {
      sumOdds += z
    }
    x = y
    y = z;
  }
  return sumOdds;
}
// console.log(sumFibs(1000)) //should return 1785.
// console.log(sumFibs(4000000)) //should return 4613732.
console.log(sumFibs(4)) //should return 5.
// console.log(sumFibs(75024)) //should return 60696.
// console.log(sumFibs(75025)) //should return 135721.
