const input = [1, 2, 3, 4]; // [ 24, 12, 8, 6 ]

const findProduct = arr => {
  return arr.map(item => {
    return arr
      .filter(val => item != val)
      .reduce((acc, next) => (acc *= next), 1);
  });
};

findProduct(input);
