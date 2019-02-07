const input = '5x7-70+20';

const calc = (a, b, opp) => {
  switch (opp) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '/':
      return a / b;
  }
}

const solve = (str) => {
  let result = 0;
  let currentNum = '';
  const toArr = str.split('');
  let myArr = []
  for (let i = 0; i < toArr.length; i++) {
    if (!parseInt(toArr[i]) && toArr[i] != '0') {
      myArr.push(currentNum);
      myArr.push(toArr[i]);
      currentNum = ''
    } else {
      console.log(currentNum)
      currentNum += toArr[i]
    }
    if (i === toArr.length - 1) {
      myArr.push(currentNum)
    }
  }
  let opperator;
  for (let k = 0; k < myArr.length; k++) {
    if (k === 0) {
      result = myArr[k];
    } else {
      if (!parseInt(myArr[k])) {
        opperator = myArr[k]
      }
      else {
        result = calc(parseInt(result), parseInt(myArr[k]), opperator)
      }
    }
  }
  return result;
}

const test = solve(input);
console.log(test)
