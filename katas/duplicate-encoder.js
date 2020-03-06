function duplicateEncode(word) {
  let temp = [];
  let arr = word.toLowerCase().split('');

  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j]){
        if(!temp.includes(i)){
          temp.push(i);
        }
        if(!temp.includes(j)){
          temp.push(j);
        }

      }
    }
  }
  let result = arr.map((_, i) => {
    if(temp.includes(i)){
      return ')'
    } else {
      return '('
    }
  })
  return result.join('')
}


console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())");
console.log(duplicateEncode("(( @"), "))((");
