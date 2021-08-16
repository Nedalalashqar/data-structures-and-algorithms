'use strict'
const Node=require('./node');
class linkedList{
    constructor(){
        this.head=null;
    }
    append(value) {
        let current = this.head;
      console.log('value',value);
        while (current) {
          if (current.next === null) {
            console.log(current.next);
            current.next = new Node(value);
            console.log(current.next);
            return;
          }
          current = current.next;
        }
      }  
      insert(value){
        try {
          this.head = new Node(value) ;
          console.log(`Insert ${this.head}`);
        }
        catch(error) {
          console.error(`Error inserting ${error}`);
        }
      }
      includes(value) {
        let current = this.head;
        while (current) {
          if (value === current.value) {
            return true;
          } else if (current.next === null) {
            return false;
          } else {
            current = current.next;
          }
        }
      }
      toString() {
        let current= this.head;
        let string = '';
        while (current) {
          let stringTwo = current.value;
          current = current.next;
          string += `{${stringTwo}} -> `;
        }
        string += '{null}';
        return string;
      }
    insertBefore(value, newValue) {
    let current = this.head;
    let newNode = new Node(newValue);
    while (current.next !== null) {
      if (current.value === value) {
        newNode.next = current;
        this.head = newNode;
      } else if (current.next.value === value) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      }
      current = current.next;
    }
  }
  insertAfter(value, newValue){
    let node=new Node(newValue);
    if(this.head){
      let current=this.head;
      while(current){
        if(current.value===value){
          let temp=current.next;
          current.next=node;
          node.next=temp;
          return ;
        }
        current=current.next;
      }
    }
    return ;
  }
  kthFromEnd(k = 0) {
    if(isNaN(k))
     { throw new Error('Invalid K'); }
    if(this.size < k || k < 0) 
    { throw new Error('k not found'); }
    if(!this.size) 
    { throw new Error('not have nodes linked'); }
    if(this.size === 1 || this.size === k) 
    { return this.head.value; }
    let current = this.head;
    let res = this.head.value;
    for(let i = 0; i < (this.size - k); i++) {
      res = current.value;
      current = current.next;
    }
    return res;
  }
}
let newlink = new linkedList();
console.log(`Head linked ${newlink}`);
  newlink.append('samah');
  newlink.append('noor')
  console.log('newlink',newlink.toString());
    let val1 = 'nedal';
    let val2 = 'rawan'  
    let val3 = 'qasem'
    newlink.insert(val1);
    newlink.insert(val2);
    newlink.insert(val3);
    console.log(`new ${newlink}`);
    console.log('newlink',newlink.toString());
    newlink.includes('nedal')
    newlink.toString();
module.exports=linkedList;