//  Fix the code so it returns a correct 3x2 array of zeroes, 
// which looks like [[0, 0], [0, 0], [0, 0]].

function zeroArray(m, n) {
let newArray = [];
let row = [];
for(let i=0; i < m; i++) {

// adds the n-th row into the newArray

for(let j =1; j < n; j++) {

// pushes n zeros into the current row to create the columns

row.push(0);
}

// pushes the current row, which now has n-th zeroes in it,to the array
newArray.push(row);
row = [];
}

return newArray;
}

let matrix - zeroArray(3, 2);
console.log(matrix);

