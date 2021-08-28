"use strict";

class BinaryTree {
  constructor() {
    this.arr = [];
  }
  preOrder(root) {
    let preOrderede;
    if (root !== null) {
      this.arr.push(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
      preOrderede = this.arr;
      return preOrderede;
    }
  }
  postOrder(root) {
    if (root !== null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      this.arr[this.arr.length] = root.value;
      return this.arr;
    }
  }
  inOrder(root) {
    if (root !== null) {
      this.inOrder(root.left);
      this.arr[this.arr.length] = root.value;
      this.inOrder(root.right);
      return this.arr;
    }
  }
}

module.exports = BinaryTree;
