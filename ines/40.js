//1
const star = ["*", "*", "*", "*"];
let newStar = "";
for (i of star) {
  newStar += i;
  console.log(newStar);
}

//2
let arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

let template = "";

function templateMaker(array) {
  for (i = 0; i < array.length; i++) {
    let indexArr = array[i];
    template += `Row ${i} \n`;
    for (element of indexArr) {
      template += `${element} \n`;
    }
    template += "---------------------\n";
  }
  return template;
}

console.log(templateMaker(arr));

//3

const initialArray = [1, 2, 3, 4];
let stringArray = "";
for (element of initialArray) {
  stringArray += element + " ";
  stringArray += element + " ";
  stringArray += element + " ";
}
console.log(stringArray);

const initialArray2 = [0, 1, 2, 3, 4];
let stringArray2 = "";
for (i = 0; i < 3; i++) {
  for (element of initialArray2) {
    stringArray2 += element + " ";
  }
}
console.log(stringArray2);
