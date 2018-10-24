/* 

We are working on a security system for a badged-access room in our company's building.

We want to find employees who badged into our secured room unusually often. We have an unordered list of names and access times over a single day. Access times are given as numbers up to four-digits in length using 24-hour time, such as "800" or "2250".

Write a function that finds anyone who badged into the room 3 or more times in a 1-hour period, and returns each time that they badged in during that period. (If there are multiple 1-hour periods where this was true, just return the first one.)

const badge_times = [
    ["Paul", 1355],
    ["Jennifer", 1910],
    ["John", 830],
    ["Paul", 1315],
    ["John", 835],
    ["Paul", 1405],
    ["Paul", 1630],
    ["John", 855],
    ["John", 930],
    ["John", 915],
    ["John", 730],
    ["Jennifer", 1335],
    ["Jennifer", 730],
    ["John", 1630],
]

Expected output:
  John:  830  835  855  915  930
  Paul: 1315 1355 1405

*/

const findLongestBlocks = (blocks) => {
    // console.log(blocks)
    const visits = blocks.filter((block, i) => {
        if (block.length >= 3) {
            return block
        }
    })[0]
    return visits ? visits : false
}

const createVisitsObj = (visits) => {
    return visits.reduce((acc, next) => {
        if (!acc[next[0]]) {
            acc[next[0]] = [next[1]];
        }
        else {
            acc[next[0]] = acc[next[0]].concat(next[1]).sort((a, b) => a > b)
        }
        return acc
    }, {});
}


const findThreeVisitors = (arr) => {
    const visits = createVisitsObj(arr);
    const suspiciosActivity = {};
    const suspiciosPeople = {};

    for (let person in visits) {
        suspiciosActivity[person] = []
        for (let i = 0; i < visits[person].length; i++) {
            let currentBlock = [];
            let oneHourBlock = parseInt(visits[person][i]) + 100;
            let index = i;
            while (visits[person][index] <= oneHourBlock) {
                currentBlock.push(visits[person][index])
                index++
            }
            suspiciosActivity[person].push(currentBlock)
        }
        const checkActivity = findLongestBlocks(suspiciosActivity[person])
        if (checkActivity) {
            suspiciosPeople[person] = checkActivity
        }
    }
    return suspiciosPeople
}

const badge_times = [
    ["Paul", 1355],
    ["Jennifer", 1910],
    ["John", 830],
    ["Paul", 1315],
    ["John", 835],
    ["Paul", 1405],
    ["Paul", 1630],
    ["John", 855],
    ["John", 930],
    ["John", 915],
    ["John", 730],
    ["Jennifer", 1335],
    ["Jennifer", 730],
    ["John", 1630],
]

console.log(findThreeVisitors(badge_times))