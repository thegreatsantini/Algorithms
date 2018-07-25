const compareTrips = (alice, bob) => {
  let finalScore = [0,0];

  alice.forEach( (val, i) => {
    if ( val != bob[i] && val > bob[i]) {
      finalScore[0]++;
    }
    else if ( val != bob[i] && val < bob[i] ) {
      finalScore[1]++;
    }
  })
  return finalScore;
};

const num1 = [5, 6, 7];
const num2 = [3, 6, 10];

console.log(compareTrips(num1, num2))
