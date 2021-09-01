'use strict';

const Node = require('./node')
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    treeSum (root) {
        let res = 0;
        const que = [root];
        if(root){
            while (que.length > 0) {
                let current = que.shift();
                {
                    if(current.value%2!==0)
                    res+=current.value;
                }              
                if (current.left)
                    que.push(current.left)
                if (current.right)
                    que.push(current.right)
        
            }
            return res
    
        }
        else return 'There is no root';
    }
}
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
let tree = new BinaryTree();
const check = tree.treeSum(one)
console.log(check);

module.exports = BinaryTree;