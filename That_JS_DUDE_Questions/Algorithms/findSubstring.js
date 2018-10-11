/*
find substring 
*/

const subStringFinder = (str, target) => {
    const find = str.match(target)
    console.log(find)
}


console.log(subStringFinder('abbcdabbbbbck', 'ab')) //0
console.log(subStringFinder('abbcdabbbbbck', 'bck')) //9

//doesn't work for this one.
console.log(subStringFinder('abbcdabbbbbck', 'bbbck')) // -1