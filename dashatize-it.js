function dashatize(num) {
    if(isNaN(num)) return 'NaN';

    let arr = num.toString().split('').map(Number).filter(x => !isNaN(x));
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            result.push('-', arr[i], '-');
        } else {
            result.push(arr[i]);
        }
    }

    if(result[0] === '-') {
        result.shift();
    }

    if(result[result.length - 1] === '-') {
        result.pop();
    }

    return result.join('').replace(/(--)+/g, '-');
};

console.log(dashatize(274), "2-7-4");
console.log(dashatize(5311), "5-3-1-1");
console.log(dashatize(86320), "86-3-20");
console.log(dashatize(974302), "9-7-4-3-02");
console.log(dashatize(NaN), "NaN");
console.log(dashatize(0), "0");
console.log(dashatize(-1), "1");
console.log(dashatize(-28369), "28-3-6-9");
