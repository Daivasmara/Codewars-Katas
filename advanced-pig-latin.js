function translate(sentence) {
  const vocals = ['a', 'i', 'u', 'e', 'o'];
  const words = sentence.split(' ');
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const sanitizedWord = words[i].match(/[a-zA-Z]+/g).join('');
    const notLetter = words[i].match(/[^a-zA-Z ]+/g);
    let capital = false;
    if (sanitizedWord[0] === sanitizedWord[0].toUpperCase()) {
      capital = true;
    }
    const arr = sanitizedWord.split('')
    if (!vocals.includes(sanitizedWord[0].toLowerCase())) {
      const firstConsonants = [];
      for (let j = 0; j < sanitizedWord.length; j++) {
        if (!vocals.includes(sanitizedWord[j].toLowerCase())) {
          firstConsonants.push(sanitizedWord[j]);
        } else {
          break;
        }
      }
      arr.push(firstConsonants.join('').toLowerCase());
      arr.splice(0, firstConsonants.length);
      if (capital) {
        arr[0] = arr[0].toUpperCase();
      }
      result.push(arr.join('') + 'ay' + (notLetter !== null ? notLetter : ''));
    } else {
      result.push(arr.join('') + 'way' + (notLetter !== null ? notLetter : ''));
    }

  }
  return result.join(' ');
};

console.log(translate('hello') === 'ellohay');
console.log(translate('hello world') === 'ellohay orldway');
console.log(translate('Hello World') === 'Ellohay Orldway');
console.log(translate('Pizza? Yes Please!!') === 'Izzapay? Esyay Easeplay!!');
console.log(translate('How are you?') === 'Owhay areway ouyay?');