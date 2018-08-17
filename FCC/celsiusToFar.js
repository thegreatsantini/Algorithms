/*
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

Don't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.
*/

const convertToF = (degrees) => {
  return (degrees * 9/5) + 32
};

console.log(convertToF(0))// should return a number
console.log(convertToF(-30))// should return a value of -22
console.log(convertToF(-10))// should return a value of 14
console.log(convertToF(0)) //should return a value of 32
console.log(convertToF(20))// should return a value of 68
console.log(convertToF(30)) //should return a value of 86
