function numberOfPairs(gloves) {
  let seen = {};
  for(let i = 0; i < gloves.length; i++){
    if(!seen[gloves[i]]){
      seen[gloves[i]] = [i];
    } else {
      seen[gloves[i]].push(i);
    }
  }
  let pairs = 0
  for(let i = 0; i < Object.keys(seen).length; i++){
    let pair = Math.floor(seen[Object.keys(seen)[i]].length / 2);
    pairs += pair
  }
  return pairs;
}

console.log(numberOfPairs(['red', 'red']), 1);
console.log(numberOfPairs(['red', 'green', 'blue']), 0);
console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']), 3);
console.log(numberOfPairs(['Purple', 'Maroon', 'Maroon', 'Red', 'Green', 'Maroon', 'Silver', 'Yellow', 'Red', 'Aqua', 'Blue', 'Purple', 'Silver', 'Lime', 'Teal', 'White', 'Green']), 5);