const diffArray = (a, b) => {
  const count = a.concat(b).reduce((acc, next) => {
    if (acc.hasOwnProperty(next)) {
      delete acc[next];
    } else {
      acc[next] = next;
    }
    return acc;
  }, {});
  return Object.values(count);
};

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
); // should return ["pink wool"].
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
); // should return ["diorite", "pink wool"].
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"]
  )
); // should return [].
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return [4].
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // should return ["piglet", 4].
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); // should return ["snuffleupagus", "cookie monster", "elmo"].
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); // should return [1, "calf", 3, "piglet", 7, "filly"].
