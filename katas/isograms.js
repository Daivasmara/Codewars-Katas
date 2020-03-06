function isIsogram(str) {
  if(str.length === 0) return true;

  let result = [];
  let arr = str.toLowerCase().split('');

  for (let i = 0; i < arr.length; i++) {
    if(!result.includes(arr[i])){
      result.push(arr[i]);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false,);
console.log(isIsogram("moOse"), false,);
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true,);
