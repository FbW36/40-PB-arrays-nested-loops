
function triangleShape(n)
{
    str ='';
    for (let i=0; i<n; i++)
    {
        for (let j=0; j<=i; j++)
        {
            str += '*';
        }
        console.log(str);
        str = '';
    }
}

triangleShape(5);






// =======================================

// 2. 

let arr = 
[
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27], 
    [7, 4, 28, 14], 
    [3, 10, 26, 7]
];

let count=0;
function printingMatrix()
{
    for (let i of arr )
    {
        console.log('row', count);
        //console.log(arr[i], '\n');
        count++;
        for (let j of i)
        {
            console.log(j);
        }
    }
}

printingMatrix();

// =====================================

// 3.

let str1 = '';
function printingStyles()
{
    for (let i=1; i<=4; i++)
    {
        for (let j=0; j<3; j++)
        {
            str += i;
            //console.log(i);
        }
        //console.log(str);
    }
    console.log(str);

    str = '';
    for (let i=1; i<=4; i++)
    {
        for (let j=0; j<=4; j++)
        {
            str += j;
            //console.log(i);
        }
        //console.log(str);
    }
    console.log(str);
}

printingStyles();

// =======================================
