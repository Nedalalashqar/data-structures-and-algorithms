'use strict';


function binary(arr, key) {
    let sta = 0;
    let finsh = arr.length - 1;
    while (sta <= finsh) {
        let mid = Math.ceil((sta + finsh)/2);
        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] < key) {
            sta = mid + 1;
        } else {
            finsh = mid - 1;
        }
    }
    return -1;
}
module.exports = binary;

