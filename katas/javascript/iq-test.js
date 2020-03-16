function iqTest(numbers) {
    let result = {
        0: [],
        1: []
    };
    let arr = numbers
                .split(" ")
                .map(Number)
                .map(num => num % 2);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            result[0].push(i + 1);
        } else {
            result[1].push(i + 1);
        }
    }
    return result[0].length < result[1].length ? result[0][0] : result[1][0];
}

console.log(iqTest("43 28 1 91"), 3);
console.log(iqTest("1 2 2"), 1);
