MORSE_CODE = {
    '..-.': 'F',
    '-..-': 'X',
    '.--.': 'P',
    '-': 'T',
    '..---': '2',
    '....-': '4',
    '-----': '0',
    '--...': '7',
    '...-': 'V',
    '-.-.': 'C',
    '.': 'E',
    '.---': 'J',
    '---': 'O',
    '-.-': 'K',
    '----.': '9',
    '..': 'I',
    '.-..': 'L',
    '.....': '5',
    '...--': '3',
    '-.--': 'Y',
    '-....': '6',
    '.--': 'W',
    '....': 'H',
    '-.': 'N',
    '.-.': 'R',
    '-...': 'B',
    '---..': '8',
    '--..': 'Z',
    '-..': 'D',
    '--.-': 'Q',
    '--.': 'G',
    '--': 'M',
    '..-': 'U',
    '.-': 'A',
    '...': 'S',
    '.----': '1'
}
// NOTE  used .trim to account for extra spaces at begining and end. used spaces var to account for extra spaces between words
const decodeMorse = (morseCode) => {
    let spaces = 0

    return morseCode.trim().split(' ').map(val => {
        if (MORSE_CODE[val] === undefined && spaces === 0) {
            console.log('too many')
            spaces++
            return ' ';
        } else {
            spaces = 0
            return MORSE_CODE[val]
        }
    }).join('')

}


console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))