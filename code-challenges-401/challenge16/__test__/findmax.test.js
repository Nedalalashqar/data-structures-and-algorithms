"use strict";

const BinaryTree = require("../binaryTree");

describe("Binary Search Tree", () => {
  it("Can successfully return collection from postorder",()=>{
    let result=[3,5,7,6,4,20,22,17,9]
    let binary=new BinaryTree();
    binary.add(9);
    binary.add(4);
    binary.add(17);
    binary.add(3);
    binary.add(6);
    binary.add(22);
    binary.add(5);
    binary.add(7);
    binary.add(20);
    expect(binary.postOrder()).toEqual(result);
  })  
  it("Can successfully return collection from preorder",()=>{
    let result=[9,4,3,6,5,7,17,22,20]
    let binary=new BinaryTree();
    binary.add(9);
    binary.add(4);
    binary.add(17);
    binary.add(3);
    binary.add(6);
    binary.add(22);
    binary.add(5);
    binary.add(7);
    binary.add(20);
    expect(binary.preOrder()).toEqual(result);
  })
  it("find Max number",()=>{
    let binary=new BinaryTree();
    binary.add(9);
    binary.add(4);
    binary.add(17);
    binary.add(3);
    binary.add(6);
    binary.add(22);
    binary.add(5);
    binary.add(7);
    binary.add(20);
    expect(binary.findMax()).toEqual(22);
  })
  it("Can successfully return collection from inorder",()=>{
    let result=[ 3,4,5,6,7,9,17,20,22]
    let binary=new BinaryTree();
    binary.add(9);
    binary.add(4);
    binary.add(17);
    binary.add(3);
    binary.add(6);
    binary.add(22);
    binary.add(5);
    binary.add(7);
    binary.add(20);
    expect(binary.inOrder()).toEqual(result);
  })
  it("find Max number",()=>{
    let binary=new BinaryTree();
    binary.add(9);
    binary.add(4);
    binary.add(17);
    binary.add(3);
    binary.add(6);
    binary.add(22);
    binary.add(5);
    binary.add(7);
    binary.add(50);
    expect(binary.findMax()).toEqual(50);
  })
});
