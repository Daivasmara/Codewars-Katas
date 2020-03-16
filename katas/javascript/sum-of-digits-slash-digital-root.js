function digital_root(n) {
  if (n.toString().length === 1) return n;
  const x = n
    .toString()
    .split('')
    .map(x => Number(x))
    .reduce((a, b) => a + b);
  return digital_root(x);
}

console.log(digital_root(7), 7)
console.log(digital_root(16), 7)
console.log(digital_root(456), 6)