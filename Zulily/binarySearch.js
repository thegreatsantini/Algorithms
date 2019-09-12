const arr = [ -1000, -19, -1, 2, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 28, 32, 36, 54, 64, 132, 165 ];
const target = 23;

const binarySearch = (arr, target) => {
  let start = 1;
  let stop = arr.length - 1;
  let guess = Math.floor((start + stop) / 2);
  while (start <= stop) {
    if (arr[guess] === target) {
      return guess;
    } else if (target > guess) {
      guess = guess + 1;
    } else if (target < guess) {
      guess = guess - 1;
    }
  }
  return -1;
};

console.log(binarySearch(arr, target));
