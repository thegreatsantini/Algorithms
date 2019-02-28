// ARRAY 1
const texasss = [
  {
    name: "Mike",
    age: 23,
    gender: "m",
    us: false
  },
  {
    name: "Liz",
    age: 20,
    gender: "f",
    us: true
  },
  {
    name: "Chris",
    age: 102,
    gender: "m",
    us: true
  },
  {
    name: "Chuloo",
    age: 27,
    gender: "m",
    us: false
  },
  {
    name: "Annie",
    age: 30,
    gender: "f",
    us: true
  }
];

// Part 1 - Find all users older than 24
// Part 2 - Find the total age of all users
// Part 3 - List all female coders

// ARRAY 2
const newieyork = [
  {
    name: "Michelle",
    age: 19,
    coder: true,
    gender: "f",
    us: true
  },
  {
    name: "Sam",
    age: 25,
    coder: false,
    gender: "m",
    us: false
  },
  {
    name: "Ivy",
    age: 26,
    coder: true,
    gender: "f",
    us: false
  },
  {
    name: "Nick",
    age: 32,
    coder: true,
    gender: "m",
    us: true
  },
  {
    name: "Jim Beglin",
    age: 65,
    coder: false,
    gender: "m",
    us: true
  }
];

// Part 1 - List all users in US in ascending order
// Part 2 - Sort all users by age
// Part 3 -  List all female coders

// ARRAY 3
const vegzas = [
  {
    name: "Charly",
    age: 32,
    coder: true,
    gender: "m"
  },
  {
    name: "Law",
    age: 21,
    coder: true,
    gender: "m"
  },
  {
    name: "Rosey",
    age: 42,
    coder: false,
    gender: "f"
  },
  {
    name: "Steph",
    age: 18,
    coder: true,
    gender: "f"
  },
  {
    name: "Jon",
    age: 47,
    coder: false,
    gender: "m"
  }
];

// Part 1 - Find the total age of male coders under 25
// Part 2 - List all male coders over 30
// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.

const part1_A = arr => {
  return arr.filter(val => val.age > 24);
};

const part1_B = arr => {
  return arr.sort((a, b) => a.age - b.age);
};
const part1_C = arr => {
  return arr.filter(val => val.gender === "f");
};

const part2_A = arr => {
  return arr.filter(person => person.us).sort();
};

const part2_B = arr => {
  return arr.sort((a, b) => a.age - b.age);
};

const part2_C = arr => {
  return arr.filter(person => person.gender === "f");
};

const part3_A = arr => {
  return arr.reduce((acc, next) => {
    if (next.age < 25) {
      acc += next.age;
    }
    return acc;
  }, 0);
};

const part3_B = arr => {
  return arr.reduce((acc, next) => {
    if (next.age > 30 && next.gender === "m") {
      acc += next.age;
    }
    return acc;
  }, 0);
};

const part3_C = (arr1, arr2, arr3) => {
  return arr1
    .concat(arr2)
    .concat(arr3)
    .reduce((acc, next) => {
      acc += next.age;
      return acc;
    }, 0);
};
console.log(part3_C(texasss, newieyork, vegzas));
