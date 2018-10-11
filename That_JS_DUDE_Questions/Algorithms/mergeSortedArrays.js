/*
merge two sorted arrays
*/

const merge = (left, right) => {
    let merged = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        }
        else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left).concat(right)
}

const arr2 = [1, 3, 5, 6, 18, 19, 20, 29, 200];
const arr1 = [-1, 2, 2, 6, 8, 10, 29, 30, 39,45, 49,55, 59, 100];


console.log(merge(arr1, arr2))