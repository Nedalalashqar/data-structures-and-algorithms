'use strict'

function inserationSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let z = i; z > 0; z--) {
            if (array[z] < array[z - 1]) {
                const swip = array[z];
                array[z] = array[z - 1];
                array[z - 1] = swip;
            } else {
                break;
            }
        }
    }
    return array;
}
function ReverseSorted(array) {
    for (let i = 1; i < array.length; i++) {
        for (let z = i; z > 0; z--) {
            if (array[z] > array[z - 1]) {
                const swip = array[z];
                array[z] = array[z - 1];
                array[z - 1] = swip;
            } else {
                break;
            }
        }
    }
    return array;
}
console.log(inserationSort([5, 4, 2, 1, 7, 8]));
console.log(ReverseSorted([5, 4, 2, 1, 7, 8]));

module.exports= {inserationSort,ReverseSorted}
