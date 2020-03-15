function findOdd(A) {
  const map = {};
  for (let i = 0; i < A.length; i++) {
    if (!map[A[i]]) {
      map[A[i]] = [A[i]];
    } else {
      map[A[i]].push(A[i]);
    }
  }
  const arr = Object.values(map).find(m => (m.length % 2 !== 0));
  return arr[0];
}

  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
  //console.log([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  //console.log([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  //console.log([10], 10);
  //console.log([1,1,1,1,1,1,10,1,1,1,1], 10);
  //console.log([5,4,3,2,1,5,4,3,2,10,10], 1);
