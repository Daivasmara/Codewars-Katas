function order(words) {
  const obj = {};
  const arr = words.split(' ');
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].match(/[1-9]/g)] = arr[i];
  }
  return Object.values(obj).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "")
