const arr = [1, 21, 3, 14, 5, 60, 7, 6];
const n = 81;

const findSum = (arr, target) => {
  const seen = {};
  for (let i in arr) {
    const compliment = target - arr[i];
    console.log(seen.hasOwnProperty(compliment));
    if (seen.hasOwnProperty(compliment)) {
      //   return [compliment, element];
      return true;
    }
    seen[arr[i]] = true;
  }
  return false;
};

console.log(findSum(arr, n));
