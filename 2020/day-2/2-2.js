const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding: 'utf8' });
const data = input.trim().split(/\r?\n/);

let validPasswords = 0;

for (const el of data) {
  let [ bounds, testLetter, password ] = el.split(' ');
  const [ lowerBound, upperBound ] = bounds.split('-');

  if (
    password[Number(lowerBound) - 1] === testLetter[0]
    ^ password[Number(upperBound) - 1] === testLetter[0]
  ) {
    validPasswords++;
  }
}

console.log(validPasswords);
