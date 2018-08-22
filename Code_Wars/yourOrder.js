/*
Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
*/

const sortString = (indexes, str) => {
  const toArr = str.split(' ');
  let finalStr = [];

  for ( let i = 1; i <= toArr.length; i++ ) {
    finalStr.push(toArr[indexes.indexOf(i)])
  }
  return finalStr.join(' ')
}

const order = (str) => {
  let toArr = str.split('');

  // could have just used a map with a conditional but i strung to methods together instead. which seems to be more common to do any way 
  const onlyNumbers = toArr.filter(val => parseInt(val)).map(val => parseInt(val, 10))

  return sortString(onlyNumbers, str)
};

console.log(order("is2 Thi1s T4est 3a"))
