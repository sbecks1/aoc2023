const fs = require('fs');
const input = fs.readFileSync('inputs/day1.txt', 'utf-8');
const lines = input.split('\n');

function findCalibrationValue(line) {
    const cals = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const lineArr = line.split('');
    const nums = lineArr.filter((char) => cals.includes(char));
    const calVals = [nums[0], nums[nums.length - 1]].join('');
    return parseInt(calVals);
};

let calSum = 0

for (line of lines) {
    calSum += findCalibrationValue(line);
}

console.log(calSum); 
