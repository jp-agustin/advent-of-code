const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding:'utf8' });
const data = input.trim().split(/\r?\n/);
const sum = 2020;

let tempObj = {};

for (const el of data) {
  let temp = sum - el;
	 
  if (Object.prototype.hasOwnProperty.call(tempObj, temp)) {
    console.log(el * temp);
    break;
  }

  tempObj[el] = 1;
}
