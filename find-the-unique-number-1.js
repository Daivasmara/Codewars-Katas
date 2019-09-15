function findUniq(arr) {
    for (let i = 1; i < arr.length; i++) {
        if(arr[0] !== arr[1] && arr[0] !== arr[2]) return arr[0]
        if(arr[0] !== arr[i]){
            return arr[i]
        }
    }
}

console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
console.log(findUniq([10, 3, 3, 3]), 10);
console.log(findUniq([3, 3, 3, 10]), 10);