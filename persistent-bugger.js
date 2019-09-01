function persistence(num) {
  let i = 0;
  let arr = num.toString().split('');

  while(arr.length > 1){
    arr = arr.reduce((a, b) => a * b).toString().split('');
    i++;
  }

  return i;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
