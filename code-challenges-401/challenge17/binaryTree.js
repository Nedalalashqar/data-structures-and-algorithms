'use strict';
const Node= require('./node');


class BinaryTree {
    constructor(root=null) {
        this.root = root;
    }
    preOrder() {
        let res = [];
        let raverse = (node) => {
            res.push(node.data);
            if (node.left) raverse(node.left);
            if (node.right) raverse(node.right);
        }
        raverse(this.root);
        return res;
    }
    inOrder() {
        let res = [];
        let raverse = (node) => {
            if (node.left) raverse(node.left);
            res.push(node.data);
            if (node.right) raverse(node.right);
        }
        raverse(this.root);
        return res;
    }
    postOrder() {
        let res = [];
        let raverse = (node) => {
            if (node.left) raverse(node.left);
            if (node.right) raverse(node.right);
            res.push(node.data);
        }
        raverse(this.root);
        return res;
    }
}
const breadthFirst=(root)=>{
    const queBreadth=[root];
    let array=[];
    while(queBreadth.length>0){
        let cur=queBreadth.shift();
        console.log(cur.data)
        array.push(cur.data);
        if(cur.left!==null){
            queBreadth.push(cur.left);
        }
        if(cur.right!==null){
            queBreadth.push(cur.right);
        }
    }
    return array;
};

module.exports = {BinaryTree,breadthFirst};