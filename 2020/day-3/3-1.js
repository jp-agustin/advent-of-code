const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding: 'utf8' });
const data = input.trim().split(/\r?\n/);

let noOfTrees = 0;
let right = 3;
let down = 1;

for (let i = down; i < data.length; i += down) {
  if (data[i][right % data[i].length] === '#') {
    noOfTrees++;
  }

  right += 3;
}

console.log(noOfTrees);
