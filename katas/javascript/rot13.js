function isAlphabet(c) {
  return c >= 97 && c <= 122;
}

function rot13(message){
  const arr = [];
  const upperCase = {};
  for (let i = 0; i < message.length; i++) {
    if (message[i] == message[i].toUpperCase() && isAlphabet(message[i].toLowerCase().charCodeAt(0))) {
      upperCase[i] = true;
      arr.push(message[i].toLowerCase().charCodeAt(0));
    } else {
      arr.push(message.charCodeAt(i));
    }
  }
  const result = arr.map(e => {
    if (!isAlphabet(e)) {
      return String.fromCharCode(e);
    }
    return String.fromCharCode((e+13) > 122 ? (e+13-122+96) : (e+13))
  });
  Object.keys(upperCase).forEach(v => result[v] = result[v].toUpperCase());
  return result.join('');
}

console.log("grfg", rot13("test"));
console.log("Grfg", rot13("Test"));
console.log("Grfg", rot13("Ruby is cool!"));
