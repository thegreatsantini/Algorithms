/*
Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on your language's naming conventions) should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array.
*/

const bubblesortOnce = (a) => {
    let newArr = a.slice()
    let checker = newArr[0];
    let temp = 0;

    for ( let i = 0; i < newArr.length; i++ ) {
        if ( checker > a[i] ) {
            temp = newArr[i];
            newArr[i] = checker;
            newArr[i-1] = temp;
        } 
        checker = newArr[i]
    }
    return newArr
}

console.log(bubblesortOnce([3, 2, 5, 9, 1, 7, 4, 6, 8])) //[7, 5, 3, 1, 2, 4, 6, 8, 9]