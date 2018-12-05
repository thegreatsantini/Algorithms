// var salary = "1000$";

//  (function () {
//      console.log("Original salary was " + salary);

//      var salary = "5000$";

//      console.log("My New Salary " + salary);
// })();

const genresToDisplay = ['comedy', 'mystery'];

const users = [
    {
        _id: 'us-757',
        userName: 'thegreatsantini',
        genres: ['romance', 'fiction', 'adventure']
    },
    {
        _id: 'us-747',
        userName: 'grammer_erickson',
        genres: ['comedy', 'non-fiction', 'love']
    },
    {
        _id: 'us-737',
        userName: 'sierra.cortes',
        genres: ['mystery']
    },
    {
        _id: 'us-777',
        userName: 'mikealscott',
        genres: ['comedy']
    },
    {
        _id: 'us-787',
        userName: 'dani_bear',
        genres: ['fantasy', 'romance', 'fiction', 'adventure']
    },
    {
        _id: 'us-221',
        userName: 'jimdubs',
        genres: ['non-fiction', 'biography']
    }
];


const filterUsers = (selectedGenres, users) => {

    const filteredGenres = selectedGenres.reduce((acc, next) => {
        acc[next] = 1;
        return acc
    }, {})
   

    return users.filter(person => {
        return person.genres.some(val => filteredGenres[val])
    })
}

const test = filterUsers(genresToDisplay, users);
console.log(test)

