// Use NESTED LOOPS in each instance

// Write a program to construct the following pattern:
// *
// * *  
// * * *  
// * * * *  


const star = (star) => {
    for (let i = 1; i < 5; i++){
        let starry = '';
        for (let j = 1; j <= i; j++) {
            starry += star;
        }
        console.log(starry);
    }
}
star("*");
// Write a program which prints the elements of the following array:
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// And creates the following output:
const rowTheRows = (arr) => {
    for (let i = 0; i < arr.length; i++){
        console.log("row " + i) ;
        for (let j of arr[i]) {
            console.log(j);
        }
    }
    return arr;
}
console.log("re==>",rowTheRows(arr));
// row 0 
//  1 
//  2 
//  1
//  24
// row 1


// Write a program that will output the following using loops:
// 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i < 5; i++) {
    for (let j = 0; j < 3; j++){
        console.log(i);
    }
}
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(j);
    }
}