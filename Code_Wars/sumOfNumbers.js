/*
In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1
*/


const sum = (num) => {
    if ( num <=1 ) return 1;

    return sum(num-1) + sum(num-2);
}

console.log(sum(1)) // 1
console.log(sum(2)) // 2  -> 1+1 , 2
console.log(sum(3)) // 3 -> 1+1+1, 1+2, 3
console.log(sum(4)) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

// sum(10) // 42
// sum(50) // 204226
// sum(80) // 15796476
// sum(100) // 190569292