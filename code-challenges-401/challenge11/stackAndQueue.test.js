'use strict';

const Queue = require('./queue');
const stack = require('./stack');

describe('test', () => {
    it('push Queue', () => {
        let QueueN = new Queue();
        QueueN.push(1);
        expect(QueueN.peek()).toEqual([1])
    })
    it('pop Queue', () => {
        let QueueN = new Queue();
        QueueN.pop();
        expect(QueueN.pop()).toEqual('exption')
    })
    it('push Queue', () => {
        let QueueN = new Queue();
        QueueN.push(1);
        QueueN.push(2);
        expect(QueueN.peek()).toEqual([1, 2])
    })
    it('push Queue', () => {
        let QueueN = new Queue();
        QueueN.push(1);
        QueueN.push(3);
        QueueN.push(2);
        QueueN.pop();
        expect(QueueN.peek()).toEqual([3, 2])
    })
    it('push Queue', () => {
        let QueueN = new Queue();
        QueueN.push(1);
        QueueN.push(3);
        QueueN.push(2);
        expect(QueueN.isEmpty()).toEqual(false)
    })
    it('push Queue', () => {
        let QueueN = new Queue();
        expect(QueueN.isEmpty()).toEqual(true)
    })
})

describe(' stack', () => {
    it('push stack', () => {
        let stackN = new stack();
        stackN.push(1);
        expect(stackN.peek()).toEqual([1])
    })
    it('pop stack', () => {
        let stackN = new stack();
        stackN.pop();
        expect(stackN.pop()).toEqual('exption')
    })
    it('push stack', () => {
        let stackN = new stack();
        stackN.push(1);
        stackN.push(2);
        expect(stackN.peek()).toEqual([1, 2])
    })
    it('push stack', () => {
        let stackN = new stack();
        stackN.push(1);
        stackN.push(3);
        stackN.push(2);
        stackN.pop();
        expect(stackN.peek()).toEqual([1,3])
    })
    it('push stack', () => {
        let stackN = new stack();
        stackN.push(1);
        stackN.push(3);
        stackN.push(2);
        expect(stackN.isEmpty()).toEqual(false)
    })
    it('push stack', () => {
        let stackN = new stack();
        expect(stackN.isEmpty()).toEqual(true)
    })
})
