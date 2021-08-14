'use strict';

const Node = require('./node');

class LinkedList {
  constructor () {
    this.head = null;
    console.log(`constructor ${this.head}`);
  }
  insert(value){
    try {
      this.head = new Node(value) ;
      console.log(`insert ${this.head}`);
    }catch(error) {
      console.error(`Error inserting ${error}`);
    }
  }
  include(value){
    try {
      let boolean = false ;
      let test = this.head;
      console.log(`test ${this.head}`);
      while(test){
        if( test.value == value){
            boolean =true ;
          console.log(`inclouding ${boolean}`);
          return boolean;
        }
        test = test.next;
      }
      console.log(`inclouding ${boolean}`);
      return boolean;
    }catch(error) {
      console.error(`Error searching ${error}`);
    }
  }
  toString(){
    try {
      let linkedArray = [];
      let head = this.head ;
      while(head){
        linkedArray.push( '{ ');
        linkedArray.push(head.value);
        linkedArray.push(' }');
        linkedArray.push(' -> ');
        head=head.next ;
      }
      linkedArray.unshift('"');
      linkedArray.push('NULL"');
      let newArray= linkedArray.join('');
      console.log(newArray);
      return newArray;
    }catch(error) {
      console.error(`Error convering ${error}`);
    }
  }
}
let newlinked = new LinkedList();
console.log(` head of linked list ${newlinked}`);
    let value1 = 'qasem';
    let value2 = 'samah'  
    let value3 = 'nedal'
    newlinked.insert(value1);
    newlinked.insert(value2);
    newlinked.insert(value3);
    console.log(newlinked);
    newlinked.include('nedal')
    newlinked.toString();

module.exports = LinkedList ;