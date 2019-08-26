function comp(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false
  for (let i = 0; i < array2.length; i++) {
    let sqrt = Math.sqrt(array2[i]);
    if (!array1.includes(sqrt)) return false;
    array1.splice(array1.indexOf(sqrt), 1);
  }
  return true;
}

console.log(comp([2, 2, 3], [4, 9, 9]), false);
console.log(comp([47, 47, 6], [2209, 2209, 36]), true);
console.log(comp([98, 49, 85, 61, 35, 88], [9604, 2401, 7225, 3721, 1225, 7744]), true);