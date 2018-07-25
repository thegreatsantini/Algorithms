/*
Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.


Input = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation:
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"),
and that "hit" isn't the answer even though it occurs more because it is banned.
*/

const mostCommon = (obj) => {
  let mostCommon = '';
  let highestNumber = 0;

  for ( let word in obj ) {
    if ( obj[word] > highestNumber ) {
      mostCommon = word;
      highestNumber = obj[word];
    }
  }
  return mostCommon;
};

const mostCommonWord = (str, banned) => {
  const lowercaseBanned = banned.map(val => val.toLowerCase())
  const allLowers = str.toLowerCase();
  const regexp = /[\w']/gi;
  let newString = '';
  let wordCount = {};

  for (let i = 0; i < str.length; i++) {
    if (allLowers[i].match(regexp)) {
      newString += allLowers[i];
    }
     // If i is white space than that is the end of the one
    else if (str.charCodeAt(i) === 32) {
      if (wordCount[newString]) {
        wordCount[newString]++
      }
      else if (lowercaseBanned.includes(newString)) {
        newString = '';
        continue;
      }
      else {
        wordCount[newString] = 1;
      }
      newString = '';
    }
  };
  if ( newString.split(' ').length === 1 ) {
    return newString
  }
  return mostCommon(wordCount);
};

const str = 'bob';
console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
