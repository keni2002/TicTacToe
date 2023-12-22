// X = 1
// O = 2
// - = 0

let arr = [
    [1,0,1],
    [1,1,2],
    [1,0,2]
]
function finished(arr, size) {
    let equal = true
    let i = 0, j = 0
    //vertical
    for (i = 0; i < size; i++) {
        for (j = 0; j < size - 1; j++) {
            equal = arr[j][i] == arr[j + 1][i]
            if(!equal) break;
        }
        
        if (equal && arr[j][i] !== 0) return 4
        equal = true
    }
    //horizontal
    for (i = 0; i < size; i++) {
        for (j = 0; j < size - 1; j++) {
            equal = arr[i][j] == arr[i][j + 1]
        }
        if (equal && arr[i][j] !== 0) return 5
        equal = true
    }
    //diagonal
    if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[2][2] != 0) return 6
    if (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][0] && arr[2][0] != 0) return 3

    return -1;
}

console.log(finished(arr, 3))