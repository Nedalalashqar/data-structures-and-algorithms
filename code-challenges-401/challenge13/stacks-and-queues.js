'use strict';

class Stack {
    constructor() {
        this.stor = {};
        this.top = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val, this.top || null);
        this.size++;
        this.stor[this.size] = newNode;
        this.top = this.stor[this.size];
    }
    pop() {
        if (this.isEmpty()) throw new Error('Cannot pop()');
        let popped = this.top;
        delete this.stor[this.size]; 
        this.size--;
        this.top = this.stor[this.size] || null;
        return popped;
    }
    peek() {
        if (this.isEmpty()) throw new Error('Cannot peek()');
        return this.top;
    }
    isEmpty() {
        return this.size === 0 ? true : false;
    }
}

class Queue {
    constructor() {
        this.stor = {};
        this.fronted = null;
        this.reared = null;
        this.frontedIndex = 0;
        this.rearedIndex = 0;
        this.size = 0;
    }
    enqueue(val) {
        let newNode = new Node(val, null); 
        this.stor[this.rearedIndex] = newNode;
        this.fronted = this.stor[this.frontedIndex];
        this.reared = this.stor[this.rearedIndex];
        this.rearedIndex++;
        this.size = this.rearedIndex - this.frontedIndex;
        if (this.size > 1) {
            this.stor[this.rearedIndex - 2].next = this.stor[this.rearedIndex - 1];
        }
    }
    dequeue() {
        if (this.isEmpty()) throw new Error('Cannot dequeue()');

        let dequeued = this.fronted;
        delete this.stor[this.frontedIndex];
        this.frontedIndex++;
        this.fronted = this.stor[this.frontedIndex] || null;
        this.size = this.rearedIndex - this.frontedIndex;
        return dequeued;
    }
    peek() {
        if (this.isEmpty()) throw new Error('Cannot peek()');
        return this.fronted;
    }
    isEmpty() {
        return this.size === 0 ? true : false;
    }
}

class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

module.exports = {
    Stack,
    Queue
};
