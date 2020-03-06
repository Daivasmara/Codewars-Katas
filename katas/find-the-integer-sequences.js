function findSequences(n) {
  let result = [];
  let tempArr = [];
  let temp = 0;

  for(let i = 1; i <= n; i++){
    tempArr = [];
    tempArr.push(i);
    temp = i;
    for(let j = i + 1; j <= n; j++){
      tempArr.push(j);
      temp += j;
      if (temp > n) {
        break;
      } else if (temp === n) {
        result.push(tempArr);
        break;
      }
    }
  }
  
  return result.sort((a, b) => a.length - b.length);
}

console.log(findSequences(3), [[1, 2]])
console.log(findSequences(15), [[7, 8], [4, 5, 6], [1, 2, 3, 4, 5]])
console.log(findSequences(20), [[2, 3, 4, 5, 6]])
console.log(findSequences(100), [[18, 19, 20, 21, 22], [9, 10, 11, 12, 13, 14, 15, 16]])
console.log(findSequences(1), [])
