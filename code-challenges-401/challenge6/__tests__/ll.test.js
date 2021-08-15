'use strict';

const LinkedList=require('../linked-List');

describe('Singly Linked Lists',()=>{
  let linkedList=new LinkedList();
  it('instantiate empty linked ',()=>{
    expect(linkedList.head).toBeNull();
  });
  it('Insert at linked ',()=>{
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
  });
  it('Head will  point to first node ',()=>{
    expect(linkedList.head.value).toEqual(1);
  });
  it('Insert more than one node ',()=>{
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.head.value).toEqual(3);   
  });
  it('Check values insude linked',()=>{
    expect(linkedList.includes(3)).toBeTruthy();
    expect(linkedList.includes(4)).toBeFalsy();
  });
  it(' Return data in linked it should equal like',()=>{
    let newLinkedList=new LinkedList();
    expect(linkedList.toString()).toEqual('{3} -> {null}');
    expect(newLinkedList.toString()).toEqual('{null}');
  });
  it('Can successfully insert node before first node', ()=> {
    linkedList.insertBefore(3,4);
    expect(linkedList.head.value).toEqual(3);
    expect(linkedList.toString()).toEqual('{3} -> {null}');
  });
  it('Can successfully insert after node in middle of linked ', ()=> {
    linkedList.insertAfter(3, 7);
    expect(linkedList.toString()).toEqual('{3} -> {7} -> {null}');
  });
  it('Can successfully insert node after last node of linked ', ()=> {
    linkedList.insertAfter(1, 0);
    expect(linkedList.toString()).toEqual('{3} -> {7} -> {null}');
  });
});