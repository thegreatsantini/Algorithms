/*
How do you find the missing number in a given integer array of 1 to 100?
*/

const missingNumber = (arr) => {
    const sortedArr = arr.sort();
    for ( let i = Math.min(...sortedArr); i < Math.max(...sortedArr); i++ ) {
        if ( i != arr[i-1] ) {
            return i;
        }
    }
    return 'no missing numbers';
}

const test = [ 1,2 ,3 , 5, 6, 7, 8 , 9 ];

console.log(missingNumber(test));