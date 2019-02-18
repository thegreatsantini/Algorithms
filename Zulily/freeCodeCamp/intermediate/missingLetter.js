const fearNotLetter = str => {
  for (let i = 0; i < str.length; i++) {
    const current = str.charCodeAt(i);
    const next = str.charCodeAt(i + 1);
    if (current + 1 !== next && i !== str.length - 1) {
      return String.fromCharCode(current + 1);
    }
  }
  return undefined;
};

console.log(fearNotLetter("abce")); // should return "d".
// console.log(fearNotLetter("abcdefghjklmno"))// should return "i".
// console.log(fearNotLetter("stvwx"))// should return "u".
// console.log(fearNotLetter("bcdf"))// should return "e".
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // should return undefined.
