//1
function pyramid(char, size) {
  let line = "";
  let n = 0;
  while (n < size) {
    line += char + " ";
    console.log(line);
    n++;
  }
}

// pyramid("*", 4);

//2
let arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

function createPattern(arr) {
  arr.forEach((array, i) => {
    console.log(`row ${i}`);
    array.forEach((el) => {
      console.log(el);
    });
  });
}
// createPattern(arr);

//3
function createLine1() {
  let line1 = "";
  for (let i = 1; i <= 4; i++) {
    let n = 0;
    while (n < 3) {
      line1 += i + " ";
      n++;
    }
  }
  return line1;
}

// console.log(createLine1());

function createLine2() {
  line2 = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      line2 += j + " ";
    }
  }
  return line2;
}

// console.log(createLine2());
