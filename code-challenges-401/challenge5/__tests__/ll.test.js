'use strict';

const LinkedList = require('../linked-list');
describe('linkedlist', () => {
  it('check head on linkedlist to be null',()=>{
    let linked = new LinkedList();
    expect(linked.head).toBeNull();
  });
  it('should insert new item to empty linked list', () => {
    let newLinked = new LinkedList();
    let value = 'nedal';
    newLinked.insert(value);
    expect(newLinked.head.value).toEqual(value);
    expect(newLinked.head.next).toBeNull();
  });
  it('add item', () => {
    let newLinked = new LinkedList();
    let newValue = 'nedal';
    newLinked.insert(newValue);
    expect(newLinked.head.value).toEqual(newValue);
    expect(newLinked.head.next).toBeNull();
  });
  it('insert item', () =>{
    let newLinked = new LinkedList();
    newLinked.insert('nedal');
    let value = 'alashqar' ;
    newLinked.insert(value);
    expect(newLinked.head.value).toEqual('alashqar');
  });
  it('checking if have node by send value', () =>{
    let newLinked = new LinkedList();
    newLinked.insert(2);
    newLinked.insert(4);
    let value1 = 4 ;
    let value2 = 1 ;
    newLinked.include(value1);
    newLinked.include(value2);
    expect(newLinked.include(value1)).toEqual(true);
    expect(newLinked.include(value2)).toEqual(false);
  });
  it('return all nodes', () =>{
    let newLinked = new LinkedList();
    newLinked.insert(5);
    newLinked.toString();
    expect(newLinked.toString()).toEqual(("\"{ 5 } -> NULL\""));
  });
});