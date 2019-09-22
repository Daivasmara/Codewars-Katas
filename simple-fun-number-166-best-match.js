function bestMatch(ALAHLYGoals, zamalekGoals) {
  let min = ALAHLYGoals[0] - zamalekGoals[0];
  let temp = zamalekGoals[0];
  let result = 0;

  for(let i = 0; i < ALAHLYGoals.length; i++) {
    let diff = ALAHLYGoals[i] - zamalekGoals[i];
    if(diff < min) {
      min = diff;
      temp = zamalekGoals[i];
      result = i;
    } else if(diff === min && zamalekGoals[i] > temp) {
      min = diff;
      temp = zamalekGoals[i];
      result = i;
    }
  }

  return result;
}

console.log(bestMatch([6, 4], [1, 2]), 1);
console.log(bestMatch([1], [0]), 0);
console.log(bestMatch([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]), 4);
console.log(bestMatch([3, 4, 3], [1, 1, 2]), 2);
console.log(bestMatch([4, 3, 4], [1, 1, 1]), 1);
console.log(bestMatch([14, 17, 12, 3, 1], [6, 9, 2, 0, 0]), 4);
console.log(bestMatch([5, 13, 3, 6, 10, 6, 7, 9, 17, 8, 12, 2, 7, 17], [3, 3, 1, 1, 8, 5, 3, 7, 8, 7, 2, 0, 6, 8]), 9);