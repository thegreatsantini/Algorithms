/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
*/


const generateHashtag = (str) => {
    const toArr = str.split(' ').filter(val => val != '');
    if ( str.replace(/\s/g, '').length >= 140 || str.replace(/\s/g, '').length === 0 ) return false;
    
    return '#' + toArr.map(val => {
        return val[0].toUpperCase() + val.substring(1, val.length)
    }).join('')
}


console.log(generateHashtag("code" + " ".repeat(140) + "wars")) // "#CodeWars"
// console.log(generateHashtag(" Hello there thanks for trying my Kata"))//  =>  "#HelloThereThanksForTryingMyKata"
// console.log(generateHashtag("    Hello     World   "))//                  =>  "#HelloWorld"
// console.log(generateHashtag(""))//                                        =>  false