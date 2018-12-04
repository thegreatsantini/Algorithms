const arr = [-1000, -19, -1, 2, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 28, 32, 36, 54, 64, 132, 165];
const target = 4;

const binarySearch = (arr, target) => {
    let start = 1;
    let stop = arr.length - 1;
    
    while ( min <= max ) {
        const quess = Math.floor(( start + stop ) / 2 );
        if (arr[guess] === target) {
            return guess
        } else if (target > guess) {
            searchedArr = arr.slice(guess);
            guess = Math.floor(searchedArr.length / 2)
        } else if (target < guess) {
            searchedArr = arr.slice(0, guess)
            guess = Math.floor(searchedArr.length / 2)
        }
    }
    return -1
}

console.log(binarySearch(arr, target))