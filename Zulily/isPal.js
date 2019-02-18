const palindrome = str => {
  const toArr = str
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("");
  const mid = Math.floor((toArr.length - 1) / 2);
  let index = 0;
  while (index <= mid) {
    let front = toArr[index];
    const back = toArr[toArr.length - 1 - index];
    if (front != back) {
      return false;
    }
    index++;
  }
  return true;
};

console.log(palindrome("eye")); // should return true.
console.log(palindrome("_eye")); // should return true.
console.log(palindrome("race car")); // should return true.
console.log(palindrome("not a palindrome")); // should return false.
console.log(palindrome("A man, a plan, a canal. Panama")); // should return true.
console.log(palindrome("never odd or even")); // should return true.
console.log(palindrome("nope")); // should return false.
console.log(palindrome("almostomla")); // should return false.
console.log(palindrome("My age is 0, 0 si ega ym.")); // should return true.
// console.log(palindrome("1 eye for of 1 eye.")); // should return false.
console.log(palindrome("five|_/|four")); // should return false.
