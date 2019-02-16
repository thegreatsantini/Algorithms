const titleCase = str => {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
};

console.log(titleCase("I'm a little tea pot")); // should return I'm A Little Tea Pot.
console.log(titleCase("sHoRt AnD sToUt")); // should return Short And Stout.
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // should return Here Is My Handle Here Is My Spout.
