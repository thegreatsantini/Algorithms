const arr1 = [1, 3, 4, 5];
const arr2 = [2, 6, 7, 8, 9, 10, 15, 21, 30, 50, 51, 52, 60, 69];

const merge = (leftArr, rightArr) => {
  let merged = [];
  let left = leftArr.slice();
  let right = rightArr.slice();
  while (left.lenght > 0 && right.lenght > 0) {
    if ((left[0], right[0])) {
      merged.push(leftArr.shift());
    } else {
      merged.push(rightArr.shift());
    }
  }
  return merged.concat(left).concat(right);
};

const test = merge(arr1, arr2);
console.log(test);
