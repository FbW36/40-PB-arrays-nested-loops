// # Programming Basics: Nested Loops (Using Arrays)

// **Use NESTED LOOPS in each instance**

// 1. Write a program to construct the following pattern:

// ```
// *
// * *
// * * *
// * * * *
// ```

const myArray = [];

for (let i = 0; i < 4; i++) {
  myArray.push("*");
  console.log("myArray :>> ", myArray);
}
// 2. Write a program which prints the elements of the following array:
// ```
let arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
// ```
// And creates the following output:
// ```
// row 0
//  1
//  2
//  1
//  24
// row 1
// ```

let counter = -1;
for (let i of arr) {
  counter++;
  console.log(`Row ${counter}`);
  for (let j of i) {
    console.log(j);
  }
}
// for (let elem of arr) {
//     console.log('row',arr.indexOf(elem))
//     for (let pos of elem) {
//         console.log(pos)
//     }
// }

// 3. Write a program that will output the following using loops:
// ```
// 1 1 1 2 2 2 3 3 3 4 4 4

let number = [];
for (let i = 1; i < 5; i++) {
  for (let j = 1; j < 4; j++) {
    number.push(i);
  }
}
console.log(number.join(" "));

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
// ```

let number1 = [];

for (let i = 1; i <= 3; i++) {
  for (let j = 0; j <= 4; j++) {
    let counter = -1;
    number1.push(j);
    counter++;
  }
}
console.log(number1.join(" "));
