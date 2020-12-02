const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding: 'utf8' });
const data = input.trim().split(/\r?\n/);

let validPasswords = 0;

for (const el of data) {
  let [ bounds, testLetter, password ] = el.split(' ');
  const [ lowerBound, upperBound ] = bounds.split('-');

  const noOfOccurences = password.split(`${testLetter[0]}`).length - 1;
  if (noOfOccurences >= Number(lowerBound) && noOfOccurences <= Number(upperBound)) {
    validPasswords++;
  }
}

console.log(validPasswords);
