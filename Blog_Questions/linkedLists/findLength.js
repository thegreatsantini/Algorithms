var list = arrayToList(['good', 'job', 'you', 'did', 'it']);

function arrayToList(arr) {
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], next: list };
    }
    return list;
}

const getLengthIter = (list) => {
    let node = list;
    let size = 0;

    while ( node ) {
        size++;
        node = node.next;
    }
    return size;
}

const getLengthRecur = (node, size=0) => {
    if ( !node ) {
        
        return size;
    }
    size++
    return getLengthRecur(node.next, size)
}

console.log(getLengthRecur(list))
console.log(getLengthIter(list))