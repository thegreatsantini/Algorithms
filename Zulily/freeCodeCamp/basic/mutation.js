const mutation = arr => {
  const count1 = arr[0]
    .toLowerCase()
    .split("")
    .reduce((acc, next) => {
      if (acc.hasOwnProperty(next)) {
        acc[next]++;
      } else {
        acc[next] = 1;
      }
      return acc;
    }, {});
  const count2 = arr[1]
    .toLowerCase()
    .split("")
    .reduce((acc, next) => {
      if (acc.hasOwnProperty(next)) {
        acc[next]++;
      } else {
        acc[next] = 1;
      }
      return acc;
    }, {});
  for (let keys in count2) {
    if (count2[keys] > count1[keys] || !count1[keys]) return false;
  }
  return true;
};

console.log(mutation(["hello", "hey"])); // should return false.
console.log(mutation(["hello", "Hello"])); // should return true.
// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // should return true.
// console.log(mutation(["Mary", "Army"])); // should return true.
// console.log(mutation(["Mary", "Aarmy"])); // should return true.
// console.log(mutation(["Alien", "line"])); // should return true.
// console.log(mutation(["floor", "for"])); // should return true.
// console.log(mutation(["hello", "neo"])); // should return false.
// console.log(mutation(["voodoo", "no"])); // should return false.
