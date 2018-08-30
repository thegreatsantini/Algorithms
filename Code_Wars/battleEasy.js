/*
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Only capital chatacters can and will participate a battle.
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
*/

///////////// WHY TF DIDNT I USE .MAP and REDUCE!!!!!!!!!!!! ask for details. intersting three way ternerary


const battle = (x, y) => {
    const map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let xSum = 0;
    let ySum = 0;

    for (let i of x) {
        xSum += map.indexOf(i) + 1
    }

    for (let i of y) {
        ySum += map.indexOf(i) + 1
    }

    if (xSum > ySum) {
        return x;
    } else if (ySum > xSum) {
        return y;
    } else {
        return 'Tie!'
    }
}



// console.log(battle("ONE", "TWO")); // => "TWO"`
console.log(battle("AAA", "Z")); // => "Tie!"