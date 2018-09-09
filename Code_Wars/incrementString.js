/*
Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:


Attention: If the number has leading zeros the amount of digits should be considered.
*/

const incrementString = (str) => {
    if ( !str.match(/\d+/g) ) {
        return str + '1'
    }
    // const num = str.match(/[1-9]+/g)
    const num = str.match(/\d+/g)
    // return parseInt(num[0], 10)
    return  num[0]
}

console.log(parseInt('00000000000000001', 10))
console.log(incrementString('foo')) // -> foo1
console.log(incrementString('foobar23')) // -> foobar24
console.log(incrementString('foo0042')) // -> foo0043
console.log(incrementString('foo9')) // -> foo10
console.log(incrementString('foo099' )) //-> foo100