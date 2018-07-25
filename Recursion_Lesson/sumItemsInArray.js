let arr = [2, 3, 6];

const sumItems = (sum, arr) => {
  if ( arr.length <= 0 ) return sum;
  sum += arr.unshift();
  const newArr = arr.unshift()
  return sumItems( sum, newArr )
};

console.log(sumItems(0, arr))
