function sortByLength(array) {
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if (array[i].length > array[j].length) [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return array;
};



console.log(sortByLength(["Beg", "Life", "I", "To"]), ["I", "To", "Beg", "Life"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]), ["", "Pizza", "Brains", "Moderately"]);
console.log(sortByLength(["Longer", "Longest", "Short"]), ["Short", "Longer", "Longest"]);