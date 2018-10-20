/*
Build a function findNestedMaximum that finds the maximum value in an array containing both numbers and nested arrays. The nested arrays themselves can contain both numbers and further nested arrays. Some of the arrays may be empty but at least one number will be present amongst all the arrays.

For example, findNestedMaximum([4, -3, [10], [[-5, 6], 18]]) should return 18.
*/

const flatten = (arr) => {
  console.log(arr)
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

const findNestedMaximum =  (arr) => {
  const flatArray =  flatten(arr);
  let largestItem = flatArray[0];

  flatArray.forEach(val => {
      if ( val > largestItem ) {
        largestItem = val
      }
  });

  // return largestItem;
};

const recursiveFind = (arr, flatten=[]) => {
  
  if ( arr.length === 0 ) {
    console.log('done', flatten)
    return flatten;
  } 

  arr.forEach( (val,i) => {
    if (Array.isArray(val)) {
      const spliced = arr.splice(0,i)
      console.log(spliced.concat(arr[0]))
      console.log(arr)
      // recursiveFind(arr, spliced.concat(arr[i]))
    }
  })

}

console.log(recursiveFind([4, -3, [10], [[-5, 6], 18]]))
