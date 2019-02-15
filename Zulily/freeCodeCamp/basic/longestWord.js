const findLongestWordLength = str => {
  const lengths = str.split(" ").map(word => word.length);
  return Math.max(...lengths);
};

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // should return 6.
findLongestWordLength("May the force be with you"); // should return 5.
findLongestWordLength("Google do a barrel roll"); // should return 6.
findLongestWordLength(
  "What is the average airspeed velocity of an unladen swallow"
); // should return 8.
const test = findLongestWordLength(
  "What if we try a super-long word such as otorhinolaryngology"
); // should return 19.
console.log(test);
