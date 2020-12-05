const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding: 'utf8' });
const data = input.trim().split(/\r?\n/);

const mapping = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
let total = 1;

for (const el of mapping) {
  let noOfTrees = 0;
  let right = el[0];
  let down = el[1];

  for (let i = down; i < data.length; i += down) {
    if (data[i][right % data[i].length] === '#') {
      noOfTrees++;
    }

    right += el[0];
  }

  total *= noOfTrees;
}

console.log(total);
