'use strict';

class Stack {
    constructor() {
        this.storage = new Array();
        this.top = null;
    }
    push(item) {
        this.storage.unshift(item);
        this.top = item;
    }
    peek() { return this.top; }
    pop() {
        let item = this.storage.shift();
        this.top = this.storage[0];
        return item;
    }
    isEmpty() {
        if (this.top === undefined) { return true; }
        else return false;
    }
}

module.exports = Stack;
const stack = new Stack();
stack.push(4);
stack.push(5);
stack.push(6)
const q = stack.peek();
const qo = stack.pop();
const q1 = stack.peek();
const empty = stack.isEmpty();
stack.pop();
stack.pop();
const p2 = stack.peek();
const empty1 = stack.isEmpty();
