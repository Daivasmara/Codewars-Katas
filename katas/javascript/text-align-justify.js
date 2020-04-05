/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {  
  const result = [];
  const arr = str.split(' ');
  let line = [];
  let characterCount = 0;
  let wordIndex = 0;
  while (wordIndex <= arr.length - 1) {
    while (characterCount + arr[wordIndex].length <= len) {
      line.push(arr[wordIndex]);
      characterCount += arr[wordIndex].length + 1;
      wordIndex++;
      if (wordIndex > arr.length - 1) {
        break;
      }
    }
    let characterRem = len - (characterCount - 1);
    let n = 0;
    while (characterRem > 0) {
      line[n] += " "
      if (n === line.length - 2 || line.length === 1) {
        n = 0;
      } else {
        n++;
      }
      characterRem--;
    }
    line[line.length - 1] = line[line.length - 1].trim();
    result.push(line.join(' '));
    line = [];
    characterCount = 0;
  }
  result[result.length - 1] = result[result.length - 1].replace(/  +/g, ' ');
  return result.join('\n');
};

console.log(justify("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.", 30));

