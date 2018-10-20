/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

const duplicateCount = (str) => {
    const allLowers = str.toLowerCase()
    const doubles = allLowers.split('').filter((val, i) => {
        return allLowers.indexOf(val) !== i
    })
    return new Set(doubles).size
}


console.log(duplicateCount("abcde"))// -> 0 # no characters repeats more than once
console.log(duplicateCount("aabbcde"))// -> 2 # 'a' and 'b'
console.log(duplicateCount("aabBcde"))// -> 2 # 'a' occurs twice and 'b' twice (bandB)
console.log(duplicateCount("indivisibility"))// -> 1 # 'i' occurs six times
console.log(duplicateCount("Indivisibilities"))// -> 2 # 'i' occurs seven times and 's' occurs twice
console.log(duplicateCount("aA11"))// -> 2 # 'a' and '1'
console.log(duplicateCount("ABBA"))// -> 2 # 'A' and 'B' each occur twice