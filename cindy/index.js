// Use NESTED LOOPS in each instance

//     Write a program to construct the following pattern:

// *
// * *  
// * * *  
// * * * *  


//I prefer this solution instead => 
// for(let i=1; i<=4; i++){
//    console.log("*".repeat(i));
// }


//2. 
for (let i = 4; i >= 1; i--) {
    let str = "";
    for (let j = i; j <= 4; j++) {
    str += "*";
       }
   console.log(str);
  }


//
// 2. Write a program which prints the elements of the following array:

let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i in arr) 
{
    console.log("row " + i);
    for (let j in arr[i]) 
      {
       console.log(" " + arr[i][j]);
      }
 }

//3. Write a program that will output the following using loops:

//  1 1 1 2 2 2 3 3 3 4 4 4
//  0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
 for(let i=0; i<=2;i++){
     for(let j=0;j<=4;j++){

         console.log("01234 => ",j)
     }
 }
for(let i=1; i<=4;i++){
    for(let j=1;j<=3;j++){

        console.log("111222333", i)
    }
}