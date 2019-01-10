const test = [9, 2, 3,6] // 6

const findSecondMax = (arr) => {
   return [... new Set(arr.sort())][arr.length -2]
}

console.log(findSecondMax(test))