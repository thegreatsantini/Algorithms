/*
Summary: Write a function which takes an array data of numbers and returns the largest difference in indexes j - i such that data[i] <= data[j]

Long Description:

The largestDifference takes an array of numbers. That array is not sorted. Do not sort it or change the order of the elements in any way, or their values.

Consider all of the pairs of numbers in the array where the first one is less than or equal to the second one.

From these, find a pair where their positions in the array are farthest apart.

Return the difference between the indexes of the two array elements in this pair.

Example:

*/

const largestDifference = (arr) => {
    let largest = 0;

    for ( let i = 0; i< arr.length; i++ ) {
        for ( let j = i+1; j < arr.length; j++ ) {
            if ( arr[i] < arr[j] && j - i > largest) {
                console.log(j, i)
                largest = j - i
            }
        }
    }
    return largest
}

// console.log(largestDifference([1,2,3]))// ; //  2, because here j = 2 and i = 0 and 2 - 0 = 2
console.log(largestDifference([9,4,1,10,3,4,0,-1,-2]))// == 4 data[1] <= data[5], so 5 - 1 = 4
// console.log(largestDifference([3,2,1]))// == 0)); never finds i<j such that data[i] <= data[j]