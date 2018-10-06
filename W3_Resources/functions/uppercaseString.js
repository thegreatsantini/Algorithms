/* 
upper case each word in a string
*/

const upperCaseString = (str) => {
    const toArr = str.split(' ');

    return  toArr.map( word => {
        return word.substring(0,1).toUpperCase() + word.substring(1,word.length) 
    }).join(" ");
}

console.log(upperCaseString('the quick brown fox' ));