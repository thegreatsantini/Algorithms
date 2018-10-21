

// const getMiddle = (str)=> {
//     if ( str.length % 2 === 0 ) {
//         return str.substring( (str.length/2) -1, (str.length/2) +1 )
//     }
//     return str[Math.floor(str.length/2)]
// }


// console.log(getMiddle("test")) //, "es");
// console.log(getMiddle("testing")) //, "t");
// console.log(getMiddle("middle")) //, "dd");
// console.log(getMiddle("A")) //, "A");

// const myArr = [1, 1, 4, 5, 5, 5, 6, 8];
// const myArr2 = [1, 1, 4, 5, 5, 5, 6, 8];

// const test = [...(new Set(myArr))]
// console.log(test)
// const onlyUniques = myArr.filter((val, i) => {
//     if (myArr.indexOf(val) === i && myArr.lastIndexOf(val) === i) {
//         return val
//     }
// })

// const onlyDulicates = myArr.filter((val, i) => {
//     if (myArr.indexOf(val) === i) {
//         return val
//     }
// })

let string = "abc";
string[0] = 'z';
console.log(string)

// console.log(onlyDulicates)