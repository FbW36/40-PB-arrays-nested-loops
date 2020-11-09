let log = console.log;

// 1 . Write a program to construct the following pattern
let asterix = "";
for (i = 0; i < 4; i++) {
  log((asterix += "*"));
}

// 2. Write a program which prints the elements of the following array:
let arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
let row = ''
for(i = 0; i < arr.length;i++) {    
    row = 'row ' + i
    log(row)
    for(j = 0; j < arr[i].length; j++) {
        log(arr[i][j])
    }
}



// 3. Write a program that will output the following using loops
const firstLine = [];
let secondLine = [];
for (i = 1; i < 5; i++) {
  firstLine.push(i, i, i);
  for (j = 0; j < 5; j++) {
    secondLine.push(j);
  }
}
secondLine = secondLine.join(" ");
log(`${firstLine.join(" ")} \n${secondLine.slice(0, secondLine.length - 10)}`);

