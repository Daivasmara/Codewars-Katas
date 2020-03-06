function expandedForm(num) {
    let arr = num.toString().split('').map(Number);
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            result.push(arr[i] + '0'.repeat(arr.length - (i + 1)))
        };
    }

    return result.join(' + ');
}

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');