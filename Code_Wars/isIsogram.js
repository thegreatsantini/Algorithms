/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

const countLetters = (str) => {
    return str.toLowerCase().split('').reduce((acc, next) => {
        acc[next] ? acc[next] ++ : acc[next] = 1;
        return acc
    }, {})
} 

const isIsogram = (str) => {
    const count = countLetters(str)

    for ( let key in count ) {
        if ( count[key] != 1 ) {
            return false
        }
    }
    return true
}

console.log(isIsogram( "Dermatoglyphics" )) // == true
console.log(isIsogram( "aba" )) // == false
console.log(isIsogram( "moOse" )) // == false // -- ignore letter case