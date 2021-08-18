"use strict";

let LinkedList = require("../linked");

describe("Linked", () => {
  it("initial constructor()", () => {
    let listNew = new LinkedList();
    expect(listNew.head).toBeNull();
    expect(listNew.tail).toBeNull();
    expect(listNew.length).toEqual(0);
  });

  it("insert()", () => {
    let listNew = new LinkedList();
    listNew.insert(1);
    expect(listNew.head.value).toEqual(1);
    expect(listNew.head.next).toBeNull();
  });
  it("insert() node", () => {
    let listNew = new LinkedList();
    listNew.insert(1);
    listNew.append(2);
    expect(listNew.head.value).toEqual(1);
    expect(listNew.head.next.value).toEqual(2);
  });
  it("insertBefor()", () => {
    let listNew = new LinkedList();
    listNew.insert(1);
    listNew.append(2);
    listNew.append(3);
    listNew.insertBefore(2, 5);
    expect(listNew.head.value).toEqual(1);
    expect(listNew.head.next.value).toEqual(5);
  });
  it("insertAfter()  node", () => {
    let listNew = new LinkedList();
    listNew.insert(1);
    listNew.append(2);
    listNew.append(3);
    listNew.insertAfter(1, 4);
    expect(listNew.head.value).toEqual(1);
    expect(listNew.head.next.value).toEqual(4);
  });
  it("append()", () => {
    let listNew = new LinkedList();
    let initialVal = "First";
    listNew.append(initialVal);
    expect(listNew.head.value).toEqual(initialVal);
    let anthOne = "Second";
    listNew.append(anthOne);
    expect(listNew.head.next.value).toEqual(anthOne);
    expect(listNew.head.next.next).toBeNull();
    expect(listNew.head.value).toEqual(initialVal);
  });
  it("include()", () => {
    let listNew = new LinkedList();
    listNew.insert(1);
    listNew.append(2);
    expect(listNew.includes(2)).toEqual(true);
  });
  it("include() false", () => {
    let listNew = new LinkedList();
    listNew.insert(1);
    listNew.append(2);
    expect(listNew.includes(5)).toEqual(false);
  });
  it("toStrinf()", () => {
    let listNew = new LinkedList();
    listNew.insert(1);
    listNew.append(2);
    expect(listNew.toString()).toEqual("{1}->{2}->NULL");
  });
  it("kthFromEnd()", () => {
    let listNew = new LinkedList();
    listNew.insert(1);
    listNew.append(3);
    listNew.append(8);
    listNew.append(2);
    expect(listNew.kthFromEnd(5)).toEqual("error");
  });
  it("kthFromEnd()integer", () => {
    let listNew = new LinkedList();
    listNew.insert(1);
    listNew.append(3);
    listNew.append(8);
    listNew.append(2);
    expect(listNew.kthFromEnd(-1)).toEqual("error");
  });
  it("kthFromEnd() Where k and length of list are same", () => {
    let listNew = new LinkedList();
    listNew.insert(1);
    listNew.append(3);
    listNew.append(8);
    listNew.append(2);
    expect(listNew.kthFromEnd(4)).toEqual("error");
  });
  it("kthFromEnd() Where linked list is of size 1", () => {
    let listNew = new LinkedList();
    listNew.insert(1);
    expect(listNew.kthFromEnd(0)).toEqual(1);
  });
  it("kthFromEnd() Happy Path ", () => {
    let listNew = new LinkedList();
    listNew.insert(1);
    listNew.append(3);
    listNew.append(8);
    listNew.append(2);
    expect(listNew.kthFromEnd(2)).toEqual(3);
  });
  it('linkedListZip()',()=>{
    let listNew = new LinkedList();
    let link1=new LinkedList();
    link1.insert(1);
    link1.append(3);
    link1.append(2);
    
    let link2=new LinkedList();
    link2.insert(5);
    link2.append(9);
    link2.append(4);
    expect(listNew.linkedListZip(link1,link2).toString()).toEqual('{1}->{5}->{3}->{9}->{2}->{4}->NULL')
  });
  it('linkedListZip() empty',()=>{
    let listNew = new LinkedList();
    let link1=new LinkedList();
    let link2=new LinkedList();
    link2.insert(5);
    link2.append(9);
    link2.append(4);
    link2.append(7);
    link2.append(11);
    expect(listNew.linkedListZip(link1,link2).toString()).toEqual('{5}->{9}->{4}->{7}->{11}->NULL')
  });
  it('linkedListZip() not equal',()=>{
    let listNew = new LinkedList();
    let link1=new LinkedList();
    link1.insert(1);
    link1.append(3);
    link1.append(2);
    link1.append(7);
    link1.append(11);
    let link2=new LinkedList();
    link2.insert(5);
    link2.append(9);
    link2.append(4);
    expect(listNew.linkedListZip(link1,link2).toString()).toEqual('{1}-->{5}-->{3}-->{9}-->{2}-->{4}-->{7}-->{11}-->NULL')
  });
});
