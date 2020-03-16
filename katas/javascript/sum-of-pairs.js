var sum_pairs = function (ints, s) {
  let scannedValue = [];
  let distance;
  let result;
  for (let i = 0; i < ints.length; i++) {
    if (!scannedValue.includes(ints[i])) {
      scannedValue.push(ints[i]);
      let deficit = s - ints[i];
      if (ints.includes(deficit)) {
        let pairIndex = ints.indexOf(deficit, i + 1);
        if (pairIndex > i) {
          if (!distance) {
            distance = pairIndex - i;
            result = [ints[i], ints[pairIndex]];
          } else if (distance > pairIndex - i) {
            distance = pairIndex - i;
            result = [ints[i], ints[pairIndex]];
          }
        }
      }
    }
  }
  return result;
}

console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8), [1, 7]);
console.log(sum_pairs([1, -2, 3, 0, -6, 1], -6), [0, -6]);
console.log(sum_pairs([20, -13, 40], -7), undefined);
console.log(sum_pairs([1, 2, 3, 4, 1, 0], 2), [1, 1]);
console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10), [3, 7]);
console.log(sum_pairs([4, -2, 3, 3, 4], 8), [4, 4]);
console.log(sum_pairs([0, 2, 0], 0), [0, 0]);
console.log(sum_pairs([5, 9, 13, -3], 10), [13, -3]);
