function isPangram(string){
  const alphabet = {};
  const arr = string.split('');
  
  for (let i = 97; i <= 122; i++) {
    alphabet[String.fromCharCode(i)] = false; 
  }
  
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i].toLowerCase();
    if (alphabet[char] === false) {
      alphabet[char] = true;
    }
  }

  if (Object.values(alphabet).includes(false)) {
    return false;
  }

  return true;
}

//console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
//console.log(isPangram('This is not a pangram.'));
console.log(isPangram('Cwm fjord bank glyphs vext quiz'));
