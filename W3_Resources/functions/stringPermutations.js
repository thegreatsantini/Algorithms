/*
write all permutations of a string
*/

const writePermutations = (str) => {

    const midPoint = Math.floor(str.length - 1);

    for (let i = 0; i <= str.length; i++) {
        console.log(str.substring(0, i));
    }
    for (let j = str.length-1; j >= 0; j--) {
        console.log(str.substring( 0, j));
        // console.log(str);
    }
}

writePermutations('racecar');