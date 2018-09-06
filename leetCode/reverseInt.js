var reverse = function (x) {
    if (x < 0) {
        const toStr = x.toString().split('').reverse().join('')
        const removeMinus = toStr.replace(/[-]/, '')
        return parseInt('-' + removeMinus)
    } else {
        let toStr = x.toString().split('').reverse().join('')
        return parseInt(toStr) > 9646324351 ? 0 : parseInt(toStr)
    }

};

console.log(reverse(1534236469))