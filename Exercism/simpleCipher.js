/*
Given the key "aaaaaaaaaaaaaaaaaa", encoding the string "iamapandabear" would return the original "iamapandabear".

Given the key "ddddddddddddddddd", encoding our string "iamapandabear" would return the obscured "ldpdsdqgdehdu"
*/

const encode = (str, key) => {
  let encodedStr = '';
  const alpha = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) - 97;
    const toCharFromCode = String.fromCharCode(0)
    console.log(toCharFromCode)
  }
  // return encodedStr
};

// console.log(encode('iamapandabear', 'aaaaaaaaaaaaaaaaaa'));
// console.log('H'.charCodeAt(0) - 97)
console.log('i'.charCodeAt(0)-97)
