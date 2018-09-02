/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

If a value is present in b, all of its occurrences must be removed from the other:

*/

const array_diff = (a, b) => {
    return a.filter(val => {
        return !b.includes(val)
    })
}

console.log(array_diff([1,2,2,2,3],[2])) // == [1,3]
console.log(array_diff([1,2],[1])) // == [2]
