'use strict'

function quickSort(arr, left, right) {
    let idx;
    if (arr.length > 1) {
        idx = partition(arr, left, right);
        if (left < idx - 1) { 
            quickSort(arr, left, idx - 1);
        }
        if (idx < right) {
            quickSort(arr, idx, right);
        }
    }
    return arr;
}

function swap(arr, leftIdx, rightIdx){
    let temp = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = temp;
}

function partition(arr, left, right) {
    let  pivot = arr[Math.floor((right + left) / 2)], 
        x = left,
        y = right; 
    while (x <= y) {
        while (arr[x] < pivot) {
            x++;
        }
        while (arr[y] > pivot) {
            y--;
        }
        if (x <= y) {
            swap(arr, x, y);
            x++;
            y--;
        }
    }
    return x;
}

let arr = [8,4,23,42,16,15];
let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);

module.exports = quickSort;