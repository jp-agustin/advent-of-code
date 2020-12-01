const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding:'utf8' });
const data = input.trim().split(/\r?\n/);
const sum = 2020;

for (let i = 0; i < data.length - 2; i++) {
  let tempObj = {};
  let temp = sum - data[i];
  
  for (let j = i + 1; j < data.length; j++) {
    if (Object.prototype.hasOwnProperty.call(tempObj, temp - data[j])) {
      console.log((temp - data[j]) * data[i] * data[j]);
      return;
    }

    tempObj[data[j]] = 1;
  }
}
