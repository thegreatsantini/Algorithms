/*
You are given an array containing all integers from 1 to N, except one that is missing.

In order to fill the array, one of the elements of the sequence has been duplicated.

Your mission is to find which number is missing and which one is duplicated.

Example:

solution([2,4,1,6,3,4]) should return [5,4] because 5 is missing and 4 appears twice.

Remarks:

You are not allowed to sort the array.
Your solution should not time out for large values of N.
Ideally, your solution should not use extra space except the one provided by the input array (which can be modified).
*/

const solution = (arr) => {
    let missing = 0;
    let duplicate = 0;
    const onlyUniques = [...(new Set(arr))]
    duplicate = arr.filter((val, i) => {
        return arr.indexOf(val) !== i
    })[0];
    
    for ( let i = 0; i < onlyUniques.length; i++ ) {
        console.log(onlyUniques[i])
        if ( !onlyUniques.includes(onlyUniques[i] +1 || !onlyUniques.includes(onlyUniques[i]-1 ) )) {
            missing = i
        }
    }
    return [ missing, duplicate ]
}

// console.log(solution([2, 3, 1, 4, 4, 6]))//, [5,4]
console.log(solution([ 2, 3, 1, 3, 4, 5 ])) // 6, 3
console.log(solution([2, 2]))//, [1,2]