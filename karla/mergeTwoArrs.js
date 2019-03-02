const arr1 = [1, 3, 4, 5];
const arr2 = [2, 6, 7, 8];

const mergeTwo = (a, b) => {
  return a.concat(b).sort((a, b) => a - b);
};

console.log(mergeTwo(arr1, arr2));
