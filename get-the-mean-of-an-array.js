function getAverage(marks) {
  let total = marks.reduce((a, b) => a + b);
  let average = Math.floor(total / marks.length);
  return average;
}

console.log(getAverage([2, 2, 2, 2]) === 2);
console.log(getAverage([1, 2, 3, 4, 5,]) === 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]) === 1);

