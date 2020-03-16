function drawStairs(n) {
  return [...Array(n)].map((_, i) => ' '.repeat(i) + 'I').join('\n');
}

console.log(drawStairs(1), "I");
console.log(drawStairs(3), "I\n I\n  I");
console.log(drawStairs(5), "I\n I\n  I\n   I\n    I");