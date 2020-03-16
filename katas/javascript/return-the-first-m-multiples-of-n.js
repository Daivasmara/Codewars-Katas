function multiples(m, n) {
  return(Array.from(Array(m), (v, i) => (i + 1) * n));
}

console.log(multiples(3, 5), [5, 10, 15]);