// 1
let patt = ''
for (let x=0; x<4; x++){
    patt = patt + '* '
    console.log (patt)
}

// 2
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for (let elem of arr) {
    console.log('row',arr.indexOf(elem))
    for (let pos of elem) {
        console.log(pos)
    }
}

// 3
let result1 = ''
let result2 = ''
for (let i=1; i<=4; i++) {
    result1 = result1 +' '+ i +' '+ i +' '+ i
}
console.log ('result1 ==>', result1)
for (let i=0; i<=2; i++) {
    for (let j=0; j<=4; j++) {
        result2 +=  ' '+ j
    }
}
console.log ('result2 ==>', result2)
