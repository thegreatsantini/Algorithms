/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

*/

const anagrams =  (str, arr) => {
    let allAnas = [];
    const sortedStr = str.split('').sort().join('');

    arr.map(val => val.split('').sort().join('')).forEach( (val,i) => {
        if ( sortedStr === val ) {
            allAnas.push(arr[i])
        }
    });
    return allAnas
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //=> ['aabb', 'bbaa']

//console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) //=> ['carer', 'racer']

// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) //=> []