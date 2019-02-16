const bouncer = arr => {
  return arr.filter(item => item);
};

console.log(bouncer([7, "ate", "", false, 9])); // should return [7, "ate", 9].
console.log(bouncer(["a", "b", "c"])); // should return ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // should return [].
console.log(bouncer([1, null, NaN, 2, undefined])); // should return [1, 2]
