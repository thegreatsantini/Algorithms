const test = [10, -1, 20, 4, 5, -9, -6]; // [ -1, -9, -6, 10, 20, 4, 5 ]


const reArrange = (arr) => {
    return arr.reduce( (acc, next) => {
        if ( next >= 0 ) {
            acc.push(next)
        } else {
            acc.unshift(next)
        }
        return acc
    }, [])
}

console.log(reArrange(test))