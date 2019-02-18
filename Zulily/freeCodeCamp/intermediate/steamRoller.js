const steamrollArray = (arr, index, isArr) => {
  if (!isArr) {
    return arr;
  } else if (Array.isArray(arr[index])) {
    console.log(arr[index]);
  }
};

console.log(steamrollArray([[["a"]], [["b"]]])); // should return ["a", "b"].
// console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return [1, 2, 3, 4].
// console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4].
// console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4].
