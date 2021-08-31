'use strict';

const Node= require('./node');

class KTree{
  constructor(node = null, k = null){
    this.root = node;
    this.order= k;
  }
}
function fizzBuzz(tree){
  if(!tree.root) throw new Error('Invalid Input: Empty Tree');
  let array=[];
  function testVal(value){
    let sco;
    if(!(value%3) ||!(value%5) ){
      if(!(value%3) ) sco = 'fizz';
      if(!(value%5)) sco = 'buzz';
      if(!(value%3) && !(value%5) ) sco = 'fizzbuzz';
    }else {sco= value.toString();}
    return sco;
  }
  let res = testVal(tree.root.value);
  array.push(res);
  let tops = new Node();
  tops = tree.root;
  tops.value = res;
  function raverse(noded){
    if(noded){
      noded.forEach(child =>{
        let res =testVal(child.value);
        array.push(res);
        if(child.children.length>0) {
          raverse(child.children);
        }
        child.value = res;
      });}
  }
  raverse(tops.children);
  return new KTree(tops,tree.order);
}

module.exports={
  KTree:KTree,
  fizzBuzz:fizzBuzz
};
