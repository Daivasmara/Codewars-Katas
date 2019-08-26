function reverseLetter(str) {
  let justAlphabet = str.replace(/[^a-zA-Z]/g, '');
  let arr = justAlphabet.split('');
  let reversedArr = [];
  for(let i = arr.length - 1; i >= 0; i--){
    reversedArr.push(arr[i]);
  }
  return reversedArr.join('');
}


console.log(reverseLetter("krishan"), "nahsirk")
console.log(reverseLetter("u2ltr53o?n"), "nortlu")
console.log(reverseLetter("ab23c"), "cba")
console.log(reverseLetter("krish21an"), "nahsirk")