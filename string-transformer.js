function stringTransformer(str) {
  let arr = str.split(' ');
  let reversedArr = [];
  
  for(let i = arr.length - 1; i >= 0; i--){
    reversedArr.push(arr[i]);
  }

  for(let i = 0; i < reversedArr.length; i++){
    reversedArr[i] = reversedArr[i].split('');
  }

  for(let i = 0; i < reversedArr.length; i++){
    for(let j = 0; j < reversedArr[i].length; j++){
      if(reversedArr[i][j] == reversedArr[i][j].toUpperCase()){
        reversedArr[i][j] = reversedArr[i][j].toLowerCase();
      } else {
        reversedArr[i][j] = reversedArr[i][j].toUpperCase();
      }
    }
  }

  for (let i = 0; i < reversedArr.length; i++) {
    reversedArr[i] = reversedArr[i].join('');
  }
  
  return reversedArr.join(' ');
}

console.log(stringTransformer('Example string'), 'STRING eXAMPLE');
