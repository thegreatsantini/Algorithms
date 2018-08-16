/*
Determine if a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has at least two sides the same length. (It is sometimes specified as having exactly two sides the same length, but for the purposes of this exercise we'll say at least two.)

A scalene triangle has all sides of different lengths.

Note
For a shape to be a triangle at all, all sides have to be of length > 0, and the sum of the lengths of any two sides must be greater than or equal to the length of the third side. See Triangle Inequality.
*/
const checkIfTriangle = (...sides) => {
  let allTrue = false;

  const allPosatives = sides.every(val => {
    return val > 0;
  });
  if (sides[0] + sides[1] >= sides[2] && sides[0] + sides[2] >= sides[1] && sides[1] + sides[2] >= sides[0]) {
    allTrue = true;
  }

  if (allTrue && allPosatives) {
    return true;
  }
  return false;
};

const checkEquilateral = (sides) => {
  const oneSide = sides[0]
  let index = 0

  while (index < sides.length) {
    if (oneSide !== sides[index]) {
      return false;
    }
    index++
  };
  return true;
};

const checkIsosceles = (sides) => {
  if ( new Set(sides).size === 1 ) {
    return false;
  }
  return sides.length !== (new Set(sides)).size;
};

const checkTriangleType = (...sides) => {
  const isEquilateral = checkEquilateral(sides);
  const isIsosceles = checkIsosceles(sides);

if ( checkIfTriangle(sides) ) {
  return 'Not Triangle'
}
  else if ( checkEquilateral(sides) ) {
    return 'equilateral';
  }
  else if (checkIsosceles(sides)) {
    return 'isosceles';
  }

  return 'scalene';
};

console.log(checkTriangleType(60, 30, 90))
console.log(checkTriangleType(45, 45, 45))
console.log(checkTriangleType(3, 4, 5))
