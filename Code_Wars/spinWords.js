/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/


const spinWords = (str) => {
    let toArr = str.split(' ');

    return toArr.map(val => {
        if (val.length >= 5) {
            return val.split('').reverse().join('')
        } else {
            return val
        }
    }).join(' ')
}


console.log(spinWords("Hey fellow warriors")) // => returns "Hey wollef sroirraw" 
// console.log(spinWords( "This is a test")) // => returns "This is a test" 
// console.log(spinWords( "This is another test" )) //=> returns "This is rehtona test"