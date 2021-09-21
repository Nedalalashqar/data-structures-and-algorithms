



![](https://i.ibb.co/5LG2ZZ4/code25.png)


# Pseudocode

"use strict";

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    add(val) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(val);
            return;
        } else {
            const treeSearch = function (node) {
                if (val < node.val) {
                    if (node.left === null) {
                        node.left = new Node(val);
                        return;
                    } else if (node.left !== null) {
                        return treeSearch(node.left);
                    }
                } else if (val > node.val) {
                    if (node.right === null) {
                        node.right = new Node(val);
                        return;
                    } else if (node.right !== null) {
                        return treeSearch(node.right);
                    }
                } else {
                    return null;
                }
            };
            return treeSearch(node);
        }
    }
    inOrder() {
        if (this.root == null) {
            return null;
        } else {
            let result = new Array();
            function traInOrder(node) {
                node.left && traInOrder(node.left);
                result.push(node.val);
                node.right && traInOrder(node.right);
            }
            traInOrder(this.root);
            return result;
        };
    }
}
class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
        this.sizeTow = 0;
    }
    hash(key) {
        return key % this.size
    }
    add(key, val) {
        let hash = this.hash(key);
        console.log(hash);
        if (!this.map[hash]) {
            this.map[hash] = val;
        }
        let entry = { [key]: val }
        this.map[hash] = entry;
        this.sizeTow++;
        return hash
    }
}
function tree_intersection(treeOne, treeTow) {
    let output = [];
    if (treeOne.root && treeTow.root) {
        let hashmap = new Hashmap(1024);
        let firstTreeval = treeOne.inOrder();
        firstTreeval.forEach(val => {
            hashmap.add(val);
        });
        let secondTreeval = treeTow.inOrder();
        secondTreeval.forEach(val => {
            let key = hashmap.hash(val);
            if (hashmap.map[key]) {
                output.push(Object.keys(hashmap.map[key]));
            }
        });
        return output;
    }
    else
        return 'Exception'
}

const treeOne = new BinaryTree();
treeOne.add(150);
treeOne.add(100);
treeOne.add(250);
treeOne.add(75);
treeOne.add(160);
treeOne.add(125);
treeOne.add(175);
treeOne.add(200);
treeOne.add(350);
treeOne.add(300);
treeOne.add(500);
const treeTow = new BinaryTree();
treeTow.add(42);
treeTow.add(100);
treeTow.add(600);
treeTow.add(15);
treeTow.add(160);
treeTow.add(200);
treeTow.add(350);
treeTow.add(125);
treeTow.add(175);
treeTow.add(4);
treeTow.add(500);

module.exports = { BinaryTree, tree_intersection }