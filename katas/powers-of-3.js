function largestPower(n) {
  let result = Math.floor(Math.log(n - 1) / Math.log(3));
  return result !== -Infinity ? result : -1;
}

console.log(largestPower(3) === 0);
console.log(largestPower(5) === 1);
console.log(largestPower(7) === 1);
console.log(largestPower(81) === 3);
console.log(largestPower(82) === 4);
