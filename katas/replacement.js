function replacement(a) {
  a.sort((a, b) => a - b);
  if(a[a.length - 1] === 1){
    a[a.length - 1] += 1;
  } else {
    a.unshift(1);
    a.pop();
  }
  return a
}

console.log(replacement([1, 2, 3, 4, 5]), [1, 1, 2, 3, 4]);
console.log(replacement([4, 2, 1, 3, 5]), [1, 1, 2, 3, 4]);
console.log(replacement([2, 3, 4, 5, 6]), [1, 2, 3, 4, 5]);
console.log(replacement([2, 2, 2]), [1, 2, 2]);
console.log(replacement([1, 1, 1]), [1, 1, 2]);
console.log(replacement([1]), [2]);
