class Lamp {
  constructor(color) {
    this.color = color;
    this.on = false;
  }

  state() {
    return `The lamp is ${this.on ? 'on' : 'off'}.`;
  }

  toggleSwitch() {
    this.on = !this.on;
  }
}


const myLamp = new Lamp("Blue")

console.log(myLamp.color, "Blue")
console.log(myLamp.on, false)
console.log(myLamp.state(), "The lamp is off.")
// now switch it on
myLamp.toggleSwitch()
console.log(myLamp.state(), "The lamp is on.")
