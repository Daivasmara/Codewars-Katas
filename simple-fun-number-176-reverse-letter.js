function reverseLetter(str) {
  let justAlphabet = str.replace(/[^a-zA-Z]/g, '');
  let arr = justAlphabet.split('');
  return arr.sort((a, b) => arr.indexOf(b) - arr.indexOf(a)).join('');
}


console.log(reverseLetter("krishan"), "nahsirk")
console.log(reverseLetter("u2ltr53o?n"), "nortlu")
console.log(reverseLetter("ab23c"), "cba")
console.log(reverseLetter("krish21an"), "nahsirk")