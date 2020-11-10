// # 40-PB-arrays-nested-loops

// # Programming Basics: Nested Loops (Using Arrays)

// **Use NESTED LOOPS in each instance**

// 1. Write a program to construct the following pattern:
// ```
// *
// * *
// * * *
// * * * *

let array = "";
function pylamid(rows) {
  for (let i = 0; i < rows; i++) {
    array += "*";
    console.log(array);
  }
}

pylamid(4);
// ```
// 2. Write a program which prints the elements of the following array:
// ```
// let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// ```

let arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

arr.forEach(function (row, i) {
  console.log(`row ${i}`);
  row.forEach(function (col) {
    console.log(col);
  });
});

// And creates the following output:
// ```
// row 0
//  1
//  2
//  1
//  24
// row 1
// ```

// 3. Write a program that will output the following using loops:
// ```
// 1 1 1 2 2 2 3 3 3 4 4 4
function number(num, repeat) {
  for (let i = 1; i < num + 1; i++) {
    for (let j = 0; j < repeat; j++) {
      console.log(i);
    }
  }
}

number(4, 3);

number(2, 6);

number(6, 3);

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
// ```
function number2(num, repeat) {
  for (let i = 1; i < repeat + 1; i++) {
    for (let j = 0; j < num + 1; j++) {
      console.log(j);
    }
  }
}

number2(4, 3);
