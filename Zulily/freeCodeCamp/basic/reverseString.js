const reverseString = str => {
  const mid = Math.floor(str.length - 1) / 2;
  let toArr = str.split("");
  const thisLength = str.length - 1;
  for (let i = 0; i <= mid; i++) {
    [toArr[i], toArr[thisLength - i]] = [toArr[thisLength - i], toArr[i]];
  }
  return toArr.join("");
};

reverseString("hello"); // should return a string.
reverseString("hello"); // should become "olleh".
reverseString("Howdy"); // should become "ydwoH".
reverseString("Greetings from Earth"); // should return "htraE morf sgniteerG".
