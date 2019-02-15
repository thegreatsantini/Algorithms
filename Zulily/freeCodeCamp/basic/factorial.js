function recursive(num) {
  if (num <= 0) return 1;
  return num * recursive(num - 1);
}

function factorialize(num) {
  let result = 1;
  while (num > 0) {
    result = result * num;
    num -= 1;
  }
  return result;
}

factorialize(5); // should return 120.
// const test = factorialize(10); // should return 3628800.
// factorialize(20); // should return 2432902008176640000.
// factorialize(0); // should return 1.

// console.log(test);
