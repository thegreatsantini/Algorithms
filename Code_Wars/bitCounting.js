function binaryConvert(x) {
    var num = x;

    if (num != Math.floor(num)) {
        console.log("Please enter a number");

    } else if (num < 0) {
        console.log("Please enter a positive number");

    } else {
        var binary = parseInt(num, 10);
        const toBinary = binary.toString(2);
        return parseInt(toBinary, 2)

    }
}
console.log(binaryConvert(1234))