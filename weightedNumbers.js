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

const makeObject = (arr, numbers) => {
    return arr.reduce((acc, next, index) => {
        if (!acc[next]) {
            acc[next] = [numbers[index]]
        } else {
            acc[next].push(numbers[index])
            acc[next].sort()
        }
        return acc
    }, {})
}

const orderWeight = (nums) => {
    const toArr = nums.trim().split(' ');
    const weights = toArr.map(val => val.split('').map(val => parseInt(val)).reduce((acc, next) => acc + next));
    const toObject = makeObject(weights, nums.split(' '))

    return Object.keys(toObject).reduce((acc, next) => {
        return acc + toObject[next].join(' ') + " "
    }, "").trim()
}
// orderWeight("103 123 4444 99 2000") //, "2000 103 123 4444 99")
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123") //, "11 11 2000 10003 22 123 1234000 44444444 9999")