/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

// NOTE: I didn't account for the fact that '...' length is 3 but it still passed all tests
const truncateString = (str, num) => {
  // Clear out that junk in your trunk
  return num >= str.length ? str : str.slice(0,num) + '...';
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // should return "A-tisket...".
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)) // should return "Peter Piper...".
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)) // should return "A-tisket a-tasket A green and yellow basket".
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)) // should return "A-tisket a-tasket A green and yellow basket".
console.log(truncateString("A-", 1)) // should return "A...".
console.log(truncateString("Absolutely Longer", 2)) // should return "Ab...".
