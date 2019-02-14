const test = 6721;

const nextLargest = num => {
  const toArr = num.toString().split("");
  for (let i = toArr.length - 1; i >= 0; i--) {
    if (toArr[i] > toArr[i - 1]) {
      [toArr[i], toArr[i - 1]] = [toArr[i - 1], toArr[i]];
      return toArr.join("");
    }
  }
  return toArr.join("");
};

console.log(nextLargest(test));
