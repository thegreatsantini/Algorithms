/*
implement a post fix calculator
*/

class MyStack {
    constructor() {
        this.data = []
    }

    Add(item) {
        this.data.push(item)
    }
    Remove() {
        return this.data.pop()
    }
    peek() {
        return this.data
    }
}



const postFix = (str) => {
    const toArr = str.split(' ')
    const order = new MyStack();

    toArr.forEach(item => {

        if (parseInt(item)) {
            order.Add(item);
            console.log("number",order)
        }
        else {

            const right = parseInt(order.Remove());
            const left = parseInt(order.Remove());

            console.log(left, item, right)
            switch (item) {
                case "*":
                    console.log('Mult', left * right)
                    order.Add(left * right);
                    break;
                case "+":
                    console.log('Add', left + right)
                    order.Add(left + right);
                    break;
                case "-":
                    console.log('sub', left - right)
                    order.Add(left - right);
                    break;
                case "/":
                    console.log('divi', left / right)
                    order.Add(left / right);
                    break;
            }
            console.log(order)
        }
    })
    return order
}

// const numbers = '15 7 1 1 + − / 3 * 2 1 1 + + −'
const numbers = '5 6 7 * + 1 -'
// 15 7 1 1 + − ÷ 3 × 2 1 1 + + −

console.log('pp', postFix(numbers));

