/*
How do you reverse an array in place?
*/

const reverseArr = (arr) => {
    let arrToReverse = arr.slice();
    const midPoint = Math.floor(arr.length - 1);

    for ( let i = 0; i < midPoint; i++ ) {
        [ arrToReverse[i], arrToReverse[arrToReverse.length - 1 - i] ] = [ arrToReverse[arrToReverse.length - 1 -i], arrToReverse[i] ]
    }
    return arrToReverse
}

const test = [5,4,3,2,1];

console.log(reverseArr(test));