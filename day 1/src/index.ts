import fs from "fs"

const inputFile = `${__dirname}/../data/input.txt`;

const fileContents = fs.readFileSync(inputFile, "utf8").split("\n");


// Part 1
let mostCalories = 0;
let total = 0;
for (let i = 0; i < fileContents.length; i++) {
  if (fileContents[i] == "") {
    if (total > mostCalories) {
      mostCalories = total;
    }
    total = 0;
  } else {
    total += parseInt(fileContents[i]);
  }
}

console.log(`Part 1: ${mostCalories}`);


// Part 2
let elves: Array<number> = [];
for (let i = 0; i < fileContents.length; i++) {
  if (fileContents[i] == "") {
    elves.push(total);
    total= 0;
  } else {
    total += parseInt(fileContents[i]);
  }
}

const top3 = elves.sort((a, b) => b - a).slice(0, 3).reduce((partialSum, n) => partialSum + n, 0);

console.log(`Part 2: ${top3}`);

