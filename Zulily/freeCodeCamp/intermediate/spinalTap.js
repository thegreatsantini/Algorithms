const spinalCase = str => {
  let final = [];
  if (str.search(/\s/) === -1 && str.search("_") === -1) {
    let currentWord = "";
    for (let char of str) {
      if (/[A-Z]/.test(char)) {
        final.push(currentWord.toLowerCase());
        currentWord = char;
      } else {
        currentWord += char;
      }
    }
    final.push(currentWord.toLowerCase());
    return final.join("-");
  }
  if (str.search("_") !== -1) {
    return str
      .split("_")
      .map(word => word.toLowerCase())
      .join("-");
  } else {
    const cleaned = str
      .split(/[^a-zA-Z]/)
      .map(word => word.charAt(0).toUpperCase() + word.substring(1))
      .join("")
      .trim();
    let currentWord = "";
    for (let char of cleaned) {
      if (/[A-Z]/.test(char)) {
        console.log(char, currentWord);
        final.push(currentWord.toLowerCase());
        currentWord = char;
      } else {
        currentWord += char;
      }
    }
    final.push(currentWord.toLowerCase());

    return final.join("-").slice(1);
  }
};

// console.log(spinalCase("This Is Spinal Tap")); // should return "this-is-spinal-tap".
// console.log(spinalCase("thisIsSpinalTap")); // should return "this-is-spinal-tap".
// console.log(spinalCase("The_Andy_Griffith_Show")); // should return "the-andy-griffith-show".
// console.log(spinalCase("Teletubbies say Eh-oh")); // should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things")); // should return "all-the-small-things".
