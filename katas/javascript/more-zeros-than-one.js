const OBJ_SHAPE = {
  '0': 0,
  '1': 0,
};

function removeDuplicate(s) {
  const obj = {};
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = true;
      result.push(s[i]);
    }
  }
  return result.join('');
}

function convertToBinary(s) {
  const bin = [];
  for (let i = 0; i < s.length; i++) {
    bin.push(s.charCodeAt(i).toString(2));
  }
  return bin;
}

function moreZeros(s) {
  const w = removeDuplicate(s);
  const bin = convertToBinary(w);
  let obj = {
    ...OBJ_SHAPE,
  };
  const result = [];
  for (let i = 0; i < bin.length; i++) {
    for (let j = 0; j < bin[i].length; j++) {
      if (bin[i][j] === '0') {
        obj['0']++
      } else {
        obj['1']++
      }
    }
    if (obj['0'] > obj['1']) {
      result.push(bin[i]);
    }
    obj = {
      ...OBJ_SHAPE,
    };
  }
  return result.map(r => String.fromCharCode(parseInt(r, 2)));
}

console.log(moreZeros('abcde'),['a','b','d'])
console.log(moreZeros('Great job!'),['a', ' ', 'b', '!'])
console.log(moreZeros('DIGEST'),['D','I','E','T'])
console.log(moreZeros('abcdeabcde'),['a','b','d'],'Should not return duplicates values')
