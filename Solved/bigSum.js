const bigSum = (arr) => {
  if ( arr.length === 0 ) return 0

  return arr[0] + bigSum(arr.slice(1))
};

console.log(bigSum([5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))
