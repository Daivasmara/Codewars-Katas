function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  this.MOVES = {
    n: 'n',
    s: 's',
    e: 'e',
    w: 'w',
  }
  
  this.position = [0, 0];

  this.moveUp = () => {
    this.position[0] += 1;
  }
  this.moveDown = () => {
    this.position[0] -= 1;
  }
  this.moveRight = () => {
    this.position[1] += 1;
  }
  this.moveLeft = () => {
    this.position[1] -= 1;
  }

  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === this.MOVES.n) {
      this.moveUp();
    }
    if (walk[i] === this.MOVES.s) {
      this.moveDown();
    }
    if (walk[i] === this.MOVES.e) {
      this.moveRight();
    }
    if (walk[i] === this.MOVES.w) {
      this.moveLeft();
    }
  }
  if (JSON.stringify(this.position) === JSON.stringify([0, 0])) {
    return true;
  }
  return false;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');
