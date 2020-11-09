// 1. use NESTED LOOP in each instance

let pattern = "";
for (let i = 1; i <= 4; i++) {
    pattern += "* ";
    console.log(pattern);

}

// 2. Write a program which prints the elements of the following array:
let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

for (let i = 0; i < arr.length; i++) {
    let row = "row " + i;
    console.log(row);

    for (let j = 0; j < arr[i].lengthlength; j++) {
        let rowArr = arr[i][j];
        console.log(rowArr);

    }

}

// 3. Write a program that wil output the following using loops:
// 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j < 4; j++) {
        console.log(i);

    }
}


// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {

        console.log(j);

    }
}