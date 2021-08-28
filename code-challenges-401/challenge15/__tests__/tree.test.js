"use strict";
const binaryTree = require("../binaryTree");
const BinaryTree = require("../tree");
// const { expect } = require("@jest/globals");

let binarySeaTree = new binaryTree();

beforeEach(() => {
  binarySeaTree = new binaryTree();
});

describe("Binary tree and binary search tree", () => {
  it("should successfully instantiate an empty tree", () => {
    expect(binarySeaTree.root).toEqual(null);
  });
  
  
  it("Should successfully instantiate a single root node", () => {
    binarySeaTree.add(5);
    expect(binarySeaTree.root.value).toEqual(5);
    expect(binarySeaTree.left).toBeFalsy();
    expect(binarySeaTree.right).toBeFalsy();
  });
  it("Should successfully return a collection from  preorder ", () => {
    binarySeaTree.add(3);
    binarySeaTree.add(1);
    binarySeaTree.add(5);
    binarySeaTree.add(4);
    binarySeaTree.add(6);
    let binaryTree = new BinaryTree();
    expect(binaryTree.preOrder(binarySeaTree.root)).toEqual([3, 1, 5, 4, 6]);
  });
  it("Should successfully return a collection from inorder ", () => {
    binarySeaTree.add(3);
    binarySeaTree.add(1);
    binarySeaTree.add(5);
    binarySeaTree.add(4);
    binarySeaTree.add(6);
    let binaryTree = new BinaryTree();
    expect(binaryTree.inOrder(binarySeaTree.root)).toEqual([1, 3, 4, 5, 6]);
  });
  it("Should successfully add a left ", () => {
    binarySeaTree.add(5);
    binarySeaTree.add(3);
    binarySeaTree.add(7);

    expect(binarySeaTree.root.value).toEqual(5);
    expect(binarySeaTree.root.left.value).toEqual(3);
    expect(binarySeaTree.root.right.value).toEqual(7);
  });
  it("Should successfully return a collection from a postorder ", () => {
    binarySeaTree.add(3);
    binarySeaTree.add(1);
    binarySeaTree.add(5);
    binarySeaTree.add(4);
    binarySeaTree.add(6);
    let binaryTree = new BinaryTree();
    expect(binaryTree.postOrder(binarySeaTree.root)).toEqual([
      1, 4, 6, 5, 3,
    ]);
  });
});
