'use strict';
const LinkedList=require('../linked-List');
describe('test on Linked Lists',()=>{
  
  let linkedList=new LinkedList();
  it(' empty linked',()=>{
    expect(linkedList.head).toBeNull();
  });

  it(' insert at linked',()=>{
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
  });

  it('point on first node',()=>{
    expect(linkedList.head.value).toEqual(1);
  });

  it('add more than node ',()=>{
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.head.value).toEqual(3);
  });

  it('check for value if it inside node or not',()=>{
    expect(linkedList.includes(3)).toBeTruthy();
    expect(linkedList.includes(4)).toBeFalsy();
  });

  it('return all linked',()=>{
    let newLinkedList=new LinkedList();
    expect(linkedList.toString()).toEqual('{3} -> {null}');
    expect(newLinkedList.toString()).toEqual('{null}');
  });

  it('add node on first', ()=> {
    linkedList.insertBefore(3,4);
    expect(linkedList.head.value).toEqual(3);
    expect(linkedList.toString()).toEqual('{3} -> {null}');
  });

  it('insert after middle node', ()=> {
    linkedList.insertAfter(3, 7);
    console.log( linkedList)
    expect(linkedList.toString()).toEqual('{3} -> {7} -> {null}');
  });

  it('add node on end', ()=> {
    linkedList.insertAfter(1, 0);
    expect(linkedList.toString()).toEqual('{3} -> {7} -> {null}');
  });

  it('add node on end', ()=> {
    linkedList.kthFromEnd();
    expect(linkedList.kthFromEnd()).toBeTruthy();
  });
   
});
