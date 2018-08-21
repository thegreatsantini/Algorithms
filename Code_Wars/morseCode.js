morseMap = {
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

const decodeMorse = (morseCode) => {
    const toArr = morseCode.split(' ');
    let decoded = '';

    const message = toArr.map(val => {
        // console.log(morseMap[val])
        if (morseMap[val] === undefined) {
            return ' ';
        } else {
            return morseMap[val]
        }
    })
    return message.join('')
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))