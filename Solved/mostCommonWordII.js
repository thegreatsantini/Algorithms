/*
Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.
*/

const makeObject = (arr, banned) => {
  let wordCount = {};

  for ( let i = 0; i < arr.length; i++ ) {
    if ( banned.indexOf(arr[i]) != -1 ) {
      continue;
    }
    else if ( !wordCount[arr[i]] ) {
      wordCount[arr[i]] = 1;
    }
    else {
      wordCount[arr[i]] ++;
    }
  }
  return wordCount;
};

const mostCommonWord = (str, banned) => {
  const strArr = str.toLowerCase().split(/\W+/);
  const wordCount = makeObject(strArr, banned);
  let mostCommon = '';
  let count = 0;

  for (let word in wordCount) {
    if ( wordCount[word] > count ) {
      console.log(word)
      count = wordCount[word];
      mostCommon = word;
    }
  };
  return mostCommon;
};

const s = 'Bob hit a ball, the hit BALL flew far after it was hit.'
let banned = ["hit"]

console.log(mostCommonWord(s, banned));

// console.log(s.split(/\W+/))
