'use strict';
const Node = require ('./Node');

class LinkedList {
  constructor(){
    this.head = null;
    this.length=0;
  }
  insert (value){
    const node = new Node(value);
    if (!this.head){
      this.head = node;
      this.length++;
    }else {
      let curNode = this.head;
      while (curNode.next){
        curNode = curNode.next;
      }
      curNode.next=node;
      this.length++;
    }
  }
  include (value){
    let curNode = this.head;
    let reslt=false;
    while(curNode.next){
      curNode = curNode.next;
      if(curNode.value === value){
        reslt = true;
        return reslt;
      }
    }
    return reslt;
  }
  toString (){
    let pointer = this.head;
    let reslt ='';
    while (pointer){
      reslt += `{${pointer.value}}->`;
      pointer =pointer.next;
      if(!pointer){
        reslt += 'NULL';
      }
    }
    return reslt;
  }
  append (value){
    let node = new Node(value);
    this.length++;
    if(!this.head){
      this.head=node;
    }else {
      let desNode = this.head;
      while (desNode.next){
        desNode = desNode.next;
      }
      desNode.next = node;
    }
  }
  insertAfter (value,newValue){
    let node = new Node (newValue);
    let nodeLoop = this.head;
    while(nodeLoop){
      if(nodeLoop.value === value){
        let temNext = nodeLoop.next;
        this.length++;
        nodeLoop.next = node;
        node.next = temNext;
        return;
      }
      nodeLoop = nodeLoop.next;
    }
    return 'Exception';
  }
  insertBefore (value,newValue){
    let node = new Node (newValue);
    let nodeLoop = this.head;
    while(nodeLoop.next){
      if(nodeLoop.next.value === value){
        let temNext = nodeLoop.next;
        this.length++;
        nodeLoop.next = node;
        node.next = temNext;
        return;
      }
      nodeLoop = nodeLoop.next;
    }
    return 'Exception';
  }
  kthFromEnd(k){
    let nodeLoop = this.head;
    let position = this.length-1-k;
    let index=0;
    while(nodeLoop){
      if(position === index){
        return nodeLoop.value;
      }
      nodeLoop = nodeLoop.next;
      index++;
    }
    return 'Exception';
  }
}
const ll = new LinkedList();
console.log('ll----->befor',ll.toString());
ll.insert(2);
ll.insert(3);
ll.insert(4);
console.log('ll----->after',ll.toString());
ll.append(5);
console.log('ll---->after2',ll.toString());
const inc = ll.include(3);
console.log('inc ', inc); 
const inc2 = ll.include(1);
console.log('inc ', inc2); 
const inaf = ll.insertAfter(5,8)
console.log('ll----->after3',ll.toString());
ll.insertBefore(8,7)
console.log('ll---->after4',ll.toString());
ll.kthFromEnd(0);
console.log('ll----->after5',ll.toString());

module.exports = LinkedList;
