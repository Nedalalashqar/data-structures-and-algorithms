'use strict';
const {KTree,fizzBuzz} = require('../fizz-buzz-tree.js');
const Node = require('../node')

let noded;
let int;
let array2;
let array3;
let array4;
let arrayTops;
let tree;
let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let ten;
let eleven;

describe('Binary Tree', () => {
  beforeAll(() => {
    one = new Node(1);
    two = new Node(2);
    three = new Node(3);
    four = new Node(4);
    five = new Node(5);
    six = new Node(6);
    seven = new Node(7);
    eight = new Node(15);
    nine = new Node(9);
    ten = new Node(10);
    eleven = new Node(11);
    noded = new Node(15);
    int = new Node(7);
    array4 = [noded,int];
    six.children = array4;
    array2 = [five,six,seven];
    array3 = [eight,nine,ten];
    two.children = array2;
    three.children = array3;
    four.children.push(eleven);
    arrayTops = [two,three,four];
    one.children = arrayTops;
    tree = new KTree(one,3);
  });
  it('initiate node',()=>{
    let node = new Node(1);
    expect(node.value).toEqual(1);
    expect(node.children.length).toEqual(0);
  });
  it('read the children' ,()=>{
    expect(one.children.length).toEqual(3);
    expect(one.children[0].value).toEqual(2);
  });
  it('initiate tree',()=>{
    let tree3 = new KTree();
    expect(tree3.root).toEqual(null);
    expect(tree3.order).toEqual(null);
  });
  it('return tree modified by function',()=>{
    let treeNew= fizzBuzz(tree);
    expect(treeNew.root).toBeTruthy();
    expect(treeNew.order).toEqual(3);
    expect(treeNew.root.value).toEqual('1');
    expect(treeNew.root.children[1].value).toEqual('fizz');
    expect(treeNew.root.children[0].children[0].value).toEqual('buzz');
    expect(treeNew.root.children[0].children[1].children[0].value).toEqual('fizzbuzz');
  });
  it('throw an error',()=>{
    let treeNew = new KTree();
    const t = ()=>{
      fizzBuzz(treeNew);
    };
    expect(t).toThrow(Error);
  });
});
