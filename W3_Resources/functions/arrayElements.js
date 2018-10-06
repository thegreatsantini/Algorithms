/*
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
Test Data : 
*/


const first = (arr, index=1) => {
    console.log(arr.slice(0, index))
}


first([7, 9, 0, -2]); // 7
first([],3); // []
first([7, 9, 0, -2],3); // [7, 9, 0]
first([7, 9, 0, -2],6); // [7, 9, 0, -2]
first([7, 9, 0, -2],-3); // []