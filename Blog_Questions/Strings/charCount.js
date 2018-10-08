/*
How do you count the occurrence of a given character in a string? 
*/

const charCount = (str, char) => {
    const regex = new RegExp(char, "gi");
    const count = str.match(regex);
    
    return count.length
}

const test = 'the quick brown fox jumped over the laxy dog';
const char = 'e';

console.log(charCount(test, char));