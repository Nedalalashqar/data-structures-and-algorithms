'use strict'

const Node = require('./node')
  
  class binaryTree {
    constructor() {
      this.root = null;
    }
    add(data) {
      const node = this.root;
      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        const seaTree = function(node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return seaTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return seaTree(node.right);
            }
          } else {
            return null;
          }
        };
        return seaTree(node);
      }
    }
    inOrder() {
        if (this.root == null) {
          return null;
        } else {
          let res = new Array();
          function traverseInOrder(node) {       
            node.left && traverseInOrder(node.left);
            res.push(node.data);
            node.right && traverseInOrder(node.right);
          }
          traverseInOrder(this.root);
          return res;
        };
      }
    preOrder() {
      if (this.root == null) {
        return null;
      } else {
        let res = new Array();
        function traversePreOrder(node) {
          res.push(node.data);
          node.left && traversePreOrder(node.left);
          node.right && traversePreOrder(node.right);
        };
        traversePreOrder(this.root);
        return res;
      };
    }
    postOrder() {
      if (this.root == null) {
        return null;
      } else {
        let res = new Array();
        function traversePostOrder(node) {
          node.left && traversePostOrder(node.left);
          node.right && traversePostOrder(node.right);
          res.push(node.data);
        };
        traversePostOrder(this.root);
        return res;
      }
    }
    findMax() {
        let cur = this.root;
       
        while (cur.right ) {
          cur = cur.right;
        }
        return cur.data;
     }
}
  const binary = new binaryTree();
  binary.add(9);
  binary.add(4);
  binary.add(17);
  binary.add(3);
  binary.add(6);
  binary.add(22);
  binary.add(5);
  binary.add(7);
  binary.add(20);

  console.log('inOrder--------->' + binary.inOrder());
  console.log('preOrder----------->' + binary.preOrder());
  console.log('postOrder-------> ' + binary.postOrder());
  console.log('findMax--------->' + binary.findMax());
  module.exports=binaryTree