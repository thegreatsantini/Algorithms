/*
How do you check if a string contains only digits?
*/

const checkStr = (str) => {
    const digitCount = str.match(/[0-9]/g);

    return digitCount.length === str.replace(/\s/g, '').length
}

const test = 'ri12345  ;;69 p5wp3';
const test2 = "       433 24       "

console.log(checkStr(test))