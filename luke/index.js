//! 1. Write a program to construct the following pattern:

// ```
// *
// * *
// * * *
// * * * *
// ```

for (let i = 1; i < 5; i++) {
  let star = "";
  for (let x = 1; x <= i; x++) {
    star += "*";
  }
  console.log(star);
}

//! 2. Write a program which prints the elements of the following array:
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
for (let i = 0; i < arr.length; i++) {
  let row = "row " + i;
  console.log(row);

  for (let j = 0; j < arr[i].length; j++) {
    const rowArr = arr[i][j];
    console.log(rowArr);
  }
}

//! 3. Write a program that will output the following using loops:
// ```
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
// ```
const arri = [];
const arrj = [];

for (let i = 1; i < 5; i++) {
  arri.push(i, i, i);
  if (i < 4) {
    for (let j = 0; j < 5; j++) {
      arrj.push(j);
    }
  }
}
console.log(arri.join(" "));
console.log(arrj.join(" "));
