/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
*/

const findEvenIndex = (arr) => {
    
    for ( let index = 0; index < arr.length; index++ ) {

        const half1 = arr.slice( 0,index  ).reduce((accum, next)=> accum + next, 0);
        const half2 = arr.slice( index +1, index.length ).reduce((accum, next)=> accum + next, 0);

        if ( half1 === half2 ) {
            return index
        }
    }
    return -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1])) //,3,  [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1])) //,1,  [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6])) //,-1,  [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35])) //,3,  [20,10,30,10,10,15,35] \n")