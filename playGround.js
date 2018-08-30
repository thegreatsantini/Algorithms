var uniqEs6 = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
        return arr.indexOf(elem) === pos;
    });
}

var test = ['james', 'mike', 'james', 'alex'];
var testBis = ['alex', 'yuri', 'jabari'];

console.log(uniqEs6(test))