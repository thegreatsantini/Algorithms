const sumFibs = num => {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
};

console.log(sumFibs(1000)); // should return 1785.
// console.log(sumFibs(4000000)); // should return 4613732.
console.log(sumFibs(4)); // should return 5.
// console.log(sumFibs(75024)); // should return 60696.
// console.log(sumFibs(75025)); // should return 135721.
