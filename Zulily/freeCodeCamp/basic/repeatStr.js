const repeatStringNumTimes = (str, n) => {
  let final = "";
  for (let i = 1; i <= n; i++) {
    final += str;
  }
  return final;
};

console.log(repeatStringNumTimes("*", 3)); // should return "***".
console.log(repeatStringNumTimes("abc", 3)); // should return "abcabcabc".
console.log(repeatStringNumTimes("abc", 4)); // should return "abcabcabcabc".
console.log(repeatStringNumTimes("abc", 1)); // should return "abc".
console.log(repeatStringNumTimes("*", 8)); // should return "********".
console.log(repeatStringNumTimes("abc", -2)); // should return ""
