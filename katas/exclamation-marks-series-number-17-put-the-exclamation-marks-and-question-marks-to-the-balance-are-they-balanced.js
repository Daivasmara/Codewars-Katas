function balance(left, right) {
    return count(left) < count(right) ? 'Right' : count(left) > count(right) ? 'Left' : 'Balance';
}

function count(side) {
    return side.split('').map(x => x === '!' ? 2 : 3).reduce((a, b) => a + b);
}

console.log(balance("!!", "??"), "Right")
console.log(balance("!??", "?!!"), "Left")
console.log(balance("!?!!", "?!?"), "Left")
console.log(balance("!!???!????", "??!!?!!!!!!!"), "Balance")