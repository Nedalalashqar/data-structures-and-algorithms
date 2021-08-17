'use strict';

const LinkedList = require('../../LinkedList');
const zipList = require('../linked-list-zip');

describe('zip linked list', () => {
  it('empty two linked list', () => {
    const linkedlist1 = new LinkedList();
    const linkedlist2 = new LinkedList();
    expect(zipList(linkedlist1, linkedlist2).toString()).toEqual('Exception');
  });
  it('Two linked same length', () => {
    const linkedlist1 = new LinkedList();
    const linkedlist2 = new LinkedList();
    const linkedlist3 = new LinkedList();
    linkedlist1.insert(100);
    linkedlist1.insert(200);
    linkedlist2.insert(300);
    linkedlist2.insert(400);
    linkedlist3.insert(100);
    linkedlist3.insert(300);
    linkedlist3.insert(200);
    linkedlist3.insert(400);
    expect(zipList(linkedlist1, linkedlist2).toString()).toEqual(linkedlist3.toString());
  });
  it('Two linked different length', () => {
    const linkedlist1 = new LinkedList();
    const linkedlist2 = new LinkedList();
    const linkedlist3 = new LinkedList();
    linkedlist1.insert(100);
    linkedlist1.insert(200);
    linkedlist2.insert(300);
    linkedlist2.insert(400);
    linkedlist2.insert(500);
    linkedlist3.insert(100);
    linkedlist3.insert(300);
    linkedlist3.insert(200);
    linkedlist3.insert(400);
    linkedlist3.insert(500);
    expect(zipList(linkedlist1, linkedlist2).toString()).toEqual(linkedlist3.toString());
  });
  it('Two linked different length ', () => {
    const linkedlist1 = new LinkedList();
    const linkedlist2 = new LinkedList();
    const linkedlist3 = new LinkedList();
    linkedlist1.insert(100);
    linkedlist1.insert(200);
    linkedlist1.insert(500);
    linkedlist1.insert(600);
    linkedlist2.insert(300);
    linkedlist2.insert(400);
    linkedlist3.insert(100);
    linkedlist3.insert(300);
    linkedlist3.insert(200);
    linkedlist3.insert(400);
    linkedlist3.insert(500);
    linkedlist3.insert(600);
    expect(zipList(linkedlist1, linkedlist2).toString()).toEqual(linkedlist3.toString());
  });
});
