function highAndLow(numbers) {
  let arr =  numbers.split(' ');
  let arrInt = arr.map(num => parseInt(num));
  return (`${Math.max.apply(Math, arrInt)} ${Math.min.apply(Math, arrInt)}`);
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
