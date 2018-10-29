const justifyText = (str, buffer) => {
    const numSpaces = str.match(/\s/g).length;
    let finalStr = []
    let bufferAmount = Math.floor(buffer / numSpaces);
    let index = 0;

    // create arr with spaces
    let currentStr = '';
    for (let index in str) {
        if (str[index] === ' ') {
            finalStr.push(currentStr);
            currentStr = '';
            finalStr.push(" ");
        } else if (index == str.length -1) {
            currentStr += str[index]
            finalStr.push(currentStr)
        }
        else {
            currentStr += str[index]
        }
    }
    
    while (bufferAmount) {
        // if its a space 
        if ( !finalStr[index].match(/\w/) ) {
            finalStr[index] = finalStr[index] + " "
        }
        if ( index == finalStr.length - 1 ) {
            index= 0;
        }else {
            index++
        }
        bufferAmount--;
    }
    console.log(finalStr.join(''))
}



let first = justifyText('The quick brown fox jumps over the lazy dog.', 52)
// console.log(first.length);
// console.log(first);

let second = justifyText('So much room!', 52)
// console.log(second.length)
// console.log(second);