const toSort = [100, -1, 2, 55, 22, 3, 56, 100, 0.4444444, 17, 4, 5, 19, 8, 0];

// Merge Sort
const merge = (left, right) => {
  let merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return merged.concat(left).concat(right);
};

const mergeSort = arr => {
  if (arr.length === 1) return arr;

  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const rightSide = arr.slice(midpoint, arr.length);

  return merge(mergeSort(left), mergeSort(rightSide));
};

// Quick Sort
const quickSort = arr => {
  if (arr.length <= 1) return arr;

  const pivot = arr.shift();
  const left = arr.filter(val => val < pivot);
  const right = arr.filter(val => val > pivot);

  return quickSort(left)
    .concat(pivot)
    .concat(quickSort(right));
};
