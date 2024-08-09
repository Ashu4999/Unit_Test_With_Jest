// find a number from array and return it else return -1
function findElement(arr, n, key) {
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == key)
            return i;

    return -1;
}

module.exports = { findElement };