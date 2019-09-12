/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

const removeDuplicates = function(nums) {
    let toSet = new Set(nums)
    return Array.from(toSet).length;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
