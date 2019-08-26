function comp(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(Math.sqrt(array2[i]))) return false;
  }
  return true;
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
console.log(comp(a1, a2), true);