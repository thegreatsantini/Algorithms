/*
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

const makeObj = (arr) => {
  return arr.reduce((acc, next) => {
    acc[next] ? acc[next]++ : acc[next] = 1;
    return acc
  }, {})
};

const scramble = (str1, str2) => {
  const str1Count = makeObj(str1.split(''));
  const str2Count = makeObj(str2.split(''));

  for (let key in str2Count) {
    if ( str2Count[key] > str1Count[key] || !str1Count[key]) {
      return false;
    }
  }
  return true;
};

console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))
