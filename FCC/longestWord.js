const findLongestWordLength = (str) => {
  const toArr = str.split(' ');
  let currentLongest = '';

  for (let word = 0; word< toArr.length; word++) {
    if ( toArr[word].length > currentLongest.length ) {
      currentLongest = toArr[word];
    }
  }
  return currentLongest.length;
};

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))// should return 6.
console.log(findLongestWordLength("May the force be with you"))// should return 5.
console.log(findLongestWordLength("Google do a barrel roll"))// should return 6.
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"))// should return 8.
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))// should return 19.
