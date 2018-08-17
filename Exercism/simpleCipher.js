/*
Given the key "aaaaaaaaaaaaaaaaaa", encoding the string "iamapandabear" would return the original "iamapandabear".

Given the key "ddddddddddddddddd", encoding our string "iamapandabear" would return the obscured "ldpdsdqgdehdu"
*/

const encode = (str, key) => {
  let encodedStr = '';
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  let keyIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if ( keyIndex = key.length ) {
      keyIndex = 0;
    }
    const newCharIndex = (str[i].charCodeAt(0) - 97) + (key[keyIndex].charCodeAt(0) - 97);
    encodedStr += alpha[newCharIndex]
    keyIndex++
  }
  return encodedStr
};

const decode = (str, key) => {
  let decodedStr = '';
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  let keyIndex = 0;
  
  for (let i = 0; i < str.length; i++) {
    if ( keyIndex = key.length ) {
      keyIndex = 0;
    }
    const newCharIndex = (str[i].charCodeAt(0) - 97) - (key[keyIndex].charCodeAt(0) - 97);
    decodedStr += alpha[newCharIndex]
    keyIndex++
  }
  return decodedStr
};

console.log(decode('ldpdsdqgdehdu', 'a'));
// console.log('H'.charCodeAt(0) - 97)
// console.log('i'.charCodeAt(0)-97)
