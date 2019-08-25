function removeDuplicateWords(s) {
  const arr = s.split(' ');
  const set = new Set(arr);
  const result = Array.from(set).join(' ');
  
  return result;
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') === 'alpha beta gamma delta');
