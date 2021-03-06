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
          console.log(`insert ${this.head}`);
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
        let current = this.head;
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
}
let newlink = new linkedList();
console.log(`Head of linked  ${newlink}`);
  newlink.append('noor');
  newlink.append('nedal')
  console.log('newlink',newlink.toString());
    let val1 = 'qasem';
    let val2 = 'rawan'  
    let val3 = 'samah'

module.exports=linkedList;