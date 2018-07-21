/*
Change a roman numeral to integer
*/

const map = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}
let str = 'IV';
const romanToInt = (str) => {
  let i = 0;
  let answer = 0;

  while ( i <= str.length - 1 ) {
    if ( i === str.length - 1 ) {
      answer += map[str[i]];
      i += 1;
    } else if ( map[str[i]] >= map[str[i+1]] ) {
      answer += map[str[i]];
      i += 1;
    } else {
      answer += map[str[i+1]] - map[str[i]];
      i += 2;
    }
  }
  return answer;
};

console.log(romanToInt('MCMXCIV'))
console.log(romanToInt('VI'))
