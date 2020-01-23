const bitcoin = require("./bitcoin.json");
const ethereum = require("./ethereum.json");

const avg = lst => lst.reduce((a, c) => a + c, 0) / lst.length;

const bitcoinAvg = yrs => avg(bitcoin.slice(bitcoin.length - yrs * 12));

const ethereumAvg = yrs => avg(ethereum.slice(0, yrs * 365));

for (let i = 1; i < 8; i++) {
  console.log(`bitcoin past ${i} year avg: ${bitcoinAvg(i)}`);
}

for (let i = 1; i < 4; i++) {
  console.log(`ethereum past ${i} year avg: ${ethereumAvg(i)}`);
}
