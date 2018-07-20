/*
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
*/

const makeObject = (str) => {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if ( !obj[str[i]] ) {
      obj[str[i]] = 1
    } else {
      obj[str[i]]++
    }
  }
  return obj
};

const checkCircle = (moves) => {
  const moveCount = makeObject(moves);
  let circle = true;
  if ( moveCount.U !== moveCount.D ) {
    circle = false;
  }
  else if ( moveCount.R !== moveCount.L ) {
    circle = false;
  };
  return circle
};

console.log(checkCircle('UD'))
