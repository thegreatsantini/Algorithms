const arr = ['a', 'b', 'c', 'd', 'b', 'a'];

const newObj =  arr.reduce((acc, next) => {
   !acc[next] ? acc[next] = 1 : acc[next] += 1;
   return acc;
}, {});

console.log(newObj)

const newObj2 = arr.reduce((acc, next) => {
  acc[next] = (next in acc) ? ++acc[next] : 1;
  return acc;
}, {});

console.log(newObj2);
