//Programming Basics: Nested Loops(Using Arrays)
//Use NESTED LOOPS in each instance

/*Write a program to construct the following pattern:
 *
 * *
 * * *
 * * * *
 */

let star = ["*"];
let starSum = "";

function stars(array) {
  for (let item of array) {
    for (let i = 0; i < 5; i++) {
      starSum += item;
    }
  }
  return starSum;
}

console.log(stars(star));

//2. Write a program which prints the elements of the following array:
// let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//And creates the following output:

// row 0
// 1
// 2
// 1
// 24
// row 1

let arrAllNumbers = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

let arrNumber = [];

function getNumbers(arr) {
  for (let item of arr) {
    console.log("row", arr.indexOf(item));
    for (let number of item) {
      arrNumber.push(number);
    }
    return arrNumber;
  }
}

console.log(getNumbers(arrAllNumbers));

// 3. Write a program that will output the following using loops:
// 1 1 1 2 2 2 3 3 3 4 4 4
//0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

//let number2 = 1;

function getNumbers() {
  let number2;
  let sum;
  for (let i = 0; i < 5; i++) {
    sum = i;
    console.log(sum);
    for (let j = 0; j < 3; j++) {}
  }
  return number2;
}

getNumbers(); //01234undefined01234

// NOTE: i need help and an explanation why there is an undefined.
