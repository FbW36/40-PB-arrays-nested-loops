// 1. Write a program to construct the following pattern:
/*
*
**
***
****
*/

const array = ["*", "*", "*", "*"];
const newArray = []

const result = array.map((item) => {
    // console.log(index = item);
    for(let i of item) {
        newArray.push(item)
        console.log(newArray.join(' '));
    }
})

// 2.

let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
const anotherArray = [];

const arrPrinter = (array) => {
    array.map((val, index) => {
        index = "row " + index;
        console.log(index);
        for (let i of val) {
            console.log(i);
            }
    })
}

arrPrinter(arr);

// 3.
const item = [1,2,3,4]

const array1 = []
const array2 = []
for (let i = 1; i <= 4; i++){
    
    for (let j = 0; j < 3; j++ ){
        for (let x = 0; x <= 4; x++ ){
            array1.push(x);
        }
        array2.push(i);
    }
}

console.log(array1.join(' '));
console.log(array2.join(' '));