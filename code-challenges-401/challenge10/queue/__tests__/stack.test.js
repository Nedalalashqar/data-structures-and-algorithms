'use strict';

const Queue = require('../index');

describe('Queue', ()=> {
    it('Successfully dequeue out of queue expected value', ()=> {
        let queue = new Queue();
        queue.enqueue(7);
        expect(queue.dequeue()).toEqual(7);
    });
    it('Successfully enqueue into queue', ()=> {
        let queue = new Queue();
        expect(queue instanceof Queue).toBeTruthy();
    });
    it('Empty queue after multiple dequeues', ()=> {
        let queue = new Queue();
        queue.enqueue(7);
        queue.enqueue(5);
        queue.enqueue(6);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toEqual(true);
    });
    it('Successfully enqueue multiple values into queue', ()=> {
        let queue = new Queue();
        queue.enqueue(7);
        expect(queue.peek()).toEqual(7);
        queue.enqueue(5);
        expect(queue.peek()).toEqual(7);
    });
    it('Calling peek on empty queue raises exception', ()=> {
        let queue = new Queue();
        queue.enqueue(6);
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toEqual(true);
    });
    it('Successfully peek into a queue ', ()=> {
        let queue = new Queue();
        queue.enqueue(7);
        queue.enqueue(5);
        queue.enqueue(6);
        queue.enqueue(7);
        expect(queue.peek()).toEqual(7);
    });
    it('Successfully instantiate an empty queue', ()=> {
        let queue = new Queue();
        expect(queue.isEmpty()).toEqual(true);
    });
});