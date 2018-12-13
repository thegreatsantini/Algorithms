/*
Time: O(N)
Space: O(N)
*/

const checkSighting = (stringSightings, currentStr, currentIndex) => {
  let word = "";
  // not seen yet, add word to obj
  if (!stringSightings[currentStr]) {
    word = currentStr;
    stringSightings[currentStr] = `$${currentIndex}`;
  } // already in obj
  else {
    word = stringSightings[currentStr];
  }
  return word;
};

const minimize = str => {
  const firstSight = {};
  let finalString = "";
  let currentStr = "";
  let identifierIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      currentStr += str[i];
    } else {
      if (currentStr) {
        finalString += checkSighting(firstSight, currentStr, identifierIndex);
        currentStr = "";
        identifierIndex++;
      }
      finalString += currentStr + str[i];
    }
  }
  if (currentStr) {
    finalString += checkSighting(firstSight, currentStr, identifierIndex);
  }
  return finalString;
};

const test1 = minimize("you say yes, I say no you say stop and I say go go go");
console.log(test1, "\n");

const test2 = minimize("I will jump4joy when I finish... jump4joy");
console.log(test2, "\n");

const test3 = minimize("");
console.log("empty string:", test3);

const test4 = minimize(`
  /*
  * Function to chop a string in half.
  */
  public static string chop(string input) {
    if (input == null || input.isEmpty()) {
      return input;
    }
    if (input.length() % 2 == 1) {
      return "cannot chop an odd-length string in half";
    }
    return input.substring(input.length() / 2);
  }`);
console.log("\n\n", test4);
