function rgb(r, g, b) {
  const rgb = [r, g, b];

  for (let i = 0; i < rgb.length; i++) {
    if (rgb[i] > 255) {
      rgb[i] = 255;
    }
    if (rgb[i] < 0) {
      rgb[i] = 0;
    }
    const hexValue = rgb[i].toString(16);
    rgb[i] = hexValue.length < 2 ? '0' + hexValue : hexValue;
  }
  return rgb.join('').toUpperCase();
}

console.log(rgb(0, 0, 0), '000000')
console.log(rgb(79, 6, 278), '4F06FF')
console.log(rgb(300, 255, 255), 'FFFFFF')
console.log(rgb(173, 255, 47), 'ADFF2F')