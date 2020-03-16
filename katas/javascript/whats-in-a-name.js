function nameInStr(str, name) {
  let arrStr = str.toLowerCase().replace(/[^a-z]/g, '').split('');
  let arrName = name.toLowerCase().split('');
  let res = [];

  for(let i = 0; i < arrName.length; i++){
    for(let j = 0; j < arrStr.length; j++){
      if(arrName[i] == arrStr[j]){
        if(res.length == 0){
          res.push(j);
          break;
        } else {
          if (res[i-1] < j) {
            res.push(j);
            break;
          }
        }
      }
    }
  }
  
  if (res.length !== arrName.length) return false;

  for(let i = 0; i < res.length; i++){
    if (res[i] > res[i + 1]) return false;
  }

  return true;
}

console.log(nameInStr('Across the rivers', 'chris'), true)
console.log(nameInStr('Next to a lake', 'chris'), false)
console.log(nameInStr('Under a sea', 'chris'), false)
console.log(nameInStr('A crew that boards the ship', 'chris'), false)
console.log(nameInStr('A live son', 'Allison'), false)