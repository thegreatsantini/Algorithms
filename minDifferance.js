const first = [1, 3, -4, 9, 909, 3, 401, -90, 980];
const second = [76, -13, 7, 40, -98, -3, 3];

const minDIfferance = (arr1, arr2) => {
    const sortFirst = arr1.sort((a, b) => a > b);
    const sortSecond = arr2.sort((a, b) => a > b);
    let firstIndex = 0;
    let secondIndex = 0;
    let currentSmallest;

    while (firstIndex < sortFirst.length && secondIndex < sortSecond.length) {
        const current = Math.abs(sortFirst[firstIndex] - sortSecond[secondIndex])
        
        if (!currentSmallest || currentSmallest > current ) {
            currentSmallest = current;
        }
        if ( sortFirst[firstIndex] < sortSecond[secondIndex]) {
            firstIndex++
        } else {
            secondIndex++
        }
    }
    console.log(currentSmallest)
    return currentSmallest
}

minDIfferance(first, second)

