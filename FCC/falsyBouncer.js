/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/


const bouncer = (arr) => {
  return arr.filter(val => Boolean(val))
  // Don't show a false ID to this bouncer.
  // return arr;
}

console.log(bouncer([7, "ate", "", false, 9])) // should return [7, "ate", 9].
console.log(bouncer(["a", "b", "c"])) // should return ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])) // should return [].
console.log(bouncer([1, null, NaN, 2, undefined])) // should return [1, 2]
