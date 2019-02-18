const pairElement = str => {
  let pairs = [];
  for (let char of str) {
    switch (char) {
      case "A":
        pairs.push(["A", "T"]);
        break;
      case "T":
        pairs.push(["T", "A"]);
        break;
      case "G":
        pairs.push(["G", "C"]);
        break;
      case "C":
        pairs.push(["C", "G"]);
        break;
    }
  }
  return pairs;
};

pairElement("ATCGA"); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG"); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
