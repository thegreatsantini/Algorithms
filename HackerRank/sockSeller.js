const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const sockMerchant = arr => {
  return arr.reduce((acc, next) => {
    if (!acc.hasOwnProperty(next)) {
      acc[next] = 1;
    } else {
      acc[next]++;
    }
    return acc;
  }, {});
};

console.log(sockMerchant(socks));
