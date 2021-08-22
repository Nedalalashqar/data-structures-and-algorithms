'use strict'

class Queue {
    constructor(item) {
        this.item = item;
        this.arrData = [];
    }
    push(item) {
        if (this.arrData.length >= 0) {
            this.arrData.push(item)
        }
    }
    pop() {
        if (this.arrData.length > 0) {
            let x = this.arrData.shift()
            return x
        } else {
            return 'exption'
        }
    }
    peek() {
        let x = this.arrData
        return x
    }
    isEmpty() {
        if (this.arrData.length > 0) {
            return false
        } else {
            return true
        }
    }
}

const queue = new Queue();

queue.push(2)
queue.push(7)
queue.push(1)
queue.push(6)
queue.pop()
queue.pop()
queue.peek()
console.log(queue.isEmpty())


module.exports = Queue
