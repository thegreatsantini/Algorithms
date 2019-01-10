const arr = [1, 21, 3, 14, 5, 60, 7, 6];
const n = 81;

const findSum = (arr, target) => {
   return arr.filter(val => {
        const compliment = target - val;
        if ( arr.includes(compliment) ) return [val, compliment]
    });
}

console.log(findSum(arr,n))