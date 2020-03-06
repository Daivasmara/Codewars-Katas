function deleteNth(arr, n) {
    let count = {};
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(!count[arr[i]]) {
            count[arr[i]] = [];
        }
        if (count[arr[i]].length < n) {
            count[arr[i]].push(arr[i])
            result.push(arr[i])
        }
    }
    return result
}


console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21])
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
