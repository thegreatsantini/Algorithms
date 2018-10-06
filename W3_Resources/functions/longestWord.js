/*
longest word\
*/

const longestWord = (str) => {
    let currentLongest = '';
    let currentLength = 0;

    str.split(' ').forEach(element => {
        if ( element.length > currentLength ) {
            currentLength = element.length;
            currentLongest = element;
        }
    });
    return currentLongest;
}

console.log(longestWord('Web Development Tutorial fox' ))