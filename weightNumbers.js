const locationMap = (arr) => {
    let locations = {}

    const weights = arr.map(val => {
        return Array.from(val).reduce((acc, next) => acc + parseInt(next), 0);
    })

    for (let i = 0; i < arr.length; i++) {

        if (!locations[weights[i]]) {
            locations[weights[i]] = Array.of(parseInt(arr[i]))
        } else {
            locations[weights[i]] = Array.of(...locations[weights[i]], parseInt(arr[i])).sort((a, b) => a > b)
        }
    }
    return locations
}

const orderWeight = (str) => {
    let finalArr = [];
    const toArr = str.slice().split(' ')
    const getLocation = locationMap(toArr);


    const weights = Array.from(new Set(str.split(' ').map(val => {
        return Array.from(val).reduce((acc, next) => acc + parseInt(next), 0);
    }).sort((a, b) => a > b)))
    for (let item of weights) {
        finalArr.push(...getLocation[item])
    }
    return finalArr.join(' ')
}

//    4    5   16  18  2
// console.log(orderWeight("103 123 4444 99 2000")) //, "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) //, "11 11 2000 10003 22 123 1234000 44444444 9999"