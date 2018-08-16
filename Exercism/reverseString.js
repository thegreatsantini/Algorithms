const reverseString = (str) => {
  if ( str.length <= 1 ) return str;
  let toArr = str.split('');
  let temp = 0;
  const midPoint = Math.floor(toArr.length / 2)
  for ( let char = 0; char < midPoint; char++ ) {
    temp = toArr[char];
    toArr[char] = toArr[toArr.length - 1 - char];
    toArr[toArr.length - 1 - char] = temp;
  }
  return toArr.join('');
};

// console.log(reverseString('the quick brown fox'));
// console.log(reverseString('cat'));
console.log(reverseString('I am hungry!'));
