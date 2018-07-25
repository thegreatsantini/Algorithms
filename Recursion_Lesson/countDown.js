const countDown = (i) => {
  if ( i <= 0 ) return i;
  console.log(i)
  return countDown(i-1);
};


console.log(countDown(5))
