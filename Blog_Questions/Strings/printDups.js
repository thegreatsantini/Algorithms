/*
How do you print duplicate characters from a string?
*/

const printDups = (str) => {
    const strToCheck = str.replace(/\s/g, '').toLowerCase().trim();
    const count = {};
    let copies = '';

    for ( let char of strToCheck ) {
        if (!count[char]) {
            count[char] = 1;
        }
        else {
            copies += char;
            count[char]++;
        }
    }
    return copies;
}

const test = "The quick brown fox jumped over the lazy dog";

console.log(printDups(test));