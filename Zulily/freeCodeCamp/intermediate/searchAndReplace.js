const myReplace = (str, before, after) => {
  const myObj = str.split(" ").reduce((acc, next) => {
    acc[next] = next;
    return acc;
  }, {});
  if (/[A-Z]/.test(myObj[before])) {
    myObj[before] = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    myObj[before] = after;
  }
  return str
    .split(" ")
    .map(word => myObj[word])
    .join(" ");
};

// console.log(myReplace("Let us go to the store", "store", "mall")); // should return "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // should return "He is Sitting on the couch".
// console.log(myReplace("This has a spellngi error", "spellngi", "spelling"))// should return "This has a spelling error".
// console.log(myReplace("His name is Tom", "Tom", "john"))// should return "His name is John".
// console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"))// should return "Let us get back to more Algorithms".
