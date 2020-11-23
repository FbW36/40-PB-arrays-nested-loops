// 1) Write a program to construct the following pattern:  

for(let i = 1; i < 5; i++){
    let star = "";
    
        for (let ii = 1; ii <= i; ii++) {
        star += "* ";
        }
    console.log("star pattern ==>", star);
  }
/*
star pattern ==> * 
star pattern ==> * * 
star pattern ==> * * * 
star pattern ==> * * * * 
*/

// Write a program which prints the elements of the following array:
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(let item of arr){
    console.log('Row', arr.indexOf(item));
    for (let num of item) {
        console.log(num);
      }
};
/*
Row 0
1
2
1
24
*/

// 3) Write a program that will output the following using loops:
//1 1 1 2 2 2 3 3 3 4 4 4
let myNumberArr = [];
for (let i = 1; i < 5; i++) {
    console.log("TEST ==>", myNumberArr)
    for(let a = 1; a < 4; a++){
        myNumberArr.push(i)
    }
};
console.log("TEST ==>", myNumberArr)
console.log("myNumberArr ==>", ...myNumberArr); // 1 1 1 2 2 2 3 3 3 4 4 4

const box = [];
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 5; j++) {
        box.push(j)
    }
}
console.log("box >>", ...box) // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4




