/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/


// NOTE: This seems to pass all the unit tests but fails maybe because of type casting or Order of returned array ?
// const countItems = (arr) => {
//   return arr.reduce((acc, next)=>{
//     acc[next] ? acc[next]++ : acc[next]=1;
//     return acc
//   },{})
// };
//
// const diffArray = (arr1, arr2) => {
//   var newArr = [];
//   const itemCount = countItems(arr1.concat(arr2));
//   for (let item in itemCount ) {
//     if ( itemCount[item] === 1 ) {
//         newArr.push(item)
//     }
//   }
//   return newArr
// };

// NOTE: this passes.....there are many ways of solving This
const diffArray = (arr1, arr2) => {
  const uniqueArr1 = arr1.filter(val => !arr2.includes(val));
  const uniqueArr2 = arr2.filter(val => !arr1.includes(val));
  return uniqueArr1.concat(uniqueArr2)
};

// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))// should return ["pink wool"].
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) //["diorite", "pink wool"].
// console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]))//should return [].
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])) //should return [4].
//console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))// should return ["piglet", 4].
// console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]))// should return ["snuffleupagus", "cookie monster", "elmo"].
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))// should return [1, "calf", 3, "piglet", 7, "filly"].
