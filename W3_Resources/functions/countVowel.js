/*
count the vowels
*/

const countVowels = (str) => {
    const vowelsCount = str.match(/[aeiou]/gi);
    return vowelsCount.length
}

console.log(countVowels('The quIck brown fox' ))