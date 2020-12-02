//1
const nestedPattern = (star, num) => {
  let row = "";
  for (let i = 1; i <= num; i++) {
    row += "\n";
    for (let j = 1; j <= i; j++) {
      row += star;
    }
    // console.log(row);
  }
  return row;
};
console.log(nestedPattern("*", 4));

//2
let arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

function createPattern(theArr) {
  theArr.map((nestedArray, index) => {
    console.log(`row ${index}`);
    nestedArray.map((el) => {
      console.log(el);
    });
  });
}
createPattern(arr);

//3
function createLine1() {
  let line1 = "";
  for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
      line1 += i + " ";
    }
  }
  return line1;
}

console.log(createLine1());

function createLine2() {
  line2 = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      line2 += j + " ";
    }
  }
  return line2;
}

console.log(createLine2());
