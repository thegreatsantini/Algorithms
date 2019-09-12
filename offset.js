/*
Write a function called getMoves that takes two arguments, an integer offset and a string. 
The integer offset will set the lines for the alphabet with <offset> letters per line. 
getMoves should return the directions of movement to spell the input string.
*/

/*
getMoves(4, "test")

Alphabet grid:
abcd
efgh
ijkl
mnop
qrst
uvwx
yz

getMoves(4, "test") => "ddddrrr,uuulll,dddrr,r"
*/

function getChunks(size) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const chunks = []
  for (let i = 0; i < alphabet.length; i+=size) {
      const chunk = alphabet.substring(i,i+size)
      chunks.push(chunk)
  }
  return chunks
}

function getMoves(offset, str) {
  const chunks = getChunks(offset);
  console.log(chunks)
}

getMoves(4, 'test');
