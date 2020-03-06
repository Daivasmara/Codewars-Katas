function duplicateCount(text) {
  let result = [];
  let arr = text.toLowerCase().split('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] == [arr[j]]){
        if (!result.includes(arr[i])) result.push(arr[i]);
      }
    }    
  }
  return result.length;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2);
console.log(duplicateCount("Indivisibility"), 1);
console.log(duplicateCount("Indivisibilities"), 2);
console.log(duplicateCount("aA11"), 2);
