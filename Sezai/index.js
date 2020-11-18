//1. 
const printStars = (symbol, number) => {
	for (let i = 1; i <= number; i++) {
		let row = '';
		for (let j = 1; j <= i; j++) {
			row += symbol;
		}
		console.log(row);
	}
}
printStars('#', 4);

//2.
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < arr.length; i++) {
	let row = "row " + i;
	console.log(row);
  
	for (let j = 0; j < arr[i].length; j++) {
	  const rowArray = arr[i][j];
	  console.log(rowArray);
	}
  }


  //3.
  const arrayI = [];
const arrayJ = [];

for (let i = 1; i < 5; i++) {
  arrayI.push(i, i, i);
  if (i < 4) {
    for (let j = 0; j < 5; j++) {
      arrayJ.push(j);
    }
  }
}
console.log(arrayI.join(" "));
console.log(arrayJ.join(" "));


