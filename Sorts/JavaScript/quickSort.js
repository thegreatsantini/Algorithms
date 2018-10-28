const toSort = [100, -1, 2, 55, 22, 3, 56, 100, 0.4444444, 17, 4, 5, 19 , 8 , 0];

const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    
    const pivot = arr.shift();
    const left = arr.filter( val =>  val < pivot);
    const right = arr.filter( val =>  val > pivot);

    return quickSort(left).concat(pivot).concat(quickSort(right));
}

console.log(quickSort(toSort))