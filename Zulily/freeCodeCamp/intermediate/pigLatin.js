const translatePigLatin = str => {
  let index = 0;
  if (!/[aeiou]/.test(str)) {
    return str + "ay";
  }
  for (let char of str) {
    if (/[aeiou]/.test(char)) {
      return index === 0
        ? str + "way"
        : str.substring(index) + str.substring(0, index) + "ay";
    }
    index++;
  }
};

// console.log(translatePigLatin("california")); // should return "aliforniacay".
// console.log(translatePigLatin("paragraphs")); // should return "aragraphspay".
console.log(translatePigLatin("glove")); // should return "oveglay".
// console.log(translatePigLatin("algorithm")); // should return "algorithmway".
console.log(translatePigLatin("lllght")); // should return "eightway".
