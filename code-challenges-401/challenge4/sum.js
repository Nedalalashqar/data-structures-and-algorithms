  'use strict';

function arrSum(arr) {
    var valSum = arr.map(function (item) {
        return item.reduce(function (a, b) { return a + b; }, 0);
    });
    return valSum
}
module.exports = arrSum;