// "use strict";

// const BinaryTree = require("../binaryTree");

// describe("Binary Search Tree", () => {
//   it("Can successfully return collection from postorder",()=>{
//     let result=[3,5,7,6,4,20,22,17,9]
//     let binary=new BinaryTree();
//     binary.add(9);
//     binary.add(4);
//     binary.add(17);
//     binary.add(3);
//     binary.add(6);
//     binary.add(22);
//     binary.add(5);
//     binary.add(7);
//     binary.add(20);
//     expect(binary.postOrder()).toEqual(result);
//   })  
//   it("Can successfully return collection from preorder",()=>{
//     let result=[9,4,3,6,5,7,17,22,20]
//     let binary=new BinaryTree();
//     binary.add(9);
//     binary.add(4);
//     binary.add(17);
//     binary.add(3);
//     binary.add(6);
//     binary.add(22);
//     binary.add(5);
//     binary.add(7);
//     binary.add(20);
//     expect(binary.preOrder()).toEqual(result);
//   })
//   it("find Max number",()=>{
//     let binary=new BinaryTree();
//     binary.add(9);
//     binary.add(4);
//     binary.add(17);
//     binary.add(3);
//     binary.add(6);
//     binary.add(22);
//     binary.add(5);
//     binary.add(7);
//     binary.add(20);
//     expect(binary.findMax()).toEqual(22);
//   })
//   it("Can successfully return collection from inorder",()=>{
//     let result=[ 3,4,5,6,7,9,17,20,22]
//     let binary=new BinaryTree();
//     binary.add(9);
//     binary.add(4);
//     binary.add(17);
//     binary.add(3);
//     binary.add(6);
//     binary.add(22);
//     binary.add(5);
//     binary.add(7);
//     binary.add(20);
//     expect(binary.inOrder()).toEqual(result);
//   })
//   it("find Max number",()=>{
//     let binary=new BinaryTree();
//     binary.add(9);
//     binary.add(4);
//     binary.add(17);
//     binary.add(3);
//     binary.add(6);
//     binary.add(22);
//     binary.add(5);
//     binary.add(7);
//     binary.add(50);
//     expect(binary.findMax()).toEqual(50);
//   })
// });


'use strict';

const { expect } = require('@jest/globals');
const {BinaryTree} = require('../binaryTree');
const Node = require('../node');
let tree = null;
describe('Binary Tree', ()=>{
    beforeAll(()=> {
        let one = new Node(2);
        let two = new Node(7);
        let three = new Node(5);
        let four = new Node(2);
        let five = new Node(6);
        let six = new Node(9);
        let seven = new Node(5);
        let eight = new Node(11);
        let nine = new Node(4);

        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five
        five.left = seven;
        five.right = eight;
        three.right = six;
        six.left= nine;
        tree = new BinaryTree(one);
    });
    it('constructor', ()=>{
      const newTree = new BinaryTree();
      expect(newTree.root).toBeNull();
      expect(tree.root.data).toEqual(2);
  });
    it('postOrder', ()=> {
      let expectedOutput = [2,5,11,6,7,4,9,5,2];
      let postOrder = tree.postOrder();
      console.log("postOrder", postOrder);
      expect(postOrder).toEqual(expectedOutput);
  });
    it('preOrder', ()=> {
        let expectedOutput = [2,7,2,6,5,11,5,9,4];
        let preOrder = tree.preOrder();
        console.log("preOrder", preOrder);
        expect(preOrder).toEqual(expectedOutput);
    });
   
    it('inOrder', ()=> {
        let expectedOutput = [2,7,5,6,11,2,5,4,9];
        let inOrder = tree.inOrder();
        console.log("inOrder", inOrder);
        expect(inOrder).toEqual(expectedOutput);
    });
});
