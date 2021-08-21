'use strict';

class Queue {
    constructor() { this.storage = new Array(); }
    enqueue(item) { this.storage.push(item); }
    dequeue() { return this.storage.shift(); }
    peek() { return this.storage[0]; }
    isEmpty() {
        if (this.peek() == undefined) { return true }
        else return false
    }
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
const q = queue.peek();
queue.dequeue();
queue.dequeue();
queue.dequeue();
const q2 = queue.peek();
const e = queue.isEmpty();

module.exports = Queue;