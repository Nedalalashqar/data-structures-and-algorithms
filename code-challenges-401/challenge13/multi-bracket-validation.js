'use strict';

const Stack = require('./stacks-and-queues').Stack;

function brackets(str) {
    if (!str) return false;
    let arrBrackets = [];
    let split = str.split('');
    for (let i = 0; i < split.length; i++) {
        if (split[i] === '(') arrBrackets.push(1);
        if (split[i] === ')') arrBrackets.push(-1);
        if (split[i] === '{') arrBrackets.push(2);
        if (split[i] === '}') arrBrackets.push(-2);
        if (split[i] === '[') arrBrackets.push(3);
        if (split[i] === ']') arrBrackets.push(-3);
    }
    if (arrBrackets.length <= 1) return false;
    if (arrBrackets[0] < 0) return false;
    const stacked = new Stack();
    let length = arrBrackets.length;
    for (let i = 0; i < length; i++) {
        let brackets = arrBrackets.shift();
        console.log('before', stacked.top)
        if (!stacked.top) {
            stacked.push(brackets);
        } else if (brackets > 0) {
            stacked.push(brackets);
        } else if ((brackets * -1) === stacked.top.value) { 
            stacked.pop();
        } else {
            return false;
        }
        console.log('after', stacked.top)
    }
    return true;
}

module.exports = {brackets};
