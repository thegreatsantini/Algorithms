const songDecoder = (str) => {
const WUB = str.replace(/[WUB$]/g, '')
// console.log(WUB.join(' ').replace(/\s/g, '').split('').join(' '))
console.log(WUB)
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))//, "A B C","WUB should be replaced by 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))//, "A B C","multiples WUB should be replaced by only 1 space");
console.log(songDecoder("WUBAWUBBWUBCWUB"))//, "A B C","heading or trailing spaces should be removed");
