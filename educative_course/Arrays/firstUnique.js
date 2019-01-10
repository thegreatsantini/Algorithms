const test1 = [9, 2, 3, 2, 6, 6]; // 9
const test2 = [4, 5, 1, 2, 0, 4]; // 5

const firstUnique = arr => {
  return arr.filter(
    (val, i) => arr.indexOf(val) === i && arr.lastIndexOf(val) === i
  )[0];
};

console.log(firstUnique(test1))
console.log(firstUnique(test2))

const findWithObj = arr => {
  const count = arr.reduce((acc, next, i) => {
    acc.hasOwnProperty(next) ? delete acc[next]  : acc[next] = i ;
    return acc;
  }, {});
  let currentItem = null;
  let currentIndex = null;
  for (let key in count) {
    if (!currentItem) {
      currentItem = key;
      currentIndex = count[key];
    } else if (currentIndex < key) {
      currentItem = key;
      currentIndex = count[key];
    }
  }
  return currentItem;
};

console.log(findWithObj(test1));
console.log(findWithObj(test2))
