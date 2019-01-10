const test = [1, 2, 3, 4, 5]; // [ 5, 1, 4, 2, 3 ]

const minMax = arr => {
  let copy = arr.slice();
  let final = [];

  arr.forEach((val, i) => {
    if (i % 2 !== 0) {
      final.push(copy.shift());
    } else {
      final.push(copy.pop());
    }
  });
  return final;
};

console.log(minMax(test))
