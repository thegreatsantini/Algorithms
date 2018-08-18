/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
*/

const lettersCount = (str) => {
  return str.toLowerCase().split('').reduce( (acc, next) => {
    acc[next] ? acc[next] ++ : acc[next] = 1;
    return acc
  }, {});
};

const mutation = (arr) => {

  const leftItem = lettersCount(arr[0]);
  const rightItem = lettersCount(arr[1]);

  for (let key in rightItem) {
    if (  !leftItem[key] ) {
      return false;
    }
  }
  return true;
};

console.log(mutation(["hello", "hey"])) // should return false.
console.log(mutation(["hello", "Hello"])) // should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) // should return true.
console.log(mutation(["Mary", "Army"])) // should return true.
console.log(mutation(["Mary", "Aarmy"])) // should return true.
console.log(mutation(["Alien", "line"])) // should return true.
console.log(mutation(["floor", "for"])) // should return true.
console.log(mutation(["hello", "neo"])) // should return false.
console.log(mutation(["voodoo", "no"])) // should return false.
