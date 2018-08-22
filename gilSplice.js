







function frankenSplice(arr1, arr2, n) {
    arr2.splice(n, 0, arr1.slice(0, arr1.length));
    return arr2

  }
  

console.log(frankenSplice([1, 2, 3], [4, 5], 1))// should return [4, 1, 2, 3, 5].
// console.log(frankenSplice([1, 2], ["a", "b"], 1))// should return ["a", 1, 2, "b"].
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))// should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].