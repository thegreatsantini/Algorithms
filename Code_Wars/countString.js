/*
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
    })
    returns 3
*/

const strCount = (obj) => {
    let count = 0;

    for (let key in obj) {
        if ( typeof obj[key] === 'string') {
            count += 1
        }
        else if ( obj[key] ) {
            
        }
    }
}

strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
    })