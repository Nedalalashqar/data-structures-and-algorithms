'use strict'

class Stack {
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
            let y = this.arrData.pop()
            console.log(y);
            return y
        } else {
            return 'exption'
        }
    }
    peek() {
        let y = this.arrData
        console.log(y);
        return y
    }
    isEmpty() {
        if (this.arrData.length > 0) {
            return false
        } else {
            return true
        }
    }
}

const stack = new Stack();

console.log(stack.isEmpty())
stack.push(2)
stack.push(7)
stack.push(1)
stack.push(6)
stack.pop()
stack.pop()
stack.pop()
stack.peek()
console.log(stack.isEmpty())

module.exports = Stack
