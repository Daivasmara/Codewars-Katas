function reverseLetter(str) {
  let arr = str.replace(/[^a-zA-Z]/g, '').split('');
  return arr.reverse().join('');
}


console.log(reverseLetter("krishan"), "nahsirk")
console.log(reverseLetter("u2ltr53o?n"), "nortlu")
console.log(reverseLetter("ab23c"), "cba")
console.log(reverseLetter("krish21an"), "nahsirk")