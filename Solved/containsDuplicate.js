/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

const containsDuplicate = (arr) => {
  return arr.length > (new Set(arr)).size;
};

let test = [1,2,3,1];

console.log(containsDuplicate(test))
