"use strict";

function flattenAndSort(array) {
  let x = [];
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
      x.push(array[i][j]);
      x.sort((a, b) => a - b);
    }
  }
  return x;
}


console.log(flattenAndSort([]) === []);
console.log(flattenAndSort([[], [1]]) === [1]);
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]) === [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]) === [1, 2, 3, 4, 5, 6, 100]);