// complete the function
function solution(string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      result.push(' ', string[i]);
    } else {
      result.push(string[i]);
    }
  }
  return result.join('');
}

console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result')
console.log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
