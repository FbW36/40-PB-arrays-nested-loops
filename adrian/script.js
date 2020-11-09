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
for (let i = 1; i <= 4; i++) {
  let n = 0;
  while (n < 3) {
    console.log(i);
    n++;
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(j);
  }
}
