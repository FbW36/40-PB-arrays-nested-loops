// Use NESTED LOOPS in each instance
// Write a program to construct the following pattern:
// *
// * *
// * * *
// * * * *

let pattern = "";
for (let i = 1; i <= 4; i++) {
  pattern += "* ";
  console.log(pattern);
}

// Write a program which prints the elements of the following array:
let arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

const printRowArray = (array) => {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += `row ${i}\n`;
    let subArray = array[i];
    for (let item of subArray) {
      result += ` ${item}\n`;
    }
  }
  console.log(result);
};
printRowArray(arr);

// And creates the following output:

// row 0
//  1
//  2
//  1
//  24
// row 1

// Write a program that will output the following using loops:
// 1 1 1 2 2 2 3 3 3 4 4 4
let number = [];
for (let i = 1; i < 5; i++) {
  for (let j = 1; j < 4; j++) {
    number.push(i);
  }
}
console.log(number.join(" "));

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
let number1 = [];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    number1.push(j);
  }
}
console.log(number1.join(" "));
