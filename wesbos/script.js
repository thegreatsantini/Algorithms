const display = document.getElementById('root')
const tags = ['html', 'css', 'js', 'typescript', 'react'];

const posts = [
    {
        id: 1,
        title: 'CSS is Great',
        date: 1522247821000,
        tag: 'css',
    },
    {
        id: 2,
        title: 'top 10 types',
        date: 1511798878000,
        tag: 'typescript',
    },
    {
        id: 3,
        title: 'pretty cool typescript',
        date: 1525904723000,
        tag: 'typescript',
    },
    {
        id: 4,
        title: 'what does it mean that everything is an object?!',
        date: 1525606447000,
        tag: 'js',
    },
    {
        id: 5,
        title: 'the time tag is highly underutilized',
        date: 1533811819000,
        tag: 'html',
    },
    {
        id: 6,
        title: 'what does JS really stand for anyways?',
        date: 1530112570000,
        tag: 'js',
    },
    {
        id: 7,
        title: 'CSS Sure is great!',
        date: 1522159762000,
        tag: 'css',
    },
    {
        id: 8,
        title: 'This one is on React and the most recent',
        date: Date.now(),
        tag: 'react',
    },
    {
        id: 9,
        title: 'HTML is great',
        date: 1541712695000,
        tag: 'html',
    },
    {
        id: 10,
        title: 'Jeremy Sanders?',
        date: Date.now() - 100,
        tag: 'js',
    },
    {
        id: 11,
        title: 'Jessie Sandwich?',
        date: 1523610226000,
        tag: 'js',
    },
    {
        id: 12,
        title: 'How does HTML even work',
        date: 1513951416000,
        tag: 'html',
    },
];

// Group posts by tags, but order the groups by their most recent post. Display on page.


const tagGroups = posts.reduce((acc, next) => {
    if (!acc[next.tag]) {
        acc[next.tag] = [next];
    } else {
        acc[next.tag].push(next);
        acc[next.tag].sort((a, b) => a.date - b.date );
    }
    return acc
}, {});


console.log(tagGroups)
display.innerHTML = JSON.stringify(posts)

