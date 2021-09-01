'use strict';

const BinaryTree = require('../sumtree');
const Node = require('../node');
describe('Sum Tree Tree', ()=>{
    it('Sum Tree', ()=> {
        let one = new Node(8);
        let two = new Node(3);
        let three = new Node(10);
        let four = new Node(1);
        let five = new Node(6);
        let six = new Node(14);
        let seven = new Node(4);
        let eight = new Node(7);
        let nine = new Node(13);
        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five
        five.left = seven;
        five.right = eight;
        three.right = six;
        six.left = nine;
        let expectOutput =24;
        let treeSum = new BinaryTree()
        expect(treeSum.treeSum(one)).toEqual(expectOutput);
    });
    it('Sum Tree bad', ()=> {
        let treeSum = new BinaryTree()
        expect(treeSum.treeSum()).toEqual('There is no root');
    });
});