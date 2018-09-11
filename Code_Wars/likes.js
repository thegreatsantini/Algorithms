/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
*/

const onePerson = (people) => {
    return 
}

const twoPeople = (people) => {
    
}

const threePeople = (people) => {
    
}

const likes = (arr) => {
    if ( arr.length === 0 )  return "no one likes this";
    else if ( arr.length === 1 ) return `${people[0]} like this`;
    else if ( arr.length === 2 ) return `${people[0]} and ${people[1]} like this`;
    else if ( arr.length === 3 ) return `${people[0]}, ${people[1]} and ${people[2]} likes this`
    else {
        return `${arr[0]}, ${arr[1]} and ${arr.length -2} others like this`
    }

}

console.log(likes ([])) // must be "no one likes this"
console.log(likes (["Peter"])) // must be "Peter likes this"
console.log(likes (["Jacob", "Alex"])) // must be "Jacob and Alex like this"
console.log(likes (["Max", "John", "Mark"])) // must be "Max, John and Mark like this"
console.log(likes (["Alex", "Jacob", "Mark", "Max"])) // must be "Alex, Jacob and 2 others like this"