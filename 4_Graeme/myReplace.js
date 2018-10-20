/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/
// 65-95

const  myReplace = (str, before, after) => {
    const wordToReplace = new RegExp( before , 'g')
    // if target is capital 
     if ( str.match(wordToReplace)[0][0].charCodeAt(0) <= 95) {
      return str.replace(wordToReplace, `${after.substring(0,1).toUpperCase()}${after.substring(1, after.length)}` )
     }
     else {
      return str.replace(wordToReplace, after)
     }
  }

console.log(myReplace("Let us go to the store", "store", "mall")) // "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")) // "He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")) // "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john")) // "His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")) // "Let us get back to more Algorithms".