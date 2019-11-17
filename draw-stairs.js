function drawStairs(n) {
  result = [];
  for (let i = 0; i < n; i++) {
    space = ' ';
    result.push('I\n' + space.repeat(i));
  }
  result[n - 1] = 'I';
  return result.join(' ');
}

console.log(drawStairs(1), "I");
console.log(drawStairs(3), "I\n I\n  I");
console.log(drawStairs(5), "I\n I\n  I\n   I\n    I");