


const atoi = (str) => {
    if ( parseInt(str.trim()) < -2147483649 ) {
        return -2147483648
    } else if ( parseInt(str.trim()) > 2147483648  ) {
        return 2147483648
    }
    const trimmed = str.trim()

    let finalStr = ''

    for ( let char of trimmed ) {
        const test = char.match(/[\d-]/g)
        if ( char.match(/[.]/g) ) {
            return finalStr
        }
        if ( !test && finalStr.length === 0 ) {
            return 0
        } else if ( test ) {
            finalStr+= char
        }
    }
    return parseInt(finalStr)
}


console.log(atoi("3.14")) // 42

// console.log(atoi("   -42")) // -42 Explanation: The first non-whitespace character is '-', which is the minus sign. Then take as many numerical digits as possible, which gets 42.

console.log(atoi("4193 with words")) // 4193 Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

// console.log(atoi("words and -987")) // 0