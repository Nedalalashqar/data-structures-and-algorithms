'use strict';

function sumNum(i) {
    if (i < 3) return 1;
    return sumNum(i - 1) + fib(i - 2)
}
console.log(sumNum(45));