/*
Given a year, report if it is a leap year.

The tricky thing here is that a leap year in the Gregorian calendar occurs:

on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

*/
const leapYear = (year) => {
  if ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true
  }
  return false;
};
// console.log(leapYear(2015), false)
// console.log(leapYear(2016), true)
// console.log(leapYear(1900), false)
console.log(leapYear(2000), true)
// console.log(leapYear(1978), false)
// console.log(leapYear(1992), true)
// console.log(leapYear(2100), false)
// console.log(leapYear(1997), false);
// console.log(leapYear(1996), true);;
