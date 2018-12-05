const test1 = 'Pig latin is cool'  // 'igPay atinlay siay oolcay')
const test2 ='This is my string' // 'hisTay siay ymay tringsay')
const test3 = 'testing puncuation!' //'esting uncuationpay!')


const pigLatin = (str) => {
    return str.split(' ').map( val => {
        return val.substring(1)+ val.charAt(0) + 'ay'
    }).join(" ")
}

const test = pigLatin(test1)
console.log(test)