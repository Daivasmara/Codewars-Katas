function numericals(s) {
  let characters = {};
  let result = [];
  let arr = s.split('');

  for(let i = 0; i < arr.length; i++){
    if(!characters[arr[i]]){
      characters[arr[i]] = [];
    }
    characters[arr[i]].push(arr[i])
    result.push(characters[arr[i]].length);
  }

 return result.join('');
}

console.log(numericals("Hello, World!") === "1112111121311");
console.log(numericals("Hello, World! It's me, JomoPipi!") === "11121111213112111131224132411122");
console.log(numericals("hello hello") === "11121122342");
console.log(numericals("Hello") === "11121");
console.log(numericals("aaaaaaaaaaaa") === "123456789101112");