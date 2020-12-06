const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding: 'utf8' });
const data = input.trim().split(/\r?\n\n/);

let noOfValidPassports = 0;
const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

for (const el of data) {
  let params = el.replace(/\n/g, ' ').split(' ');
  let passport = {};

  for (const field of params) {
    let [key, value] = field.split(':');
    passport[key] = value;
  }

  if ((requiredFields.filter(e => !Object.keys(passport).includes(e))).length === 0) {
    noOfValidPassports++;
  }
}

console.log(noOfValidPassports);
