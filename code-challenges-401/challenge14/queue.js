'use strict';

const Node = require('./node');

class Queue {
  constructor() {
    this.top = 0;
    this.bot = 0;
    this.memory = {};
  }
  enqueue (val){
    let node = new Node(val);
    this.memory[this.top] = node;
    this.top++;
  }
  dequeue(){
    this.exceptEmpty();
    let deletedElement = this.memory[this.bot];
    delete this.memory[this.bot];
    this.bot++;
    return deletedElement;
  }
  peek(){
    this.exceptEmpty();
    return this.memory[this.bot];
  }
  size(){
    return this.top-this.bot;
  }
  isEmpty(){
    return this.size ===0;
  }
  exceptEmpty(){
    if (this.isEmpty()){
      throw new Error ('Empty');
    }
  }
}

module.exports = Queue;
