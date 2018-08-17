const reverseString = (str) => {
  let toArr = str.split('');
  let temp = '';

  for (let char = 0; char < Math.floor(toArr.length/2); char++ ) {
    temp = toArr[char];
    toArr[char] = toArr[toArr.length - 1 - char]
    toArr[toArr.length - 1 - char] = temp
  }
  return toArr.join('')
};

console.log(reverseString("hello"))// should return a string.
console.log(reverseString("hello")) //should become "olleh".
console.log(reverseString("Howdy")) //should become "ydwoH".
console.log(reverseString("Greetings from Earth"))// should return "htraE morf sgniteerG".
