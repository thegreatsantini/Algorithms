/*
For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
Don't modify the input
*/
const getIndexs = (str) => {
    let sum = 0;
    let indexArr = [];
    const toArr = str.split(' ');
    let index = 0;
    let locationMap = {};
    for ( let char = 0; char < str.length; char++ ) {
        if (str[char] === ' ' || char === str.length - 1) {
            indexArr.push(sum);
            locationMap[sum] = toArr[index];
            index++
            sum = 0;
        } else {
            sum += parseInt(str[char])
        }
    }
    console.log(indexArr)
    indexArr.push([locationMap])
    return indexArr
}

const orderWeight =  (strng) => {
    const data =  getIndexs(strng.trim());
    const locations = data[data.length-1][0];
    const nums = data.slice(0,data.length-1).sort((a, b)=> a>b);
    let newOrder = [];
    console.log(nums)
    for (let item of nums) {
        newOrder.push(locations[item])
    }
    
    return newOrder
}


                    //    4    5   16  18  2
//console.log(orderWeight("103 123 4444 99 2000")) //, "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) //, "11 11 2000 10003 22 123 1234000 44444444 9999")