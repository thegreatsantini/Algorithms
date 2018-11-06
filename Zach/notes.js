// let a = [];
// let b = a;
// a.push(1)
// console.log(b) // [1]  passed by referance in memoray

// let lucas = 'Lucas';
// let zach = 'Zach';
// zach = 'Graeme'
// console.log(zach) // 'Graeme' passed by value

var y = 1;
if (function f() { }) {
    y += typeof f;
}
console.log(y);
