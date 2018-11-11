const first = [2, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const second = [1, 3, 7, 9];

const median = (left, right) => {
    let merged = [];
    let leftIndex = 0;
    let rigthIndex = 0;
    let midpoint = Math.floor((left.length + right.length) / 2);

    while (leftIndex < left.length && rigthIndex < right.length ) {
        if (left[leftIndex] < right[rigthIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        } else {
            merged.push(right[rigthIndex]);
            rigthIndex++
        }
    }
    merged = merged.concat(left.slice(leftIndex)).concat(right.slice(rigthIndex));

    if ( merged.length % 2 === 0) {
        return (midpoint + merged[midpoint + 1]) / 2
    } else {
        return merged[midpoint];
    }
}

console.log(median(first, second))
