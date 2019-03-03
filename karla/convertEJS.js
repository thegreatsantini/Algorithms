const esj = `<div><h1>hello, my name is {{userName}}!</h1></div>`;
const data = {
  userName: "Lucas Santini",
  email: "lucas@gmail.com",
  score: 9001
};
const convertEjs = str => {
  return str
    .split(/({{|}})/)
    .map(word => {
      if (word !== "{{" && word !== "}}") {
        return data[word] || word;
      } else {
        return "";
      }
    })
    .join("");
};

console.log(convertEjs(esj));
